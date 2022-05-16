# Java
数据类型 `int` `float` `double` `char` `String`
```java
int num = 6;
float num = 8.2;
double num = 5.26;
char str = "L";
String str = "Kin";
```
## 运算符 
`+ - * / % && || ++ --`
```java
num = num + 2;
num = num - 2;
num = num * 2;
num = num / 2;
num = num % 2;
```
## 选择 
`if…else`  `switch…case:…default`
```java
if(num > 0){
  system.out.println('yes');
}else{
  system.out.println('no');
}
switch(num){
  case 1 :
    system.out.println('1');
  case 2 :
    system.out.println('2');
  default :
    system.out.println('null');
}
```
## 循环 
`while` `do…while` `for`
```java
while(num > 0) { //先判断，再循环
  system.out.println(num);
  num--;
}
do { //先循环，再判断
  system.out.println(num);
  num--;
}while(num < 0>)
for(int i=0;i<num;i++>) {
  system.out.println(i);
}
```
## 方法定义
```java
  public static void print(){
    system.out.println('hello');
  }
  public static void print(int num){ //方法重载
    system.out.println(num);
  }
  public void print(){ //方法覆写
    System.out.println(“what”)
  }
```
## 类定义
```java
class Pen{
  private String str = "Kin" //封装字符串
  public void print(){
    this.str = "hello,Kin" //this表示本类属性
    System.out.println(“hello”);
  }
}
Pen pen = new Pen() //对象实例化
public Pen(String name,double price){} //类重载
```
## 定义构造方法
```java
public Pen(){}
```
## 数组定义
```java
int[] array = int[3];
int[] array = {1,5,7};
```
## 内部类，应用于链表
```java
class A{
  class B{
    public void print() {
      System.out.println(“A类中的B类”);
    }
  }
}
```
## 继承父类
```java
class shop extends Pen{
  public void print() { //super.属性访问父类属性
    System.out.println(super.str);
  }
}
```
## 多态
```java
Pen p = shop() //向上转型
shop s = (shop) Pen//向下转型
```
## 抽象类
```java
abstract class C{
  public abstract void print();
}
```
## 接口
```java
interface D{
  int x;
  public void fun();
}
```
## 笔记
- final:终结器
- object:所有类的父类
- 单例设计模式:实例化一次，构造方法私有化
- 多例设计模式:实例化有限次，构造方法私有化