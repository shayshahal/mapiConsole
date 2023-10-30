import { f as fail } from './index-0087e825.js';

async function load({ params }) {
  const accountsURL = `http://localhost:5000/accounts/${params.id}`;
  console.log(accountsURL);
  const response = await fetch(accountsURL);
  console.log(response);
  const data = await response.json();
  console.log(JSON.stringify(data));
  const accountSettingsURL = `http://localhost:5000/settings/${params.id}`;
  const settingsRespone = await fetch(accountSettingsURL);
  const settingsData = await settingsRespone.json();
  console.log(settingsData);
  return {
    details: data,
    settings: settingsData
  };
}
const actions = {
  details: async ({ request }) => {
    const data = await request.formData();
    let accountDeailsObject = Object.fromEntries(data);
    let accountID = accountDeailsObject.id;
    delete accountDeailsObject.id;
    delete accountDeailsObject.client_id;
    console.log("accountDeailsObject", accountDeailsObject);
    const accountURL = `http://localhost:5000/accounts/${accountID}`;
    console.log("accountURL", accountURL);
    const response = await fetch(accountURL, {
      method: "PATCH",
      credentials: "include",
      body: JSON.stringify(accountDeailsObject),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });
    console.log("response.status", response.status);
    if (response.status != 200)
      return fail(400, { error: true });
    return { success: true };
  },
  settings: async ({ request }) => {
    const data = await request.formData();
    let accountSettingsObject = Object.fromEntries(data);
    let access_token_found = false;
    let account_remote_id = "";
    let changes_list = [];
    for (const key in accountSettingsObject) {
      let accessTokenIndex = key.indexOf("_ACCESS_TOKEN");
      if (accessTokenIndex > 0) {
        access_token_found = true;
        account_remote_id = key.substring(0, accessTokenIndex);
        console.log(account_remote_id);
      }
      const settingsObject2 = {
        name: key,
        value: accountSettingsObject[key]
      };
      changes_list.push(settingsObject2);
    }
    if (!access_token_found)
      return fail(400, { error: true });
    const settingsObject = [{
      "system": "mapig",
      "account_changes_list": [
        {
          "account_name": account_remote_id,
          "changes_list": changes_list
        }
      ]
    }];
    const settingsURL = "http://localhost:5000/settings/update";
    console.log("settingsURL", settingsURL);
    const response = await fetch(settingsURL, {
      method: "PATCH",
      credentials: "include",
      body: JSON.stringify(settingsObject),
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    });
    console.log("response.status", response.status);
    if (response.status != 200)
      return fail(400, { error: true });
    return { success: true };
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-8aa634be.js')).default;
const server_id = "src/routes/admin/accounts/[id]/+page.server.js";
const imports = ["_app/immutable/nodes/5.f2b951fc.js","_app/immutable/chunks/scheduler.4d9ffb5c.js","_app/immutable/chunks/index.8b03849b.js","_app/immutable/chunks/CardBody.78fc5215.js","_app/immutable/chunks/Offcanvas.svelte_svelte_type_style_lang.16b74d56.js","_app/immutable/chunks/FormGroup.ba302457.js","_app/immutable/chunks/Row.1aac05f8.js"];
const stylesheets = ["_app/immutable/assets/5.f8de4f45.css","_app/immutable/assets/Offcanvas.60614438.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-46646d3d.js.map
