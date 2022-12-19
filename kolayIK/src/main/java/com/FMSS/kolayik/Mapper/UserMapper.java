package com.FMSS.kolayik.Mapper;

import com.FMSS.kolayik.dto.request.CreateUserRequestDto;
import com.FMSS.kolayik.dto.request.UpdateUserRequestDto;
import com.FMSS.kolayik.dto.response.UserResponseDto;
import com.FMSS.kolayik.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValueCheckStrategy;

@Mapper(implementationName = "UserMapperImpl",componentModel = "spring", nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface UserMapper {
    UserResponseDto toUserResponseDto(User user);

    User toUserFromCreateUserRequest(CreateUserRequestDto createUserRequestDto);

    UserResponseDto toUserResponseFromUpdateUserRequestDto(UpdateUserRequestDto updateUserRequestDto);

    User toUserFromUserUpdateRequestDto(UpdateUserRequestDto updateUserRequestDto);

    User updateUser(@MappingTarget User user, UpdateUserRequestDto updateUserRequestDto);
}
