package com.FMSS.kolayik.Mapper;

import com.FMSS.kolayik.dto.request.CreateExpenseRequestDto;
import com.FMSS.kolayik.dto.request.UpdateExpenseRequestDto;
import com.FMSS.kolayik.dto.response.ExpenseResponseDto;
import com.FMSS.kolayik.model.Expenses;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(implementationName = "ExpenseMapperImpl",componentModel = "spring")
public interface ExpenseMapper {
    ExpenseResponseDto toExpenseResponseDto(Expenses expense);

    Expenses toExpenseFromCreateExpenseRequest(CreateExpenseRequestDto createExpenseRequestDto);

    Expenses updateExpense(@MappingTarget Expenses expenses, UpdateExpenseRequestDto updateExpenseRequestDto);

    ExpenseResponseDto toExpenseResponseFromUpdateExpenseRequestDto(UpdateExpenseRequestDto updateExpenseRequestDto);
}
