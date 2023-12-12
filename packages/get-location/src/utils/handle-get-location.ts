import { wxconfigInfo } from "./init-wx-config"

/**
* 微信获取位置
*/
export const handleGetLocation = (config: any) => {
	return new Promise((resolve, reject) => {
		wxconfigInfo(config)
		wx.ready(function () {
			wx.getLocation({
				type: 'wgs84', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
				success: function (res: any) {
					console.warn('微信sdk定位成功', res)
					resolve({
						lat: res.latitude, // 纬度
						lng: res.longitude, // 经度
						speed: res.speed, // 速度，以米/每秒计
						accuracy: res.accuracy // 位置精度
					})
				},
				fail: function (err: any) {
					console.error('微信sdk定位失败', err)
					reject(err)
				}
			})
		})
		wx.error(function (err: any) {
			// config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
			console.log('wxjsapi-error=', err)
			reject(`wxjsapi-error: ${err}`)
		})
	})
}
