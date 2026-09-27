import { a as getServerFnById, i as TSS_SERVER_FUNCTION, r as createServerFn } from "./ssr.mjs";
import { t as authMiddleware } from "./middleware-VxqyScf7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/lead-actions-DoP-RJIz.js
var createSsrRpc = (functionId) => {
	const url = "/_serverFn/" + functionId;
	const serverFnMeta = { id: functionId };
	const fn = async (...args) => {
		return (await getServerFnById(functionId, { origin: "server" }))(...args);
	};
	return Object.assign(fn, {
		url,
		serverFnMeta,
		[TSS_SERVER_FUNCTION]: true
	});
};
var submitInquiry = createServerFn({ method: "POST" }).validator((data) => data).handler(createSsrRpc("7f6eda556f79c4f47d233f2dcd55c73adecd230ca3a70d59bdbc552ff1135a59"));
var getAdminContext = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(createSsrRpc("04f54142ca6aa009b484a47536ec0019d0242ef824c45a0cdadf625f682a117b"));
var claimAdmin = createServerFn({ method: "POST" }).middleware([authMiddleware]).handler(createSsrRpc("4c9b262da236364ce2799c572c8c1554a6851721e1f164348da7d4e4e6fbe1d7"));
var listLeads = createServerFn({ method: "GET" }).middleware([authMiddleware]).validator((input) => input ?? {}).handler(createSsrRpc("d1b205ff79b83ebb83618a84674d7af22a265eef2a1945f0896bf3aa39e019fe"));
var getLead = createServerFn({ method: "GET" }).middleware([authMiddleware]).validator((id) => id).handler(createSsrRpc("397bf9b2c77d2e9070521dce7c0fe1c651aaf83d6166e317e45d4683940adcee"));
var updateLeadStatus = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((input) => input).handler(createSsrRpc("fd3065a022f97a2d3cf1b61f28151e8aba379eed5bae5d4649e2921e2ecd094e"));
var deleteLead = createServerFn({ method: "POST" }).middleware([authMiddleware]).validator((id) => id).handler(createSsrRpc("8609a5036cdcf900f81e6979a1b452a3642fe1c42ed5b9cf3d3800c4b1e63ac6"));
//#endregion
export { listLeads as a, getLead as i, deleteLead as n, submitInquiry as o, getAdminContext as r, updateLeadStatus as s, claimAdmin as t };
