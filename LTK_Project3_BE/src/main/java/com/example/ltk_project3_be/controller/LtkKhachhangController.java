package com.example.ltk_project3_be.controller;

import com.example.ltk_project3_be.dto.LtkKhachhangDTO;
import com.example.ltk_project3_be.entities.LtkKhachhang;
import com.example.ltk_project3_be.repository.LtkKhachhangRepository;
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
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Validated
@RestController
@RequestMapping("/ltkKhachhang")
public class LtkKhachhangController {

    @Autowired
    private LtkKhachhangService ltkKhachhangService;
    private PasswordEncoder passwordEncoder;
    @Autowired
    private LtkKhachhangRepository ltkKhachhangRepository;

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
    public ResponseEntity<?> login(@RequestBody Map<String, String> loginRequest) {
        String email = loginRequest.get("ltkEmail");
        String password = loginRequest.get("ltkMatkhau");
        try {
            LtkKhachhang khachhang = ltkKhachhangService.findByEmailAndPassword(email, password);
            return ResponseEntity.ok(new HashMap<String, Object>() {{
                put("success", true);
                put("role", khachhang.getLtkRole() ? "ADMIN" : "USER");
            }});
        } catch (EntityNotFoundException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new HashMap<String, Object>() {{
                        put("success", false);
                        put("message", "Không tìm thấy khách hàng với email: " + email);
                    }});
        } catch (SecurityException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body(new HashMap<String, Object>() {{
                        put("success", false);
                        put("message", "Mật khẩu không đúng");
                    }});
        }
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
    @GetMapping("/ltk_email/{email}")
    public ResponseEntity<LtkKhachhang> getUserByEmail(@PathVariable String email) {
        Optional<LtkKhachhang> user = Optional.ofNullable(ltkKhachhangRepository.findByLtkEmail(email));
        return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @GetMapping
    public Page<LtkKhachhangDTO> query(@Valid LtkKhachhangQueryVO vO, Pageable pageable) {
        return ltkKhachhangService.query(vO, pageable);
    }
}

record LoginRequest(String ltkEmail, String ltkMatkhau) {}
record LoginResponse(boolean success, String message, String role) {}