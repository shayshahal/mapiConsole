async function load() {
  const accountsURL = "http://localhost:5000/accounts";
  const response = await fetch(accountsURL);
  const data = await response.json();
  console.log(data);
  return data;
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-19759eeb.js')).default;
const server_id = "src/routes/admin/accounts/+page.server.js";
const imports = ["_app/immutable/nodes/4.7288df39.js","_app/immutable/chunks/scheduler.4d9ffb5c.js","_app/immutable/chunks/index.8b03849b.js","_app/immutable/chunks/CardBody.78fc5215.js","_app/immutable/chunks/Offcanvas.svelte_svelte_type_style_lang.16b74d56.js","_app/immutable/chunks/Button.2a506741.js","_app/immutable/chunks/Table.6bc509cc.js"];
const stylesheets = ["_app/immutable/assets/Offcanvas.60614438.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=4-2ddd87a0.js.map
