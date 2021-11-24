package com.trablock.demo.service.location;

import com.trablock.demo.domain.location.Location;

import java.util.List;
import java.util.Optional;

public interface LocationService {

    public List<Location> findLocations();

    public Location findOne(Long locationId);
}
