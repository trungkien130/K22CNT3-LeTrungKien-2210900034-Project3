package com.example.ltk_project3_be.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Data
@Entity
@Table(name = "LTK_Kho")
public class LtkKho implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "MaKho", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer maKho;

    @Column(name = "LoaiSanPham", nullable = false)
    private String loaiSanPham;

    @Column(name = "SoLuongTon", nullable = false)
    private Integer soLuongTon = 0;

}
