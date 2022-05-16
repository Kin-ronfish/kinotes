# PHP

> [php官方手册](https://www.php.net/manual/zh/index.php)

## 语法定义

```php
<?php
	$name = 'a'; //函数定义变量前加'$',句尾要加';'
	echo '名字'. $name; //字符串与变量拼接输出用'.'
?>
```

> 对象访问格式：obj['key']

## 面向对象

```php
<?php
    class Emp { //数据存储对象
        public $id = "";
        public $username = "";
        public $phone = "";
    }
	$e = new Emp();//实例化对象
	$e->id = 1;
    $e->username = 'a';
    $e->phone = 135465;
?>
```

## 数据库操作

- 创建连接

```php
<?php
    $conn = new mysqli("localhost","root","","mydb");// 域名，用户名，密码，数据库名
    // 检测连接
    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    }
    $conn->close();
?>
```

- 数据获取

```php
<?php
    //获取get方法传入的值
    $name = $_GET['name'];
    //获取post方法提交的值
    $name = $_POST['name'];
    //获取上传的图片文件
    $form_data = $_FILES['form_data']['tmp_name'];
    $form_data_type = $_FILES['form_data']['type'];
    $data = addslashes(fread(fopen($form_data, "r"), filesize($form_data)));
?>
```

- 插入数据

```php
<?php
	$conn = new mysqli("localhost","root","","mydb");
    // 检测连接
    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    }
    $name = $_GET['name'];
    //插入数据
    $sql = "INSERT INTO table (name) VALUES ('$name')";
    if ($conn->query($sql) === TRUE) {
        echo "新记录插入成功";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
    $conn->close();
?>
```

- 查询数据

```php
<?php
	$conn = new mysqli("localhost","root","","mydb");
    // 检测连接
    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    }
    $sql = "SELECT id,name FROM table";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        // 输出数据
        while($row = $result->fetch_assoc()) {
            echo $row['id'] . $row['name'];
        }
    }
    $conn->close();
?>
```

- 更新数据

```php
<?php
	$conn = new mysqli("localhost","root","","mydb");
    // 检测连接
    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    }
    $id = $_GET['id'];
	$name = $_GET['name'];
    $sql = "UPDATE table set name='$name' WHERE id='$id'";
    if ($conn->query($sql) === FALSE) {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }else{
        echo 0;
    }
    $conn->close();
?>
```

- 删除数据

```php
<?php
    // 创建连接
    $conn = new mysqli("localhost","root","","mydb");
    // 检测连接
    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    }
    $id = $_GET['id'];
    $sql = "DELETE FROM table WHERE id='$id'";
    if ($conn->query($sql) === FALSE) {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }else{
        echo 0;
    }
    $conn->close();
?>
```

## 案例实战

- 图片上传与显示

```php
<?php
    // 创建连接
    $conn = new mysqli("localhost","root","","mydb");
    // 检测连接
    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    }
	// ---- 图片上传
    $img_data = $_FILES['file']['tmp_name'];
    $img_name = $_FILES['file']['name'];
    $img_type = $_FILES['file']['type'];
    $data = addslashes(fread(fopen($img_data, "r"), filesize($img_data)));
    $sql = "INSERT INTO file_list (name,img,type)
    VALUES ('$img_name','$data','$img_type')";
    if ($conn->query($sql) === TRUE) {
        echo json_encode($_FILES);
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
	// ---- 图片显示
    $sql = "SELECT name,img,type from file_list";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            if($_GET['name']==$row['name']){
                $pic = $row['img'];
                $type = $row['type'];
                Header("Content-type: $type");
                echo $pic;
            }
        }
    }
    $conn->close();
```

