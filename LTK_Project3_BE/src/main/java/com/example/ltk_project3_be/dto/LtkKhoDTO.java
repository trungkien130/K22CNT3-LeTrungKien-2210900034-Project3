package com.example.ltk_project3_be.dto;


import lombok.Data;

import java.io.Serializable;

@Data
public class LtkKhoDTO implements Serializable {
    private static final long serialVersionUID = 1L;
    private Integer maKho;

    private String loaiSanPham;

    private Integer soLuongTon;

}
