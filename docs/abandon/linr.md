# 常用方法

## 数组去重

- 数值数组去重
- 对象数组去重

```js
/**
 * 数组去重
 * 1. 数值数组[1,2,3,4,2,6,5]
 * 2. 对象数组[{value:1},{value:2},{value:1},{value:'xx'}], 'value'
 * @param {*} arr 数组
 * @param {*} key 对象数组键名
 * @returns 
 */
 export function queArr(arr=[],key='') {
    if(key) {
        let obj = {}
        let data = []
        arr.forEach(item => {
            if(!obj[item[key]]) {
                obj[item[key]] = true
                data.push(item)
            }
        })
        return data
    }
    return [...new Set(arr)]
}
```

## 数组过滤

- 数值数组-单值过滤
- 数值数组-数值数组过滤
- 对象数组-单值过滤
- 对象数组-数值数组过滤
- 对象数组-对象数组过滤

```js
/**
 * 数组过滤
 * 1. 数值数组[1,2,3,4,5], 2
 * 2. 数值数组[1,2,3,4,5], [2,4]
 * 3. 对象数组[{num: 1},{num: 2},{num: 3}], 3, 'num'
 * 4. 对象数组[{num: 1},{num: 2},{num: 3}], [1,3], 'num'
 * 5. 对象数组[{num: 4},{num: 5},{num: 6}], [{num: 5}], 'num'
 * @param {*} arr 主要数组
 * @param {*} val 操作值
 * @param {*} key 对象数组键名
 * @returns 
 */
export function filterArr(arr=[], val, key='') {
    if(!key && typeof val === 'number') { // 1
        return arr.filter(item => item!=val)
    }
    if(!key && val instanceof Array) { // 2
        return arr.filter(item => !val.includes(item))
    }
    if(key && typeof val === 'number') { // 3
        return arr.filter(item => item[key]!=val)
    }
    if(key && val instanceof Array && typeof val[0] === 'number') { // 4
        return arr.filter(item => !val.includes(item[key]))
    }
    if(key && val instanceof Array && val[0] instanceof Object) { // 5
        let tmpArr = val.map(item => item[key])
        return arr.filter(item => !tmpArr.includes(item[key]))
    }
}
```

## 数组树形

- 对象数组转成树形结构

```js
/**
 * 数组转树形结构
 * @param {*} array 主要数组
 * @param {*} id 子节点id
 * @param {*} parent_id 父节点id
 * @param {*} name 根节点键名
 * @returns 
 */
export function buildTree(array,id,parent_id, name) {
    let temp = {};// 创建临时对象
    let tree = {};// 创建需要返回的树形对象
    for(let i in array) {// 先遍历数组，将数组的每一项添加到temp对象中
        temp[array[i][id]] = array[i];
    }
    for(let i in temp) {// 遍历temp对象，将当前子节点与父节点建立连接
        // 判断是否是根节点下的项
        if(temp[i][parent_id] !== name) {
             if(!temp[temp[i][parent_id]].children) {
                 temp[temp[i][parent_id]].children = new Array();
             }
             temp[temp[i][parent_id]].children.push(temp[i]);
        } else {
            tree[temp[i][id]] = temp[i];
        }
    }
    return tree;
}
```

## 键值分组

- 根据键值进行分组

```js
/**
 * 1.键值分组[{name:'a',val:2},{name:'c',val:5},{name:'a',val:6},{name:'b',val:1},{name:'c',val:4},{name:'b',val:7}], 'name'
 * @param {*} arr 
 * @param {*} key 
 * @returns 
 */
 export function groupKey(arr, key) {
    let obj = {}
    arr.forEach(item => {
        if (!obj[item[key]]) {
            obj[item[key]] = []
        }
        obj[item[key]].push(item)
    })
    return obj
}
```

## 更换键名

- 对象数组键名替换

```js
/**
 * 1.更改键名{value: 2, name: 'xx'}, 'value', 'num'
 * @param {*} obj 
 * @param {*} oldKey 
 * @param {*} newKey 
 * @returns 
 */
export function changeKey(obj={}, oldKey='', newKey='') {
    obj[newKey] = obj[oldKey]
    delete obj[oldKey]
    return obj
}
```

## 数组降维

- 数组降维
- 对象数组降维

```js
/**
 * 1.数组降维 [1,2,3,[4,5,6]], 2
 * 2.对象数组降维 [{a:[1,2,3]},{a:[4,5,6]},{a:[7,8,9]}], 'a'
 * @param {*} arr 
 * @param {*} num 
 * @param {*} key 
 * @returns 
 */
 export function reductArr(arr=[], num=2, key='') {
    if(key) {
        let tmp = []
        arr.forEach(item => {
            item[key].forEach(value => {
                tmp.push(value)
            })
        })
        return tmp
    }
    return arr.flat(num)
}
```

## 数组操作

- 创建对象数组
- 化简对象数组
- 对象数组求和
- 单值数组求和
- 对象数组按时间排序

