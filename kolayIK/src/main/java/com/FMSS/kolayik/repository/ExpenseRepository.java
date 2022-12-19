package com.FMSS.kolayik.repository;

import com.FMSS.kolayik.model.Expenses;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Date;
import java.util.List;

public interface ExpenseRepository extends JpaRepository<Expenses,Integer> {
      List<Expenses> findByReceiptDateBetween(Date from, Date to);
      List<Expenses> findExpensesByUser_Id(Integer id);
}
