package com.example.ltk_project3_be.service;

import com.example.ltk_project3_be.dto.LtkKhoDTO;
import com.example.ltk_project3_be.entities.LtkKho;
import com.example.ltk_project3_be.repository.LtkKhoRepository;
import com.example.ltk_project3_be.vo.LtkKhoQueryVO;
import com.example.ltk_project3_be.vo.LtkKhoUpdateVO;
import com.example.ltk_project3_be.vo.LtkKhoVO;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;

@Service
public class LtkKhoService {

    @Autowired
    private LtkKhoRepository ltkKhoRepository;

    public Integer save(LtkKhoVO vO) {
        LtkKho bean = new LtkKho();
        BeanUtils.copyProperties(vO, bean);
        bean = ltkKhoRepository.save(bean);
        return bean.getMaKho();
    }

    public void delete(Integer id) {
        ltkKhoRepository.deleteById(id);
    }

    public void update(Integer id, LtkKhoUpdateVO vO) {
        LtkKho bean = requireOne(id);
        BeanUtils.copyProperties(vO, bean);
        ltkKhoRepository.save(bean);
    }

    public LtkKhoDTO getById(Integer id) {
        LtkKho original = requireOne(id);
        return toDTO(original);
    }

    public Page<LtkKhoDTO> query(LtkKhoQueryVO vO) {
        throw new UnsupportedOperationException();
    }

    private LtkKhoDTO toDTO(LtkKho original) {
        LtkKhoDTO bean = new LtkKhoDTO();
        BeanUtils.copyProperties(original, bean);
        return bean;
    }

    private LtkKho requireOne(Integer id) {
        return ltkKhoRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Resource not found: " + id));
    }
}
