package com.demo2.demo2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.annotation.SessionScope;

@CrossOrigin
@RestController
public class SessionController {

    private final ValueHolder valueHolder;

    @Autowired
    public SessionController(ValueHolder valueHolder) {
        this.valueHolder = valueHolder;
    }

    @GetMapping("/value")
    public String getValue() {
        return valueHolder.getValue();
    }

    @GetMapping("/value/{value}")
    public String getGame(@PathVariable("value") String value) {
        valueHolder.setValue(value);
        return "OK";
    }


}
