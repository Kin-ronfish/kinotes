# lodash

> [lodash官方文档](https://www.lodashjs.com/) 数据操作函数整合库

## 安装方法

```shell
npm i lodash --save
```

## 基本用法

- isEmpty 如果 `value` 为空，那么返回 `true`，否则返回 `false`

```javascript
_.isEmpty([1, 2, 3]) // false
_.isEmpty([]) // true
```

- isObject 如果 `value` 为一个对象，那么返回 `true`，否则返回 `false`

```javascript
_.isObject({}) // true
_.isObject(null) // false
```

- isString  如果 `value` 为一个字符串，那么返回 `true`，否则返回 `false`

```javascript
_.isString('abc') // true
_.isString(1) // false
```

- isArray 如果`value`是一个数组返回 `true`，否则返回 `false`

```javascript
_.isArray([1, 2, 3]) // true
_.isArray('abc') // false
```

- cloneDeep 深拷贝

```javascript
_.cloneDeep(objects) // 拷贝一个指针与原值不同的值
```

## 常用方法

## 数组

compact: 去掉数组中的假值[false, null,0, "", undefined, NaN]

```js
_.compact([0, 1, false, 2, '', 3]);// => [1, 2, 3]
```

concat: 数组拼接

```js
var array = [1];
_.concat(array, 2, [3], [[4]]);// => [1, 2, 3, [4]]
```

difference: 排除数组中的指定值

```js
_.difference([3, 2, 1], [4, 2]);// => [3, 1]
```

drop: 去除数组前n个元素

```js
_.drop([1, 2, 3], 2);// => [3]
```

dropRight: 去除数组后n个元素

```js
_.dropRight([1, 2, 3], 2);// => [1]
```

findIndex: 获取元素的索引值

```js
_.findIndex(users, ['active', false]);// => 0
```

flattenDeep: 将多为数组转为一维数组

```js
_.flattenDeep([1, [2, [3, [4]], 5]]);// => [1, 2, 3, 4, 5]
```

pull: 删除数组指定值(改变原数组)

```js
_.pull([1, 2, 3, 1, 2, 3], 2, 3);// => [1, 1]
```

pullAllBy: 删除数组指定值(改变原数组)

```js
_.pullAllBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }], [{ 'x': 1 }, { 'x': 3 }], 'x');// => [{ 'x': 2 }]
```

sortedUniq: 数组去重(已排序)

```js
_.sortedUniq([1, 1, 2]);// => [1, 2]
```

uniq: 数组去重

```js
_.uniq([2, 1, 2]);// => [2, 1]
```

uniqBy: 数组去重(Array|Function|Object|string)

```js
_.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');// => [{ 'x': 1 }, { 'x': 2 }]
```

without: 数组过滤指定数值

```js
_.without([2, 1, 2, 3], 1, 2);// => [3]
```

xor: 两个数组过滤

```js
_.xor([2, 1], [2, 3]);// => [1, 3]
```

xorBy: 两个数组去重(Array|Function|Object|string)

```js
_.xorBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x');// => [{ 'x': 2 }]
```

## 集合

keyBy: 根据key值创建一个聚合对象

```js
_.keyBy([{ 'dir': 'left', 'code': 97 },{ 'dir': 'right', 'code': 100 }], 'dir');// => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
```

size: 获取集合的长度(Array|Object)

```js
_.size([1, 2, 3]);// => 3
```

## 语言

cloneDeep: 深拷贝

```js
_.cloneDeep([{ 'a': 1 }, { 'b': 2 }]);
```

eq: 判断两个值是否相同

```js
_.eq('a', 'a');// => true
_.eq('a', Object('a'));// => false
```

isArray: 判断是否是数组

```js
_.isArray([1, 2, 3]);// => true
```

isBoolean: 判断是否为布尔类型

```js
_.isBoolean(false);// => true
```

isEmpty: 判断是否为空

```js
_.isEmpty(null);// => true
_.isEmpty([1, 2, 3]);// => false
```

isNaN: 判断是否为NaN

```js
_.isNaN(NaN);// => true
```

isNil: 判断是否为null或undefined

```js
_.isNil(null);// => true
```

isNumber: 判断是否为数值型

```js
_.isNumber(3);// => true
```

isString: 判断是否为字符串

```js
_.isString('abc');// => true
```
