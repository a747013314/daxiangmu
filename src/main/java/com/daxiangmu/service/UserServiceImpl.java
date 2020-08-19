package com.daxiangmu.service;

import com.daxiangmu.dao.UserDAO;
import com.daxiangmu.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDAO userDAO;

    @Override
    public void addUser(String u1_uName, String u1_uPwd, String u1_tel, String u1_email, String u1_receAdd) {
        userDAO.addUser(u1_uName, u1_uPwd, u1_tel, u1_email, u1_receAdd);
    }

    @Override
    public User login(String u1_uName, String u1_uPwd) {
        return userDAO.login(u1_uName, u1_uPwd);
    }
}
