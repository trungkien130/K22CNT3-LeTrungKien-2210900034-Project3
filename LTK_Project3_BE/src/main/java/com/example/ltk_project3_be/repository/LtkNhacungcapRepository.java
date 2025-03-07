package com.example.ltk_project3_be.repository;

import com.example.ltk_project3_be.entities.LtkNhacungcap;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface LtkNhacungcapRepository extends JpaRepository<LtkNhacungcap, Integer>, JpaSpecificationExecutor<LtkNhacungcap> {

}