package com.example.ltk_project3_be.service;

import com.example.ltk_project3_be.dto.SysdiagramsDTO;
import com.example.ltk_project3_be.entities.Sysdiagrams;
import com.example.ltk_project3_be.repository.SysdiagramsRepository;
import com.example.ltk_project3_be.vo.SysdiagramsQueryVO;
import com.example.ltk_project3_be.vo.SysdiagramsUpdateVO;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.util.NoSuchElementException;

@Service
public class SysdiagramsService {

    @Autowired
    private SysdiagramsRepository sysdiagramsRepository;

    public Integer save(SysdiagramsDTO vO) {
        Sysdiagrams bean = new Sysdiagrams();
        BeanUtils.copyProperties(vO, bean);
        bean = sysdiagramsRepository.save(bean);
        return bean.getDiagramId();
    }

    public void delete(Integer id) {
        sysdiagramsRepository.deleteById(id);
    }

    public void update(Integer id, SysdiagramsUpdateVO vO) {
        Sysdiagrams bean = requireOne(id);
        BeanUtils.copyProperties(vO, bean);
        sysdiagramsRepository.save(bean);
    }

    public SysdiagramsDTO getById(Integer id) {
        Sysdiagrams original = requireOne(id);
        return toDTO(original);
    }

    public Page<SysdiagramsDTO> query(SysdiagramsQueryVO vO) {
        throw new UnsupportedOperationException();
    }

    private SysdiagramsDTO toDTO(Sysdiagrams original) {
        SysdiagramsDTO bean = new SysdiagramsDTO();
        BeanUtils.copyProperties(original, bean);
        return bean;
    }

    private Sysdiagrams requireOne(Integer id) {
        return sysdiagramsRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Resource not found: " + id));
    }
}
