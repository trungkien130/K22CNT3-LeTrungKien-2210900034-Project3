package com.example.ltk_project3_be;

import com.example.ltk_project3_be.dto.LtkKhachhangDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

@SpringBootApplication
public class LtkProject3BeApplication implements CommandLineRunner {
    @Autowired
    private JdbcTemplate jdbcTemplate;
    public static void main(String[] args) {
        SpringApplication.run(LtkProject3BeApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

    }
}

