package com.FMSS.kolayik.Mapper;

import com.FMSS.kolayik.dto.request.CreateLeaveRequestDto;
import com.FMSS.kolayik.dto.request.UpdateLeaveRequestDto;
import com.FMSS.kolayik.dto.response.LeaveResponseDto;
import com.FMSS.kolayik.model.Leave;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(implementationName = "LeaveMapperImpl",componentModel = "spring")
public interface LeaveMapper {
    LeaveResponseDto toLeaveResponseDto(Leave leave);

    Leave toLeaveFromCreateLeaveRequest(CreateLeaveRequestDto createLeaveRequestDto);

    Leave updateLeave(@MappingTarget Leave leave, UpdateLeaveRequestDto updateLeaveRequestDto);

    LeaveResponseDto toLeaveResponseFromUpdateLeaveRequestDto(UpdateLeaveRequestDto updateLeaveRequestDto);

}
