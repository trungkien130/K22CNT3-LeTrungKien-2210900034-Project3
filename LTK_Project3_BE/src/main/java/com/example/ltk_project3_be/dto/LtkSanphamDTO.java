package com.example.ltk_project3_be.dto;


import lombok.AllArgsConstructor;
import lombok.Data;

import java.io.Serializable;
import java.math.BigDecimal;

@Data
public class LtkSanphamDTO implements Serializable {
    private static final long serialVersionUID = 1L;
    private Integer maSP;

    private String tenSP;

    private String moTa;

    private BigDecimal gia;

    private Integer soLuongTon;

    private Integer maKho;

    private Integer maNCC;

    private Integer maKM;

    private String hinhAnh;

}
