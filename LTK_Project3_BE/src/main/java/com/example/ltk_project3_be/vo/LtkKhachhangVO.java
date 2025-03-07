package com.example.ltk_project3_be.vo;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Data;

import java.io.Serializable;
import java.time.LocalDate;

@Data
public class LtkKhachhangVO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Integer ltkMakh;
    private String ltkHoten;
    private String ltkEmail;
    private String ltkSodienthoai;
    private String ltkDiachi;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate ltkNgaytao;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate ltkNgaysinh;

    private Boolean ltkGioitinh;
    private Boolean ltkTrangthai;
    private Boolean ltkRole;
    private String ltkMatkhau;

    public LtkKhachhangVO() {} // Constructor mặc định
}
