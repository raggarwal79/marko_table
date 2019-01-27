// Compiled using marko@4.13.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/hello-world$1.0.0/src/routes/table/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    hasRenderBodyKey = Symbol.for("hasRenderBody"),
    marko_loadTemplate = require("marko/src/runtime/helper-loadTemplate"),
    marko_table_template = marko_loadTemplate(require.resolve("./components/marko-table")),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    marko_table_tag = marko_loadTag(marko_table_template),
    site_layout_template = marko_loadTemplate(require.resolve("../../components/site-layout")),
    site_layout_tag = marko_loadTag(site_layout_template);

function render(input, out, __component, component, state) {
  var data = input;

  site_layout_tag({
      title: {
          renderBody: function renderBody(out) {
            out.w("Welcome to Marko Table Component");
          }
        },
      content: {
          renderBody: function renderBody(out) {
            out.w("<section>");

            marko_table_tag({
                title: "Companies List"
              }, out, __component, "4");

            out.w("</section>");
          }
        },
      [hasRenderBodyKey]: true
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/hello-world$1.0.0/src/routes/table/index.marko",
    tags: [
      "./components/marko-table",
      "../../components/site-layout"
    ]
  };
