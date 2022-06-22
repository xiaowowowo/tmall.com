<?php
include('./conn.php');//连接数据库，相当于link

$sql = "select * from product";

// query语句用于执行数据库（sql）语句
 // 执行查询 获得一个结果集（对象）
 $res = $conn->query($sql);

 $arr = [];
// 从结果集中获取一条数据
while($row = $res->fetch_assoc()){
  array_push($arr,$row);
}
// 将数据转为json输出
echo json_encode($arr);

?>