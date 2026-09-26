//#region node_modules/.nitro/vite/services/ssr/assets/_tanstack-start-manifest_v-B0JlLaFf.js
var tsrStartManifest = () => ({ routes: {
	__root__: {
		filePath: "/workspace/src/routes/__root.tsx",
		children: [
			"/",
			"/admin",
			"/login",
			"/api/auth/$"
		],
		preloads: [
			"/assets/index-BVss35np.js",
			"/assets/react-DB-4Zxce.js",
			"/assets/preload-helper-Djs1uDr2.js",
			"/assets/site-CPfCnue3.js"
		],
		scripts: [{ attrs: {
			type: "module",
			async: !0,
			src: "/assets/index-BVss35np.js"
		} }]
	},
	"/": {
		filePath: "/workspace/src/routes/index.tsx",
		children: void 0,
		preloads: ["/assets/routes-C9D2U4IY.js", "/assets/ui-DE7hiGE_.js"]
	},
	"/admin": {
		filePath: "/workspace/src/routes/admin.tsx",
		children: ["/admin/$leadId"],
		preloads: ["/assets/admin-BqkKQBj8.js", "/assets/ui-DE7hiGE_.js"]
	},
	"/login": {
		filePath: "/workspace/src/routes/login.tsx",
		children: void 0,
		preloads: ["/assets/login-DDO6wrLZ.js", "/assets/client-bLCk0icn.js"]
	},
	"/admin/$leadId": {
		filePath: "/workspace/src/routes/admin.$leadId.tsx",
		children: void 0,
		preloads: ["/assets/admin._leadId-BZiz5_Gs.js"]
	}
} });
//#endregion
export { tsrStartManifest };
