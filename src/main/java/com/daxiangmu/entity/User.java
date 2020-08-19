package com.daxiangmu.entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class User {

    private int u1_id;
    private String u1_uName;
    private String u1_nName;
    private String u1_uPwd;
    private String u1_tel;
    private String u1_email;
    private String u1_receAdd;
}
