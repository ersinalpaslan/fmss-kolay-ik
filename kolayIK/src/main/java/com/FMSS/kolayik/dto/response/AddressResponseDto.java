package com.FMSS.kolayik.dto.response;

import lombok.*;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AddressResponseDto {
    private Integer id;
    private String addressLine;
    private String city;
    private String country;
    private String postCode;
    private String telephone;
}
