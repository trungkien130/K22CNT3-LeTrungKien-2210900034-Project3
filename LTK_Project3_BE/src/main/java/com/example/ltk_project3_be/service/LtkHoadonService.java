package com.example.ltk_project3_be.service;

import com.example.ltk_project3_be.dto.LtkHoadonDTO;
import com.example.ltk_project3_be.entities.LtkHoadon;
import com.example.ltk_project3_be.repository.LtkHoadonRepository;
import com.example.ltk_project3_be.vo.LtkHoadonQueryVO;
import com.example.ltk_project3_be.vo.LtkHoadonUpdateVO;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;

@Service
public class LtkHoadonService {

    @Autowired
    private LtkHoadonRepository ltkHoadonRepository;

    public Integer save(LtkHoadonDTO vO) {
        LtkHoadon bean = new LtkHoadon();
        BeanUtils.copyProperties(vO, bean);
        bean = ltkHoadonRepository.save(bean);
        return bean.getMaHD();
    }

    public void delete(Integer id) {
        ltkHoadonRepository.deleteById(id);
    }

    public void update(Integer id, LtkHoadonUpdateVO vO) {
        LtkHoadon bean = requireOne(id);
        BeanUtils.copyProperties(vO, bean);
        ltkHoadonRepository.save(bean);
    }

    public LtkHoadonDTO getById(Integer id) {
        LtkHoadon original = requireOne(id);
        return toDTO(original);
    }

    public Page<LtkHoadonDTO> query(LtkHoadonQueryVO vO) {
        throw new UnsupportedOperationException();
    }

    private LtkHoadonDTO toDTO(LtkHoadon original) {
        LtkHoadonDTO bean = new LtkHoadonDTO();
        BeanUtils.copyProperties(original, bean);
        return bean;
    }

    private LtkHoadon requireOne(Integer id) {
        return ltkHoadonRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Resource not found: " + id));
    }
}
