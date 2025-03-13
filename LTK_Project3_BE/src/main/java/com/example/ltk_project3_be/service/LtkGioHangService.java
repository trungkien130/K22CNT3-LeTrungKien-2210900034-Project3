package com.example.ltk_project3_be.service;

import com.example.ltk_project3_be.dto.LtkGioHangDTO;
import com.example.ltk_project3_be.entities.LtkGioHang;
import com.example.ltk_project3_be.repository.LtkGioHangRepository;
import com.example.ltk_project3_be.vo.LtkGioHangQueryVO;
import com.example.ltk_project3_be.vo.LtkGioHangUpdateVO;
import com.example.ltk_project3_be.vo.LtkGioHangVO;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;

@Service
public class LtkGioHangService {

    @Autowired
    private LtkGioHangRepository ltkGioHangRepository;

    public Integer save(LtkGioHangVO vO) {
        LtkGioHang bean = new LtkGioHang();
        BeanUtils.copyProperties(vO, bean);
        bean = ltkGioHangRepository.save(bean);
        return bean.getMaGioHang();
    }

    public void delete(Integer id) {
        ltkGioHangRepository.deleteById(id);
    }

    public void update(Integer id, LtkGioHangUpdateVO vO) {
        LtkGioHang bean = requireOne(id);
        BeanUtils.copyProperties(vO, bean);
        ltkGioHangRepository.save(bean);
    }

    public LtkGioHangDTO getById(Integer id) {
        LtkGioHang original = requireOne(id);
        return toDTO(original);
    }

    public Page<LtkGioHangDTO> query(LtkGioHangQueryVO vO) {
        throw new UnsupportedOperationException();
    }

    private LtkGioHangDTO toDTO(LtkGioHang original) {
        LtkGioHangDTO bean = new LtkGioHangDTO();
        BeanUtils.copyProperties(original, bean);
        return bean;
    }

    private LtkGioHang requireOne(Integer id) {
        return ltkGioHangRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Resource not found: " + id));
    }
}
