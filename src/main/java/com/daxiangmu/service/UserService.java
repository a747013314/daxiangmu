package com.daxiangmu.service;

import com.daxiangmu.entity.User;

public interface UserService {

    void addUser(String u1_uName, String u1_uPwd, String u1_tel, String u1_email, String u1_receAdd);

    User login(String u1_uName, String u1_uPwd);
}
