package com.pavan.halfstack.controller;


import com.pavan.halfstack.model.Ormodel;
import com.pavan.halfstack.repositories.Orderrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/order")
public class Ordercont {

    @Autowired
    Orderrepo repo;

    @PostMapping("/orderpost")
    public String meth(@RequestBody Ormodel d)
    {
        repo.save(d);
        return "inserted ";
    }


}
