package com.example.ltk_project3_be.entities;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;

@Data
@Entity
@Table(name = "sysdiagrams")
public class Sysdiagrams implements Serializable {

    private static final long serialVersionUID = 1L;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "principal_id", nullable = false)
    private Integer principalId;

    @Id
    @Column(name = "diagram_id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer diagramId;

    @Column(name = "version")
    private Integer version;

    @Column(name = "definition")
    private String definition;

}
