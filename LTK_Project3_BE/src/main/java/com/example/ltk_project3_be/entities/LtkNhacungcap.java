package com.example.ltk_project3_be.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Data
@Entity
@Table(name = "LTK_NhaCungCap")
public class LtkNhacungcap implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "MaNCC", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer maNCC;

    @Column(name = "TenNCC", nullable = false)
    private String tenNCC;

    @Column(name = "DiaChi")
    private String diaChi;

    @Column(name = "SoDienThoai", nullable = false)
    private String soDienThoai;

    @Column(name = "Email", nullable = false)
    private String email;

}
