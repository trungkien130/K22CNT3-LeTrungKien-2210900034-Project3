package com.example.ltk_project3_be.vo;


import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.io.Serializable;
import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;

@Data
public class LtkKhachhangQueryVO implements Serializable {
    private static final long serialVersionUID = 1L;
    private Integer ltkMakh;

    private String ltkHoten;

    private String ltkEmail;

    private String ltkSodienthoai;

    private String ltkDiachi;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private LocalDate ltkNgaysinh; // Ngày sinh chỉ cần ngày

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime ltkNgaytao;

    private Boolean ltkGioitinh;

    private Boolean ltkTrangthai = true; // Đặt giá trị mặc định


    private Boolean ltkRole;

    private String ltkMatKhau;
    private int page = 0;
    private int size = 10;

}
