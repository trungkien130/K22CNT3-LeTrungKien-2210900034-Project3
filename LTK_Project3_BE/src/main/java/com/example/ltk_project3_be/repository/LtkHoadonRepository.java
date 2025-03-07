package com.example.ltk_project3_be.repository;

import com.example.ltk_project3_be.entities.LtkHoadon;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface LtkHoadonRepository extends JpaRepository<LtkHoadon, Integer>, JpaSpecificationExecutor<LtkHoadon> {

}