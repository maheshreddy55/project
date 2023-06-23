package com.pavan.halfstack.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class ClientNotFoundAdvice {
    @ResponseBody
    @ExceptionHandler(ClientNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    Map<String, String> exceptionHandler(ClientNotFoundException e) {
        Map<String, String> errorMap = new HashMap<>();
        errorMap.put("error Message:", e.getMessage());
        return errorMap;

    }
}
