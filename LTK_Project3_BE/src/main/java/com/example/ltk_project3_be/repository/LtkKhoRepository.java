package com.example.ltk_project3_be.repository;

import com.example.ltk_project3_be.entities.LtkKho;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface LtkKhoRepository extends JpaRepository<LtkKho, Integer>, JpaSpecificationExecutor<LtkKho> {

}