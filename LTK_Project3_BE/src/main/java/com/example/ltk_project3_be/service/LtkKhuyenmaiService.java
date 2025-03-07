package com.example.ltk_project3_be.service;

import com.example.ltk_project3_be.dto.LtkKhuyenmaiDTO;
import com.example.ltk_project3_be.entities.LtkKhuyenmai;
import com.example.ltk_project3_be.repository.LtkKhuyenmaiRepository;
import com.example.ltk_project3_be.vo.LtkKhuyenmaiQueryVO;
import com.example.ltk_project3_be.vo.LtkKhuyenmaiUpdateVO;
import com.example.ltk_project3_be.vo.LtkKhuyenmaiVO;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;

@Service
public class LtkKhuyenmaiService {

    @Autowired
    private LtkKhuyenmaiRepository ltkKhuyenmaiRepository;

    public Integer save(LtkKhuyenmaiVO vO) {
        LtkKhuyenmai bean = new LtkKhuyenmai();
        BeanUtils.copyProperties(vO, bean);
        bean = ltkKhuyenmaiRepository.save(bean);
        return bean.getMaKM();
    }

    public void delete(Integer id) {
        ltkKhuyenmaiRepository.deleteById(id);
    }

    public void update(Integer id, LtkKhuyenmaiUpdateVO vO) {
        LtkKhuyenmai bean = requireOne(id);
        BeanUtils.copyProperties(vO, bean);
        ltkKhuyenmaiRepository.save(bean);
    }

    public LtkKhuyenmaiDTO getById(Integer id) {
        LtkKhuyenmai original = requireOne(id);
        return toDTO(original);
    }

    public Page<LtkKhuyenmaiDTO> query(LtkKhuyenmaiQueryVO vO) {
        throw new UnsupportedOperationException();
    }

    private LtkKhuyenmaiDTO toDTO(LtkKhuyenmai original) {
        LtkKhuyenmaiDTO bean = new LtkKhuyenmaiDTO();
        BeanUtils.copyProperties(original, bean);
        return bean;
    }

    private LtkKhuyenmai requireOne(Integer id) {
        return ltkKhuyenmaiRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Resource not found: " + id));
    }
}
