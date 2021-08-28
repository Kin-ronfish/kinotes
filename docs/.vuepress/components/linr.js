// 数组去重
export function a1(arr) {
    return [...new Set(arr)]
}
// 数组过滤
export function a2(arr1, arr2, flag) {
    const result = arr1.filter((item) => {
        return flag ? !arr2.includes(item) : arr2.includes(item)
    })
    return result
}
//对象数组与数组间过滤
export function a3(arr1, arr2, flag, key) {
    const result = arr1.filter((item) => {
        return flag ? !arr2.includes(item[key]) : arr2.includes(item[key])
    })
    return result
}
// 对象数组根据某一键值分组
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
// 对象数组提取单个值
export function a6(arr, key) {
    const result = arr.map(item => {
        return {[key]: item[key]}
    })
    return result
}
// 数组创建对象数组
export function a7(arr) {
    const result = arr.map(item => {
        return {[item]: ''}
    })
    return result
}