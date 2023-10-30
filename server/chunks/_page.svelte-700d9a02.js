import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-bf6d5937.js';
import { B as Button } from './Button-e7c315c9.js';
import { C as Card, a as CardBody } from './CardBody-7e253aef.js';
import { C as Container, R as Row, a as Col, L as Label, I as Input } from './Row-b09daa15.js';
import './Offcanvas.svelte_svelte_type_style_lang-3f285cee.js';

const css = {
  code: ".text-white.svelte-1dudqdx{color:white}.alert-padding.svelte-1dudqdx{margin-top:10px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  $$result.css.add(css);
  return `<div class="home-btn d-none d-sm-block" data-svelte-h="svelte-sqax56"><a href="/" class="text-white svelte-1dudqdx"><i class="bx bx-home h2"></i></a></div> <div class="account-pages my-5 pt-sm-5">${validate_component(Container, "Container").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(Row, "Row").$$render($$result, { class: "justify-content-center" }, {}, {
        default: () => {
          return `${validate_component(Col, "Col").$$render($$result, { md: 8, lg: 6, xl: 5 }, {}, {
            default: () => {
              return `${validate_component(Card, "Card").$$render($$result, { class: "overflow-hidden" }, {}, {
                default: () => {
                  return `<div class="bg-primary bg-soft">${validate_component(Row, "Row").$$render($$result, {}, {}, {
                    default: () => {
                      return `${validate_component(Col, "Col").$$render($$result, { class: "col-7" }, {}, {
                        default: () => {
                          return `<div class="text-white p-4 svelte-1dudqdx" data-svelte-h="svelte-2yg66b"><h5 class="text-white svelte-1dudqdx">Welcome !</h5> <p>Sign in to continue to the Connectors Admin.</p></div>`;
                        }
                      })} ${validate_component(Col, "Col").$$render($$result, { class: "col-5 align-self-end" }, {}, {
                        default: () => {
                          return `<img src="profile-img.png" alt="" class="img-fluid">`;
                        }
                      })}`;
                    }
                  })}</div> ${validate_component(CardBody, "CardBody").$$render($$result, { class: "pt-0" }, {}, {
                    default: () => {
                      return `<div class="auth-logo" data-svelte-h="svelte-xn6xyj"><a href="/" class="auth-logo-light"><div class="avatar-md profile-user-wid mb-4"><span class="avatar-title rounded-circle bg-light"><img src="logo-light.svg" alt="" class="rounded-circle" height="34"></span></div></a> <a href="/" class="auth-logo-dark"><div class="avatar-md profile-user-wid mb-4"><span class="avatar-title rounded-circle bg-light"><img src="logo.svg" alt="" class="rounded-circle" height="34"></span></div></a></div> <div class="p-2"><div class="form-horizontal"><form method="post" action="?/login"><div class="mb-3">${validate_component(Label, "Label").$$render($$result, { for: "email", class: "form-label" }, {}, {
                        default: () => {
                          return `Email`;
                        }
                      })} ${validate_component(Input, "Input").$$render(
                        $$result,
                        {
                          type: "text",
                          class: "form-control",
                          id: "email",
                          name: "email",
                          placeholder: "Enter username",
                          required: true
                        },
                        {},
                        {}
                      )}</div> <div class="mb-3">${validate_component(Label, "Label").$$render($$result, { class: "form-label", for: "password" }, {}, {
                        default: () => {
                          return `Password`;
                        }
                      })} <div class="input-group auth-pass-inputgroup">${validate_component(Input, "Input").$$render(
                        $$result,
                        {
                          type: "password",
                          class: "form-control",
                          id: "password",
                          name: "password",
                          placeholder: "Enter password",
                          "aria-label": "Password",
                          "aria-describedby": "password-addon",
                          required: true
                        },
                        {},
                        {}
                      )} ${validate_component(Button, "Button").$$render(
                        $$result,
                        {
                          color: "light",
                          type: "button",
                          id: "password-addon"
                        },
                        {},
                        {
                          default: () => {
                            return `<i class="mdi mdi-eye-outline"></i>`;
                          }
                        }
                      )}</div></div> <div class="mt-3 d-grid" data-svelte-h="svelte-1yzr4vs"><button class="btn btn-primary w-md waves-effect waves-light" type="submit">Log In</button></div></form> ${form?.error ? `<div class="alert alert-danger alert-padding svelte-1dudqdx" role="alert">${escape(form?.message ?? "Form error")}</div>` : ``}</div></div>`;
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
//# sourceMappingURL=_page.svelte-700d9a02.js.map
