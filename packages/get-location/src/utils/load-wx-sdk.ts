/**
 * 微信sdk异步加载
 * @param {*} src
 * @param {*} callback api接口
 */
export const handlerLoadScript = (callback: any) => {
	const src = `https://res.wx.qq.com/open/js/jweixin-1.4.0.js`
	if (!(typeof callback === 'function')) {
		callback = function () { }
	}
	var check = document.querySelectorAll(`script[src="${src}"]`)
	if (check.length > 0) {
		check[0].addEventListener('load', function () {
			callback()
		})
		callback()
		return
	}
	var script = document.createElement('script')
	var head = document.getElementsByTagName('head')[0]
	script.type = 'text/javascript'
	script.charset = 'UTF-8'
	script.src = src
	if (script.addEventListener) {
		script.addEventListener(
			'load',
			function () {
				callback()
			},
			false
		)
	} else if ((script as any).attachEvent) {
		(script as any).attachEvent('onreadystatechange', function () {
			const target = (window as any).event.srcElement
			if (target.readyState === 'loaded') {
				callback()
			}
		})
	}
	head.appendChild(script)
}
