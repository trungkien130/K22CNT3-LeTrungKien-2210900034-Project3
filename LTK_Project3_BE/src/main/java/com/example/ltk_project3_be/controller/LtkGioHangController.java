package com.example.ltk_project3_be.controller;

import com.example.ltk_project3_be.dto.LtkGioHangDTO;
import com.example.ltk_project3_be.entities.LtkGioHang;
import com.example.ltk_project3_be.service.LtkGioHangService;
import com.example.ltk_project3_be.vo.LtkGioHangQueryVO;

import com.example.ltk_project3_be.vo.LtkGioHangUpdateVO;
import com.example.ltk_project3_be.vo.LtkGioHangVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/ltkGiohang")
@Validated
public class LtkGioHangController {

    @Autowired
    private LtkGioHangService ltkGioHangService;

    @PostMapping
    public String save(@Valid @RequestBody LtkGioHangVO vO) {
        return String.valueOf(ltkGioHangService.save(vO));
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer id) {
        ltkGioHangService.delete(id);
    }

    @PutMapping("/{id}")
    public ResponseEntity<LtkGioHang> updateGioHang(
            @PathVariable Integer id,
            @RequestBody LtkGioHangUpdateVO updateVO) {
        LtkGioHang updatedGioHang = ltkGioHangService.update(id, updateVO);
        return ResponseEntity.ok(updatedGioHang);
    }


    @GetMapping("/{id}")
    public LtkGioHangDTO getById(@PathVariable("id") Integer id) {
        return ltkGioHangService.getById(id);
    }

    @GetMapping
    public Page<LtkGioHangDTO> query(@RequestParam(value = "page", defaultValue = "0") int page,
                                     @RequestParam(value = "size", defaultValue = "1000") int size) {
        LtkGioHangQueryVO queryVO = new LtkGioHangQueryVO();
        queryVO.setPage(page);
        queryVO.setSize(size);
        return ltkGioHangService.query(queryVO);
    }
}
