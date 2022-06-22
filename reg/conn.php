<?php
header('content-type:text/html;charset=utf-8');

// 获得数据库中的数据
$mysql_conf = array(
  'host' => 'localhost:3306',  // 主机名端口号
  'user' => 'root', // 登录用户名
  'pass' => 'root', // 登录密码
  'db' => 'xiaowo'  //  数据库名
);  

// 构造函数--连接数据库，接收三个参数：主机名端口号，用户名密码，
// @ 符号，屏蔽php版本不一样，造成警告
//类似于登录数据库
$conn = @new mysqli($mysql_conf['host'],$mysql_conf['user'],$mysql_conf['pass']);
// 打印检查 var_dump($conn); 

// connect_error 判断是否出现错误的属性，没有出现错误时，connect_error => NULL为false，有错误时，为true,if执行内容
// -> php访问属性     . 是连接符
if($conn->connect_error){
  //die() 结束进程，终止代码向下执行，js里没有，php里有
  // 终止代码执行 并输出错误代码编号
  die('连接错误'.$conn->connect_error);
}

// 设置查询字符集
$conn->query('set names utf-8');

// 选择数据库
$selected = $conn->select_db($mysql_conf['db']);

if(!$selected){
  die('数据库选择错误'.$conn->error);
}

//---------------------
// 获取所有用户信息
// $select = "select * from user";

?>