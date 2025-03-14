package com.example.ltk_project3_be.service;

import com.example.ltk_project3_be.dto.LtkGioHangDTO;
import com.example.ltk_project3_be.entities.LtkGioHang;
import com.example.ltk_project3_be.repository.LtkGioHangRepository;
import com.example.ltk_project3_be.vo.LtkGioHangQueryVO;
import com.example.ltk_project3_be.vo.LtkGioHangUpdateVO;
import com.example.ltk_project3_be.vo.LtkGioHangVO;
import jakarta.transaction.Transactional;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Service;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class LtkGioHangService {

    @Autowired
    private LtkGioHangRepository ltkGioHangRepository;

    public Integer save(LtkGioHangVO vO) {
        LtkGioHang entity = new LtkGioHang();
        BeanUtils.copyProperties(vO, entity);
        entity = ltkGioHangRepository.save(entity);
        return entity.getMaGioHang();
    }

    public void delete(Integer id) {
        ltkGioHangRepository.deleteById(id);
    }

    @Transactional
    public LtkGioHang update(Integer id, LtkGioHangUpdateVO updateVO) {  // ✅ Pass ID & update data separately
        LtkGioHang existingGioHang = ltkGioHangRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("LtkGioHang not found with id: " + id));  // ✅ Correct repo usage

        BeanUtils.copyProperties(updateVO, existingGioHang, "maGioHang");  // ✅ Exclude ID from update

        return ltkGioHangRepository.save(existingGioHang);  // ✅ Save the updated entity
    }




    public LtkGioHangDTO getById(Integer id) {
        LtkGioHang entity = requireOne(id);
        return toDTO(entity);
    }

    public Page<LtkGioHangDTO> query(LtkGioHangQueryVO vO) {
        Pageable pageable = PageRequest.of(
                vO.getPage(), vO.getSize(),
                Sort.by(Sort.Direction.DESC, "maGioHang") // Sắp xếp giảm dần theo mã giỏ hàng
        );
        Page<LtkGioHang> resultPage = ltkGioHangRepository.findAll(pageable);
        return resultPage.map(this::toDTO);
    }

    private LtkGioHangDTO toDTO(LtkGioHang entity) {
        LtkGioHangDTO dto = new LtkGioHangDTO();
        BeanUtils.copyProperties(entity, dto);
        return dto;
    }

    private LtkGioHang requireOne(Integer id) {
        return ltkGioHangRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Resource not found: " + id));
    }
}
