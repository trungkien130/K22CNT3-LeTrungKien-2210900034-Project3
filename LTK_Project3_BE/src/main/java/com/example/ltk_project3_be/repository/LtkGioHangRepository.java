package com.example.ltk_project3_be.repository;

import com.example.ltk_project3_be.entities.LtkGioHang;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface LtkGioHangRepository extends JpaRepository<LtkGioHang, Integer>, JpaSpecificationExecutor<LtkGioHang> {

}