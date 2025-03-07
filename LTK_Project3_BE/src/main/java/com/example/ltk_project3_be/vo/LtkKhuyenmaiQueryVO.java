package com.example.ltk_project3_be.vo;


import lombok.Data;

import java.io.Serializable;
import java.sql.Date;

@Data
public class LtkKhuyenmaiQueryVO implements Serializable {
    private static final long serialVersionUID = 1L;

    private Integer maKM;

    private String tenKM;

    private Integer phanTramGiam;

    private Date ngayBatDau;

    private Date ngayKetThuc;

}
