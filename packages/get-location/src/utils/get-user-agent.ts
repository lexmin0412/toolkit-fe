/**
 * UA枚举
 */
export const UA = {
	/**
	 * 微信h5
	 */
	WECHAT: 'WECHAT',
	/**
	 * 支付宝h5
	 */
	ALIPAY: 'ALIPAY',
	/**
	 * 其他
	 */
	OTHERS: 'OTHERS'
}


/**
 * 判断客户端运行环境 这里只判断微信和浏览器h5
 */
export const getUserAgent = () => {
	var userAgent = navigator.userAgent.toLowerCase()

	if ((userAgent as any).match(/Alipay/i) == 'alipay') {
		return UA.ALIPAY
	} else if ((userAgent as any).match(/MicroMessenger/i) == 'micromessenger') {
		return UA.WECHAT
	} else {
		return UA.OTHERS
	}
}
