package com.example.ltk_project3_be.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.Date;

@Data
@Entity
@Table(name = "LTK_HoaDon")
public class LtkHoadon implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "MaHD", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer maHD;

    @Column(name = "MaKH")
    private Integer maKH;

    @Column(name = "NgayLap")
    private Date ngayLap;

    @Column(name = "TongTien", nullable = false)
    private BigDecimal tongTien;

    @Column(name = "TrangThai", nullable = false)
    private String trangThai = "Ch? xác nh?n";

}
