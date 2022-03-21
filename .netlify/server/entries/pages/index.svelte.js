var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_830c3daa = require("../../chunks/index-830c3daa.js");
const siteTitle = "Created by Cici";
const PageHead = (0, import_index_830c3daa.c)(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { description } = $$props;
  let { ogImage } = $$props;
  let { siteUrl } = $$props;
  const formattedTitle = title ? `${title} \xB7 ${siteTitle}` : siteTitle;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.ogImage === void 0 && $$bindings.ogImage && ogImage !== void 0)
    $$bindings.ogImage(ogImage);
  if ($$props.siteUrl === void 0 && $$bindings.siteUrl && siteUrl !== void 0)
    $$bindings.siteUrl(siteUrl);
  return `${$$result.head += `${$$result.title = `<title>${(0, import_index_830c3daa.e)(formattedTitle)}</title>`, ""}<meta name="${"description"}"${(0, import_index_830c3daa.a)("content", description, 0)} data-svelte="svelte-r8pqhg"><meta itemprop="${"name"}"${(0, import_index_830c3daa.a)("content", title, 0)} data-svelte="svelte-r8pqhg"><meta itemprop="${"description"}"${(0, import_index_830c3daa.a)("content", description, 0)} data-svelte="svelte-r8pqhg"><meta itemprop="${"image"}"${(0, import_index_830c3daa.a)("content", ogImage, 0)} data-svelte="svelte-r8pqhg"><meta property="${"og:url"}"${(0, import_index_830c3daa.a)("content", siteUrl, 0)} data-svelte="svelte-r8pqhg"><meta property="${"og:type"}" content="${"website"}" data-svelte="svelte-r8pqhg"><meta property="${"og:title"}"${(0, import_index_830c3daa.a)("content", title, 0)} data-svelte="svelte-r8pqhg"><meta property="${"og:description"}"${(0, import_index_830c3daa.a)("content", description, 0)} data-svelte="svelte-r8pqhg"><meta property="${"og:image"}"${(0, import_index_830c3daa.a)("content", ogImage, 0)} data-svelte="svelte-r8pqhg"><meta name="${"twitter:card"}" content="${"summary_large_image"}" data-svelte="svelte-r8pqhg"><meta name="${"twitter:title"}"${(0, import_index_830c3daa.a)("content", title, 0)} data-svelte="svelte-r8pqhg"><meta name="${"twitter:description"}"${(0, import_index_830c3daa.a)("content", description, 0)} data-svelte="svelte-r8pqhg"><meta name="${"twitter:image"}"${(0, import_index_830c3daa.a)("content", ogImage, 0)} data-svelte="svelte-r8pqhg">`, ""}`;
});
const Routes = (0, import_index_830c3daa.c)(($$result, $$props, $$bindings, slots) => {
  return `${(0, import_index_830c3daa.v)(PageHead, "PageHead").$$render($$result, {
    title: "Home",
    description: "Created by Cici - Find the handcrafted creations you\u2019ll love. From Cricut designs and patterns, to custom art, there is something for everyone."
  }, {}, {})}`;
});
