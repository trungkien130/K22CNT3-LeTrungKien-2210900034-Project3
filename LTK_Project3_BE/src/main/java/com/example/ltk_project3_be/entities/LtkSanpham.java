package com.example.ltk_project3_be.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.math.BigDecimal;

@Data
@Entity
@Table(name = "LTK_SanPham")
public class LtkSanpham implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "MaSP", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer maSP;

    @Column(name = "TenSP", nullable = false)
    private String tenSP;

    @Column(name = "MoTa")
    private String moTa;

    @Column(name = "Gia", nullable = false)
    private BigDecimal gia;

    @Column(name = "SoLuongTon", nullable = false)
    private Integer soLuongTon;

    @Column(name = "MaKho")
    private Integer maKho;

    @Column(name = "MaNCC")
    private Integer maNCC;

    @Column(name = "MaKM")
    private Integer maKM;

    @Column(name = "HinhAnh")
    private String hinhAnh;

}
