package com.example.ltk_project3_be.controller;

import com.example.ltk_project3_be.dto.SysdiagramsDTO;
import com.example.ltk_project3_be.entities.Sysdiagrams;
import com.example.ltk_project3_be.service.SysdiagramsService;
import com.example.ltk_project3_be.vo.SysdiagramsQueryVO;
import com.example.ltk_project3_be.vo.SysdiagramsUpdateVO;
import org.antlr.v4.runtime.misc.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Validated
@RestController
@RequestMapping("/sysdiagrams")
public class SysdiagramsController {

    @Autowired
    private SysdiagramsService sysdiagramsService;

    @PostMapping
    public String save(@Validated @RequestBody SysdiagramsDTO  vO) {
        return sysdiagramsService.save(vO).toString();
    }

    @DeleteMapping("/{id}")
    public void delete(@Validated @NotNull @PathVariable("id") Integer id) {
        sysdiagramsService.delete(id);
    }

    @PutMapping("/{id}")
    public void update(@Validated @NotNull @PathVariable("id") Integer id,
                       @Validated @RequestBody SysdiagramsUpdateVO vO) {
        sysdiagramsService.update(id, vO);
    }

    @GetMapping("/{id}")
    public SysdiagramsDTO getById(@Validated @NotNull @PathVariable("id") Integer id) {
        return sysdiagramsService.getById(id);
    }

    @GetMapping
    public Page<SysdiagramsDTO> query(@Validated SysdiagramsQueryVO vO) {
        return sysdiagramsService.query(vO);
    }
}
