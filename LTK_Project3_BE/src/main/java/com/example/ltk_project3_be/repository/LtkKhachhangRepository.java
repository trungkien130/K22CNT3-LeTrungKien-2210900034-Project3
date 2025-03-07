package com.example.ltk_project3_be.repository;

import com.example.ltk_project3_be.entities.LtkKhachhang;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface LtkKhachhangRepository extends JpaRepository<LtkKhachhang, Integer>, JpaSpecificationExecutor<LtkKhachhang> {
    LtkKhachhang findByLtkEmail(String email); // Add this method
}