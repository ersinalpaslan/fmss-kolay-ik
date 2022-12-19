package com.FMSS.kolayik.Mapper;

import com.FMSS.kolayik.dto.request.CreateUserRequestDto;
import com.FMSS.kolayik.dto.request.UpdateUserRequestDto;
import com.FMSS.kolayik.dto.response.AddressResponseDto;
import com.FMSS.kolayik.model.Address;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(implementationName = "AddressMapperImpl",componentModel = "spring")
public interface AdressMapper {
    Address toAddressFromCreateUserRequest(CreateUserRequestDto createUserRequestDto);

    AddressResponseDto toAddressResponseDto(Address address);
    Address updateAddress(@MappingTarget Address address, UpdateUserRequestDto updateUserRequestDto);
}
