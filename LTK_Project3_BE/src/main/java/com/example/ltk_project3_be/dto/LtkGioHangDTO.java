package com.example.ltk_project3_be.dto;


import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
public class LtkGioHangDTO implements Serializable {
    private static final long serialVersionUID = 1L;
    private Integer maGioHang;

    private Integer maKhachHang;

    private Integer maSanPham;

    private Integer maKho;

    private Integer soLuong;

    private LocalDateTime ngayThem;

}
