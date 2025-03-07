package com.example.ltk_project3_be.vo;

import lombok.Data;
import jakarta.validation.constraints.NotNull;
import java.io.Serializable;
import java.sql.Date;

@Data
public class LtkKhuyenmaiVO implements Serializable {
    private static final long serialVersionUID = 1L;

    @NotNull(message = "maKM cannot be null")
    private Integer maKM;

    @NotNull(message = "tenKM cannot be null")
    private String tenKM;

    @NotNull(message = "phanTramGiam cannot be null")
    private Integer phanTramGiam;

    @NotNull(message = "ngayBatDau cannot be null")
    private Date ngayBatDau;

    @NotNull(message = "ngayKetThuc cannot be null")
    private Date ngayKetThuc;
}
