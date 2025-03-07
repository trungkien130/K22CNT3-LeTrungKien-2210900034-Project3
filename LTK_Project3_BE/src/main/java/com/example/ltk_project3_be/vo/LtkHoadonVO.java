package com.example.ltk_project3_be.vo;

import lombok.Data;
import jakarta.validation.constraints.NotNull;
import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.Date;

@Data
public class LtkHoadonVO implements Serializable {
    private static final long serialVersionUID = 1L;

    @NotNull(message = "maHD cannot be null")
    private Integer maHD;

    private Integer maKH;

    private Date ngayLap;

    @NotNull(message = "tongTien cannot be null")
    private BigDecimal tongTien;

    @NotNull(message = "trangThai cannot be null")
    private String trangThai;
}
