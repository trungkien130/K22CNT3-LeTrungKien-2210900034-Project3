package com.example.ltk_project3_be.controller;

import com.example.ltk_project3_be.dto.LtkGioHangDTO;
import com.example.ltk_project3_be.service.LtkGioHangService;
import com.example.ltk_project3_be.vo.LtkGioHangQueryVO;
import com.example.ltk_project3_be.vo.LtkGioHangUpdateVO;
import com.example.ltk_project3_be.vo.LtkGioHangVO;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Validated
@RestController
@RequestMapping("/ltkGiohang")
public class LtkGioHangController {

    @Autowired
    private LtkGioHangService ltkGioHangService;

    @PostMapping
    public String save(@Valid @RequestBody LtkGioHangVO vO) {
        return ltkGioHangService.save(vO).toString();
    }

    @DeleteMapping("/{id}")
    public void delete(@Valid  @PathVariable("id") Integer id) {
        ltkGioHangService.delete(id);
    }

    @PutMapping("/{id}")
    public void update(@Valid  @PathVariable("id") Integer id,
                       @Valid @RequestBody LtkGioHangUpdateVO vO) {
        ltkGioHangService.update(id, vO);
    }

    @GetMapping("/{id}")
    public LtkGioHangDTO getById(@Valid  @PathVariable("id") Integer id) {
        return ltkGioHangService.getById(id);
    }

    @GetMapping
    public Page<LtkGioHangDTO> query(@Valid LtkGioHangQueryVO vO) {
        return ltkGioHangService.query(vO);
    }
}
