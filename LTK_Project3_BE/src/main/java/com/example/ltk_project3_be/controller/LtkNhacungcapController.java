package com.example.ltk_project3_be.controller;

import com.example.ltk_project3_be.dto.LtkNhacungcapDTO;
import com.example.ltk_project3_be.service.LtkNhacungcapService;
import com.example.ltk_project3_be.vo.LtkNhacungcapQueryVO;
import com.example.ltk_project3_be.vo.LtkNhacungcapUpdateVO;
import com.example.ltk_project3_be.vo.LtkNhacungcapVO;
import org.antlr.v4.runtime.misc.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Validated
@RestController
@RequestMapping("/ltkNhacungcap")
public class LtkNhacungcapController {

    @Autowired
    private LtkNhacungcapService ltkNhacungcapService;

    @PostMapping
    public String save(@Validated @RequestBody LtkNhacungcapVO vO) {
        return ltkNhacungcapService.save(vO).toString();
    }

    @DeleteMapping("/{id}")
    public void delete(@Validated @NotNull @PathVariable("id") Integer id) {
        ltkNhacungcapService.delete(id);
    }

    @PutMapping("/{id}")
    public void update(@Validated @NotNull @PathVariable("id") Integer id,
                       @Validated @RequestBody LtkNhacungcapUpdateVO vO) {
        ltkNhacungcapService.update(id, vO);
    }

    @GetMapping("/{id}")
    public LtkNhacungcapDTO getById(@Validated @NotNull @PathVariable("id") Integer id) {
        return ltkNhacungcapService.getById(id);
    }

    @GetMapping
    public Page<LtkNhacungcapDTO> query(@Validated LtkNhacungcapQueryVO vO) {
        return ltkNhacungcapService.query(vO);
    }
}
