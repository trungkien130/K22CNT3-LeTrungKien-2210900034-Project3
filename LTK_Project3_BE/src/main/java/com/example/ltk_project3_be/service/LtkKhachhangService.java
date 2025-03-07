package com.example.ltk_project3_be.service;

import com.example.ltk_project3_be.dto.LtkKhachhangDTO;
import com.example.ltk_project3_be.entities.LtkKhachhang;
import com.example.ltk_project3_be.repository.LtkKhachhangRepository;
import com.example.ltk_project3_be.vo.LtkKhachhangQueryVO;
import com.example.ltk_project3_be.vo.LtkKhachhangUpdateVO;
import com.example.ltk_project3_be.vo.LtkKhachhangVO;
import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class LtkKhachhangService {

    @Autowired
    private LtkKhachhangRepository ltkKhachhangRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    public Integer save(LtkKhachhangVO vO) {
        // Check for duplicate email
        if (ltkKhachhangRepository.findByLtkEmail(vO.getLtkEmail()) != null) {
            throw new IllegalStateException("Email đã tồn tại: " + vO.getLtkEmail());
        }

        LtkKhachhang bean = new LtkKhachhang();
        BeanUtils.copyProperties(vO, bean);
        // Encrypt password before saving
        if (vO.getLtkMatkhau() != null && !vO.getLtkMatkhau().isEmpty()) {
            bean.setLtkMatkhau(passwordEncoder.encode(vO.getLtkMatkhau()));
        } else {
            throw new IllegalArgumentException("Mật khẩu không được để trống");
        }
        // Set default role if not provided (false = user, true = admin)
        if (vO.getLtkRole() == null) {
            bean.setLtkRole(false); // Default to user
        }
        bean = ltkKhachhangRepository.save(bean);
        return bean.getLtkMakh();
    }

    public LtkKhachhang findByLtkEmail(String email) {
        return ltkKhachhangRepository.findByLtkEmail(email);
    }

    public LtkKhachhang findByEmailAndPassword(String email, String password) {
        LtkKhachhang khachhang = ltkKhachhangRepository.findByLtkEmail(email);
        if (khachhang == null) {
            throw new EntityNotFoundException("Không tìm thấy khách hàng với email: " + email);
        }
        if (!passwordEncoder.matches(password, khachhang.getLtkMatkhau())) {
            throw new SecurityException("Mật khẩu không đúng");
        }
        return khachhang;
    }

    public void delete(Integer id) {
        ltkKhachhangRepository.deleteById(id);
    }

    @Transactional
    public void update(Integer id, LtkKhachhangUpdateVO vO) {
        Optional<LtkKhachhang> optionalKhachhang = ltkKhachhangRepository.findById(id);
        if (optionalKhachhang.isPresent()) {
            LtkKhachhang khachhang = optionalKhachhang.get();
            if (vO.getLtkHoten() != null) khachhang.setLtkHoten(vO.getLtkHoten());
            if (vO.getLtkEmail() != null) khachhang.setLtkEmail(vO.getLtkEmail());
            if (vO.getLtkSodienthoai() != null) khachhang.setLtkSodienthoai(vO.getLtkSodienthoai());
            if (vO.getLtkDiachi() != null) khachhang.setLtkDiachi(vO.getLtkDiachi());
            if (vO.getLtkNgaysinh() != null) khachhang.setLtkNgaysinh(vO.getLtkNgaysinh());
            if (vO.getLtkGioitinh() != null) khachhang.setLtkGioitinh(vO.getLtkGioitinh());
            if (vO.getLtkTrangthai() != null) khachhang.setLtkTrangthai(vO.getLtkTrangthai());
            if (vO.getLtkRole() != null) khachhang.setLtkRole(vO.getLtkRole());
            if (vO.getLtkMatkhau() != null && !vO.getLtkMatkhau().isEmpty()) {
                khachhang.setLtkMatkhau(passwordEncoder.encode(vO.getLtkMatkhau()));
            }
            ltkKhachhangRepository.saveAndFlush(khachhang);
        } else {
            throw new EntityNotFoundException("Không tìm thấy khách hàng với ID: " + id);
        }
    }

    public LtkKhachhangDTO getById(Integer id) {
        LtkKhachhang original = requireOne(id);
        return toDTO(original);
    }

    public Page<LtkKhachhangDTO> query(LtkKhachhangQueryVO vO, Pageable pageable) {
        Pageable adjustedPageable = PageRequest.of(vO.getPage(), vO.getSize(), Sort.by("ltkMakh").ascending());
        Page<LtkKhachhang> pageResult = ltkKhachhangRepository.findAll(adjustedPageable);
        return pageResult.map(this::toDTO);
    }

    private LtkKhachhangDTO toDTO(LtkKhachhang entity) {
        LtkKhachhangDTO bean = new LtkKhachhangDTO();
        BeanUtils.copyProperties(entity, bean);
        return bean;
    }

    private LtkKhachhang requireOne(Integer id) {
        return ltkKhachhangRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Resource not found: " + id));
    }
}