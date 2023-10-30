import { c as create_ssr_component, v as validate_component, k as each, e as escape } from './ssr-bf6d5937.js';
import { B as Button } from './Button-e7c315c9.js';
import { C as Card, a as CardBody } from './CardBody-7e253aef.js';
import { M as Modal, a as ModalBody, T as Table, b as ModalFooter } from './Table-a853dfae.js';
import './Offcanvas.svelte_svelte_type_style_lang-3f285cee.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let modal = false;
  const accounts = [
    {
      "id": 1,
      "date": "28/09/2023",
      "description": "Sit labore irure ut adipisicing eu adipisicing"
    },
    {
      "id": 2,
      "date": "28/09/2023",
      "description": "Officia excepteur eiusmod et Lorem mollit tempor. Culpa consequat officia reprehenderit laboris in minim sit aliquip sunt in mollit commodo voluptate Lorem. Excepteur culpa ipsum tempor pariatur in in dolore irure. Minim reprehenderit ad commodo ipsum ex id labore laborum incididunt consequat. Eiusmod in aliqua quis Lorem anim laborum aliqua excepteur proident. Qui exercitation consequat ea laborum ad. Do cupidatat ea elit mollit."
    },
    {
      "id": 3,
      "date": "28/09/2023",
      "description": "Cillum adipisicing id incididunt nostrud pariatur pariatur commodo dolore ut elit dolor ea adipisicing."
    }
  ];
  return `${validate_component(Card, "Card").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(CardBody, "CardBody").$$render($$result, {}, {}, {
        default: () => {
          return `<div class="mb-4 h4 card-title" data-svelte-h="svelte-1qbbhv8">Audits</div>  <div class="table-responsive"><table class="table align-middle table-nowrap mb-0"><thead class="table-light" data-svelte-h="svelte-13zjjp4"><tr><th style="width: 20px;"><div class="form-check font-size-16 align-middle"><input class="form-check-input" type="checkbox" id="transactionCheck01"> <label class="form-check-label" for="transactionCheck01"></label></div></th> <th class="align-middle">Date</th> <th class="align-middle">Description</th> <th class="align-middle">Details</th> </tr></thead> <tbody>${each(accounts, (account) => {
            return `<tr><td data-svelte-h="svelte-1fxth2j"><div class="form-check font-size-16"><input class="form-check-input" type="checkbox" id="transactionCheck02"> <label class="form-check-label" for="transactionCheck02"></label> </div></td> <td>${escape(account.date)}</td> <td>${escape(account.description)}</td> <td><a href="${"admin/accounts/" + escape(account.id, true) + "/"}" class="text-body fw-bold">Details</a></td>   </tr>`;
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
//# sourceMappingURL=_page.svelte-8c600536.js.map
