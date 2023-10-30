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
  )}</div>` : ``}</div> <div>${validate_component(Container, "Container").$$render($$result, { fluid: true, style: "margin-top:10px;" }, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { lg: "12" }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
                default: () => {
                  return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
                    default: () => {
                      return `<form class="outer-repeater" method="POST" action="?/mapig"><div class="newSiteContainer svelte-wopczy" data-svelte-h="svelte-cn7bsd"><button class="btn btn-primary">Save Mapig Server Settings</button></div> <div data-repeater-list="outer-group" class="outer"><div data-repeater-item class="outer">${each(data.mapig_settings, (mapig) => {
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
                                  return `${escape(mapig.name)} `;
                                }
                              }
                            )} ${validate_component(Col, "Col").$$render($$result, { lg: "8" }, {}, {
                              default: () => {
                                return `${validate_component(Input, "Input").$$render(
                                  $$result,
                                  {
                                    id: mapig.name,
                                    name: mapig.name,
                                    type: "text",
                                    value: mapig.value,
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
                      return `<form class="outer-repeater" method="POST" action="?/mapi"><div class="newSiteContainer svelte-wopczy" data-svelte-h="svelte-164on0e"><button class="btn btn-primary">Save Mapi Server Settings</button></div> <div data-repeater-list="outer-group" class="outer"><div data-repeater-item class="outer">${each(data.mapi_settings, (mapi) => {
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
                                  return `${escape(mapi.name)} `;
                                }
                              }
                            )} ${validate_component(Col, "Col").$$render($$result, { lg: "8" }, {}, {
                              default: () => {
                                return `${validate_component(Input, "Input").$$render(
                                  $$result,
                                  {
                                    id: mapi.name,
                                    name: mapi.name,
                                    type: "text",
                                    value: mapi.value,
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
                      return `<form class="outer-repeater" method="POST" action="?/mapi_exe"><div class="newSiteContainer svelte-wopczy" data-svelte-h="svelte-aj05w6"><button class="btn btn-primary">Save Mapi Exe Server Settings</button></div> <div data-repeater-list="outer-group" class="outer"><div data-repeater-item class="outer">${each(data.mapi_exe_settings, (mapi_exe) => {
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
                                  return `${escape(mapi_exe.name)} `;
                                }
                              }
                            )} ${validate_component(Col, "Col").$$render($$result, { lg: "8" }, {}, {
                              default: () => {
                                return `${validate_component(Input, "Input").$$render(
                                  $$result,
                                  {
                                    id: mapi_exe.name,
                                    name: mapi_exe.name,
                                    type: "text",
                                    value: mapi_exe.value,
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
//# sourceMappingURL=_page.svelte-537cde6c.js.map
