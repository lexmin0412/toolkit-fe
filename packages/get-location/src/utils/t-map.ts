// tMap.js
const qq = (window as any).qq
let geolocation: any = null
if (qq && qq.maps) {
	// 初始化定位组件
	geolocation = new qq.maps.Geolocation(
		'QVLBZ-YUULR-OUMW7-WKXFD-4SUWS-UDBIA',
		'mymap'
	)
}

class TMap {
	// 获取定位计数器 用于定位失败时累计次数 超过3次后不再继续，抛出定位失败错误
	getPositionCount = 0

	// 对外暴露的获取位置接口
	getLocation() {
		return new Promise((resolve, reject) => {
			// 定位成功回调
			this.getTMapLocation(resolve, reject)
		})
	}

	// 调用腾讯地图获取位置
	getTMapLocation(success: any, fail: any) {
		const _self = this

		// 定位成功回调
		const showPosition = (position: any) => {
			localStorage.setItem('positionData', JSON.stringify(position))
			success(position)
		}

		// 定位失败回调
		const showErr = () => {
      // 如果获取定位失败超过3次 抛出错误 否则继续获取定位信息
      if (this.getPositionCount > 3) {
			fail('超过3次 获取定位失败')
		} else {
			// 定位失败递归
			_self.getPositionCount = _self.getPositionCount + 1
			_self.getTMapLocation(success, fail)
		}
		}

		// 调用腾讯web定位组件获取位置信息
		if (geolocation) {
			geolocation.getIpLocation(showPosition, showErr, {
				timeout: 6000,  // 定位超时时长 单位ms
				failTipFlag: true
			})
		}
	}
}

export default new TMap()
