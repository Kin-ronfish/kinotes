/**
 * 数组去重
 * 1. 数值数组[1,2,3,4,2,6,5]
 * 2. 对象数组[{value:1},{value:2},{value:1},{value:'xx'}]
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
/**
 * 创建对象数组 ['a','b','c'],'objArr','value' //key可选
 * 化简对象数组 [{name: 'kin',age: 15},{name: 'lin',age: 18},{name: 'yin',age: 14}],'mapObjArr','name'
 * 对象数组求和 [{num: 5},{num: 1},{num: 3},{num: 8},{num: 4}],'sum','num'
 * 数组求和 [1,2,3,4,7,5,8],'sum'
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
    }
}