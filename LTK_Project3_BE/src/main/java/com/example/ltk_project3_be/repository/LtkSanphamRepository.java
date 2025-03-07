package com.example.ltk_project3_be.repository;

import com.example.ltk_project3_be.entities.LtkSanpham;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface LtkSanphamRepository extends JpaRepository<LtkSanpham, Integer>, JpaSpecificationExecutor<LtkSanpham> {

}