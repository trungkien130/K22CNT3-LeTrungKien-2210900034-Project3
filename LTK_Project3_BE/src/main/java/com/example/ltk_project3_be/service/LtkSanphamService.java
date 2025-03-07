package com.example.ltk_project3_be.service;

import com.example.ltk_project3_be.dto.LtkKhachhangDTO;
import com.example.ltk_project3_be.dto.LtkSanphamDTO;
import com.example.ltk_project3_be.entities.LtkKhachhang;
import com.example.ltk_project3_be.entities.LtkSanpham;
import com.example.ltk_project3_be.repository.LtkSanphamRepository;
import com.example.ltk_project3_be.vo.LtkKhachhangQueryVO;
import com.example.ltk_project3_be.vo.LtkSanphamQueryVO;
import com.example.ltk_project3_be.vo.LtkSanphamUpdateVO;
import com.example.ltk_project3_be.vo.LtkSanphamVO;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Service
public class LtkSanphamService {

    @Autowired
    private LtkSanphamRepository ltkSanphamRepository;

    public Integer save(LtkSanphamVO vO) {
        LtkSanpham bean = new LtkSanpham();
        BeanUtils.copyProperties(vO, bean);
        bean = ltkSanphamRepository.save(bean);
        return bean.getMaSP();
    }

    public void delete(Integer id) {
        ltkSanphamRepository.deleteById(id);
    }

    public void update(Integer id, LtkSanphamUpdateVO vO) {
        LtkSanpham bean = requireOne(id);
        BeanUtils.copyProperties(vO, bean);
        ltkSanphamRepository.save(bean);
    }

    public LtkSanphamDTO getById(Integer id) {
        LtkSanpham original = requireOne(id);
        return toDTO(original);
    }
    public Page<LtkSanphamDTO> query(LtkSanphamQueryVO vO , Pageable pageable) {
        Page<LtkSanpham> pageResult = ltkSanphamRepository.findAll(pageable);
        return pageResult.map(this::toDTO);
    }

    private LtkSanphamDTO toDTO(LtkSanpham original) {
        LtkSanphamDTO bean = new LtkSanphamDTO();
        BeanUtils.copyProperties(original, bean);
        return bean;
    }

    private LtkSanpham requireOne(Integer id) {
        return ltkSanphamRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Resource not found: " + id));
    }
    public List<LtkSanphamDTO> getAllProducts() {
        return ltkSanphamRepository.findAll().stream()
                .map(product -> {
                    LtkSanphamDTO dto = new LtkSanphamDTO();
                    dto.setMaSP(product.getMaSP());
                    dto.setTenSP(product.getTenSP());
                    dto.setMoTa(product.getMoTa());
                    dto.setGia(product.getGia());
                    dto.setSoLuongTon(product.getSoLuongTon());
                    dto.setMaKho(product.getMaKho());
                    dto.setMaNCC(product.getMaNCC());
                    dto.setMaKM(product.getMaKM());
                    dto.setHinhAnh(product.getHinhAnh());
                    return dto;
                })
                .collect(Collectors.toList());
    }

}
