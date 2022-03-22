package com.trablock.web.repository.location;

import com.trablock.web.entity.location.Coords;
import com.trablock.web.entity.location.Location;
import com.trablock.web.entity.location.LocationType;
import com.trablock.web.entity.location.type.Restaurant;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.Optional;

import static org.assertj.core.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@Transactional
class LocationRepositoryTest {

    @Autowired
    LocationRepository locationRepository;

    @PersistenceContext
    EntityManager em;

    @Test
    void 생성() {

        //given
        Location loc = Location.builder()
                .name("test")
                .address1("경기도 수원시 팔달구")
                .address2("권광로180번길 53-26")
                .coords(Coords.builder()
                        .latitude("37.123").longitude("127.123").build())
                .build();


        //when
        Location savedL = locationRepository.save(loc);
        Optional<Location> findL = locationRepository.findById(savedL.getId());

        //then
        assertThat(findL.get().getId()).isEqualTo(savedL.getId());
        assertThat(findL.get().getAddress1()).isEqualTo(savedL.getAddress1());
        assertThat(findL.get().getAddress2()).isEqualTo(savedL.getAddress2());
        assertThat(findL.get().getCoords()).isEqualTo(savedL.getCoords());

    }

    @Test
    void test() throws Exception {
        //given
        Location loc = Location.builder()
                .name("test")
                .address1("경기도 수원시 팔달구")
                .address2("권광로180번길 53-26")
                .coords(Coords.builder()
                        .latitude("37.123").longitude("127.123").build())
                .type(LocationType.RESTAURANT)
                .build();

        Restaurant restaurant = Restaurant.builder()
                .locationId(loc.getId())
                .popularMenu("아메리카노")
                .openTime("09:00")
                .packing(true)
                .parking(false)
                .smoking(false)
                .restDate("연중무휴")
                .menu("음료")
                .build();

        //when
        Location savedLoc = locationRepository.save(loc);
        Optional<Location> findLoc = locationRepository.findByNameContaining("tes");

        //then
        assertThat(findLoc.get()).isEqualTo(savedLoc);
        assertThat(findLoc.get().getType()).isEqualTo(savedLoc.getType());
        assertThat(findLoc.get().getType()).isEqualTo(savedLoc.getType());

    }


}