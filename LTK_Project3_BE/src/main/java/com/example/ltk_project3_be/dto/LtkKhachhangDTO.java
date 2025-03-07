package com.example.ltk_project3_be.dto;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;
import java.sql.Date;
import java.time.LocalDate;
@Getter
@Setter
@Data
public class LtkKhachhangDTO implements Serializable {
    private static final long serialVersionUID = 1L;
    private Integer ltkMakh;

    private String ltkHoten;

    private String ltkEmail;

    private String ltkSodienthoai;

    private String ltkDiachi;

    private String ltkMatkhau;

    private LocalDate ltkNgaytao;

    private LocalDate ltkNgaysinh;

    private Boolean ltkGioitinh;

    private Boolean ltkTrangThai = true;

    private Boolean ltkRole;


}
