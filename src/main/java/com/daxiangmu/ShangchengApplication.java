package com.daxiangmu;

import org.apache.ibatis.annotations.Mapper;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.daxiangmu.dao")
public class ShangchengApplication {

    public static void main(String[] args) {
        SpringApplication.run(ShangchengApplication.class, args);
    }

}
