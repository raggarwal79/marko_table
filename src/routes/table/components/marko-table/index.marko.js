// Compiled using marko@4.13.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
    onCreate: function () {
        this.state = {
            columns: [
                {
                    id: 'company',
                    title: 'Company'
                },
                {
                    id: 'contact',
                    title: 'Contact'
                },
                {
                    id: 'country',
                    title: 'Country'
                }
            ],
            rows: [
                {
                    id: 1,
                    company: 'Alfreds Futterkiste',
                    contact: 'Maria Anders',
                    country: 'Germany'
                },
                {
                    id: 2,
                    company: 'Centro comercial Moctezuma',
                    contact: 'Francisco Chang',
                    country: 'Mexico'
                },
                {
                    id: 3,
                    company: 'Ernst Handel',
                    contact: 'Roland Mendel',
                    country: 'Austria'
                },
                {
                    id: 4,
                    company: 'Island Trading',
                    contact: 'Helen Bennett',
                    country: 'UK'
                },
                {
                    id: 5,
                    company: 'Laughing Bacchus Winecellars',
                    contact: 'Yoshi Tannamuri',
                    country: 'Canada'
                }
            ]
        };
    },
    onMount: function () {
        this.draggingMethod(this);
    },
    draggingMethod: function (t) {
        var dragged;
        document.addEventListener('drag', function (event) {
        }, false);
        document.addEventListener('dragstart', function (event) {
            dragged = event.target;
            event.target.style.opacity = 1;
        }, false);
        document.addEventListener('dragend', function (event) {
            event.target.style.opacity = '';
        }, false);
        document.addEventListener('dragover', function (event) {
            event.preventDefault();
        }, false);
        document.addEventListener('dragenter', function (event) {
            if (event.target.className == 'dropzone') {
                event.target.style.background = 'cyan';
            }
        }, false);
        document.addEventListener('dragleave', function (event) {
            if (event.target.className == 'dropzone') {
                event.target.style.background = '';
            }
        }, false);
        document.addEventListener('drop', function (event) {
            event.preventDefault();
            let moveTo = event.target.getAttribute('data-col-id');
            if (event.target.className == 'dropzone') {
                event.target.style.background = '';
                let draggedTabId = dragged.getAttribute('data-row-id');
                Array.prototype.move = function (from, to) {
                    this.splice(to, 0, this.splice(from, 1)[0]);
                };
                let rows = t.state.rows;
                rows.move(draggedTabId, moveTo);
                t.state.rows = rows;
                t.forceUpdate();
            }
        }, false);
    }
},
    marko_componentType = "/hello-world$1.0.0/src/routes/table/components/marko-table/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_forEach = marko_helpers.f,
    marko_forEachWithStatusVar = require("marko/src/runtime/helper-forEachWithStatusVar"),
    marko_escapeXmlAttr = marko_helpers.xa;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div><h3 class=\"tableTitle\">" +
    marko_escapeXml(input.title) +
    "</h3><table><tr>");

  var for__4 = 0;

  marko_forEach(state.columns, function(column) {
    var keyscope__5 = "[" + ((for__4++) + "]");

    out.w("<th>" +
      marko_escapeXml(column.title) +
      "</th>");
  });

  out.w("</tr>");

  var for__7 = 0;

  marko_forEachWithStatusVar(state.rows, function(row, loop) {
    var keyscope__8 = "[" + ((for__7++) + "]");

    out.w("<tr draggable=\"true\" data-row-id=\"" +
      marko_escapeXmlAttr(loop.getIndex()) +
      "\" ondragstart=\"event.dataTransfer.setData('text/plain',null)\" id=\"draggable\">");

    var for__10 = 0;

    marko_forEach(state.columns, function(column) {
      var keyscope__11 = "[" + (((for__10++) + keyscope__8) + "]");

      out.w("<td data-col-id=\"" +
        marko_escapeXmlAttr(loop.getIndex()) +
        "\" class=\"dropzone\">" +
        marko_escapeXml(row[column.id]) +
        "</td>");
    });

    out.w("</tr>");
  });

  out.w("</table></div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      "./style.css"
    ],
    id: "/hello-world$1.0.0/src/routes/table/components/marko-table/index.marko",
    component: "./"
  };
