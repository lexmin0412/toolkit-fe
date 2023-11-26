# @tookit-fe/data

常用的数据处理函数集合。

## API

### `joinStrings()`

使用分隔符拼接字符串。

```js
import { joinStrings } from '@toolkit-fe/data';

const result = joinStrings(['prefix', 'content', 'suffix'])
console.log(result)  // 'prefix-content-suffix'

const customDividerresult = joinStrings(['2023', '11', '27'], '/')
console.log(customDividerresult)  // '2023/11/27'
```

### `doSthWithListWhenNotEmpty`

在数据非空时执行逻辑。

```js
import { doSthWithListWhenNotEmpty } from '@toolkit-fe/data';

const list = []
const list1 = ['item']
doSthWithListWhenNotEmpty(list, ()=>{
	list.push('item')
})
doSthWithListWhenNotEmpty(list1, ()=>{
	list1.push('item')
})
console.log(list) // []
console.log(list1) // ['item', 'item']
```
