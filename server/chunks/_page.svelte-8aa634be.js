import { c as create_ssr_component, v as validate_component, k as each, e as escape } from './ssr-bf6d5937.js';
import { A as Alert, F as FormGroup } from './FormGroup-ff8133df.js';
import { C as Card, a as CardBody } from './CardBody-7e253aef.js';
import { C as Container, R as Row, a as Col, L as Label, I as Input } from './Row-b09daa15.js';
import './Offcanvas.svelte_svelte_type_style_lang-3f285cee.js';

const css = {
  code: ".newSiteContainer.svelte-wopczy{display:flex;justify-content:end;margin-bottom:10px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let { form } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `<div>${form?.error ? `<div style="padding:10px;"> ${validate_component(Alert, "Alert").$$render(
    $$result,
    {
      color: "danger",
      role: "alert",
      dismissible: true
    },
    {},
    {
      default: () => {
        return `Data not updated`;
      }
    }
  )}</div>` : ``} ${form?.success ? `<div style="padding:10px;">${validate_component(Alert, "Alert").$$render(
    $$result,
    {
      color: "success",
      role: "alert",
      dismissible: true
    },
    {},
    {
      default: () => {
        return `Data  updated`;
      }
    }
  )}</div>` : ``} ${validate_component(Container, "Container").$$render($$result, { fluid: true }, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: "12" }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<form class="outer-repeater" method="POST" action="?/details"><div class="newSiteContainer svelte-wopczy" data-svelte-h="svelte-1cbyqs3"> <button class="btn btn-primary">Save Account Details</button></div> <div data-repeater-list="outer-group" class="outer"><div data-repeater-item class="outer">${each(Object.entries(data.details), ([key, value]) => {
                        return `${validate_component(FormGroup, "FormGroup").$$render($$result, { class: "mb-4", row: true }, {}, {
                          default: () => {
                            return `${validate_component(Label, "Label").$$render(
                              $$result,
                              {
                                for: "account",
                                class: "col-form-label col-lg-2"
                              },
                              {},
                              {
                                default: () => {
                                  return `${escape(key)} `;
                                }
                              }
                            )} ${validate_component(Col, "Col").$$render($$result, { lg: "10" }, {}, {
                              default: () => {
                                return `${validate_component(Input, "Input").$$render(
                                  $$result,
                                  {
                                    id: key,
                                    name: key,
                                    type: "text",
                                    value,
                                    class: "form-control",
                                    placeholder: "",
                                    required: true
                                  },
                                  {},
                                  {}
                                )} `;
                              }
                            })} `;
                          }
                        })}`;
                      })}</div></div></form>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })} ${validate_component(Container, "Container").$$render($$result, { fluid: true, style: "margin-top:10px;" }, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: "12" }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<form class="outer-repeater" method="POST" action="?/settings"><div class="newSiteContainer svelte-wopczy" data-svelte-h="svelte-v4c13e"> <button class="btn btn-primary">Save Account Settings</button></div> <div data-repeater-list="outer-group" class="outer"><div data-repeater-item class="outer">${each(Object.entries(data.settings), ([key, value]) => {
                        return `${validate_component(FormGroup, "FormGroup").$$render($$result, { class: "mb-4", row: true }, {}, {
                          default: () => {
                            return `${validate_component(Label, "Label").$$render(
                              $$result,
                              {
                                for: "account",
                                class: "col-form-label col-lg-4"
                              },
                              {},
                              {
                                default: () => {
                                  return `${escape(key)} `;
                                }
                              }
                            )} ${validate_component(Col, "Col").$$render($$result, { lg: "8" }, {}, {
                              default: () => {
                                return `${validate_component(Input, "Input").$$render(
                                  $$result,
                                  {
                                    id: key,
                                    name: key,
                                    type: "text",
                                    value,
                                    class: "form-control",
                                    placeholder: "",
                                    required: true
                                  },
                                  {},
                                  {}
                                )} `;
                              }
                            })} `;
                          }
                        })}`;
                      })}</div></div></form>`;
                    }
                  })}`;
                }
              })}`;
            }
          })}`;
        }
      })}`;
    }
  })}</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-8aa634be.js.map
