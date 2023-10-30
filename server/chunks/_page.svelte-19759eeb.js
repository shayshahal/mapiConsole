import { c as create_ssr_component, v as validate_component, k as each, e as escape } from './ssr-bf6d5937.js';
import { B as Button } from './Button-e7c315c9.js';
import { C as Card, a as CardBody } from './CardBody-7e253aef.js';
import { M as Modal, a as ModalBody, T as Table, b as ModalFooter } from './Table-a853dfae.js';
import './Offcanvas.svelte_svelte_type_style_lang-3f285cee.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let modal = false;
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="mb-4 h4 card-title" data-svelte-h="svelte-1oropw4">Media Accounts</div>  <div class="table-responsive"><table class="table align-middle table-nowrap mb-0"><thead class="table-light" data-svelte-h="svelte-muqd75"><tr><th style="width: 20px;"><div class="form-check font-size-16 align-middle"><input class="form-check-input" type="checkbox" id="transactionCheck01"> <label class="form-check-label" for="transactionCheck01"></label></div></th> <th class="align-middle">Name</th> <th class="align-middle">Media Type</th> <th class="align-middle">Details</th> </tr></thead> <tbody>${each(data.data, (account) => {
            return `<tr><td data-svelte-h="svelte-1fxth2j"><div class="form-check font-size-16"><input class="form-check-input" type="checkbox" id="transactionCheck02"> <label class="form-check-label" for="transactionCheck02"></label> </div></td> <td>${escape(account.name)}</td> <td>${escape(account.remote_media_channel)}</td> <td><a href="${"/admin/accounts/" + escape(account.id, true) + "/"}" class="text-body fw-bold">Configuration</a></td>   </tr>`;
          })}</tbody></table></div>`;
        }
      })}`;
    }
  })} ${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      isOpen: modal,
      role: "dialog",
      autoFocus: true,
      "data-toggle": "modal",
      centered: true
    },
    {},
    {
      default: () => {
        return `<div class="modal-content border-bottom-0"><div class="modal-header"><h5 class="modal-title" data-svelte-h="svelte-6nkxh1">Order Details</h5> <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div> ${validate_component(ModalBody, "ModalBody").$$render($$result, {}, {}, {
          default: () => {
            return `<p class="mb-2" data-svelte-h="svelte-1eo4wrz">Product id: <span class="text-primary">#SK2540</span></p> <p class="mb-4">Billing Name:${escape(" ")} <span class="text-primary" data-svelte-h="svelte-ip73iq">Neal Matthews</span></p> <div class="table-responsive">${validate_component(Table, "Table").$$render($$result, { class: "table align-middle table-nowrap" }, {}, {
              default: () => {
                return `<thead data-svelte-h="svelte-1xc1dp9"><tr><th scope="col">Product</th> <th scope="col">Product Name</th> <th scope="col">Price</th></tr></thead> <tbody data-svelte-h="svelte-yq57ve"><tr><th scope="row"><div><img src="/assets/images/product/img-7.png" alt="" class="avatar-sm"></div></th> <td><div><h5 class="text-truncate font-size-14">Wireless Headphone (Black)</h5> <p class="text-muted mb-0">$ 225 x 1</p></div></td> <td>$ 255</td></tr> <tr><th scope="row"><div><img src="/assets/images/product/img-4.png" alt="" class="avatar-sm"></div></th> <td><div><h5 class="text-truncate font-size-14">Phone patterned cases</h5> <p class="text-muted mb-0">$ 145 x 1</p></div></td> <td>$ 145</td></tr> <tr><td colspan="2"><h6 class="m-0 text-right">Sub Total:</h6></td> <td>$ 400</td></tr> <tr><td colspan="2"><h6 class="m-0 text-right">Shipping:</h6></td> <td>Free</td></tr> <tr><td colspan="2"><h6 class="m-0 text-right">Total:</h6></td> <td>$ 400</td></tr></tbody>`;
              }
            })}</div>`;
          }
        })} ${validate_component(ModalFooter, "ModalFooter").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(Button, "Button").$$render($$result, { type: "button", color: "secondary" }, {}, {
              default: () => {
                return `Close`;
              }
            })}`;
          }
        })}</div>`;
      }
    }
  )}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-19759eeb.js.map
