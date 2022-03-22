package com.trablock.web.repository;

import com.trablock.web.entity.plan.Plan;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.swing.text.html.parser.Entity;

@Repository
@RequiredArgsConstructor
public class PlanRepository {

    private final EntityManager em;

    public void save(Plan plan) {
        em.persist(em);
    }
}
