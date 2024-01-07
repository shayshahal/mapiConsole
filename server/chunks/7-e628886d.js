import { f as fail } from './index-0087e825.js';

async function load({ params }) {
  const settingsURL = `http://localhost:5000/settings/`;
  const settingsRespone = await fetch(settingsURL);
  const settingsData = await settingsRespone.json();
  console.log(settingsData);
  let mapig_settings = [];
  let mapi_settings = [];
  let mapi_exe_settings = [];
  settingsData.data.forEach((setting) => {
    if (!setting.ad_account_id) {
      if (setting.system == "mapig")
        mapig_settings.push(setting);
      if (setting.system == "mapi")
        mapi_settings.push(setting);
      if (setting.system == "mapiexe")
        mapi_exe_settings.push(setting);
    }
  });
  const data = {
    mapig_settings,
    mapi_settings,
    mapi_exe_settings
  };
  return data;
}
const actions = {
  mapig: async ({ request }) => {
    const data = await request.formData();
    let accountSettingsObject = Object.fromEntries(data);
    let changes_list = [];
    for (const key in accountSettingsObject) {
      const settingsObject2 = {
        name: key,
        value: accountSettingsObject[key]
      };
      changes_list.push(settingsObject2);
    }
    const settingsObject = [{
      "system": "mapig",
      "account_changes_list": [
        {
          "account_name": null,
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
  },
  mapi: async ({ request }) => {
    const data = await request.formData();
    let accountSettingsObject = Object.fromEntries(data);
    let changes_list = [];
    for (const key in accountSettingsObject) {
      const settingsObject2 = {
        name: key,
        value: accountSettingsObject[key]
      };
      changes_list.push(settingsObject2);
    }
    const settingsObject = [{
      "system": "mapi",
      "account_changes_list": [
        {
          "account_name": null,
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
  },
  mapi_exe: async ({ request }) => {
    const data = await request.formData();
    let accountSettingsObject = Object.fromEntries(data);
    let changes_list = [];
    for (const key in accountSettingsObject) {
      const settingsObject2 = {
        name: key,
        value: accountSettingsObject[key]
      };
      changes_list.push(settingsObject2);
    }
    const settingsObject = [{
      "system": "mapiexe",
      "account_changes_list": [
        {
          "account_name": null,
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

const index = 7;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-537cde6c.js')).default;
const server_id = "src/routes/admin/system/+page.server.js";
const imports = ["_app/immutable/nodes/7.859ed89c.js","_app/immutable/chunks/scheduler.4d9ffb5c.js","_app/immutable/chunks/index.8b03849b.js","_app/immutable/chunks/CardBody.78fc5215.js","_app/immutable/chunks/Offcanvas.svelte_svelte_type_style_lang.16b74d56.js","_app/immutable/chunks/FormGroup.ba302457.js","_app/immutable/chunks/Row.1aac05f8.js","_app/immutable/chunks/paths.bba915e0.js"];
const stylesheets = ["_app/immutable/assets/5.f8de4f45.css","_app/immutable/assets/Offcanvas.60614438.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=7-e628886d.js.map