```js
/**
 * 创建对象数组 ['a','b','c'],'objArr','value' //key可选
 * 化简对象数组 [{name: 'kin',age: 15},{name: 'lin',age: 18},{name: 'yin',age: 14}],'mapObjArr','name'
 * 对象数组求和 [{num: 5},{num: 1},{num: 3},{num: 8},{num: 4}],'sum','num'
 * 数组求和 [1,2,3,4,7,5,8],'sum'
 * 对象数组按时间排序 [{id:1,time:'2020-10-06 12:00:11'},{id:1,time:'2020-10-06 09:00:11'},{id:1,time:'2020-10-06 13:10:16'},{id:1,time:'2020-10-06 20:20:51'}],'time','time'
 * @param {*} arr
 * @returns 
 */
export function setArr(arr, type='', key='') {
    if(type==='objArr') {
        if(key) {
            const result = arr.map(item => {
                return {[key]: item}
            })
            return result
        }else {
            const result = arr.map(item => {
                return {[item]: ''}
            })
            return result
        }
    } else if(type==='mapObjArr') {
        const result = arr.map(item => {
            return {[key]: item[key]}
        })
        return result
    } else if(type==='sum') {
        if(key) {
            return arr.map(item => item[key]).reduce((pre,next) => pre+next)
        }else {
            return arr.reduce((pre,next) => pre+next)
        }
    } else if(type==='time') {
        let tmpArr = arr
        tmpArr.sort(function(a,b){
            return a.time > b.time ? 1 : -1
        })
        return tmpArr
    }
}
```

## 数组判断

1. 判断数组内所有值是否是相同的

```js
const arr = [1, 2, 3, 4, 5, 6];
```

```js
export function allEqual(arr){
	return arr.every(val => val === arr[0]);
}
```

2. 判断数组是否是顺序迭代数组

```js
const arr = [1, 2, 3, 4];
```

```js
export function allUnique(arr){
	return arr.length === new Set(arr).size;
}
```

3. 判断对象中是否存在对应的key值

```js
const obj = { id: 10, name: 'apple' };
const keys = ['id', 'name']; //无先后顺序
```

```js
export function assertValidKeys(obj, keys){
	return Object.keys(obj).every(key => keys.includes(key));
}
```

4. 获取数组中重复值的次数

```js
const arr = [1, 1, 2, 1, 2, 3];
const val = 1;
```

```js
export function countOccurrences(arr, val){
	return arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
}
```

7. 多维数组化为一维数组

```js
const arr = [1, [2], [[3], 4], 5];
```

```js
export function deepFlatten(arr) {
	return [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)));
}
```

> 结果：[1, 2, 3, 4, 5]

9. 数值数组过滤重复的值

```
const arr = [1, 2, 2, 3, 4, 4, 4, 5];
```

```javascript
export function filterNonUnique(arr) {
    return [...new Set(arr)].filter(i => arr.indexOf(i) === arr.lastIndexOf(i));
}
```

> 结果：[1, 3, 5]

## 字符操作

1.单词首字母大写

```js
export function capitalizeEveryWord(str) {
	return str.replace(/\b[a-z]/g, char => char.toUpperCase());
}
```

2.获取字符串中重复子串的次数

```js
const str = 'tiktok tok tok tik tok tik';
const searchValue = 'tik';
```

```js
export function countSubstrings(str, searchValue) {
  let count = 0,i = 0;
  while (true) {
    const r = str.indexOf(searchValue, i);
    if (r !== -1) [count, i] = [count + 1, r + 1];
    else return count;
  }
}
```

3.单词首字母小写或全转为大写

```js
const str = 'FooBar';
const upperRest = true; //转大写
```

```js
export function decapitalize([first, ...rest], upperRest = false){
	return first.toLowerCase() +
  (upperRest ? rest.join('').toUpperCase() : rest.join(''));
}
```

## 对象操作

1.深度克隆

```js
const obj = { foo: 'bar', obj: { a: 1, b: 2 } };
```

```js
export function deepClone(obj) {
  if (obj === null) return null;
  let clone = Object.assign({}, obj);
  Object.keys(clone).forEach(
    key =>
      (clone[key] =
        typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
  );
  if (Array.isArray(obj)) {
    clone.length = obj.length;
    return Array.from(clone);
  }
  return clone;
}
```

2.除去后面相同键值的对象

```js
export function defaults(obj, ...defs) {
    Object.assign({}, obj, ...defs.reverse(), obj);
}
defaults({ a: 1 }, { b: 2 }, { b: 6 }, { a: 3 });
```

3. 判断两个对象是否相同

```javascript
let a = { a: [2, { e: 3 }], b: [4], c: 'foo' };
let b = { a: [2, { e: 3 }], b: [4], c: 'foo' };
```

```javascript
export function equals(a, b) {
  if (a === b) return true;

  if (a instanceof Date && b instanceof Date)
    return a.getTime() === b.getTime();

  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object'))
    return a === b;

  if (a.prototype !== b.prototype) return false;

  const keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;

  return keys.every(k => equals(a[k], b[k]));
}
```

4. 根据键值查找对应键名

```javascript
const ages = { Leo: 20, Zoey: 21, Jane: 20};
let val = 20;
```

```javascript
export function findKeys(obj, val) {
    return Object.keys(obj).filter(key => obj[key] === val);
}
```

> 结果：[ 'Leo', 'Jane' ]
