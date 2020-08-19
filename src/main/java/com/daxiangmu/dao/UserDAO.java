package com.daxiangmu.dao;

import com.daxiangmu.entity.User;
import org.apache.ibatis.annotations.Param;

public interface UserDAO {
    //用户注册
    void addUser(@Param("u1_uName") String u1_uName, @Param("u1_uPwd") String u1_uPwd, @Param("u1_tel") String u1_tel, @Param("u1_email") String u1_email, @Param("u1_receAdd") String u1_receAdd);
    //登录验证
    User login(@Param("u1_uName") String u1_uName, @Param("u1_uPwd") String u1_uPwd);
}
