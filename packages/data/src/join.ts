/**
 * 字符串拼接
 * @param stringList 需要拼接的字符串数组
 * @param divider 分隔符 默认 "-"
 */
export const joinStrings = (stringList: string[], divider: string = '-') => {
	const notEmptyStrings = stringList.filter(item => item)
	let result = ''
	notEmptyStrings.forEach((item, index) => {
		result = `${result}${index === 0 ? item : `${divider}${item}`}`
	})
	return result
}
