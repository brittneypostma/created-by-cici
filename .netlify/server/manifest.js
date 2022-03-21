var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
module.exports = __toCommonJS(stdin_exports);
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["android-chrome-192x192.png", "android-chrome-256x256.png", "apple-touch-icon.png", "browserconfig.xml", "favicon-16x16.png", "favicon-32x32.png", "favicon.ico", "favicon.png", "icons/bag.png", "icons/bag.svg", "icons/clothing.png", "icons/college.png", "icons/creations.png", "icons/cups.png", "icons/cuts.png", "icons/heart.svg", "icons/home.svg", "icons/profile.svg", "icons/search.svg", "images/4th-of-july/4th-gnome-pillow.png", "images/4th-of-july/4th-ice-cream.png", "images/4th-of-july/let_s-celebrate-gnome.png", "images/college/alabama-crimson-tide-inset.png", "images/college/auburn-offset.png", "images/easter/bunny-girl-1.png", "images/easter/bunny-unicorn.png", "images/easter/cute-chick.png", "images/easter/easter-chick.png", "images/easter/eggstra-handsome.png", "images/easter/follw-the-bunny.png", "images/easter/here-for-the-chicks.png", "images/easter/honey-bunny.png", "images/easter/lets-hunt-dino.png", "images/easter/little-miss-cotton-tail.png", "images/easter/little-mister-cotton-tail.png", "images/easter/love-egg.png", "images/easter/no-bunny-cuter.png", "images/easter/peeps-sake.png", "images/easter/shake-your-bunny-tail.png", "images/easter/some-bunny-2.png", "images/easter/some-bunny.png", "mstile-150x150.png", "og.png", "safari-pinned-tab.svg", "site.webmanifest"]),
  mimeTypes: { ".png": "image/png", ".xml": "application/xml", ".ico": "image/vnd.microsoft.icon", ".svg": "image/svg+xml", ".webmanifest": "application/manifest+json" },
  _: {
    entry: { "file": "start-4d253c89.js", "js": ["start-4d253c89.js", "chunks/vendor-31e9be01.js", "chunks/preload-helper-e4860ae8.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js")))
    ],
    routes: [
      {
        type: "page",
        id: "",
        pattern: /^\/$/,
        names: [],
        types: [],
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        id: "cart",
        pattern: /^\/cart\/?$/,
        names: [],
        types: [],
        path: "/cart",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "endpoint",
        id: "api/images",
        pattern: /^\/api\/images\/?$/,
        names: [],
        types: [],
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/api/images.js")))
      }
    ],
    matchers: async () => {
      return {};
    }
  }
};
