package com.trablock.web.service.location;

import com.trablock.web.dto.location.LocationDto;
import com.trablock.web.dto.location.LocationSaveRequestDto;
import com.trablock.web.dto.location.SimpleLocationDto;
import com.trablock.web.entity.location.Location;
import com.trablock.web.entity.location.LocationType;

import java.util.List;


public interface LocationService {

    Long create(LocationSaveRequestDto locationDto);

    List<SimpleLocationDto> toSimpleDto();

    LocationDto toDto(Long locationId);

    LocationDto toDto(String locationName);

    Location toEntity(LocationDto locationDto);

    List<LocationDto> getMemberLocations(Long memberId);

    List<LocationDto> getPublicMemberLocation(Long memberId);

    List<SimpleLocationDto> viewSimpleAll();

    List<SimpleLocationDto> viewSimple(LocationType type);
}
