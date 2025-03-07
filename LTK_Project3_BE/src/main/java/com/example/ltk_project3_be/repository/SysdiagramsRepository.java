package com.example.ltk_project3_be.repository;

import com.example.ltk_project3_be.entities.Sysdiagrams;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

public interface SysdiagramsRepository extends JpaRepository<Sysdiagrams, Integer>, JpaSpecificationExecutor<Sysdiagrams> {

}