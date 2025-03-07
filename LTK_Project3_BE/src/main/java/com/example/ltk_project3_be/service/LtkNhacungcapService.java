package com.example.ltk_project3_be.service;

import com.example.ltk_project3_be.dto.LtkNhacungcapDTO;
import com.example.ltk_project3_be.entities.LtkNhacungcap;
import com.example.ltk_project3_be.repository.LtkNhacungcapRepository;
import com.example.ltk_project3_be.vo.LtkNhacungcapQueryVO;
import com.example.ltk_project3_be.vo.LtkNhacungcapUpdateVO;
import com.example.ltk_project3_be.vo.LtkNhacungcapVO;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;

@Service
public class LtkNhacungcapService {

    @Autowired
    private LtkNhacungcapRepository ltkNhacungcapRepository;

    public Integer save(LtkNhacungcapVO vO) {
        LtkNhacungcap bean = new LtkNhacungcap();
        BeanUtils.copyProperties(vO, bean);
        bean = ltkNhacungcapRepository.save(bean);
        return bean.getMaNCC();
    }

    public void delete(Integer id) {
        ltkNhacungcapRepository.deleteById(id);
    }

    public void update(Integer id, LtkNhacungcapUpdateVO vO) {
        LtkNhacungcap bean = requireOne(id);
        BeanUtils.copyProperties(vO, bean);
        ltkNhacungcapRepository.save(bean);
    }

    public LtkNhacungcapDTO getById(Integer id) {
        LtkNhacungcap original = requireOne(id);
        return toDTO(original);
    }

    public Page<LtkNhacungcapDTO> query(LtkNhacungcapQueryVO vO) {
        throw new UnsupportedOperationException();
    }

    private LtkNhacungcapDTO toDTO(LtkNhacungcap original) {
        LtkNhacungcapDTO bean = new LtkNhacungcapDTO();
        BeanUtils.copyProperties(original, bean);
        return bean;
    }

    private LtkNhacungcap requireOne(Integer id) {
        return ltkNhacungcapRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Resource not found: " + id));
    }
}
