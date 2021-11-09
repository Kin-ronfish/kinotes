# python

> 国内镜像：https://pypi.tuna.tsinghua.edu.cn/simple

## GUI

- python内置UI组件库

```python
win = tk.Tk()#实例化
win.title('登录界面') #设置窗口名字
win.geometry('300x200')#设置窗口大小
tkinter.messagebox.showinfo(‘’)#提示窗口，需要import tkinter.messagebox
win_setup = tk.Toplevel(win)#在win窗口内在新建一个窗口
n_name = tk.StringVar()#设置Entry里的内容为字符串，并实例化
tk.Label(win_setup,text='用户名').place(x=20,y=20)#将text里的内容打印在win_setup窗口上
tk.Entry(win_setup,show =’*’,textvariable=n_name).place(x=75,y=20)#在窗口上显示一个输入框,show可以设置显示的内容为什么符号
#place可以将控件放到窗口的指定位置
tk.Button(win_setup,text='注册',width=4,command=set_up)#在窗口上显示一个按钮
#通过点击可以触发command执行对应的函数
lit0 = tk.Listbox(user,width=8,height=5)#在user窗口上显示一个空白框
lit0.insert(0,row[0])#在框中插入数值，并打印出来
user.destroy()#关闭user窗口
win.bind(‘a’,set_up)#通过键盘的特定按键，执行set_up函数
win.mainloop()#循环win
```

- 滑动文本

```python
S = Scrollbar(win)
T = Text(en,height=20, width=40,bg='DarkCyan',fg='Seashell')
S.pack(side=RIGHT, fill=Y)
T.pack(side=LEFT, fill=Y)
S.config(command=T.yview)
T.config(yscrollcommand=S.set)
quote ='显示的文字'
T.insert(END, quote)
```

## sqlit3

sqlit3数据库操作

```python
con = sqlite3.connect('data.db')#连接创建数据库
con.execute(’create table data1(难度 int)’)#创建一个表格
cur = con.execute('select * from data1')#查看表壳的内容
for row in cur:#打印输出表格内容
	print(row[0])
con.execute('delete from data1')#删除表格内容
con.execute("update data1 set 难度 = '%s'"%(n))#更新表格的内容
con.execute("insert into data1(得分, 用时)VALUES(%d,%f)"%(score[0],time0[0]))
#在表格中插入数值
con.commit()#数据库更改后，进行保存
con.close()#关闭数据库
```

## 多线程

```python
#继承父类threading.Thread
class Kin(threading.Thread):
    def __init__(self, threadID):
        threading.Thread.__init__(self)
        self.threadID = threadID
	def run(self):#把要运行的函数名放到run函数里，可以调用类以外的函数来运行
# 创建新线程
thread1 = Kin(1)#运行计时函数
thread2 = Kin(2)#运行计算函数
# 开启线程，同时运行两个线程函数
thread1.start()
thread2.start()
```

## os系统操作

```python
os.sep 系统路径分隔符
os.name 显示当前工作平台，window显示'nt',Linux/Unix显示'posix'
os.getenv('path') 读取系统环境变量
os.putenv('path') 设置系统环境变量
os.getcwd() 获取当前路径
os.listdir(path) 显示当前路径下的所有文件和目录名
os.chdir(path) 到当前目录中
os.mkdir(filename) 创建目录
os.rmdir(filename) 删除目录
os.mknod("test.txt") 创建空文件
os.rename(old,new) 目录或文件名的重命名
os.path.exists(dirs) 判断是否存在文件或目录
os.path.isfile(dirs) 判断是否为文件
os.path.isdir(dirs) 判断是否为目录
os.path.splitext 分离文件扩展名python
os.path.basename(dirs) 显示当前路径下的文件名
os.path.dirname(dirs) 显示文件的所在路径
os.path.getsize("tu.png") 返回文件大小，目录返回0L
```

> shutil工具类
> shutil.copyfile(oldfile,newfile) oldefile和newfile都只能是文件
> shutil.copy(oldfile,newfile) oldfile只能是文件夹，newfile是目录或文件夹
> shutil.copytree(oldfile,newfile) 都只能是目录
> shutil.rmtree("dir") 空目录和有内容的目录都可以删除

## opencv

- 包安装

```shell
pip install opencv-python
```

- 打开视频

```python
import  cv2
face = cv2.CascadeClassifier('./haar/haarcascade_frontalface_default.xml')#训练数据
sample_image = cv2.imread('a.jpg')#读取图片
faces = face.detectMultiScale(sample_image,scaleFactor=1.1,minNeighbors=5,minSize=(10,10))
for(x,y,w,h) in faces:
    cv2.rectangle(sample_image, (x,y), (x+w,y+h), (0,0,255), 2)
cv2.imwrite('peopleResult.png',sample_image)#输出图片
cv2.namedWindow('Video',flags=cv2.WINDOW_NORMAL)
cv2.imshow('Video', sample_image)
cv2.waitKey(0)
```

