package com.trablock.web.service.plan;

import com.trablock.web.config.jwt.JwtTokenProvider;
import com.trablock.web.controller.form.Form;
import com.trablock.web.dto.plan.UserPlanUpdateDto;
import com.trablock.web.entity.member.Member;
import com.trablock.web.entity.plan.Plan;
import com.trablock.web.entity.plan.enumtype.PlanComplete;
import com.trablock.web.repository.member.MemberRepository;
import com.trablock.web.repository.plan.PlanRepository;
import com.trablock.web.service.plan.interfaceC.PlanService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class PlanServiceImpl implements PlanService {

    private final PlanRepository planRepository;
    private final JwtTokenProvider jwtTokenProvider;
    private final MemberRepository memberRepository;

    @Override
    @Transactional
    public void savePlan(Plan plan) {
        planRepository.save(plan);
    }

    @Override
    public List<Plan> findOne(Long planId, Member member) {
        return planRepository.findByIdToList(planId, member);
    }

    @Override
    public Member findMemberId(HttpServletRequest request) {
        String token = jwtTokenProvider.resolveAccessToken(request);
        String userName = jwtTokenProvider.getUserName(token);
        Optional<Member> userId = memberRepository.findByUserName(userName);
        if (userId.isPresent()) {
            return userId.get();
        } else {
            throw new NoSuchElementException();
        }
    }

    @Override
    @Transactional
    public Plan createPlan(Form form, HttpServletRequest request) {

        Plan plan = Plan.builder()
                .depart(form.getPlanForm().getDepart())
                .member(findMemberId(request))
                .name(form.getPlanForm().getName())
                .periods(form.getPlanForm().getPeriods())
                .planStatus(form.getPlanForm().getPlanStatus())
                .thumbnail(form.getPlanForm().getThumbnail())
                .planComplete(PlanComplete.UNFINISHED)
                .build();

        savePlan(plan);
        return plan;
    }

    @Override
    public List<Plan> findMainPlanDirectoryMain(HttpServletRequest request) {
        Optional<Member> memberId = Optional.ofNullable(findMemberId(request));
        return planRepository.findByMainPlanStatus(memberId);
    }

    @Override
    public List<Plan> findTrashPlanDirectoryMain(HttpServletRequest request) {
        Optional<Member> memberId = Optional.ofNullable(findMemberId(request));
        return planRepository.findByTrashPlanStatus(memberId);
    }


    // 플랜 삭제(main -> trash)
    @Override
    @Transactional
    public void cancelPlan(Long planId, HttpServletRequest request) {
        Member memberId = findMemberId(request);
        Plan plan = planRepository.findPlanByMemberId(planId, memberId);
        plan.trash();
    }

    // 플랜 완전 삭제(trash -> delete)
    @Override
    @Transactional
    public void deletePlan(Long planId, HttpServletRequest request) {
        Member memberId = findMemberId(request);
        Plan plan = planRepository.findPlanByMemberId(planId, memberId);
        plan.delete();
    }

    // 플랜 복(trash -> main)
    @Override
    @Transactional
    public void revertPlan(Long planId, HttpServletRequest request) {
        Member memberId = findMemberId(request);
        Plan plan = planRepository.findPlanByMemberId(planId, memberId);
        plan.revert();
    }

    // 플랜 완성
    @Override
    public void finishedPlan(Long planId) {
        Plan plan = planRepository.findPlanById(planId);
        plan.finished();
    }

    /**
     * User Plan Update
     * @param id
     * @param userPlanUpdateDto
     */
    @Override
    @Transactional
    public void updateUserPlanContent(Long id, HttpServletRequest request, UserPlanUpdateDto userPlanUpdateDto) {
        Member memberId = findMemberId(request);
        Plan plan = planRepository.findPlanByMemberId(id, memberId);
        plan.updatePlan(userPlanUpdateDto);
    }

    /**
     * 플랜 갯수 반환
     * @param request
     * @return
     */
    @Override
    public int countPlan(HttpServletRequest request) {

        Member member = findMemberId(request);

        return planRepository.planCount(member);
    }

    /**
     * 휴지통 플랜 갯수 반환
     * @param request
     * @return
     */
    @Override
    public int countTrashPlan(HttpServletRequest request) {

        Member member = findMemberId(request);

        return planRepository.trashPlanCount(member);
    }


//    public String isFinishedPlan(Long id) {
//        Plan plan = planRepository.findPlanById(id);
//
//        if (plan.getPlanComplete() == PlanComplete.FINISHED) {
//            return "완료된 플랜입니다.";
//        } else {
//            return "redirect:/main-directory";
//        }
//
//    }

    /**
     * SelectedLocatio기 n의 locationId 를 불러오기 위한 Plan 객체 가져오
     * @param id
     * @param request
     * @return
     */
    @Override
    public Plan returnPlan(Long id, HttpServletRequest request) {
        Member memberId = findMemberId(request);
        return planRepository.findPlanByMemberId(id, memberId);
    }
}