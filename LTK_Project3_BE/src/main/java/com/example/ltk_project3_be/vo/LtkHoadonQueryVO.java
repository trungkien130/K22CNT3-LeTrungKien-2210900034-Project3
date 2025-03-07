package com.example.ltk_project3_be.vo;


import lombok.Data;

import java.io.Serializable;
import java.math.BigDecimal;
import java.sql.Date;

@Data
public class LtkHoadonQueryVO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Integer maHD;

    private Integer maKH;

    private Date ngayLap;

    private BigDecimal tongTien;

    private String trangThai;

}
