package com.example.ltk_project3_be.vo;

import jakarta.persistence.Column;
import lombok.Data;
import jakarta.validation.constraints.NotNull;
import java.io.Serializable;
import java.time.LocalDateTime;

@Data
public class LtkGioHangVO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Integer maGioHang;

    private Integer maKhachHang;

    private Integer maSanPham;

    private Integer soLuong;

    private LocalDateTime ngayThem;
}