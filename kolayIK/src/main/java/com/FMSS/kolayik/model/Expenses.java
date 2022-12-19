package com.FMSS.kolayik.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Objects;

@Entity
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Expenses {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String expenseType;
    private int amount;
    @JsonFormat(shape = JsonFormat.Shape.STRING,pattern = "yyyy-MM-dd")
    private LocalDate receiptDate;
    private String spendingStatement;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id",referencedColumnName = "id")
    private User user;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Expenses expenses = (Expenses) o;
        return amount == expenses.amount && Objects.equals(id, expenses.id) && Objects.equals(expenseType, expenses.expenseType) && Objects.equals(receiptDate, expenses.receiptDate) && Objects.equals(spendingStatement, expenses.spendingStatement) && Objects.equals(user, expenses.user);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, expenseType, amount, receiptDate, spendingStatement, user);
    }
}
