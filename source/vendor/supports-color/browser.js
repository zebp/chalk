/* eslint-env browser */

const isBlinkBasedBrowser =
	globalThis.navigator === undefined
		? true
		: navigator.userAgentData
		? navigator.userAgentData.brands.some(({ brand }) => brand === "Chromium")
		: /\b(Chrome|Chromium)\//.test(navigator.userAgent ?? "");
const colorSupport = isBlinkBasedBrowser
	? {
			level: 1,
			hasBasic: true,
			has256: false,
			has16m: false,
	  }
	: false;

const supportsColor = {
	stdout: colorSupport,
	stderr: colorSupport,
};

export default supportsColor;
