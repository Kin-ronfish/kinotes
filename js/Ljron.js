export default class Kintool {
    constructor() {
        this.patt = ""
        this.obj = {}
        this.data = []
        this.temp = {}
        this.tree = {}
        this.tmpList = []
        this.flag = true
    }

    /**
     * 在确定范围生成随机数
     * @param {*} m 开始
     * @param {*} n 结束
     * @returns 
     */
    randomNum(m, n) {
        return Math.floor(Math.random() * (n - m + 1) + m);
    }

    /**
     * 字符串验证
     * @param {*} str 待测字符串
     * @param {*} type phone手机号，email邮箱，idCard身份证
     * @returns 
     */
    regStr(str, type) {
        switch (type) {
            case 'phone':
                this.patt = /^[1][3,4,5,6,7,8,9][0-9]{9}$/
                break;
            case 'email':
                this.patt = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
                break;
            case 'idCard':
                this.patt = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
                break;
        }
        const pattern = new RegExp(this.patt)
        return pattern.test(str);
    }

    /**
     * 深度克隆
     * @param {*} obj 对象
     * @returns 
     */
    copy(obj) {
        return JSON.parse(JSON.stringify(obj));
    }

    /**
     * 数组去重
     * 1. 数值数组[1,2,3,4,2,6,5]
     * 2. 对象数组[{value:1},{value:2},{value:1},{value:'xx'}], 'value'
     * @param {*} arr 数组
     * @param {*} key 对象数组键名
     * @returns 
     */
    setArr(arr = [], key = '') {
        if (key) {
            arr.forEach(item => {
                if (!this.obj[item[key]]) {
                    this.obj[item[key]] = true
                    this.data.push(item)
                }
            })
            return this.data
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
    filterArr(arr = [], val, key = '') {
        if (!key && typeof val === 'number') { // 1
            return arr.filter(item => item != val)
        }
        if (!key && val instanceof Array) { // 2
            return arr.filter(item => !val.includes(item))
        }
        if (key && typeof val === 'number') { // 3
            return arr.filter(item => item[key] != val)
        }
        if (key && val instanceof Array && typeof val[0] === 'number') { // 4
            return arr.filter(item => !val.includes(item[key]))
        }
        if (key && val instanceof Array && val[0] instanceof Object) { // 5
            let tmpArr = val.map(item => item[key])
            return arr.filter(item => !tmpArr.includes(item[key]))
        }
    }

    /**
     * 数组转树形结构
     * @param {*} array 主要数组
     * @param {*} id 子节点id
     * @param {*} parent_id 父节点id
     * @param {*} name 根节点键名
     * @returns 
     */
    buildTree(array, id, parent_id, name) {
        for (let i in array) {// 先遍历数组，将数组的每一项添加到temp对象中
            this.temp[array[i][id]] = array[i];
        }
        for (let i in this.temp) {// 遍历temp对象，将当前子节点与父节点建立连接
            // 判断是否是根节点下的项
            if (this.temp[i][parent_id] !== name) {
                if (!this.temp[this.temp[i][parent_id]].children) {
                    this.temp[this.temp[i][parent_id]].children = new Array();
                }
                this.temp[this.temp[i][parent_id]].children.push(this.temp[i]);
            } else {
                this.tree[this.temp[i][id]] = this.temp[i];
            }
        }
        return this.tree;
    }

    /**
     * 1.键值分组[{name:'a',val:2},{name:'c',val:5},{name:'a',val:6},{name:'b',val:1},{name:'c',val:4},{name:'b',val:7}], 'name'
     * @param {*} arr 
     * @param {*} key 
     * @returns 
     */
    groupKey(arr, key) {
        arr.forEach(item => {
            if (!this.obj[item[key]]) {
                this.obj[item[key]] = []
            }
            this.obj[item[key]].push(item)
        })
        return this.obj
    }

    /**
     * 创建对象数组 ['a','b','c'],'objArr','value' //key可选
     * 化简对象数组 [{name: 'kin',age: 15},{name: 'lin',age: 18},{name: 'yin',age: 14}],'mapObjArr','name'
     * 对象数组求和 [{num: 5},{num: 1},{num: 3},{num: 8},{num: 4}],'sum','num'
     * 数组求和 [1,2,3,4,7,5,8],'sum'
     * 对象数组按时间排序 [{id:1,time:'2020-10-06 12:00:11'},{id:1,time:'2020-10-06 09:00:11'},{id:1,time:'2020-10-06 13:10:16'},{id:1,time:'2020-10-06 20:20:51'}],'time','time'
     * @param {*} arr
     * @returns 
     */
    setArr(arr, type = '', key = '') {
        if (type === 'objArr') {
            if (key) {
                const result = arr.map(item => {
                    return { [key]: item }
                })
                return result
            } else {
                const result = arr.map(item => {
                    return { [item]: '' }
                })
                return result
            }
        } else if (type === 'mapObjArr') {
            const result = arr.map(item => {
                return { [key]: item[key] }
            })
            return result
        } else if (type === 'sum') {
            if (key) {
                return arr.map(item => item[key]).reduce((pre, next) => pre + next)
            } else {
                return arr.reduce((pre, next) => pre + next)
            }
        } else if (type === 'time') {
            let tmpArr = arr
            tmpArr.sort(function (a, b) {
                return a.time > b.time ? 1 : -1
            })
            return tmpArr
        }
    }

    /**
     * 1.更改键名{value: 2, name: 'xx'}, 'value', 'num'
     * @param {*} obj 
     * @param {*} oldKey 
     * @param {*} newKey 
     * @returns 
     */
    changeKey(obj = {}, oldKey = '', newKey = '') {
        obj[newKey] = obj[oldKey]
        delete obj[oldKey]
        return obj
    }
}

export class Kindom {
    constructor() { }

    /**
     * 文本复制
     * @param {*} str 待复制的值
     */
    copyText(str) {
        const inputTest = document.createElement('input') //创建一个输入框
        inputTest.value = str //绑定一个待复制的值
        document.body.appendChild(inputTest) //添加节点
        inputTest.select()
        document.execCommand('Copy') //设置复制指令
        inputTest.className = 'oInput' //添加类名
        inputTest.style.display = 'none' //销毁属性
    }

    /**
     * 锚点定位
     * @param {*} id 标签id
     */
    position(id) {
        let height = document.getElementById(`${id}`).offsetTop //滚动条高度
        window.scrollTo({
            top: height,
            behavior: "smooth"
        })
    }
}