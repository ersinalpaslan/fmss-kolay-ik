package com.FMSS.kolayik.controller;

import com.FMSS.kolayik.dto.response.AddressResponseDto;
import com.FMSS.kolayik.service.AddressService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
@RestController
@RequestMapping("/v1/address")
public class AddressController {
    private final AddressService addressService;

    public AddressController(AddressService addressService) {
        this.addressService = addressService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<AddressResponseDto> getAddressByUserId(@PathVariable Integer id){
        return ResponseEntity.ok(addressService.getAddressByUserID(id));
    }
}
