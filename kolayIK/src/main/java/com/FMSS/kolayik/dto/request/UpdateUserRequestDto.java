package com.FMSS.kolayik.dto.request;

import com.FMSS.kolayik.model.enums.Department;
import com.FMSS.kolayik.model.enums.Title;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import javax.validation.constraints.Email;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class UpdateUserRequestDto {
    private String name;
    @Email(regexp = "^(.+)@(.+)$", message = "Email is not valid. Please follow the example: kullaniciadi@mail.com")
    private String mail;
    private String salary;
    private Title title;
    private Department department;
    @JsonFormat(shape = JsonFormat.Shape.STRING,pattern = "yyyy-MM-dd")
    private LocalDate dateOfStart;
    private String addressLine;
    private String city;
    private String country;
    private String postCode;
    private String telephone;
}
