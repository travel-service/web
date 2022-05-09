package com.trablock.web.service.location.mapper;

import com.trablock.web.config.MapStructMapperConfig;
import com.trablock.web.dto.location.AttractionDto;
import com.trablock.web.entity.location.type.Attraction;
import com.trablock.web.service.GenericMapper;
import org.mapstruct.Mapper;

@Mapper(config = MapStructMapperConfig.class)
public interface AttractionMapper extends GenericMapper<AttractionDto, Attraction> {
}