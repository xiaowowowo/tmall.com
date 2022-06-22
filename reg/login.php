<?php
 // 登录功能
  // 1. 前端需要向后端发送数据
  // 2. 后端接收前端发送的数据
  // 3. 连接数据库 查询用户名和密码是否正确
  //    3.1 查到了数据 用户名和密码正确 -> 登录成功
  //    3.2 没有查到数据 用户名或密码错误 -> 登录失败

 // $_REQUEST[]  接受前端发送的请求数据(get/post)
 $username = $_REQUEST['username'];
 $password = $_REQUEST['password'];

 include('./conn.php'); //连接数据库，相当于link

 $select = "select * from user where username = '$username ' and password = ' $password '" ;
 echo $select; // 检验查询语句对不对
 
 // query语句用于执行数据库（sql）语句
 // 执行查询 获得一个结果集（对象）
//  $res = $conn->query($select);  
// //  var_dump($res);

//  // num_rows  行数  判断有没有查到属性
//  if($res->num_rows>0){
//   echo '<script>alert("登录成功");</script>';
//   echo '<script>location.href="https://www.rootbk.cn";</script>';
//  }else{
//   echo '<script>alert("登录失败");</script>';
//   echo '<script>location.href="./reg.html";</script>';
//  }
// ?>