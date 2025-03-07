package com.example.ltk_project3_be.controller;

import com.example.ltk_project3_be.dto.LtkSanphamDTO;
import com.example.ltk_project3_be.entities.LtkSanpham;
import com.example.ltk_project3_be.repository.LtkSanphamRepository;
import com.example.ltk_project3_be.service.LtkSanphamService;
import com.example.ltk_project3_be.vo.LtkSanphamQueryVO;
import com.example.ltk_project3_be.vo.LtkSanphamUpdateVO;
import com.example.ltk_project3_be.vo.LtkSanphamVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Validated
@RestController
@RequestMapping("/ltkSanpham")
public class LtkSanphamController {

    @Autowired
    private LtkSanphamService ltkSanphamService;
    @Autowired
    private LtkSanphamRepository ltkSanphamRepository;

    @PostMapping
    public String save(@Validated @RequestBody LtkSanphamVO vO) {
        return ltkSanphamService.save(vO).toString();
    }

    @DeleteMapping("/{id}")
    public void delete(@Validated @PathVariable("id") Integer id) {
        ltkSanphamService.delete(id);
    }

    // Fixed: Removed the redundant "/ltkSanpham" from the path
    @PutMapping("/{id}")
    public ResponseEntity<LtkSanpham> updateSanpham(@PathVariable Long id, @RequestBody LtkSanphamUpdateVO updatedSanpham) {
        LtkSanpham existingSanpham = ltkSanphamRepository.findById(id.intValue())
                .orElse(null);

        if (existingSanpham == null) {
            return ResponseEntity.notFound().build();
        }

        // Update fields from updatedSanpham, keeping maSP unchanged
        if (updatedSanpham.getTenSP() != null) existingSanpham.setTenSP(updatedSanpham.getTenSP());
        if (updatedSanpham.getMoTa() != null) existingSanpham.setMoTa(updatedSanpham.getMoTa());
        if (updatedSanpham.getGia() != null) existingSanpham.setGia(updatedSanpham.getGia());
        if (updatedSanpham.getSoLuongTon() != null) existingSanpham.setSoLuongTon(updatedSanpham.getSoLuongTon());
        if (updatedSanpham.getMaKho() != null) existingSanpham.setMaKho(updatedSanpham.getMaKho());
        if (updatedSanpham.getMaNCC() != null) existingSanpham.setMaNCC(updatedSanpham.getMaNCC());
        if (updatedSanpham.getMaKM() != null) existingSanpham.setMaKM(updatedSanpham.getMaKM());
        if (updatedSanpham.getHinhAnh() != null) existingSanpham.setHinhAnh(updatedSanpham.getHinhAnh());

        LtkSanpham savedSanpham = ltkSanphamRepository.save(existingSanpham);
        return ResponseEntity.ok(savedSanpham);
    }

    @GetMapping("/{id}")
    public LtkSanphamDTO getById(@Validated @PathVariable("id") Integer id) {
        return ltkSanphamService.getById(id);
    }

    @GetMapping
    public List<LtkSanphamDTO> getAllProducts() {
        return ltkSanphamService.getAllProducts();
    }
}