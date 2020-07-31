webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/sohaib/Documents/Rasberry-pi-wifi-setup/nextjs-blog/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Home() {
  function firstScript() {
    fetch('http://127.0.0.1:3001/autohospot_internet').then(function (response) {
      return response;
    });
  }

  function secondScript() {
    fetch('http://127.0.0.1:3001/autohotspot_direct').then(function (response) {
      return response;
    });
  }

  function thirdScript() {
    fetch('http://127.0.0.1:3001/static_hotspot').then(function (response) {
      return response;
    });
  }

  function fourthScript() {
    fetch('http://127.0.0.1:3001/remove_autohotspot_or_static_hotspot').then(function (response) {
      return response;
    });
  }

  function fifthScript() {
    fetch('http://127.0.0.1:3001/change_add_wifi_network').then(function (response) {
      return response;
    });
  }

  function sixthScript() {
    fetch('http://127.0.0.1:3001/force_hotspot_force_network').then(function (response) {
      return response;
    });
  }

  function seventhScript() {
    fetch('http://127.0.0.1:3001/change_hotspot_sSID_and_password').then(function (response) {
      return response;
    }); // const withImages = require('next-images')
    // module.exports = withImages()
    // const img = require("/121.png");   
  }

  var styleConfig = {
    backgroundimage: '/abc.jpeg'
  };
  return __jsx("div", {
    style: styleConfig,
    className: "jsx-2355926849" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-2355926849",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, "Rasberry-pi-wifi-setup"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-2355926849",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  })), __jsx("main", {
    className: "jsx-2355926849",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "jsx-2355926849" + " " + "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, "Respberry Pie Auto Wifi!"), __jsx("div", {
    className: "jsx-2355926849" + " " + "grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx("button", {
    onClick: firstScript,
    className: "jsx-2355926849" + " " + "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, "Autohospot Internet"), __jsx("button", {
    onClick: secondScript,
    className: "jsx-2355926849" + " " + "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, "Autohotspot Direct"), __jsx("button", {
    onClick: thirdScript,
    className: "jsx-2355926849" + " " + "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, "Static Hotspot"), __jsx("button", {
    onClick: fourthScript,
    className: "jsx-2355926849" + " " + "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, "Remove Autohotspot or Static Hotspot"), __jsx("button", {
    onClick: fifthScript,
    className: "jsx-2355926849" + " " + "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, "Change/Add Wifi Network"), __jsx("button", {
    onClick: sixthScript,
    className: "jsx-2355926849" + " " + "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, "Force Hotspot"), __jsx("button", {
    onClick: seventhScript,
    className: "jsx-2355926849" + " " + "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }, "Change Hotspot SSID and Password"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1853916419",
    __self: this
  }, ".container.jsx-2355926849{min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}main.jsx-2355926849{padding:5rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-2355926849{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-2355926849 img.jsx-2355926849{margin-left:0.5rem;}footer.jsx-2355926849 a.jsx-2355926849{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}a.jsx-2355926849{color:inherit;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-2355926849 a.jsx-2355926849{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-2355926849 a.jsx-2355926849:hover,.title.jsx-2355926849 a.jsx-2355926849:focus,.title.jsx-2355926849 a.jsx-2355926849:active{-webkit-text-decoration:underline;text-decoration:underline;}.title.jsx-2355926849{margin:0;line-height:1.15;font-size:4rem;}.title.jsx-2355926849,.description.jsx-2355926849{text-align:center;}.description.jsx-2355926849{line-height:1.5;font-size:1.5rem;}code.jsx-2355926849{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}.grid.jsx-2355926849{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;margin-top:3rem;}.card.jsx-2355926849{margin:1rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}.card.jsx-2355926849:hover,.card.jsx-2355926849:focus,.card.jsx-2355926849:active{color:#0070f3;border-color:#0070f3;}.card.jsx-2355926849 h3.jsx-2355926849{margin:0 0 1rem 0;font-size:1.5rem;}.card.jsx-2355926849 p.jsx-2355926849{margin:0;font-size:1.25rem;line-height:1.5;}.logo.jsx-2355926849{height:1em;}@media (max-width:600px){.grid.jsx-2355926849{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvaGFpYi9Eb2N1bWVudHMvUmFzYmVycnktcGktd2lmaS1zZXR1cC9uZXh0anMtYmxvZy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRWtCLEFBSzRCLEFBVUYsQUFTSixBQVNRLEFBSU4sQUFNQyxBQUtBLEFBT1ksQUFJakIsQUFPUyxBQUlGLEFBS0csQUFTTixBQVVELEFBY0UsQUFLSSxBQUtULEFBTUUsQUFNRSxTQXRFSSxBQTJEQyxFQTlGTCxBQW9HZixBQU0wQixDQXBDVCxFQW5ETSxBQUtBLEFBNERBLENBN0ZkLENBdURVLENBakVBLENBNkRuQixBQStDbUIsQ0FoRm5CLEFBMENvQixLQWxEVyxFQW1DZCxDQTJEQyxNQWhEbEIsQ0FqRWUsQ0F1R2YsQUFLQSxFQXRDa0IsSUFmbEIsRUEyREEsS0F4R2UsS0FVQSxBQW1ESSxPQXRCbkIsSUFYQSxBQUtBLE1BOEJzRSxJQTFDN0MsQUErQ0osSUFXSixXQW9DZixJQW5DZ0IsZUF6Rk0sQ0EwRlIsYUFoRlEsQ0FpRkQsSUF2RUUsd0NBMERBLE1BL0NKLEFBNkRNLGFBM0ZGLEtBd0V6QixPQW9CcUIsRUFsRkksaUJBbUY4QixTQXpFbEMsd0NBV3JCLEFBK0NpQixtQkE3RUksY0FVQSxvQkFVckIsSUEyRGtCLE1BY2xCLFVBYmtCLGdCQUNsQix1QkFoRkEsY0FVQSIsImZpbGUiOiIvaG9tZS9zb2hhaWIvRG9jdW1lbnRzL1Jhc2JlcnJ5LXBpLXdpZmktc2V0dXAvbmV4dGpzLWJsb2cvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgXG4gIGZ1bmN0aW9uIGZpcnN0U2NyaXB0KCkge1xuICAgIGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjMwMDEvYXV0b2hvc3BvdF9pbnRlcm5ldCcpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlO30pXG4gIH1cbiAgZnVuY3Rpb24gc2Vjb25kU2NyaXB0KCkge1xuICAgIGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjMwMDEvYXV0b2hvdHNwb3RfZGlyZWN0JykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm4gcmVzcG9uc2U7fSlcbiAgfVxuICBmdW5jdGlvbiB0aGlyZFNjcmlwdCgpIHtcbiAgICBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTozMDAxL3N0YXRpY19ob3RzcG90JykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm4gcmVzcG9uc2U7fSlcbiAgfVxuICBmdW5jdGlvbiBmb3VydGhTY3JpcHQoKSB7XG4gICAgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMS9yZW1vdmVfYXV0b2hvdHNwb3Rfb3Jfc3RhdGljX2hvdHNwb3QnKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHJldHVybiByZXNwb25zZTt9KVxuICB9XG4gIGZ1bmN0aW9uIGZpZnRoU2NyaXB0KCkge1xuICAgIGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjMwMDEvY2hhbmdlX2FkZF93aWZpX25ldHdvcmsnKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHJldHVybiByZXNwb25zZTt9KVxuICB9XG4gIGZ1bmN0aW9uIHNpeHRoU2NyaXB0KCkge1xuICAgIGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjMwMDEvZm9yY2VfaG90c3BvdF9mb3JjZV9uZXR3b3JrJykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm4gcmVzcG9uc2U7fSlcbiAgfVxuICBmdW5jdGlvbiBzZXZlbnRoU2NyaXB0KCkge1xuICAgIGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjMwMDEvY2hhbmdlX2hvdHNwb3Rfc1NJRF9hbmRfcGFzc3dvcmQnKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHJldHVybiByZXNwb25zZTt9KVxuXG5cbiAgICAgIC8vIGNvbnN0IHdpdGhJbWFnZXMgPSByZXF1aXJlKCduZXh0LWltYWdlcycpXG4gICAgICAvLyBtb2R1bGUuZXhwb3J0cyA9IHdpdGhJbWFnZXMoKVxuICAgIFxuICAgIC8vIGNvbnN0IGltZyA9IHJlcXVpcmUoXCIvMTIxLnBuZ1wiKTsgICBcbiAgfVxuICBsZXQgc3R5bGVDb25maWcgPSB7IGJhY2tncm91bmRpbWFnZSA6ICcvYWJjLmpwZWcnIH1cblxuICBcbiAgcmV0dXJuIChcblxuICAgICAgXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiAgc3R5bGU9e3N0eWxlQ29uZmlnfSA+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlJhc2JlcnJ5LXBpLXdpZmktc2V0dXA8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgXG4gICAgICA8bWFpbj5cbiAgICAgIFxuXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgIFJlc3BiZXJyeSBQaWUgQXV0byBXaWZpIVxuICAgICAgICA8L2gxPlxuXG5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIiA+XG4gICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9XCJjYXJkXCIgb25DbGljaz17Zmlyc3RTY3JpcHR9PkF1dG9ob3Nwb3QgSW50ZXJuZXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2FyZFwiIG9uQ2xpY2s9e3NlY29uZFNjcmlwdH0+QXV0b2hvdHNwb3QgRGlyZWN0PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9XCJjYXJkXCIgb25DbGljaz17dGhpcmRTY3JpcHR9PlN0YXRpYyBIb3RzcG90PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNhcmRcIiBvbkNsaWNrPXtmb3VydGhTY3JpcHR9PlJlbW92ZSBBdXRvaG90c3BvdCBvciBTdGF0aWMgSG90c3BvdDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjYXJkXCIgb25DbGljaz17ZmlmdGhTY3JpcHR9PkNoYW5nZS9BZGQgV2lmaSBOZXR3b3JrPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNhcmRcIiBvbkNsaWNrPXtzaXh0aFNjcmlwdH0+Rm9yY2UgSG90c3BvdDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjYXJkXCIgb25DbGljaz17c2V2ZW50aFNjcmlwdH0+Q2hhbmdlIEhvdHNwb3QgU1NJRCBhbmQgUGFzc3dvcmQ8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgIFxuICAgICAgIFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICBtYWluIHtcbiAgICAgICAgICBwYWRkaW5nOiA1cmVtIDA7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBmb290ZXIgaW1nIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9vdGVyIGEge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSBhIHtcbiAgICAgICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUgYTpob3ZlcixcbiAgICAgICAgLnRpdGxlIGE6Zm9jdXMsXG4gICAgICAgIC50aXRsZSBhOmFjdGl2ZSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUsXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgY29kZSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgTHVjaWRhIENvbnNvbGUsIExpYmVyYXRpb24gTW9ubyxcbiAgICAgICAgICAgIERlamFWdSBTYW5zIE1vbm8sIEJpdHN0cmVhbSBWZXJhIFNhbnMgTW9ubywgQ291cmllciBOZXcsIG1vbm9zcGFjZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ncmlkIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQge1xuICAgICAgICAgIG1hcmdpbjogMXJlbTtcbiAgICAgICAgICBmbGV4LWJhc2lzOiA0NSU7XG4gICAgICAgICAgcGFkZGluZzogMS41cmVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkOmhvdmVyLFxuICAgICAgICAuY2FyZDpmb2N1cyxcbiAgICAgICAgLmNhcmQ6YWN0aXZlIHtcbiAgICAgICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDcwZjM7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZCBoMyB7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMXJlbSAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQgcCB7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvZ28ge1xuICAgICAgICAgIGhlaWdodDogMWVtO1xuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgICAgICAgIC5ncmlkIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICAgIGB9PC9zdHlsZT5cblxuXG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuXG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/home/sohaib/Documents/Rasberry-pi-wifi-setup/nextjs-blog/pages/index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3379920139",
    __self: this
  }, "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NvaGFpYi9Eb2N1bWVudHMvUmFzYmVycnktcGktd2lmaS1zZXR1cC9uZXh0anMtYmxvZy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzTnlCLEFBSXFCLEFBUVksVUFQYixTQUdHLEdBS2QsbUlBSkEiLCJmaWxlIjoiL2hvbWUvc29oYWliL0RvY3VtZW50cy9SYXNiZXJyeS1waS13aWZpLXNldHVwL25leHRqcy1ibG9nL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIFxuICBmdW5jdGlvbiBmaXJzdFNjcmlwdCgpIHtcbiAgICBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTozMDAxL2F1dG9ob3Nwb3RfaW50ZXJuZXQnKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHJldHVybiByZXNwb25zZTt9KVxuICB9XG4gIGZ1bmN0aW9uIHNlY29uZFNjcmlwdCgpIHtcbiAgICBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTozMDAxL2F1dG9ob3RzcG90X2RpcmVjdCcpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlO30pXG4gIH1cbiAgZnVuY3Rpb24gdGhpcmRTY3JpcHQoKSB7XG4gICAgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMS9zdGF0aWNfaG90c3BvdCcpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlO30pXG4gIH1cbiAgZnVuY3Rpb24gZm91cnRoU2NyaXB0KCkge1xuICAgIGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjMwMDEvcmVtb3ZlX2F1dG9ob3RzcG90X29yX3N0YXRpY19ob3RzcG90JykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm4gcmVzcG9uc2U7fSlcbiAgfVxuICBmdW5jdGlvbiBmaWZ0aFNjcmlwdCgpIHtcbiAgICBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTozMDAxL2NoYW5nZV9hZGRfd2lmaV9uZXR3b3JrJykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm4gcmVzcG9uc2U7fSlcbiAgfVxuICBmdW5jdGlvbiBzaXh0aFNjcmlwdCgpIHtcbiAgICBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTozMDAxL2ZvcmNlX2hvdHNwb3RfZm9yY2VfbmV0d29yaycpLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlO30pXG4gIH1cbiAgZnVuY3Rpb24gc2V2ZW50aFNjcmlwdCgpIHtcbiAgICBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTozMDAxL2NoYW5nZV9ob3RzcG90X3NTSURfYW5kX3Bhc3N3b3JkJykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm4gcmVzcG9uc2U7fSlcblxuXG4gICAgICAvLyBjb25zdCB3aXRoSW1hZ2VzID0gcmVxdWlyZSgnbmV4dC1pbWFnZXMnKVxuICAgICAgLy8gbW9kdWxlLmV4cG9ydHMgPSB3aXRoSW1hZ2VzKClcbiAgICBcbiAgICAvLyBjb25zdCBpbWcgPSByZXF1aXJlKFwiLzEyMS5wbmdcIik7ICAgXG4gIH1cbiAgbGV0IHN0eWxlQ29uZmlnID0geyBiYWNrZ3JvdW5kaW1hZ2UgOiAnL2FiYy5qcGVnJyB9XG5cbiAgXG4gIHJldHVybiAoXG5cbiAgICAgIFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgIHN0eWxlPXtzdHlsZUNvbmZpZ30gPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5SYXNiZXJyeS1waS13aWZpLXNldHVwPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgIFxuICAgICAgPG1haW4+XG4gICAgICBcblxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICBSZXNwYmVycnkgUGllIEF1dG8gV2lmaSFcbiAgICAgICAgPC9oMT5cblxuXG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkXCIgPlxuICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPVwiY2FyZFwiIG9uQ2xpY2s9e2ZpcnN0U2NyaXB0fT5BdXRvaG9zcG90IEludGVybmV0PC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNhcmRcIiBvbkNsaWNrPXtzZWNvbmRTY3JpcHR9PkF1dG9ob3RzcG90IERpcmVjdDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPVwiY2FyZFwiIG9uQ2xpY2s9e3RoaXJkU2NyaXB0fT5TdGF0aWMgSG90c3BvdDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjYXJkXCIgb25DbGljaz17Zm91cnRoU2NyaXB0fT5SZW1vdmUgQXV0b2hvdHNwb3Qgb3IgU3RhdGljIEhvdHNwb3Q8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2FyZFwiIG9uQ2xpY2s9e2ZpZnRoU2NyaXB0fT5DaGFuZ2UvQWRkIFdpZmkgTmV0d29yazwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjYXJkXCIgb25DbGljaz17c2l4dGhTY3JpcHR9PkZvcmNlIEhvdHNwb3Q8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2FyZFwiIG9uQ2xpY2s9e3NldmVudGhTY3JpcHR9PkNoYW5nZSBIb3RzcG90IFNTSUQgYW5kIFBhc3N3b3JkPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuXG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICBcbiAgICAgICBcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgcGFkZGluZzogMCAwLjVyZW07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgXG5cbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgcGFkZGluZzogNXJlbSAwO1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBmb290ZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9vdGVyIGltZyB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvb3RlciBhIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUgYSB7XG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIGE6aG92ZXIsXG4gICAgICAgIC50aXRsZSBhOmZvY3VzLFxuICAgICAgICAudGl0bGUgYTphY3RpdmUge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpdGxlLFxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvZGUge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgZm9udC1mYW1pbHk6IE1lbmxvLCBNb25hY28sIEx1Y2lkYSBDb25zb2xlLCBMaWJlcmF0aW9uIE1vbm8sXG4gICAgICAgICAgICBEZWphVnUgU2FucyBNb25vLCBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XG4gICAgICAgIH1cblxuICAgICAgICAuZ3JpZCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIHtcbiAgICAgICAgICBtYXJnaW46IDFyZW07XG4gICAgICAgICAgZmxleC1iYXNpczogNDUlO1xuICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWFlYWVhO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZDpob3ZlcixcbiAgICAgICAgLmNhcmQ6Zm9jdXMsXG4gICAgICAgIC5jYXJkOmFjdGl2ZSB7XG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3MGYzO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQgaDMge1xuICAgICAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIHAge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAuZ3JpZCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICBgfTwvc3R5bGU+XG5cblxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBodG1sLFxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxuICAgICAgICAgICAgT3h5Z2VuLCBVYnVudHUsIENhbnRhcmVsbCwgRmlyYSBTYW5zLCBEcm9pZCBTYW5zLCBIZWx2ZXRpY2EgTmV1ZSxcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XG4gICAgICAgIH1cblxuICAgICAgICAqIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/home/sohaib/Documents/Rasberry-pi-wifi-setup/nextjs-blog/pages/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.69d090296c7f20e51c0b.hot-update.js.map