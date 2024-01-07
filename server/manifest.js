const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","fonts/boxicons.eot","fonts/boxicons.svg","fonts/boxicons.ttf","fonts/boxicons.woff","fonts/boxicons.woff2","fonts/dripicons-v2.eot","fonts/dripicons-v2.svg","fonts/dripicons-v2.ttf","fonts/dripicons-v2.woff","fonts/fa-brands-400.eot","fonts/fa-brands-400.svg","fonts/fa-brands-400.ttf","fonts/fa-brands-400.woff","fonts/fa-brands-400.woff2","fonts/fa-regular-400.eot","fonts/fa-regular-400.svg","fonts/fa-regular-400.ttf","fonts/fa-regular-400.woff","fonts/fa-regular-400.woff2","fonts/fa-solid-900.eot","fonts/fa-solid-900.svg","fonts/fa-solid-900.ttf","fonts/fa-solid-900.woff","fonts/fa-solid-900.woff2","fonts/materialdesignicons-webfont.eot","fonts/materialdesignicons-webfont.ttf","fonts/materialdesignicons-webfont.woff","fonts/materialdesignicons-webfont.woff2","fonts/summernote.eot","fonts/summernote.ttf","fonts/summernote.woff","Isracard_2023_Logo.svg","Isracard_2023_Logo_2.svg","logo-dark.png","logo-light.png","logo-light.svg","logo.svg","negative-logo.svg","profile-img.png"]),
	mimeTypes: {".png":"image/png",".eot":"application/vnd.ms-fontobject",".svg":"image/svg+xml",".ttf":"font/ttf",".woff":"font/woff",".woff2":"font/woff2"},
	_: {
		client: {"start":"_app/immutable/entry/start.ae904eec.js","app":"_app/immutable/entry/app.72e62ec1.js","imports":["_app/immutable/entry/start.ae904eec.js","_app/immutable/chunks/scheduler.4d9ffb5c.js","_app/immutable/chunks/singletons.5408e44f.js","_app/immutable/chunks/index.4d190295.js","_app/immutable/chunks/paths.bba915e0.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.72e62ec1.js","_app/immutable/chunks/scheduler.4d9ffb5c.js","_app/immutable/chunks/index.8b03849b.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./chunks/0-03eeeb78.js')),
			__memo(() => import('./chunks/1-e23af630.js')),
			__memo(() => import('./chunks/2-6688a5fa.js')),
			__memo(() => import('./chunks/3-f857293a.js')),
			__memo(() => import('./chunks/4-2ddd87a0.js')),
			__memo(() => import('./chunks/5-46646d3d.js')),
			__memo(() => import('./chunks/6-15d0d22e.js')),
			__memo(() => import('./chunks/7-e628886d.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/admin/accounts",
				pattern: /^\/admin\/accounts\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/admin/accounts/[id]",
				pattern: /^\/admin\/accounts\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/admin/accounts/[id]/details",
				pattern: /^\/admin\/accounts\/([^/]+?)\/details\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('./chunks/_server-09106154.js'))
			},
			{
				id: "/admin/reports",
				pattern: /^\/admin\/reports\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/admin/system",
				pattern: /^\/admin\/system\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
