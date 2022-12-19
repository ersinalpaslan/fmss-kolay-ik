package com.FMSS.kolayik.service;

import com.FMSS.kolayik.Mapper.AdressMapper;
import com.FMSS.kolayik.Mapper.UserMapper;

import com.FMSS.kolayik.dto.request.CreateUserRequestDto;
import com.FMSS.kolayik.dto.request.UpdateUserRequestDto;
import com.FMSS.kolayik.dto.response.UserResponseDto;
import com.FMSS.kolayik.exception.UserNotFoundException;
import com.FMSS.kolayik.model.Address;
import com.FMSS.kolayik.model.User;
import com.FMSS.kolayik.repository.AddressRepository;
import com.FMSS.kolayik.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final AddressRepository addressRepository;
    private final UserMapper userMapper;
    private final AdressMapper adressMapper;

    public List<UserResponseDto> getAllUsers() {
        List<User> userList = userRepository.findAll();

        return userList.stream()
                .map(userMapper::toUserResponseDto)
                .toList();
    }

    public UserResponseDto createUser(CreateUserRequestDto createUserRequestDto) {
        User user = userMapper.toUserFromCreateUserRequest(createUserRequestDto);
        Address address = adressMapper.toAddressFromCreateUserRequest(createUserRequestDto);
        address.setUser(user);
        addressRepository.save(address);
        userRepository.save(user);

        return userMapper.toUserResponseDto(user);
    }

    public void deleteUserById(Integer id) {
        if(userRepository.findById(id).isPresent()){
            userRepository.deleteById(id);
        }
        else{
            throw new UserNotFoundException("User not found");
        }
    }


    public UserResponseDto updateUser(Integer id, UpdateUserRequestDto updateUserRequestDto) {
        Optional<User> optionalUser = userRepository.findById(id);
        userRepository
                .save(userMapper.updateUser(userRepository.findById(id)
                        .orElseThrow(() -> new UserNotFoundException("User not exist!")), updateUserRequestDto));
        if (optionalUser.isPresent()){
            addressRepository
                    .save(adressMapper.updateAddress(optionalUser.get().getAddress(),updateUserRequestDto));
            return userMapper.toUserResponseFromUpdateUserRequestDto(updateUserRequestDto);
        }
        else {
            throw new UserNotFoundException("user not exist");
        }
    }

    public UserResponseDto getUserById(Integer id) {
        Optional<User> userOptional = userRepository.findById(id);

        return userOptional.map(userMapper::toUserResponseDto)
                .orElseThrow(()-> new UserNotFoundException("User not found!"));
    }
    public Optional<User> findById(Integer id){
        return userRepository.findById(id);
    }
}
