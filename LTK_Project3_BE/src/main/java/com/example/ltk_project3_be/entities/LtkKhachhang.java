package com.example.ltk_project3_be.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.sql.Date;
import java.time.LocalDate;

@Data
@Entity
@Table(name = "LTK_KhachHang")
public class LtkKhachhang implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @Column(name = "LTK_MaKH")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer ltkMakh;

    @Column(name = "LTK_HoTen", nullable = false)
    private String ltkHoten;


    @Column(name = "LTK_Email")
    private String ltkEmail;

    @Column(name = "LTK_SoDienThoai")
    private String ltkSodienthoai;

    @Column(name = "LTK_DiaChi")
    private String ltkDiachi;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate ltkNgaysinh;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate ltkNgaytao;


    @Column(name = "LTK_GioiTinh")
    private Boolean ltkGioitinh;

    @Column(name = "LTK_TrangThai")
    private Boolean ltkTrangthai;

    @Column(name = "LTK_Role")
    private Boolean ltkRole;

    @Column(name = "LTK_MatKhau")
    private String ltkMatkhau;

}
