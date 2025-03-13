package com.example.ltk_project3_be.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;

@Data
@Entity
@Table(name = "ltk_gio_hang")
public class LtkGioHang implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "ma_gio_hang", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer maGioHang;

    @Column(name = "ma_khach_hang")
    private Integer maKhachHang;

    @Column(name = "ma_san_pham", nullable = false)
    private Integer maSanPham;

    @Column(name = "ma_kho", nullable = false)
    private Integer maKho;

    @Column(name = "so_luong", nullable = false)
    private Integer soLuong;

    @Column(name = "ngay_them")
    private LocalDateTime ngayThem;

}
