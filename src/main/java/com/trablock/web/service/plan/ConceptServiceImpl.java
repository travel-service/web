package com.trablock.web.service.plan;

import com.trablock.web.controller.form.Form;
import com.trablock.web.entity.plan.Concept;
import com.trablock.web.entity.plan.Plan;
import com.trablock.web.repository.plan.ConceptRepository;
import com.trablock.web.repository.plan.PlanRepository;
import com.trablock.web.service.plan.interfaceC.ConceptService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

@Service
@Transactional(readOnly = true)
@RequiredArgsConstructor
public class ConceptServiceImpl implements ConceptService {

    private final ConceptRepository conceptRepository;
    private final PlanRepository planRepository;

    @Override
    @Transactional
    public void saveConcept(Concept concept) {
        conceptRepository.save(concept);
    }

    @Override
    @Transactional
    public void createConcept(Form form, HttpServletRequest request, Long plan) {
        Plan planById = planRepository.findPlanById(plan);
        for (int i = 0; i < form.getConceptForm().getConcept().size(); i++) {
            Concept concept = Concept.builder()
                    .plan(planById)
                    .conceptName(form.getConceptForm().getConcept().get(i))
                    .build();

            saveConcept(concept);
        }
    }

    @Override
    public List<String> findConceptIdForPlanIdToList(Long planId) {
        return conceptRepository.findByIdToList(planId);
    }

    @Override
    public Plan findPlanId(Long planId) {
        return conceptRepository.findId(planId);
    }

    /**
     * Concept Update
     *
     * @param id
     * @param request
     * @param form
     */
    @Override
    @Transactional
    public void updateConcept(Long id, HttpServletRequest request, Form form) {
        Plan plan = planRepository.findPlanById(id);

        removeConcept(plan);

        createConcept(form, request, plan.getId());

    }

    /**
     * Concept delete
     *
     * @param plan
     */
    @Override
    @Transactional
    public void removeConcept(Plan plan) {
        List<Concept> conceptList = conceptRepository.findConceptByPlanId(plan);

        for (Concept concept : conceptList) {
            conceptRepository.delete(concept);
        }
    }
}
