package com.trablock.web.service.plan;

import com.trablock.web.controller.form.Form;
import com.trablock.web.entity.location.Location;
import com.trablock.web.entity.plan.Day;
import com.trablock.web.entity.plan.Plan;
import com.trablock.web.repository.location.LocationRepository;
import com.trablock.web.repository.plan.DayRepository;
import com.trablock.web.repository.plan.PlanRepository;
import com.trablock.web.service.plan.interfaceC.DayService;
import com.trablock.web.service.plan.interfaceC.PlanService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class DayServiceImpl implements DayService {

    private final DayRepository dayRepository;
    private final PlanRepository planRepository;
    private final PlanService planService;
    private final LocationRepository locationRepository;

    @Override
    @Transactional
    public void saveDay(Day day) {
        dayRepository.save(day);
    }

    @Override
    @Transactional
    public void createDay(Form form, HttpServletRequest request, Long plan) {
        Plan planById = planRepository.findPlanById(plan);

        planService.finishedPlan(planById.getId());

        for (int i = 0; i < form.getDayForm().getTravelDay().size(); i++) {
            for (int j = 0; j < form.getDayForm().getTravelDay().get(i).size(); j++) {
                Optional<Location> OptionalLocation = locationRepository.findLocationById(form.getDayForm().getLocationId());

                Day day = Day.builder()
                        .locations(OptionalLocation.get())
                        .copyLocationId(form.getDayForm().getTravelDay().get(i).get(j).getCopyLocationId())
                        .plan(planById)
                        .days(form.getDayForm().getTravelDay().get(i).get(j).getDays())
                        .movingData(form.getDayForm().getTravelDay().get(i).get(j).getMovingData())
                        .build();

                saveDay(day);
            }
        }
    }

    /**
     * day List 받아오기
     * @param id
     * @return
     */
    @Override
    public List<Day> findDayIdForPlanIdToList(Long id) {

        Plan plan = planRepository.findPlanById(id);

        return dayRepository.findByDayToList(plan);

    }

    /**
     * Day Update
     * @param id
     * @param request
     * @param form
     */
    @Override
    @Transactional
    public void updateDay(Long id, HttpServletRequest request, Form form) {
        Plan plan = planRepository.findPlanById(id);

        removeDay(plan);

        createDay(form, request, plan.getId());
    }

    /**
     * Day Delete
     * @param plan
     */
    @Override
    @Transactional
    public void removeDay(Plan plan) {
        List<Day> dayList = dayRepository.findByDayToList(plan);

        for (Day day : dayList) {
            dayRepository.delete(day);
        }
    }
}