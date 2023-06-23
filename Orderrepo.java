package com.pavan.halfstack.repositories;

import com.pavan.halfstack.model.Ormodel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Orderrepo extends JpaRepository<Ormodel,Integer> {
}
