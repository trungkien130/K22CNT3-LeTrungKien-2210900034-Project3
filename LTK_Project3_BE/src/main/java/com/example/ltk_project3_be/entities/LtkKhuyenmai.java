package com.example.ltk_project3_be.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.sql.Date;

@Data
@Entity
@Table(name = "LTK_KhuyenMai")
public class LtkKhuyenmai implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "MaKM", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer maKM;

    @Column(name = "TenKM", nullable = false)
    private String tenKM;

    @Column(name = "PhanTramGiam", nullable = false)
    private Integer phanTramGiam;

    @Column(name = "NgayBatDau", nullable = false)
    private Date ngayBatDau;

    @Column(name = "NgayKetThuc", nullable = false)
    private Date ngayKetThuc;

}
