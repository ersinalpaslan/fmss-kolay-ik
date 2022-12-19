package com.FMSS.kolayik.service;

import com.FMSS.kolayik.Mapper.ExpenseMapper;
import com.FMSS.kolayik.dto.request.CreateExpenseRequestDto;
import com.FMSS.kolayik.dto.request.UpdateExpenseRequestDto;
import com.FMSS.kolayik.dto.response.ExpenseResponseDto;
import com.FMSS.kolayik.exception.ExpenseNotFoundException;
import com.FMSS.kolayik.exception.UserNotFoundException;
import com.FMSS.kolayik.model.Expenses;
import com.FMSS.kolayik.repository.ExpenseRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ExpenseService {
    private final ExpenseRepository expenseRepository;
    private final ExpenseMapper expenseMapper;
    private final UserService userService;
    public List<ExpenseResponseDto> getAllExpenses() {
        return expenseRepository.findAll().stream().map(expenseMapper::toExpenseResponseDto).toList();
    }
    public ExpenseResponseDto getExpenseById(Integer id) {
        Optional<Expenses> expensesOptional = expenseRepository.findById(id);

        return expensesOptional.map(expenseMapper::toExpenseResponseDto)
                .orElseThrow(()-> new ExpenseNotFoundException("Expense not found!"));
    }
    public List<ExpenseResponseDto> getExpensesByUserId(Integer id) {
        List<Expenses> expensesList = expenseRepository.findExpensesByUser_Id(id);
        return expensesList.stream().map(expenseMapper::toExpenseResponseDto).toList();
    }

    public ExpenseResponseDto createExpense(Integer id, CreateExpenseRequestDto createExpenseRequestDto) {
        Expenses expense = expenseMapper.toExpenseFromCreateExpenseRequest(createExpenseRequestDto);
        expense.setUser(userService.findById(id).orElseThrow(()->new UserNotFoundException("User not exist")));
        expenseRepository.save(expense);

        return expenseMapper.toExpenseResponseDto(expense);
    }

    public List<ExpenseResponseDto> getAllExpensesBetweenDates(Date startDate, Date endDate) {
        return expenseRepository.findByReceiptDateBetween(startDate,endDate).stream()
                .map(expenseMapper::toExpenseResponseDto).toList();
    }

    public void deleteExpense(Integer id) {
        if(expenseRepository.findById(id).isPresent()){
            expenseRepository.deleteById(id);
        }
        else{
            throw new UserNotFoundException("user not found");
        }
    }

    public ExpenseResponseDto updateExpense(Integer id, UpdateExpenseRequestDto updateExpenseRequestDto) {
        expenseRepository
                .save(expenseMapper.updateExpense(expenseRepository.findById(id)
                        .orElseThrow(()-> new ExpenseNotFoundException("Expense not exist")),updateExpenseRequestDto));
        return expenseMapper.toExpenseResponseFromUpdateExpenseRequestDto(updateExpenseRequestDto);
    }
}
