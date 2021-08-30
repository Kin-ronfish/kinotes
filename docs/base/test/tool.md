# 工具类演示

## 数组去重

```js
// 参数示例：[1,2,3,4,1,2,4,8]
export function a1(arr) {
    return [...new Set(arr)]
}
```

<tool :num="1"/>

## 数组过滤

```js
// 参数示例：[1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 6], true/false
export function a2(arr1, arr2, flag) {
    const result = arr1.filter((item) => {
        return flag ? !arr2.includes(item) : arr2.includes(item)
    })
    return result
}
```

<tool :num="2"/>

## 对象数组与数组间过滤

```js
// 参数示例：[{num: 1},{num: 2},{num: 6}], [1, 2, 3, 4]
export function a3(arr1, arr2, flag, key) {
    const result = arr1.filter((item) => {
        return flag ? !arr2.includes(item[key]) : arr2.includes(item[key])
    })
    return result
}
```

<tool :num="3"/>

## 对象数组根据某一键值分组

```js
`参数示例：[{groupCheckBasis: 3,groupNumber: "bb"},{groupIndex: 2,groupNumber: "bb"},
{groupCheckBasis: 3,groupNumber: "cc"},{groupIndex: 2,groupNumber: "aa"},
{groupIndex: 1,groupNumber: "aa"},{groupCheckBasis: 3,groupNumber: "cc"}],groupNumber`
export function a4(arr, key) {
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

<tool :num="4"/>

## 对象数组去重

```js
// 参数示例：[{name: 'ZYTX'},{name: 'ZYTA'},{name: 'ZYTX'}]
export function a5(arr, key) { //数组、字符串
    let obj = {}
    let newData=[]
    arr.forEach(item => {
        if (!obj[item[key]]) {
            obj[item[key]] = true
            newData.push(item)
        }
    })
    return newData
}
```

<tool :num="5"/>

## 对象数组提取单个值

```js
`参数示例：[{name: 'kin',age: 15,mess: 'qwert'},{name: 'lin',age: 18,mess: 'asdf'},{
    name: 'yin',age: 14,mess: 'qzxcbv'},{name: 'rin',age: 19,mess: 'qwert'}],name`
export function a6(arr, key) {
    const result = arr.map(item => {
        return {[key]: item[key]}
    })
    return result
}
```

<tool :num="6"/>

## 数组创建对象数组

```js
// 参数示例：['a','b','c']
export function a7(arr) {
    const result = arr.map(item => {
        return {[item]: ''}
    })
    return result
}
```

<tool :num="7"/>

## 数组降维

```js
// 参数示例：[1,2,3,[4,5,6]], 2
export function a8(arr, num) {
    return arr.flat(num)
}
```

<tool :num="8"/>

## 对象数组降维

```js
// 参数示例：[{a:[1,2,3]},{a:[4,5,6]},{a:[7,8,9]}], 'a'
export function a9(arr, key) {
    let tmp = []
    arr.forEach(item => {
        item[key].forEach(value => {
            tmp.push(value)
        })
    })
    return tmp
}
```

<tool :num="9"/>

## 对象数组过滤

```js
`参数示例：[{name:'xx',num:5},{name:'yy',num:7},{name:'ww',num:4}], 
    [{name:'aa',num:48},{name:'xx',num:62},{name:'gj',num:4},{name:'yu',num:15}]`
export function a10(arr1, arr2, key) {
    const tmp1 = arr1.map(item => item[key])
    const tmp2 = arr2.map(item => item[key])
    let result = ''
    if (tmp1.length > tmp2.length) {
        result = tmp1.filter((item, index) => {
            return {obj: arr1[index],value: tmp2.includes(item)}
        })
    } else {
        result = tmp2.filter((item, index) => {
            return {obj: arr2[index],value: tmp1.includes(item)}
        })
    }
    console.log(result)
    return result
}
```

<tool :num="10"/>

