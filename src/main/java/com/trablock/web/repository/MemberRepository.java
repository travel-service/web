package com.trablock.web.repository;

import com.trablock.web.dto.member.MemberProfileDto;
import com.trablock.web.entity.member.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;


import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByUserName(String username);

    @Query("select m from Member as m where m.id= :id")
    Member findMemberId(@Param("id") Long id);

    @Modifying
    @Transactional
    @Query("update Member as m set m.password = :pwd where m.id = :id")
    void updateMemberPwd(String pwd, Long id);

}
