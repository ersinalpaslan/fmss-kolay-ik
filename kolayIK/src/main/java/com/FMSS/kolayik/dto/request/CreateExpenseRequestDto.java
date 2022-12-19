package com.FMSS.kolayik.dto.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import javax.validation.constraints.NotBlank;
import java.time.LocalDate;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
public class CreateExpenseRequestDto {
    private String expenseType;
    @NotBlank(message = "amount cannot blank")
    private int amount;
    @JsonFormat(shape = JsonFormat.Shape.STRING,pattern = "yyyy-MM-dd")
    private LocalDate receiptDate;
    private String spendingStatement;
}
