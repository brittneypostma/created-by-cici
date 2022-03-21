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
  P: () => PageHead
});
module.exports = __toCommonJS(stdin_exports);
var import_index_973ab5b7 = require("./index-973ab5b7.js");
const siteTitle = "Created by Cici";
const PageHead = (0, import_index_973ab5b7.c)(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { description = "Created by Cici - Find the handcrafted creations you\u2019ll love. From Cricut designs and patterns, to custom art, there is something for everyone." } = $$props;
  let { ogImage = null } = $$props;
  let { siteUrl = null } = $$props;
  const formattedTitle = title ? `${title} \xB7 ${siteTitle}` : siteTitle;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.ogImage === void 0 && $$bindings.ogImage && ogImage !== void 0)
    $$bindings.ogImage(ogImage);
  if ($$props.siteUrl === void 0 && $$bindings.siteUrl && siteUrl !== void 0)
    $$bindings.siteUrl(siteUrl);
  return `${$$result.head += `${$$result.title = `<title>${(0, import_index_973ab5b7.e)(formattedTitle)}</title>`, ""}<meta name="${"description"}"${(0, import_index_973ab5b7.a)("content", description, 0)} data-svelte="svelte-1x9cgzu"><meta itemprop="${"name"}"${(0, import_index_973ab5b7.a)("content", title, 0)} data-svelte="svelte-1x9cgzu"><meta itemprop="${"description"}"${(0, import_index_973ab5b7.a)("content", description, 0)} data-svelte="svelte-1x9cgzu"><meta itemprop="${"image"}"${(0, import_index_973ab5b7.a)("content", ogImage || "/og.png", 0)} data-svelte="svelte-1x9cgzu"><meta property="${"og:url"}"${(0, import_index_973ab5b7.a)("content", siteUrl, 0)} data-svelte="svelte-1x9cgzu"><meta property="${"og:type"}" content="${"website"}" data-svelte="svelte-1x9cgzu"><meta property="${"og:title"}"${(0, import_index_973ab5b7.a)("content", title, 0)} data-svelte="svelte-1x9cgzu"><meta property="${"og:description"}"${(0, import_index_973ab5b7.a)("content", description, 0)} data-svelte="svelte-1x9cgzu"><meta property="${"og:image"}"${(0, import_index_973ab5b7.a)("content", ogImage || "/og.png", 0)} data-svelte="svelte-1x9cgzu"><meta name="${"twitter:card"}" content="${"summary_large_image"}" data-svelte="svelte-1x9cgzu"><meta name="${"twitter:title"}"${(0, import_index_973ab5b7.a)("content", title, 0)} data-svelte="svelte-1x9cgzu"><meta name="${"twitter:description"}"${(0, import_index_973ab5b7.a)("content", description, 0)} data-svelte="svelte-1x9cgzu"><meta name="${"twitter:image"}"${(0, import_index_973ab5b7.a)("content", ogImage || "/og.png", 0)} data-svelte="svelte-1x9cgzu">`, ""}`;
});
