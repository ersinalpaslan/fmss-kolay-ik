package com.FMSS.kolayik.repository;

import com.FMSS.kolayik.model.Leave;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LeaveRepository extends JpaRepository<Leave, Integer> {
    List<Leave> findLeavesByUserId(Integer id);
//    List<Leave> findByReceiptDateBetween(Date from, Date to);
}
