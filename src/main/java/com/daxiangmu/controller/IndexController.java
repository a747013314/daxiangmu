package com.daxiangmu.controller;


import com.daxiangmu.entity.User;
import com.daxiangmu.service.MailService;
import com.daxiangmu.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.Map;
import java.util.Random;


@Controller
public class IndexController {

    @Autowired
    private UserService userService;

    @Autowired
    private MailService mailService;

    @GetMapping("/login1")
    public String login1(){
        return "/user/login1";
    }

    @GetMapping("/register1")
    public String register1(){
        return "/user/register1";
    }

    @GetMapping("/register2")
    public String register2(){
        return "/user/register2";
    }

    @GetMapping("/register3")
    public String register3(){
        return "/user/register3";
    }

    //点击按钮发送邮件
    @PostMapping("/sendEmail")
    @ResponseBody
    public String sendEmail(HttpServletRequest request,HttpSession session){
        String email = request.getParameter("email");
        Random random = new Random();
        String verifyCode = String.valueOf(random.nextInt()* (99998 - 10001 + 1) + 10001);
        mailService.sendMail(email,"狗东-忘记密码", verifyCode);
        session.setAttribute("code",verifyCode);
        session.setAttribute("email",email);
        return "success";
    }

    //register1的下一步验证验证码与邮箱是否相同,ajax跳转到register2或者后端跳转
    @PostMapping("/verificationCode")
    @ResponseBody
    public String verificationCode(HttpSession session,HttpServletRequest request){
        String email = request.getParameter("email");
        String code = request.getParameter("ch");
        if(email.equals(session.getAttribute("email")) && code.equals(session.getAttribute("code")))
            return "success";
        else
            return "error";
    }

//    register2的下一步,ajax跳转或者后端跳转到register3，然后register3倒数五秒或者点击链接js填登陆页面的url
    @PostMapping("addUser")
    @ResponseBody
    public String addUser(HttpServletRequest request,HttpSession session){
        String uN = request.getParameter("uN");
        String pwd = request.getParameter("pwd");
        String tel = request.getParameter("tel");
        String rece_add = request.getParameter("rece_add");
        String mail = (String) session.getAttribute("tmail");
        userService.addUser(uN,pwd,tel,mail,rece_add);
        return "success";
    }

//    登录验证,成功跳转到主页，错误跳转到登陆页面并且有提示信息
    @PostMapping("login")
    public String login(HttpSession session,HttpServletRequest request, Map<String,Object> map){
        String username = request.getParameter("username");
        String password = request.getParameter("password");
        User user = userService.login(username,password);
        if(user!=null) {
            session.setAttribute("sessionUser",user);
            return "/user/login1";
        }

        else
        {
            map.put("msg","用户名密码错误,请重新输入!");
            return "/user/login1";
            //<div><p style="color: red;text-align: center;" th:text="${msg}" th:if="${not #strings.isEmpty(msg)}"></p></div>
        }

    }
}
