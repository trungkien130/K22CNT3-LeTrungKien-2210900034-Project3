package com.example.ltk_project3_be.controller;

import com.example.ltk_project3_be.dto.LtkHoadonDTO;
import com.example.ltk_project3_be.service.LtkHoadonService;
import com.example.ltk_project3_be.vo.LtkHoadonQueryVO;
import com.example.ltk_project3_be.vo.LtkHoadonUpdateVO;
import jakarta.validation.constraints.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Validated
@RestController
@RequestMapping("/ltkHoadon")
public class LtkHoadonController {

    @Autowired
    private LtkHoadonService ltkHoadonService;

    @PostMapping
    public String save(@Validated @RequestBody LtkHoadonDTO  vO) {
        return ltkHoadonService.save(vO).toString();
    }

    @DeleteMapping("/{id}")
    public void delete(@Validated @NotNull @PathVariable("id") Integer id) {
        ltkHoadonService.delete(id);
    }

    @PutMapping("/{id}")
    public void update(@Validated @NotNull @PathVariable("id") Integer id,
                       @Validated @RequestBody LtkHoadonUpdateVO vO) {
        ltkHoadonService.update(id, vO);
    }

    @GetMapping("/{id}")
    public LtkHoadonDTO getById(@Validated @NotNull @PathVariable("id") Integer id) {
        return ltkHoadonService.getById(id);
    }

    @GetMapping
    public Page<LtkHoadonDTO> query(@Validated LtkHoadonQueryVO vO) {
        return ltkHoadonService.query(vO);
    }
}
