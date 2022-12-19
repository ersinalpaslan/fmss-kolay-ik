package com.FMSS.kolayik.service;

import com.FMSS.kolayik.Mapper.AdressMapper;
import com.FMSS.kolayik.dto.response.AddressResponseDto;
import com.FMSS.kolayik.exception.AddressNotFoundException;
import com.FMSS.kolayik.model.Address;
import com.FMSS.kolayik.model.User;
import com.FMSS.kolayik.repository.AddressRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AddressService {
    private final AddressRepository addressRepository;
    private final UserService userService;
    private final AdressMapper adressMapper;

    public AddressResponseDto getAddressByUserID(Integer id) {
        Optional<User> userOptional = userService.findById(id);
        if(userOptional.isPresent()){
            Optional<Address> addressOptional = addressRepository.findById(userOptional.get().getAddress().getId());
            return addressOptional.map(adressMapper::toAddressResponseDto)
                    .orElseThrow(()-> new AddressNotFoundException("Address not found"));
        }else
            throw new AddressNotFoundException("Address not found");
    }

    public void save(Address address){
        addressRepository.save(address);
    }
}
