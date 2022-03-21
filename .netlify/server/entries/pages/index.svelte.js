var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Routes,
  load: () => load
});
module.exports = __toCommonJS(stdin_exports);
var import_index_973ab5b7 = require("../../chunks/index-973ab5b7.js");
var import_PageHead_488cda33 = require("../../chunks/PageHead-488cda33.js");
async function load({ fetch }) {
  const imageFiles = await { "../../static/images/4th-of-july/4th-gnome-pillow.png": () => Promise.resolve().then(() => __toESM(require("../../chunks/4th-gnome-pillow-f87972ff.js"))), "../../static/images/4th-of-july/4th-ice-cream.png": () => Promise.resolve().then(() => __toESM(require("../../chunks/4th-ice-cream-74311f9e.js"))), "../../static/images/4th-of-july/let_s-celebrate-gnome.png": () => Promise.resolve().then(() => __toESM(require("../../chunks/let_s-celebrate-gnome-09af2982.js"))), "../../static/images/college/alabama-crimson-tide-inset.png": () => Promise.resolve().then(() => __toESM(require("../../chunks/alabama-crimson-tide-inset-45bc3473.js"))), "../../static/images/college/auburn-offset.png": () => Promise.resolve().then(() => __toESM(require("../../chunks/auburn-offset-60f61027.js"))), "../../static/images/easter/bunny-girl-1.png": () => Promise.resolve().then(() => __toESM(require("../../chunks/bunny-girl-1-8880879e.js"))), "../../static/images/easter/bunny-unicorn.png": () => Promise.resolve().then(() => __toESM(require("../../chunks/bunny-unicorn-12c8d624.js"))), "../../static/images/easter/cute-chick.png": () => Promise.resolve().then(() => __toESM(require("../../chunks/cute-chick-d9939172.js"))), "../../static/images/easter/easter-chick.png": () => Promise.resolve().then(() => __toESM(require("../../chunks/easter-chick-a3aa124f.js"))), "../../static/images/easter/eggstra-handsome.png": () => Promise.resolve().then(() => __toESM(require("../../chunks/eggstra-handsome-9b263bf5.js"))), "../../static/images/easter/follw-the-bunny.png": () => Promise.resolve().then(() => __toESM(require("../../chunks/follw-the-bunny-e9cfa52f.js"))), "../../static/images/easter/here-for-the-chicks.png": () => Promise.resolve().then(() => __toESM(require("../../chunks/here-for-the-chicks-16acf455.js"))), "../../static/images/easter/honey-bunny.png": () => Promise.resolve().then(() => __toESM(require("../../chunks/honey-bunny-52320fc6.js"))), "../../static/images/easter/lets-hunt-dino.png": () => Promise.resolve().then(() => __toESM(require("../../chunks/lets-hunt-dino-7a0fe4b1.js"))), "../../static/images/easter/little-miss-cotton-tail.png": () => Promise.resolve().then(() => __toESM(require("../../chunks/little-miss-cotton-tail-d8d05953.js"))), "../../static/images/easter/little-mister-cotton-tail.png": () => Promise.resolve().then(() => __toESM(require("../../chunks/little-mister-cotton-tail-5c9ce66b.js"))), "../../static/images/easter/love-egg.png": () => Promise.resolve().then(() => __toESM(require("../../chunks/love-egg-848cfeb0.js"))), "../../static/images/easter/no-bunny-cuter.png": () => Promise.resolve().then(() => __toESM(require("../../chunks/no-bunny-cuter-a0e50082.js"))), "../../static/images/easter/peeps-sake.png": () => Promise.resolve().then(() => __toESM(require("../../chunks/peeps-sake-3d825dcd.js"))), "../../static/images/easter/shake-your-bunny-tail.png": () => Promise.resolve().then(() => __toESM(require("../../chunks/shake-your-bunny-tail-15284d83.js"))), "../../static/images/easter/some-bunny-2.png": () => Promise.resolve().then(() => __toESM(require("../../chunks/some-bunny-2-d1de98c2.js"))), "../../static/images/easter/some-bunny.png": () => Promise.resolve().then(() => __toESM(require("../../chunks/some-bunny-ee3ec8ac.js"))) };
  const imageDataPromises = Object.keys(imageFiles).map((path) => imageFiles[path]());
  const imageData = await Promise.all(imageDataPromises);
  const imageDataArray = imageData.map((element) => element.default);
  return { props: { images: imageDataArray } };
}
const name = /.*\//;
const Routes = (0, import_index_973ab5b7.c)(($$result, $$props, $$bindings, slots) => {
  let { images } = $$props;
  if ($$props.images === void 0 && $$bindings.images && images !== void 0)
    $$bindings.images(images);
  return `${(0, import_index_973ab5b7.v)(import_PageHead_488cda33.P, "PageHead").$$render($$result, { title: "Home" }, {}, {})}

<section class="${"grid lg:block lg:masonry-3-col gap-8"}">${(0, import_index_973ab5b7.b)(images.reverse(), (img) => {
    return `<img${(0, import_index_973ab5b7.a)("src", img, 0)}${(0, import_index_973ab5b7.a)("alt", img.replace(name, "").split(".").slice(0, -1).join("."), 0)} class="${"rounded-lg bg-cover mb-4"}">`;
  })}</section>`;
});
