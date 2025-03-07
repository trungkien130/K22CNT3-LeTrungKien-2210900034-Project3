package com.example.ltk_project3_be.vo;


import lombok.Data;

import java.io.Serializable;

@Data
public class SysdiagramsQueryVO implements Serializable {
    private static final long serialVersionUID = 1L;

    private String name;

    private Integer principalId;

    private Integer diagramId;

    private Integer version;

    private String definition;

}
