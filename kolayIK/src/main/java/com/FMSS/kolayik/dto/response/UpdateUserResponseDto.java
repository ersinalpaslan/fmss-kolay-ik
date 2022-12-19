package com.FMSS.kolayik.dto.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class UpdateUserResponseDto {
    private Integer id;
    private String mail;
    private String salary;
    private String title;
    private String department;
    @JsonFormat(shape = JsonFormat.Shape.STRING,pattern = "yyyy-MM-dd")
    private LocalDate dateOfStart;
    private String addressLine;
    private String city;
    private String country;
    private String postCode;
    private String telephone;
}
