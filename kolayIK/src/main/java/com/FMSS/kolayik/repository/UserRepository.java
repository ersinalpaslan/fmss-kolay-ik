package com.FMSS.kolayik.repository;

import com.FMSS.kolayik.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {
}
