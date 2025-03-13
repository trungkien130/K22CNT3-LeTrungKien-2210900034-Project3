package com.example.ltk_project3_be.vo;

import lombok.Data;
import jakarta.validation.constraints.NotNull;
import java.io.Serializable;
import java.time.LocalDateTime;

@Data
public class LtkGioHangVO implements Serializable {
    private static final long serialVersionUID = 1L;

    @NotNull(message = "maGioHang can not null")
    private Integer maGioHang;

    private Integer maKhachHang;

    @NotNull(message = "maSanPham can not null")
    private Integer maSanPham;

    @NotNull(message = "maKho can not null")
    private Integer maKho;

    @NotNull(message = "soLuong can not null")
    private Integer soLuong;

    private LocalDateTime ngayThem;
}