package com.trablock.web.service.location.mapper;

import com.trablock.web.config.MapStructMapperConfig;
import com.trablock.web.dto.location.FestivalDto;
import com.trablock.web.entity.location.type.Festival;
import com.trablock.web.service.GenericMapper;
import org.mapstruct.Mapper;

@Mapper(config = MapStructMapperConfig.class)
public interface FestivalMapper extends GenericMapper<FestivalDto, Festival> {
}