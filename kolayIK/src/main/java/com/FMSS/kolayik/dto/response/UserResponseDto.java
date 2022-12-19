package com.FMSS.kolayik.dto.response;

import com.FMSS.kolayik.model.enums.Department;
import com.FMSS.kolayik.model.enums.Title;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import java.time.LocalDate;

@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserResponseDto {
    private Integer id;
    private String name;
    private String lastName;
    private String mail;
    private String idNumber;
    private String salary;
    private Title title;
    private Department department;
    @JsonFormat(shape = JsonFormat.Shape.STRING,pattern = "yyyy-MM-dd")
    private LocalDate birthDate;
    @JsonFormat(shape = JsonFormat.Shape.STRING,pattern = "yyyy-MM-dd")
    private LocalDate dateOfStart;
}
