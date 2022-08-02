
// 返回后缀名
function getFile(filename) {
    return filename.split(".")[filename.split(".").length-1];
}
// let val = getFile('xlisd.xml');
// console.log(val);

// 金钱位数格式化
function returnDollar(num) {
    return `${num}`.replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
}

// 创建一个以值为长度的重复值数组
function _createArray(num) {
    return Array(num).fill(num)
}
// console.log(_createArray(5))

// 判断版本号
function shouldUpdate(oldV, newV) {
    return parseInt(oldV.replace(/\./g,0)) < parseInt(newV.replace(/\./g,0))
}
// console.log(shouldUpdate('9.0.1','9.1.0'))

// 输入一个限制范围和随机产生n个随机数，返回一个无重复的数组
function getUniqueNums(start, end, n) {
    return [... new Set(Array(n).fill('').map(() => {
        return Math.floor(Math.random()*(end-start+1))+start
    }))]
}
// console.log(getUniqueNums(2,10,5))


// 父类构造函数
function Animal(name) {
    this.name = name || 'animal'
    this.sleep = function() {
        console.log(this.name + '正在睡觉')
    }
}
Animal.prototype.eat = function(food) {
    console.log(this.name + '正在吃：' + food)
}

// 子类--------原型链继承
// 无法传参和多继承
function Cat() {}
Cat.prototype = new Animal(); // 将animal实例挂载到cat的原型链上
Cat.prototype.name = 'cat';
// let cat = new Cat();
// console.log(cat.name);
// cat.eat('bone');
// cat.sleep();

// 子类--------构造继承
// 可传参，多继承；只继承属性和方法(非原型)
function Cat_1(name) {
    Animal.call(this);
    this.name = name || 'Tom'
}
// let cat_1 = new Cat_1();
// console.log(cat_1.name);
// cat_1.sleep();

// 子类--------组合继承
// 整合了前两者
function Cat_2(name) {
    Animal.call(this);
    this.name = name || 'Tom'
}
// Cat_2.prototype = new Animal();
// Cat_2.prototype.constructor = Cat_2;
// let cat_2 = new Cat_2();
// console.log(cat_2.name);
// cat_2.sleep();


// 寄生组合继承
function Cat_3(name) {
    Animal.call(this);
    this.name = name || 'Tom';
}
(function() {
    let Super = function() {};
    Super.prototype = Animal.prototype;
    Cat_3.prototype = new Super();
})()
// let cat_3 = new Cat_3();
// console.log(cat_3.name);
// cat_3.sleep();
// Cat_3.prototype.constructor = Cat_3

// 类
class Animal_1 {
    constructor(name) {
        this.name = name || 'animal'
        this.sleep = function() {
            console.log(this.name + '正在睡觉')
        }
    }
}
Animal_1.prototype.eat = function(food) {
    console.log(this.name + '正在吃：' + food)
}

// let set1 = new Set(['a','b','c'])
// console.log(set1.size)

class Rectangle {
    // 补全代码
    constructor(height, width) {
        Object.defineProperty(this, 'area', {
            get() {
                return height * width
            }
        })
    }
}
// let rect = new Rectangle(12,12)
// console.log(rect.area)

// let obj = {a:1}
// let proxy = new Proxy(obj, {
//     get: function(target, attr) {
//         console.log(target, attr)
//         return '15616515'
//     },
//     set: function(target, attr, value) {
//         console.log(target, attr, value)
//     }
// })
// proxy.a
// proxy.a = '12123'
// console.log(proxy.a)

// const _proxy = (object,...prototypes) => {
//     // 补全代码
//     new Proxy(object, {
//         get: function(target) {
//             if(object!=target) {
//                 return 'noright';
//             }
//         }
//     })
// }
// _proxy({a: 1}, {b:1}, {c:5})

