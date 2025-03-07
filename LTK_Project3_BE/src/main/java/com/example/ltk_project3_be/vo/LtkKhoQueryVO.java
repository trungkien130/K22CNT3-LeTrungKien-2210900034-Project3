package com.example.ltk_project3_be.vo;


import lombok.Data;

import java.io.Serializable;

@Data
public class LtkKhoQueryVO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Integer maKho;

    private String loaiSanPham;

    private Integer soLuongTon;

}
