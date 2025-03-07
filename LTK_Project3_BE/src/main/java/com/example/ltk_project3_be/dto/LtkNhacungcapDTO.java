package com.example.ltk_project3_be.dto;


import lombok.Data;

import java.io.Serializable;

@Data
public class LtkNhacungcapDTO implements Serializable {
    private static final long serialVersionUID = 1L;
    private Integer maNCC;

    private String tenNCC;

    private String diaChi;

    private String soDienThoai;

    private String email;

}
