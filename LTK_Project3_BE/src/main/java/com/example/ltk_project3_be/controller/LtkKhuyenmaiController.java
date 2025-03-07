package com.example.ltk_project3_be.controller;

import com.example.ltk_project3_be.dto.LtkKhuyenmaiDTO;
import com.example.ltk_project3_be.service.LtkKhuyenmaiService;
import com.example.ltk_project3_be.vo.LtkKhuyenmaiQueryVO;
import com.example.ltk_project3_be.vo.LtkKhuyenmaiUpdateVO;
import com.example.ltk_project3_be.vo.LtkKhuyenmaiVO;
import org.antlr.v4.runtime.misc.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Validated
@RestController
@RequestMapping("/ltkKhuyenmai")
public class LtkKhuyenmaiController {

    @Autowired
    private LtkKhuyenmaiService ltkKhuyenmaiService;

    @PostMapping
    public String save(@Validated @RequestBody LtkKhuyenmaiVO vO) {
        return ltkKhuyenmaiService.save(vO).toString();
    }

    @DeleteMapping("/{id}")
    public void delete(@Validated @NotNull @PathVariable("id") Integer id) {
        ltkKhuyenmaiService.delete(id);
    }

    @PutMapping("/{id}")
    public void update(@Validated @NotNull @PathVariable("id") Integer id,
                       @Validated @RequestBody LtkKhuyenmaiUpdateVO vO) {
        ltkKhuyenmaiService.update(id, vO);
    }

    @GetMapping("/{id}")
    public LtkKhuyenmaiDTO getById(@Validated @NotNull @PathVariable("id") Integer id) {
        return ltkKhuyenmaiService.getById(id);
    }

    @GetMapping
    public Page<LtkKhuyenmaiDTO> query(@Validated LtkKhuyenmaiQueryVO vO) {
        return ltkKhuyenmaiService.query(vO);
    }
}
