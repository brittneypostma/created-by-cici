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
  get: () => get
});
module.exports = __toCommonJS(stdin_exports);
var import_graphql_request = require("graphql-request");
async function get() {
  const graphcms = new import_graphql_request.GraphQLClient("https://api-us-east-1.graphcms.com/v2/ckrp1c22l04qt01z2gdpy2bef/master", {
    headers: {}
  });
  const gqlQuery = import_graphql_request.gql`
		query Products {
			products {
				id
				name
				slug
			}
		}
	`;
  const { products } = await graphcms.request(gqlQuery);
  return {
    body: { products }
  };
}
