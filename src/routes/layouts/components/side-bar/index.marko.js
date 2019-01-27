// Compiled using marko@4.13.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_classList = marko_helpers.cl,
    marko_component = {
        onCreate: function() {
          this.state = {
              showSidebar: false,
              autoHide: true,
              showMac: false,
              autoHideMac: true,
              showWB: false,
              autoHideWB: true,
              showSR: false,
              autoHideSR: true,
              showAccountDetails: false,
              autoHideAccountDetails: true
            };
        },
        toggleSidebar: function() {
          this.state.showSidebar = !this.state.showSidebar;
        },
        toggleAutoHide: function() {
          this.state.autoHide = !this.state.autoHide;
        },
        toggleMac: function() {
          this.state.showMac = !this.state.showMac;
        },
        toggleAutoHideMac: function() {
          this.state.autoHideMac = !this.state.autoHideMac;
        },
        toggleWB: function() {
          this.state.showWB = !this.state.showWB;
        },
        toggleAutoHideWB: function() {
          this.state.autoHideWB = !this.state.autoHideWB;
        },
        toggleSR: function() {
          this.state.showSR = !this.state.showSR;
        },
        toggleAutoHideSR: function() {
          this.state.autoHideSR = !this.state.autoHideSR;
        },
        toggleAccountDetails: function() {
          this.state.showAccountDetails = !this.state.showAccountDetails;
        },
        toggleAutoHideAccountDetails: function() {
          this.state.autoHideAccountDetails = !this.state.autoHideAccountDetails;
        }
      },
    marko_componentType = "/hello-world$1.0.0/src/routes/layouts/components/side-bar/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_loadTag = marko_helpers.t,
    asset_var_tag = marko_loadTag(require("marko-magic/components/asset-var/renderer")),
    marko_attr = marko_helpers.a,
    marko_classAttr = marko_helpers.ca;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div><ul class=\"sticky-nav\"><li><button" +
    marko_attr("data-marko", {
      onclick: __component.d("click", "toggleSidebar", false)
    }, false) +
    ">");

  asset_var_tag({
      values: [
          require.resolve("./summary.png")
        ],
      renderBody: function renderBody(out, __src) {
        out.w("<img" +
          marko_attr("src", __src.url) +
          ">");
      }
    }, out, __component, "351");

  out.w(" Summary</button></li><li><button" +
    marko_attr("data-marko", {
      onclick: __component.d("click", "toggleAccountDetails", false)
    }, false) +
    ">");

  asset_var_tag({
      values: [
          require.resolve("./account.png")
        ],
      renderBody: function renderBody(out, __src) {
        out.w("<img" +
          marko_attr("src", __src.url) +
          ">");
      }
    }, out, __component, "352");

  out.w(" Account Detail</button></li><li><button" +
    marko_attr("data-marko", {
      onclick: __component.d("click", "toggleMac", false)
    }, false) +
    ">");

  asset_var_tag({
      values: [
          require.resolve("./mac.png")
        ],
      renderBody: function renderBody(out, __src) {
        out.w("<img" +
          marko_attr("src", __src.url) +
          ">");
      }
    }, out, __component, "353");

  out.w(" MAC</button></li><li><button" +
    marko_attr("data-marko", {
      onclick: __component.d("click", "toggleWB", false)
    }, false) +
    ">");

  asset_var_tag({
      values: [
          require.resolve("./browser.png")
        ],
      renderBody: function renderBody(out, __src) {
        out.w("<img" +
          marko_attr("src", __src.url) +
          ">");
      }
    }, out, __component, "354");

  out.w(" Web Browser</button></li><li><button" +
    marko_attr("data-marko", {
      onclick: __component.d("click", "toggleSR", false)
    }, false) +
    ">");

  asset_var_tag({
      values: [
          require.resolve("./recent.png")
        ],
      renderBody: function renderBody(out, __src) {
        out.w("<img" +
          marko_attr("src", __src.url) +
          ">");
      }
    }, out, __component, "355");

  out.w(" Recent SR</button></li></ul>");

  if (state.showAccountDetails) {
    out.w("<div" +
      marko_classAttr(marko_classList([
      "acc",
      !state.autoHideAccountDetails ? "dock" : "acc"
    ])) +
      "><div class=\"section-header\"><div class=\"section-title\">Account Details <span class=\"right-align\"><div" +
      marko_classAttr(marko_classList([
      "pin-btn",
      !state.autoHideAccountDetails ? "" : "rotate-icon"
    ])) +
      marko_attr("data-marko", {
        onclick: __component.d("click", "toggleAutoHideAccountDetails", false)
      }, false) +
      "></div><div class=\"close-btn\"" +
      marko_attr("data-marko", {
        onclick: __component.d("click", "toggleAccountDetails", false)
      }, false) +
      "></div></span></div></div><div class=\"table-container\"><table><tr><td>Full Name</td><td><b>Jane Doe</b></td></tr><tr><td>User Id</td><td><b>test 2280</b></td></tr><tr><td>Oracle Id</td><td><b>390699561</b></td></tr><tr><td>Email Address</td><td><b>snoetucker@yahoo.com</b></td></tr><tr><td>Company Name</td><td></td></tr><tr><td>3rd Party Name</td><td></td></tr><tr><td>Retailer Name</td><td><b>1904, Richards St, Riverton, UT 84094</b></td></tr><tr><td>Contact Information</td><td><b>US - 801 231 2776(primary)</b></td></tr><tr><td>Date of Birth</td><td><b>10/7/1980</b></td></tr><tr><td>Registration IP</td><td><b>10.247.5.66</b></td></tr><tr><td>Registration Date</td><td><b>8.10.2006</b></td></tr><tr><td>Registration Site</td><td><b>0</b></td></tr></table><table><tr><td>Full Name</td><td><b>Jane Doe</b></td></tr><tr><td>User Id</td><td><b>test 2280</b></td></tr><tr><td>Oracle Id</td><td><b>390699561</b></td></tr><tr><td>Email Address</td><td><b>snoetucker@yahoo.com</b></td></tr><tr><td>Company Name</td><td></td></tr><tr><td>3rd Party Name</td><td></td></tr><tr><td>Retailer Name</td><td><b>1904, Richards St, Riverton, UT 84094</b></td></tr><tr><td>Contact Information</td><td><b>US - 801 231 2776(primary)</b></td></tr><tr><td>Date of Birth</td><td><b>10/7/1980</b></td></tr><tr><td>Registration IP</td><td><b>10.247.5.66</b></td></tr><tr><td>Registration Date</td><td><b>8.10.2006</b></td></tr><tr><td>Registration Site</td><td><b>0</b></td></tr></table><table><tr><td>Full Name</td><td><b>Jane Doe</b></td></tr><tr><td>User Id</td><td><b>test 2280</b></td></tr><tr><td>Oracle Id</td><td><b>390699561</b></td></tr><tr><td>Email Address</td><td><b>snoetucker@yahoo.com</b></td></tr><tr><td>Company Name</td><td></td></tr><tr><td>3rd Party Name</td><td></td></tr><tr><td>Retailer Name</td><td><b>1904, Richards St, Riverton, UT 84094</b></td></tr><tr><td>Contact Information</td><td><b>US - 801 231 2776(primary)</b></td></tr><tr><td>Date of Birth</td><td><b>10/7/1980</b></td></tr><tr><td>Registration IP</td><td><b>10.247.5.66</b></td></tr><tr><td>Registration Date</td><td><b>8.10.2006</b></td></tr><tr><td>Registration Site</td><td><b>0</b></td></tr></table></div></div>");
  }

  if (state.showSidebar) {
    out.w("<div" +
      marko_classAttr(marko_classList([
      "sidebar",
      !state.autoHide ? "dock" : "sidebar"
    ])) +
      "><div class=\"section-header\"><div class=\"section-title\">Summary <span class=\"right-align\"><div" +
      marko_classAttr(marko_classList([
      "pin-btn",
      !state.autoHide ? "" : "rotate-icon"
    ])) +
      marko_attr("data-marko", {
        onclick: __component.d("click", "toggleAutoHide", false)
      }, false) +
      "></div><div class=\"close-btn\"" +
      marko_attr("data-marko", {
        onclick: __component.d("click", "toggleSidebar", false)
      }, false) +
      "></div></span></div></div><ul class=\"summary-list\"><li><div><input type=\"checkbox\">&nbsp;Seller Limits</div></li><li><div><input type=\"checkbox\">&nbsp;Transactions</div><ul><li><div><input type=\"checkbox\">&nbsp;Selling(12)</div><div><input type=\"checkbox\">&nbsp;Listing(5)</div><div><input type=\"checkbox\">&nbsp;Bidding(0)</div></li></ul></li><li><div><input type=\"checkbox\">&nbsp;Contact Changes</div><ul><li><div><input type=\"checkbox\">&nbsp;Contact Info(12)</div><div><input type=\"checkbox\">&nbsp;Email(5)</div><div><input type=\"checkbox\">&nbsp;Addresses(0)</div><ul><li><div><input type=\"checkbox\">&nbsp;Shipping</div><div><input type=\"checkbox\">&nbsp;Seller</div><div><input type=\"checkbox\">&nbsp;Ship From</div></li></ul></li></ul></li></ul></div>");
  }

  if (state.showMac) {
    out.w("<div" +
      marko_classAttr(marko_classList([
      "mac",
      !state.autoHideMac ? "dock" : "mac"
    ])) +
      "><div class=\"section-header\"><div class=\"section-title\">MAC <span class=\"right-align\"><div" +
      marko_classAttr(marko_classList([
      "pin-btn",
      !state.autoHideMac ? "" : "rotate-icon"
    ])) +
      marko_attr("data-marko", {
        onclick: __component.d("click", "toggleAutoHideMac", false)
      }, false) +
      "></div><div class=\"close-btn\"" +
      marko_attr("data-marko", {
        onclick: __component.d("click", "toggleMac", false)
      }, false) +
      "></div></span></div></div><div class=\"content-row\"><select><option selected>User Id</option><option>1001</option><option>1002</option><option>1003</option></select> &nbsp;&nbsp; <input type=\"text\" value=\"test2280\">&nbsp;&nbsp; <input type=\"text\" placeholder=\"Keyword\">&nbsp;&nbsp; <button type=\"button\">Search</button>&nbsp;&nbsp; <button type=\"reset\">Reset</button>&nbsp;&nbsp;</div><div class=\"content-row\"><span><b>User Id/Email:</b> test2280 / snotucker@yahoo.com</span><span><b>PS Level:</b> 0</span><span><b>SS Level:</b> 0</span><span><b>VBS Membership / Daily Segment:</b> NA/E</span></div><div class=\"filter-panel\"><div class=\"panel-header\">Filter Status: Not Applied <span class=\"right-align\"><a href=\"#\">Apply</a>&nbsp;&nbsp; <a href=\"#\">Remove</a>&nbsp;&nbsp; <a href=\"#\">Check All</a>&nbsp;&nbsp; <a href=\"#\">Clear</a></span></div><div class=\"panel-sub-header\"><span><b>Resolution (Action)</b></span><span><b>Rule (Policy)</b></span></div><div class=\"panel-body\"><ul><li><div><span><input type=\"checkbox\">Document (14)</span><span><input type=\"checkbox\">Open (1)</span><span>&nbsp;&nbsp;<input type=\"checkbox\">Open Issue (1)</span></div></li><li><div><b>Attribute</b><span><input type=\"checkbox\">Issue Scenario (1)</span><span>&nbsp;&nbsp;<input type=\"checkbox\">160 - Seller Vetted (1)</span></div></li><li><div><span><input type=\"checkbox\">Fraud (3)</span><span><input type=\"checkbox\">Buyer Risk Vetting (1)</span><span>&nbsp;&nbsp;<input type=\"checkbox\">High Risk (2)</span></div></li><li><div><b>Attribute</b><span><input type=\"checkbox\">Violation Type (2)</span><span>&nbsp;&nbsp;<input type=\"checkbox\">Selling Violation (2)</span></div></li></ul></div></div><table border=\"1\" cellSpacing=\"5\" cellPadding=\"5\"><tr><th>P</th><th>Subject</th><th>Process</th><th>Channel</th><th>Date Created</th></tr><tr><td>P5</td><td>Open Issue(160-seller Vetted) > Merchant Performance Risk (Selling Violation)</td><td>Fraud selling or listing</td><td>Internal</td><td>04 Oct 2018 11:44</td></tr><tr><td>P5</td><td>Document > Merchant Performance Risk (Selling Violation)</td><td>Fraud selling or listing</td><td>Internal</td><td>04 Oct 2018 11:43</td></tr><tr><td>P5</td><td>Document > Buyer Risk Vetting</td><td>Fraud selling or listing</td><td>Internal</td><td>29 Sep 2018 11:43</td></tr></table></div>");
  }

  if (state.showWB) {
    out.w("<div" +
      marko_classAttr(marko_classList([
      "wb",
      !state.autoHideWB ? "dock" : "wb"
    ])) +
      "><div class=\"section-header\"><div class=\"section-title\">Web Browser <span class=\"right-align\"><div" +
      marko_classAttr(marko_classList([
      "pin-btn",
      !state.toggleAutoHideWB ? "" : "rotate-icon"
    ])) +
      marko_attr("data-marko", {
        onclick: __component.d("click", "toggleAutoHideWB", false)
      }, false) +
      "></div><div class=\"close-btn\"" +
      marko_attr("data-marko", {
        onclick: __component.d("click", "toggleWB", false)
      }, false) +
      "></div></span></div></div><iframe src=\"https://www.ebay.com\" height=\"100%\" width=\"100%\"></iframe></div>");
  }

  if (state.showSR) {
    out.w("<div" +
      marko_classAttr(marko_classList([
      "sr",
      !state.autoHideSR ? "dock" : "sr"
    ])) +
      "><div class=\"section-header\"><div class=\"section-title\">Recent SRs <span class=\"right-align\"><div" +
      marko_classAttr(marko_classList([
      "pin-btn",
      !state.toggleAutoHideSR ? "" : "rotate-icon"
    ])) +
      marko_attr("data-marko", {
        onclick: __component.d("click", "toggleAutoHideSR", false)
      }, false) +
      "></div><div class=\"close-btn\"" +
      marko_attr("data-marko", {
        onclick: __component.d("click", "toggleSR", false)
      }, false) +
      "></div></span></div></div><table><tr><td class=\"box\"><div>Recent Activity</div><input type=\"text\" value=\"15 Sep 2018 - 15 Oct 2018\"></td></tr><tr><td><input type=\"checkbox\"> Has Attachment</td></tr><tr><td class=\"box\"><div>Channel</div><select><option></option></select></td></tr><tr><td class=\"box\"><div>Status</div><select><option></option></select></td></tr><tr><td class=\"box\"><div>User</div><input type=\"text\" value=\"test2280\"></td></tr><tr><td class=\"box\"><div>Owner</div><select><option></option></select></td></tr><tr><td class=\"box\"><div>SR #</div><input type=\"text\" placeholder=\"Type Number\"></td></tr><tr><td class=\"box\"><div>eMBG #</div><input type=\"text\" placeholder=\"Type\"></td></tr><tr><td class=\"box\"><div>Return #</div><input type=\"text\" placeholder=\"Type\"></td></tr></table></div>");
  }

  out.w("</div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      "./style.css"
    ],
    id: "/hello-world$1.0.0/src/routes/layouts/components/side-bar/index.marko",
    component: "./",
    tags: [
      "marko-magic/components/asset-var/renderer"
    ]
  };
