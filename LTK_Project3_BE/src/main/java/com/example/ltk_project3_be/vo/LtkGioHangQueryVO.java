package com.example.ltk_project3_be.vo;


import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
public class LtkGioHangQueryVO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Integer maGioHang;

    private Integer maKhachHang;

    private Integer maSanPham;

    private Integer soLuong;

    private LocalDateTime ngayThem;
    private int page = 0;
    private int size = 1000;
}
