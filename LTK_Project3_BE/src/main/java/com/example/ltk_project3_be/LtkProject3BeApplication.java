package com.example.ltk_project3_be;
import java.util.List;

import dbo.LTK_KhachHang;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootApplication
public class LtkProject3BeApplication implements CommandLineRunner {
    @Autowired
    private JdbcTemplate jdbcTemplate;
    public static void main(String[] args) {
        SpringApplication.run(LtkProject3BeApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
    String sql="Select * from LTK_KhachHang";
   List<LTK_KhachHang> KhachHang = jdbcTemplate.query(sql, BeanPropertyRowMapper.newInstance(LTK_KhachHang.class));
   KhachHang.forEach(System.out::println);
    }
}

