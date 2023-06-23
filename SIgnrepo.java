package com.pavan.halfstack.repositories;

import com.pavan.halfstack.model.SIgnmodel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SIgnrepo extends JpaRepository<SIgnmodel,Integer> {
    SIgnmodel findByName(String user);
}
