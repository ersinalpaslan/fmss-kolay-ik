package com.FMSS.kolayik.controller;

import com.FMSS.kolayik.dto.request.CreateExpenseRequestDto;
import com.FMSS.kolayik.dto.request.UpdateExpenseRequestDto;
import com.FMSS.kolayik.dto.response.ExpenseResponseDto;
import com.FMSS.kolayik.service.ExpenseService;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Date;
import java.util.List;
@CrossOrigin

@RestController
@RequestMapping("/v1/expenses")
public class ExpenseController {
    private final ExpenseService expenseService;

    public ExpenseController(ExpenseService expenseService) {
        this.expenseService = expenseService;
    }

    @GetMapping()
    public ResponseEntity<List<ExpenseResponseDto>> getAllExpenses(){
        return ResponseEntity.ok(expenseService.getAllExpenses());
    }
    @GetMapping("/{id}")
    public ResponseEntity<ExpenseResponseDto> getExpenseById(@PathVariable Integer id){
        return ResponseEntity.ok(expenseService.getExpenseById(id));
    }
    @GetMapping("/user/{id}")
    public ResponseEntity<List<ExpenseResponseDto>> getExpensesByUserId(@PathVariable Integer id){
        return ResponseEntity.ok(expenseService.getExpensesByUserId(id));
    }

    @PostMapping("/{id}")
    public ResponseEntity<ExpenseResponseDto> createExpense(@Valid @PathVariable Integer id,
                                                            @RequestBody CreateExpenseRequestDto createExpenseRequestDto){
        return ResponseEntity.ok(expenseService.createExpense(id,createExpenseRequestDto));
    }

    @GetMapping("/{startDate}/{endDate}")
    public ResponseEntity<List<ExpenseResponseDto>> getAllExpensesBetweenDates(@PathVariable @DateTimeFormat(pattern = "yyyy-mm-dd") Date startDate,
                                                                               @PathVariable @DateTimeFormat(pattern = "yyyy-mm-dd") Date endDate){
        return ResponseEntity.ok(expenseService.getAllExpensesBetweenDates(startDate,endDate));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ExpenseResponseDto> deleteExpense(@PathVariable Integer id){
        expenseService.deleteExpense(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<ExpenseResponseDto> updateExpense(@PathVariable Integer id, @RequestBody UpdateExpenseRequestDto updateExpenseRequestDto ){
        return ResponseEntity.ok(expenseService.updateExpense(id,updateExpenseRequestDto));
    }
}
