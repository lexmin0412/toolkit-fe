/**
 * 发起请求
 * @param url 接口 URl
 * @param options 自定义选项
 */
export const request = (url: string, options: RequestInit) => {
	return fetch(
		url,
		options
	).then(res => {
		return res.json()
	}).then((res) => {
		return res
	})
}

export default request
