import { c as create_ssr_component, d as compute_rest_props, f as spread, h as escape_object, i as escape_attribute_value, l as createEventDispatcher, o as onDestroy, v as validate_component, m as missing_component, k as each, s as setContext, b as add_attribute } from './ssr-bf6d5937.js';
import { c as classnames, u as uuid } from './Offcanvas.svelte_svelte_type_style_lang-3f285cee.js';

const InlineContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div>${slots.default ? slots.default({}) : ``}</div>`;
});
const ModalBackdrop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "isOpen", "fade"]);
  let { class: className = "" } = $$props;
  let { isOpen = false } = $$props;
  let { fade = true } = $$props;
  let loaded = false;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.fade === void 0 && $$bindings.fade && fade !== void 0)
    $$bindings.fade(fade);
  classes = classnames(className, "modal-backdrop");
  return `${isOpen && loaded ? `<div${spread(
    [
      { role: "presentation" },
      escape_object($$restProps),
      { class: escape_attribute_value(classes) }
    ],
    { classes: fade ? "fade" : "" }
  )}></div>` : ``}`;
});
const ModalBody = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  classes = classnames(className, "modal-body");
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Portal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  let ref;
  let portal;
  onDestroy(() => {
    if (typeof document !== "undefined") {
      document.body.removeChild(portal);
    }
  });
  return `<div${spread([escape_object($$restProps)], {})}${add_attribute("this", ref, 0)}>${slots.default ? slots.default({}) : ``}</div>`;
});
const css = {
  code: ".modal-open{overflow:hidden;padding-right:0}",
  map: null
};
const dialogBaseClass = "modal-dialog";
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let outer;
  compute_rest_props($$props, [
    "class",
    "static",
    "isOpen",
    "autoFocus",
    "body",
    "centered",
    "container",
    "fullscreen",
    "header",
    "scrollable",
    "size",
    "toggle",
    "labelledBy",
    "backdrop",
    "wrapClassName",
    "modalClassName",
    "contentClassName",
    "fade",
    "unmountOnClose",
    "returnFocusAfterClose"
  ]);
  createEventDispatcher();
  let { class: className = "" } = $$props;
  let { static: staticModal = false } = $$props;
  let { isOpen = false } = $$props;
  let { autoFocus = true } = $$props;
  let { body = false } = $$props;
  let { centered = false } = $$props;
  let { container = void 0 } = $$props;
  let { fullscreen = false } = $$props;
  let { header = void 0 } = $$props;
  let { scrollable = false } = $$props;
  let { size = "" } = $$props;
  let { toggle = void 0 } = $$props;
  let { labelledBy = header ? `modal-${uuid()}` : void 0 } = $$props;
  let { backdrop = true } = $$props;
  let { wrapClassName = "" } = $$props;
  let { modalClassName = "" } = $$props;
  let { contentClassName = "" } = $$props;
  let { fade = true } = $$props;
  let { unmountOnClose = true } = $$props;
  let { returnFocusAfterClose = true } = $$props;
  onDestroy(() => {
  });
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.static === void 0 && $$bindings.static && staticModal !== void 0)
    $$bindings.static(staticModal);
  if ($$props.isOpen === void 0 && $$bindings.isOpen && isOpen !== void 0)
    $$bindings.isOpen(isOpen);
  if ($$props.autoFocus === void 0 && $$bindings.autoFocus && autoFocus !== void 0)
    $$bindings.autoFocus(autoFocus);
  if ($$props.body === void 0 && $$bindings.body && body !== void 0)
    $$bindings.body(body);
  if ($$props.centered === void 0 && $$bindings.centered && centered !== void 0)
    $$bindings.centered(centered);
  if ($$props.container === void 0 && $$bindings.container && container !== void 0)
    $$bindings.container(container);
  if ($$props.fullscreen === void 0 && $$bindings.fullscreen && fullscreen !== void 0)
    $$bindings.fullscreen(fullscreen);
  if ($$props.header === void 0 && $$bindings.header && header !== void 0)
    $$bindings.header(header);
  if ($$props.scrollable === void 0 && $$bindings.scrollable && scrollable !== void 0)
    $$bindings.scrollable(scrollable);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.toggle === void 0 && $$bindings.toggle && toggle !== void 0)
    $$bindings.toggle(toggle);
  if ($$props.labelledBy === void 0 && $$bindings.labelledBy && labelledBy !== void 0)
    $$bindings.labelledBy(labelledBy);
  if ($$props.backdrop === void 0 && $$bindings.backdrop && backdrop !== void 0)
    $$bindings.backdrop(backdrop);
  if ($$props.wrapClassName === void 0 && $$bindings.wrapClassName && wrapClassName !== void 0)
    $$bindings.wrapClassName(wrapClassName);
  if ($$props.modalClassName === void 0 && $$bindings.modalClassName && modalClassName !== void 0)
    $$bindings.modalClassName(modalClassName);
  if ($$props.contentClassName === void 0 && $$bindings.contentClassName && contentClassName !== void 0)
    $$bindings.contentClassName(contentClassName);
  if ($$props.fade === void 0 && $$bindings.fade && fade !== void 0)
    $$bindings.fade(fade);
  if ($$props.unmountOnClose === void 0 && $$bindings.unmountOnClose && unmountOnClose !== void 0)
    $$bindings.unmountOnClose(unmountOnClose);
  if ($$props.returnFocusAfterClose === void 0 && $$bindings.returnFocusAfterClose && returnFocusAfterClose !== void 0)
    $$bindings.returnFocusAfterClose(returnFocusAfterClose);
  $$result.css.add(css);
  classnames(dialogBaseClass, className, {
    [`modal-${size}`]: size,
    "modal-fullscreen": fullscreen === true,
    [`modal-fullscreen-${fullscreen}-down`]: fullscreen && typeof fullscreen === "string",
    [`${dialogBaseClass}-centered`]: centered,
    [`${dialogBaseClass}-scrollable`]: scrollable
  });
  outer = container === "inline" || staticModal ? InlineContainer : Portal;
  return `${``} ${backdrop && !staticModal ? `${validate_component(outer || missing_component, "svelte:component").$$render($$result, {}, {}, {
    default: () => {
      return `${validate_component(ModalBackdrop, "ModalBackdrop").$$render($$result, { fade, isOpen }, {}, {})}`;
    }
  })}` : ``}`;
});
const ModalFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = "" } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  classes = classnames(className, "modal-footer");
  return `<div${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${slots.default ? slots.default({}) : ``}</div>`;
});
const Colgroup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  setContext("colgroup", true);
  return `<colgroup>${slots.default ? slots.default({}) : ``}</colgroup>`;
});
const ResponsiveContainer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let responsiveClassName;
  let { class: className = "" } = $$props;
  let { responsive = false } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.responsive === void 0 && $$bindings.responsive && responsive !== void 0)
    $$bindings.responsive(responsive);
  responsiveClassName = classnames(className, {
    "table-responsive": responsive === true,
    [`table-responsive-${responsive}`]: typeof responsive === "string"
  });
  return `${responsive ? `<div${add_attribute("class", responsiveClassName, 0)}>${slots.default ? slots.default({}) : ``}</div>` : `${slots.default ? slots.default({}) : ``}`}`;
});
const TableFooter = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  setContext("footer", true);
  return `<tfoot${spread([escape_object($$restProps)], {})}><tr>${slots.default ? slots.default({}) : ``}</tr></tfoot>`;
});
const TableHeader = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, []);
  setContext("header", true);
  return `<thead${spread([escape_object($$restProps)], {})}><tr>${slots.default ? slots.default({}) : ``}</tr></thead>`;
});
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let classes;
  let $$restProps = compute_rest_props($$props, ["class", "size", "bordered", "borderless", "striped", "hover", "responsive", "rows"]);
  let { class: className = "" } = $$props;
  let { size = "" } = $$props;
  let { bordered = false } = $$props;
  let { borderless = false } = $$props;
  let { striped = false } = $$props;
  let { hover = false } = $$props;
  let { responsive = false } = $$props;
  let { rows = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.bordered === void 0 && $$bindings.bordered && bordered !== void 0)
    $$bindings.bordered(bordered);
  if ($$props.borderless === void 0 && $$bindings.borderless && borderless !== void 0)
    $$bindings.borderless(borderless);
  if ($$props.striped === void 0 && $$bindings.striped && striped !== void 0)
    $$bindings.striped(striped);
  if ($$props.hover === void 0 && $$bindings.hover && hover !== void 0)
    $$bindings.hover(hover);
  if ($$props.responsive === void 0 && $$bindings.responsive && responsive !== void 0)
    $$bindings.responsive(responsive);
  if ($$props.rows === void 0 && $$bindings.rows && rows !== void 0)
    $$bindings.rows(rows);
  classes = classnames(className, "table", size ? "table-" + size : false, bordered ? "table-bordered" : false, borderless ? "table-borderless" : false, striped ? "table-striped" : false, hover ? "table-hover" : false);
  return `${validate_component(ResponsiveContainer, "ResponsiveContainer").$$render($$result, { responsive }, {}, {
    default: () => {
      return `<table${spread([escape_object($$restProps), { class: escape_attribute_value(classes) }], {})}>${rows ? `${validate_component(Colgroup, "Colgroup").$$render($$result, {}, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })} ${validate_component(TableHeader, "TableHeader").$$render($$result, {}, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })} <tbody>${each(rows, (row) => {
        return `<tr>${slots.default ? slots.default({ row }) : ``} </tr>`;
      })}</tbody> ${validate_component(TableFooter, "TableFooter").$$render($$result, {}, {}, {
        default: () => {
          return `${slots.default ? slots.default({}) : ``}`;
        }
      })}` : `${slots.default ? slots.default({}) : ``}`}</table>`;
    }
  })}`;
});

export { Modal as M, Table as T, ModalBody as a, ModalFooter as b };
//# sourceMappingURL=Table-a853dfae.js.map
