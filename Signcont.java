package com.pavan.halfstack.controller;


import com.pavan.halfstack.model.SIgnmodel;
import com.pavan.halfstack.repositories.SIgnrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("http://localhost:3000")
@RequestMapping("/Signdata")
public class Signcont {

    @Autowired
    SIgnrepo repo;

    @PostMapping("/logindara")
    public String mthd(@RequestBody SIgnmodel d)
    {
        String us=d.getName();
        SIgnmodel m=repo.findByName(us);
        if(m==null)
        {
            repo.save(d);
            return "added";
        }
        else
        {
            return "user alredy exist";
        }
    }




    @PostMapping("/login/{mname}/{pass}")
    public String login(@PathVariable String mname,@PathVariable String pass)
    {
        SIgnmodel ll=repo.findByName(mname);
        if(ll == null)
        {
            return "invalid username";
        }
        else {
            if(ll.getPassword().equals(pass))
            {
                return "success";
            }
            else
            {
                return "invalidpassword";
            }
        }
    }




}
