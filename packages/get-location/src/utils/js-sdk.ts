import { handleGetLocation } from "./handle-get-location"

/**
 * 唤起微信api
 * @param {*} _href 当前页面url
 * @param {*} options 分享信息
 * @param {*} apiType 调用api类型
 */
export const handleWXSDKCall = (_href: string, apiType: string) => {
	return new Promise((resolve, reject) => {
		// 通过后台接口获取配置信息
		WeChatServivce.sign(_href)
			.then((res: any) => {
				if (res) {
					if (apiType === 'location') {
						handleGetLocation(res).then((res) => {
							resolve(res)
						}).catch(err => {
							reject(err)
						})
					}
				}
			})
			.catch((err: any) => {
				reject(`err-sign: ${err}`)
				console.error(err.data.code + err.data.msg)
			})
	})
}
