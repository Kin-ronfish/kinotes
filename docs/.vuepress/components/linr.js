// 数组去重
// [1,2,3,4,1,2,4,8]
export function a1(arr) {
    return [...new Set(arr)]
}
// 数组过滤
//[1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 6], true/false
export function a2(arr1, arr2, flag) {
    const result = arr1.filter((item) => {
        return flag ? !arr2.includes(item) : arr2.includes(item)
    })
    return result
}
//对象数组与数组间过滤
// [{num: 1},{num: 2},{num: 6}], [1, 2, 3, 4]
export function a3(arr1, arr2, flag, key) {
    const result = arr1.filter((item) => {
        return flag ? !arr2.includes(item[key]) : arr2.includes(item[key])
    })
    return result
}
// 对象数组根据某一键值分组
`[{groupCheckBasis: 3,groupNumber: "bb"},{groupIndex: 2,groupNumber: "bb"},
{groupCheckBasis: 3,groupNumber: "cc"},{groupIndex: 2,groupNumber: "aa"},
{groupIndex: 1,groupNumber: "aa"},{groupCheckBasis: 3,groupNumber: "cc"}]`
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
// 对象数组去重
// [{name: 'ZYTX'},{name: 'ZYTA'},{name: 'ZYTX'}]
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
// 对象数组过滤
`[{name: 'kin',age: 15,mess: 'qwert'},{name: 'lin',age: 18,mess: 'asdf'},{
    name: 'yin',age: 14,mess: 'qzxcbv'},{name: 'rin',age: 19,mess: 'qwert'}]`
export function a6(arr, key) {
    const result = arr.map(item => {
        return {[key]: item[key]}
    })
    return result
}
// 数组创建对象数组
// ['a','b','c']
export function a7(arr) {
    const result = arr.map(item => {
        return {[item]: ''}
    })
    return result
}
// 数组降维
// [1,2,3,[4,5,6]], 2
export function a8(arr, num) {
    return arr.flat(num)
}
// 对象数组降维
// [{a:[1,2,3]},{a:[4,5,6]},{a:[7,8,9]}], 'a'
export function a9(arr, key) {
    let tmp = []
    arr.forEach(item => {
        item[key].forEach(value => {
            tmp.push(value)
        })
    })
    return tmp
}
// 对象数组过滤
`[{name:'xx',num:5},{name:'yy',num:7},{name:'ww',num:4}], 
    [{name:'aa',num:48},{name:'xx',num:62},{name:'gj',num:4},{name:'yu',num:15}]`
export function a10(arr1, arr2, key) {
    const tmp1 = arr1.map(item => item[key])
    const tmp2 = arr2.map(item => item[key])
    let result = ''
    let obj = {}
    if (tmp1.length > tmp2.length) {
        result = tmp1.filter((item, index) => {
            if(tmp2.includes(item)) {
                obj = arr1[index]
                return true
            } else {
                return false
            }
        })
    } else {
        result = tmp2.filter((item, index) => {
            if(tmp1.includes(item)) {
                obj = arr2[index]
                return true
            } else {
                return false
            }
        })
    }
    return {obj: obj, value: result[0]}
}