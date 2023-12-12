/**
 * 注入权限验证配置
 * @param {object} 微信 js-sdk 权限验证配置
 */
export const wxconfigInfo = (config: any) => {
	wx.config({
		debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
		appId: config.appId,
		timestamp: parseInt(config.timestamp),
		nonceStr: config.nonceStr,
		signature: config.signature,
		jsApiList: [   // 需要使用的 jsapi 列表
			'getLocation'  // 获取地理位置
		]
	})
}
