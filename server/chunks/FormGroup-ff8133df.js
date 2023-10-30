import { c as create_ssr_component, d as compute_rest_props, f as spread, h as escape_object, i as escape_attribute_value, e as escape, b as add_attribute, p as compute_slots } from './ssr-bf6d5937.js';
import { c as classnames } from './Offcanvas.svelte_svelte_type_style_lang-3f285cee.js';

const Alert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let showClose;
  let classes;
  let closeClassNames;
  let $$restProps = compute_rest_props($$props, [
    "class",
    "children",
    "color",
    "closeClassName",
    "closeAriaLabel",
    "dismissible",
    "heading",
    "isOpen",
    "toggle",
    "fade",
    "transition"
  ]);
  let $$slots = compute_slots(slots);
  let { class: className = "" } = $$props;
  let { children = void 0 } = $$props;
  let { color = "success" } = $$props;
  let { closeClassName = "" } = $$props;
  let { closeAriaLabel = "Close" } = $$props;
  let { dismissible = false } = $$props;
  let { heading = void 0 } = $$props;
  let { isOpen = true } = $$props;
  let { toggle = void 0 } = $$props;
  let { fade = true } = $$props;
  let { transition = { duration: fade ? 400 : 0 } } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.children === void 0 && $$bindings.children && children !== void 0)
    $$bindings.children(children);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.closeClassName === void 0 && $$bindings.closeClassName && closeClassName !== void 0)
    $$bindings.closeClassName(closeClassName);
  if ($$props.closeAriaLabel === void 0 && $$bindings.closeAriaLabel && closeAriaLabel !== void 0)
    $$bindings.closeAriaLabel(closeAriaLabel);
  if ($$props.dismissible === void 0 && $$bindings.dismissible && dismissible !== void 0)
    $$bindings.dismissible(dismissible);
  if ($$props.heading === void 0 && $$bindings.heading && heading !== void 0)
    $$bindings.heading(heading);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  if ($$props.fade === void 0 && $$bindings.fade && fade !== void 0)
    $$bindings.fade(fade);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0)
    $$bindings.transition(transition);
  showClose = dismissible || toggle;
  classes = classnames(className, "alert", `alert-${color}`, { "alert-dismissible": showClose });
  closeClassNames = classnames("btn-close", closeClassName);
  return `${isOpen ? `<div${spread(
    [
      escape_object($$restProps),
      { class: escape_attribute_value(classes) },
      { role: "alert" }
    ],
    {}
  )}>${heading || $$slots.heading ? `<h4 class="alert-heading">${escape(heading)}${slots.heading ? slots.heading({}) : ``}</h4>` : ``} ${showClose ? `<button type="button"${add_attribute("class", closeClassNames, 0)}${add_attribute("aria-label", closeAriaLabel, 0)}></button>` : ``} ${children ? `${escape(children)}` : `${slots.default ? slots.default({}) : ``}`}</div>` : ``}`;
});
const FormGroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "check", "disabled", "floating", "inline", "label", "row", "tag"]);
  let $$slots = compute_slots(slots);
  let { class: className = "" } = $$props;
  let { check = false } = $$props;
  let { disabled = false } = $$props;
  let { floating = false } = $$props;
  let { inline = false } = $$props;
  let { label = "" } = $$props;
  let { row = false } = $$props;
  let { tag = null } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.check === void 0 && $$bindings.check && check !== void 0)
    $$bindings.check(check);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.floating === void 0 && $$bindings.floating && floating !== void 0)
    $$bindings.floating(floating);
  if ($$props.inline === void 0 && $$bindings.inline && inline !== void 0)
    $$bindings.inline(inline);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.row === void 0 && $$bindings.row && row !== void 0)
    $$bindings.row(row);
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  classes = classnames(className, "mb-3", {
    row,
    "form-check": check,
    "form-check-inline": check && inline,
    "form-floating": floating,
    disabled: check && disabled
  });
  return `${tag === "fieldset" ? `<fieldset${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``} ${label || $$slots.label ? ` <label>${escape(label)} ${slots.label ? slots.label({}) : ``}</label>` : ``}</fieldset>` : `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``} ${label || $$slots.label ? ` <label>${escape(label)} ${slots.label ? slots.label({}) : ``}</label>` : ``}</div>`}`;
});

export { Alert as A, FormGroup as F };
//# sourceMappingURL=FormGroup-ff8133df.js.map
