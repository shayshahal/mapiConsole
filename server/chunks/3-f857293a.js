import { r as redirect } from './index-0087e825.js';

const actions = {
  login: async () => {
    throw redirect(307, "/admin/accounts");
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions
});

const index = 3;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-700d9a02.js')).default;
const server_id = "src/routes/+page.server.js";
const imports = ["_app/immutable/nodes/3.ee72d7a7.js","_app/immutable/chunks/scheduler.4d9ffb5c.js","_app/immutable/chunks/index.8b03849b.js","_app/immutable/chunks/Button.2a506741.js","_app/immutable/chunks/Offcanvas.svelte_svelte_type_style_lang.16b74d56.js","_app/immutable/chunks/CardBody.78fc5215.js","_app/immutable/chunks/Row.1aac05f8.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/chunks/singletons.5408e44f.js","_app/immutable/chunks/index.4d190295.js","_app/immutable/chunks/paths.bba915e0.js"];
const stylesheets = ["_app/immutable/assets/3.bb868f9b.css","_app/immutable/assets/Offcanvas.60614438.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=3-f857293a.js.map
