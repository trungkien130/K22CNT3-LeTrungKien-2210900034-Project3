package com.example.ltk_project3_be.vo;

import lombok.Data;
import jakarta.validation.constraints.NotNull;
import java.io.Serializable;

@Data
public class LtkKhoVO implements Serializable {
    private static final long serialVersionUID = 1L;

    @NotNull(message = "maKho cannot be null")
    private Integer maKho;

    @NotNull(message = "loaiSanPham cannot be null")
    private String loaiSanPham;

    @NotNull(message = "soLuongTon cannot be null")
    private Integer soLuongTon;
}
