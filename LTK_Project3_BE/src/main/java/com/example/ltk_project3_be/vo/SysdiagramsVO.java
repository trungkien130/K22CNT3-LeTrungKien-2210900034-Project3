package com.example.ltk_project3_be.vo;

import lombok.Data;
import jakarta.validation.constraints.NotNull;

import java.io.Serializable;

@Data
public class SysdiagramsVO implements Serializable {
    private static final long serialVersionUID = 1L;

    @NotNull(message = "name cannot be null")
    private String name;

    @NotNull(message = "principalId cannot be null")
    private Integer principalId;

    @NotNull(message = "diagramId cannot be null")
    private Integer diagramId;

    private Integer version;

    private String definition;
}
