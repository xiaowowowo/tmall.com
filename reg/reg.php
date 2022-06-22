<?php
 // 1. 前端发送数据
  // 2. 后端接收数据
  // 3. 连接数据库
  // 4. 判断用户名在数据中是否已经存在
  // 4.1 存在 注册失败 提示用户 用户名已存在 返回注册页
  // 4.2 不存在 注册成功 将用户提交的数据 写入数据库 返回页面
  
  // $_REQUEST[]  接受前端发送的请求数据(get/post)
  // 2. 后端接收数据
   $username = $_REQUEST['username'];
   $password = $_REQUEST['password'];
   $email = $_REQUEST['email'];
   $phone = $_REQUEST['phone'];
   $address = $_REQUEST['address'];
   $sex = $_REQUEST['sex'];

  // 3.连接数据库
  include('./conn.php');

  // 4. 查询用户名是否存在
  $selectUName= "select * from user where username = '$username'";
  // echo $selectUName;
  
  $res = $conn->query($selectUName); //结果集

  if($res->num_rows>0){
    echo '<script>alert("注册失败,用户名已存在");</script>';
    echo '<script>location.href="./login.html";</script>';
    die();
  }
  // 插入数据
  $insertUser = "insert into user (username,password,email,phone,address,sex) values ('$username','$password','$email','$phone','$address','$sex')";

  $inserted = $conn->query($insertUser);  //布尔值
  // echo $inserted
  if($inserted){
    echo '<script>alert("注册成功");</script>';
    echo '<script>location.href="./login.html";</script>';
  }
?>