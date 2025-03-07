package com.example.ltk_project3_be.controller;

import com.example.ltk_project3_be.dto.LtkKhachhangDTO;
import com.example.ltk_project3_be.entities.LtkKhachhang;
import com.example.ltk_project3_be.service.LtkKhachhangService;
import com.example.ltk_project3_be.vo.LtkKhachhangQueryVO;
import com.example.ltk_project3_be.vo.LtkKhachhangUpdateVO;
import com.example.ltk_project3_be.vo.LtkKhachhangVO;
import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.Valid;
import jakarta.validation.constraints.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Validated
@RestController
@RequestMapping("/ltkKhachhang")
public class LtkKhachhangController {

    @Autowired
    private LtkKhachhangService ltkKhachhangService;

    @PostMapping
    public ResponseEntity<String> save(@Valid @RequestBody LtkKhachhangVO vO) {
        try {
            System.out.println("Dữ liệu nhận từ frontend: " + vO);
            Integer id = ltkKhachhangService.save(vO);
            return ResponseEntity.ok("Đăng ký thành công với ID: " + id);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("Lỗi: " + e.getMessage());
        }
    }

    @PostMapping("/login")
    public LoginResponse login(@Valid @RequestBody LoginRequest loginRequest) {
        String email = loginRequest.ltkEmail();
        String password = loginRequest.ltkMatkhau();
        LtkKhachhang khachhang = ltkKhachhangService.findByLtkEmail(email); // Add this method to service
        if (khachhang != null && passwordEncoder.matches(password, khachhang.getLtkMatkhau())) {
            return new LoginResponse(true, "Login successful", khachhang.getLtkRole() ? "ADMIN" : "USER");
        }
        return new LoginResponse(false, "Invalid email or password", null);
    }
    @DeleteMapping("/{id}")
    public void delete(@Valid @NotNull @PathVariable("id") Integer id) {
        ltkKhachhangService.delete(id);
    }

    @PutMapping("/{id}")
    public void update(@Valid @NotNull @PathVariable("id") Integer id,
                       @Valid @RequestBody LtkKhachhangUpdateVO vO) {
        ltkKhachhangService.update(id, vO);
    }

    @GetMapping("/{id}")
    public LtkKhachhangDTO getById(@Valid @NotNull @PathVariable("id") Integer id) {
        return ltkKhachhangService.getById(id);
    }

    @GetMapping
    public Page<LtkKhachhangDTO> query(@Valid LtkKhachhangQueryVO vO, Pageable pageable) {
        return ltkKhachhangService.query(vO, pageable);
    }
}

record LoginRequest(String ltkEmail, String ltkMatkhau) {}
record LoginResponse(boolean success, String message, String role) {}