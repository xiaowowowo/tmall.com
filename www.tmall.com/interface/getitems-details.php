<?php
include('./conn.php');//连接数据库，相当于link

$id = $_REQUEST['id'];

$sql = "select * from product where id=$id";

// query语句用于执行数据库（sql）语句
 // 执行查询 获得一个结果集（对象）
 $res = $conn->query($sql);

// 从结果集中获取一条数据
$row = $res->fetch_assoc();

// 将数据转为json输出
echo json_encode($row);

?>