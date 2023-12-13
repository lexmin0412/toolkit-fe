/**
 * 判断当前是否是移动设备
 */
export const isMobile = (): boolean => {
	const sUserAgent = window.navigator.userAgent.toLowerCase();
	const isMobile = /ipad|iphone|midp|rv:1.2.3.4|ucweb|android|windows ce|windows mobile/.test(sUserAgent);
	return isMobile;
};
