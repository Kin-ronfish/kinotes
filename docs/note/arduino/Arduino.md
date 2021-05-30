# Arduino
## 基础语法
```c
unsigned int num = 1; //无符号整型
long nums = 123; //长整型
int a[3]={1,5,4} //数组定义
setup(){} //定义初始化，如引脚的输入输出
loop(){} //用来定义整个芯片主要重复动作的区域
```
## 数字V/0
```c
int digtulRead(pin); //数字I0口读输入电平函数，pin 表示为0~13, value表示为HIGH或LOW。比如可以读数字传感器。
setup(){
  pinMode(pin, mode); //数字I0口输入输出模式定义函数，pin表示为0~13，mode表示为INPUT或OUTPUT。
}
loop(){
  digitalWrite(pin, value); //数字IO口输出电平定义函数，pin表示为0~13，value表示为HGH或LOW。比如定义HIGH可以驱动LED。
}
```
## 模拟VO
```c
int analogRead(pin); //模拟IO口读函数，pin 表示为0~5 (Arduino Dieaimila为0~5，Arduino nano为0-7)。比如可以读模拟传感器(10位AD，0-5V表示为0-1023)。
setup(){}
loop(){
  analogWrite(pin, value); //PWM数字I0口PWM输出函数，Arduino数字I0口标注了PWM的IO口可使用该函数，pin表示3,5,6, 9, 10, value表示为0~255。比如可用于电机PWM调速或音乐播放。
}
```
## 时间函数
- `delay(ms)` 延时函数(单位ms)。
- `delayMicroneconds(us)` 延时函数(单位us)。
## 数学函数
- `min(x, y)` 求最小值
- `max(x, y)` 求最大值
- `abs(x)` 计算绝对值
- `constrain(x,a,b)` 若x<a,则返回a；若a<x<b,则返回x；若x>b,则返回b
- `map(salue, fromlow, fromHigh, tolow, toHigh)` 约束函数，value 必须在fromlow与tolow之间和fromHigh与toHigh之间
- `long random(min,max)` 在此区间产生一个随机数，最小值默认为0
- `pow(hase, exponent)` 开方函数，base 的exponent次方
- `sq(x)` 平方
- `sqrt(x)` 开根号