package com.trablock.web.controller;

import com.trablock.web.entity.member.Member;
import com.trablock.web.entity.plan.Plan;
import com.trablock.web.repository.DayRepository;
import com.trablock.web.repository.MemberRepository;
import com.trablock.web.service.PlanService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequiredArgsConstructor
public class PlanController {

    private final PlanService planService;
    private final MemberRepository memberRepository;
    private final DayRepository dayRepository;

    @PostMapping("/members/{memberId}/plan")
    public String createPlan(@PathVariable("memberId") Long memberId, @RequestBody PlanForm form) {

        Member findMemberId = memberRepository.findMemberId(memberId);

        System.out.println(form.getPeriods());
        Plan plan = Plan.builder()
                .concept(form.getConcept())
                .depart(form.getDepart())
                .destination(form.getDestination())
                .member(findMemberId)
                .name(form.getName())
                .periods(form.getPeriods())
                .planStatus(form.getPlanStatus())
                .thumbnail(form.getThumbnail())
                .build();

        planService.savePlan(plan);
        return "redirect:/";
    }
}
