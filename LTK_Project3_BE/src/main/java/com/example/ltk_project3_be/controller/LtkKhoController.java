package com.example.ltk_project3_be.controller;

import com.example.ltk_project3_be.dto.LtkKhoDTO;
import com.example.ltk_project3_be.service.LtkKhoService;
import com.example.ltk_project3_be.vo.LtkKhoQueryVO;
import com.example.ltk_project3_be.vo.LtkKhoUpdateVO;
import com.example.ltk_project3_be.vo.LtkKhoVO;
import org.antlr.v4.runtime.misc.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Validated
@RestController
@RequestMapping("/ltkKho")
public class LtkKhoController {

    @Autowired
    private LtkKhoService ltkKhoService;

    @PostMapping
    public String save(@Validated @RequestBody LtkKhoVO vO) {
        return ltkKhoService.save(vO).toString();
    }

    @DeleteMapping("/{id}")
    public void delete(@Validated @NotNull @PathVariable("id") Integer id) {
        ltkKhoService.delete(id);
    }

    @PutMapping("/{id}")
    public void update(@Validated @NotNull @PathVariable("id") Integer id,
                       @Validated @RequestBody LtkKhoUpdateVO vO) {
        ltkKhoService.update(id, vO);
    }

    @GetMapping("/{id}")
    public LtkKhoDTO getById(@Validated @NotNull @PathVariable("id") Integer id) {
        return ltkKhoService.getById(id);
    }

    @GetMapping
    public Page<LtkKhoDTO> query(@Validated LtkKhoQueryVO vO) {
        return ltkKhoService.query(vO);
    }
}
