/**
 * 当数组不为空时执行函数逻辑
 * @param data 源数组
 * @param callback 执行的回调函数
 */
export const doSthWithListWhenNotEmpty = <DataType>(data: DataType, callback: (data: DataType) => void) => {
	if (!data) {
		return
	}
	callback(data)
}
