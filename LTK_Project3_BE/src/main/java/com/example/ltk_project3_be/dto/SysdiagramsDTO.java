package com.example.ltk_project3_be.dto;


import lombok.Data;

import java.io.Serializable;

@Data
public class SysdiagramsDTO implements Serializable {
    private static final long serialVersionUID = 1L;
    private String name;

    private Integer principalId;

    private Integer diagramId;

    private Integer version;

    private String definition;

}
