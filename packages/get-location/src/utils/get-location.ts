// getLocation.js
import { getUserAgent, UA } from './get-user-agent'
import { handlerLoadScript } from './load-wx-sdk'
import { handleWXSDKCall } from './js-sdk'
import tMap from './t-map'

/**
 * 对外暴露的获取位置方法
 * @return Promise resolve一个 positionData 对象 lat-纬度 lng-经度
 */
const getLocation = () => {
	return new Promise((resolve, reject) => {
		console.log('进入全局获取用户位置方法')
		const storageData = JSON.parse(localStorage.getItem('positionData')||'{}')
		const userAgent = getUserAgent()
		if (storageData) {
			resolve(storageData)
		} else {
			// 根据环境判断 如果在微信内使用微信sdk 其他使用腾讯地图定位组件
			if (userAgent === UA.WECHAT) {
				handlerLoadScript(() => {
					handleWXSDKCall(window.location.href, 'location').then((res) => {
						localStorage.setItem('positionData', JSON.stringify(res))
						resolve(res)
					}).catch(err => {
						reject(err)
					})
				})
			} else {
				tMap.getLocation().then(res => {
					localStorage.setItem('positionData', JSON.stringify(res))
					resolve(res)
				}).catch((err) => {
					reject(err)
				})
			}
		}
	})
}

export default getLocation
