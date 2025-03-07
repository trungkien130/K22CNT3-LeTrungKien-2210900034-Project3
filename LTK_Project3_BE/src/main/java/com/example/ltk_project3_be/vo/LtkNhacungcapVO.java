package com.example.ltk_project3_be.vo;

import lombok.Data;
import jakarta.validation.constraints.NotNull;
import java.io.Serializable;

@Data
public class LtkNhacungcapVO implements Serializable {
    private static final long serialVersionUID = 1L;

    @NotNull(message = "maNCC cannot be null")
    private Integer maNCC;

    @NotNull(message = "tenNCC cannot be null")
    private String tenNCC;

    private String diaChi;

    @NotNull(message = "soDienThoai cannot be null")
    private String soDienThoai;

    @NotNull(message = "email cannot be null")
    private String email;
}
