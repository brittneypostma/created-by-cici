const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-256x256.png","apple-touch-icon.png","browserconfig.xml","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","icons/bag.png","icons/bag.svg","icons/clothing.png","icons/college.png","icons/creations.png","icons/cups.png","icons/cuts.png","icons/heart.svg","icons/home.svg","icons/profile.svg","icons/search.svg","images/4th-of-july/4th-gnome-pillow.png","images/4th-of-july/4th-ice-cream.png","images/4th-of-july/let_s-celebrate-gnome.png","images/college/alabama-crimson-tide-inset.png","images/college/auburn-offset.png","images/easter/bunny-girl-1.png","images/easter/bunny-unicorn.png","images/easter/cute-chick.png","images/easter/easter-chick.png","images/easter/eggstra-handsome.png","images/easter/follw-the-bunny.png","images/easter/here-for-the-chicks.png","images/easter/honey-bunny.png","images/easter/lets-hunt-dino.png","images/easter/little-miss-cotton-tail.png","images/easter/little-mister-cotton-tail.png","images/easter/love-egg.png","images/easter/no-bunny-cuter.png","images/easter/peeps-sake.png","images/easter/shake-your-bunny-tail.png","images/easter/some-bunny-2.png","images/easter/some-bunny.png","mstile-150x150.png","safari-pinned-tab.svg","site.webmanifest"]),
	mimeTypes: {".png":"image/png",".xml":"application/xml",".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".webmanifest":"application/manifest+json"},
	_: {
		entry: {"file":"start-3aa835ea.js","js":["start-3aa835ea.js","chunks/vendor-3e01af02.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
