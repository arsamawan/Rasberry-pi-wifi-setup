webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\nextjs-bash\\nextjs-blog\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Home() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

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
    // Routing to be added in this Button
    router.push();
    /*    fetch('http://127.0.0.1:3001/change_add_wifi_network').then(response => {
          return response;})*/
  }

  function sixthScript() {
    fetch('http://127.0.0.1:3001/force_hotspot_force_network').then(function (response) {
      return response;
    });
  }

  function seventhScript() {
    fetch('http://127.0.0.1:3001/change_hotspot_sSID_and_password').then(function (response) {
      return response;
    });
  }

  var styleConfig = {
    backgroundimage: '/abc.jpeg'
  };
  return __jsx("div", {
    style: styleConfig,
    className: "jsx-504591454" + " " + "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("title", {
    className: "jsx-504591454",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  }, "Rasberry-pi-wifi-setup"), __jsx("link", {
    rel: "icon",
    href: "/favicon.ico",
    className: "jsx-504591454",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  })), __jsx("main", {
    className: "jsx-504591454",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx("h1", {
    className: "jsx-504591454" + " " + "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, "Respberry Pie Auto Wifi!"), __jsx("div", {
    className: "jsx-504591454" + " " + "grid",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, __jsx("button", {
    onClick: firstScript,
    className: "jsx-504591454" + " " + "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, "Autohospot Internet"), __jsx("button", {
    onClick: secondScript,
    className: "jsx-504591454" + " " + "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, "Autohotspot Direct"), __jsx("button", {
    onClick: thirdScript,
    className: "jsx-504591454" + " " + "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, "Static Hotspot"), __jsx("button", {
    onClick: fourthScript,
    className: "jsx-504591454" + " " + "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, "Remove Autohotspot or Static Hotspot"), __jsx("button", {
    onClick: fifthScript,
    className: "jsx-504591454" + " " + "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }, "Change/Add Wifi Network"), __jsx("button", {
    onClick: sixthScript,
    className: "jsx-504591454" + " " + "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "Force Hotspot"), __jsx("button", {
    onClick: seventhScript,
    className: "jsx-504591454" + " " + "card",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, "Change Hotspot SSID and Password"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3497407647",
    __self: this
  }, ".container.jsx-504591454{back  min-height:100vh;padding:0 0.5rem;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}main.jsx-504591454{padding:5rem 0;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-504591454{width:100%;height:100px;border-top:1px solid #eaeaea;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}footer.jsx-504591454 img.jsx-504591454{margin-left:0.5rem;}footer.jsx-504591454 a.jsx-504591454{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}a.jsx-504591454{color:inherit;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-504591454 a.jsx-504591454{color:#0070f3;-webkit-text-decoration:none;text-decoration:none;}.title.jsx-504591454 a.jsx-504591454:hover,.title.jsx-504591454 a.jsx-504591454:focus,.title.jsx-504591454 a.jsx-504591454:active{-webkit-text-decoration:underline;text-decoration:underline;}.title.jsx-504591454{margin:0;line-height:1.15;font-size:4rem;}.title.jsx-504591454,.description.jsx-504591454{text-align:center;}.description.jsx-504591454{line-height:1.5;font-size:1.5rem;}code.jsx-504591454{background:#fafafa;border-radius:5px;padding:0.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono, DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace;}.grid.jsx-504591454{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;margin-top:3rem;}.card.jsx-504591454{margin:1rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1.5rem;text-align:left;color:inherit;-webkit-text-decoration:none;text-decoration:none;border:1px solid #eaeaea;border-radius:10px;-webkit-transition:color 0.15s ease,border-color 0.15s ease;transition:color 0.15s ease,border-color 0.15s ease;}.card.jsx-504591454:hover,.card.jsx-504591454:focus,.card.jsx-504591454:active{color:#0070f3;border-color:#0070f3;}.card.jsx-504591454 h3.jsx-504591454{margin:0 0 1rem 0;font-size:1.5rem;}.card.jsx-504591454 p.jsx-504591454{margin:0;font-size:1.25rem;line-height:1.5;}.logo.jsx-504591454{height:1em;}@media (max-width:600px){.grid.jsx-504591454{width:100%;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxuZXh0anMtYmFzaFxcbmV4dGpzLWJsb2dcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRWtCLEFBSzRCLEFBWUYsQUFVSixBQVNRLEFBSU4sQUFNQyxBQUtBLEFBT1ksQUFJakIsQUFPUyxBQUlGLEFBS0csQUFTTixBQVVELEFBY0UsQUFLSSxBQUtULEFBTUUsQUFNRSxTQXRFSSxBQTJEQyxFQTlGTCxBQW9HZixBQU0wQixDQXBDVCxFQW5ETSxBQUtBLEFBNERBLENBOUZkLENBd0RVLEVBSm5CLEFBK0NtQixDQWhGbkIsQUEwQ29CLElBekVELENBdUJZLEVBbUNkLENBMkRDLE1BaERsQixFQXNDQSxBQUtBLEVBdENrQixHQXpFSCxDQTBEZixFQTJEQSxLQXpHZSxLQVdBLEFBbURJLE9BdEJuQixJQVhBLEFBS0EsTUE4QnNFLElBMUM3QyxBQStDSixJQVdKLFdBb0NmLElBbkNnQixnQkFDRixLQTdGUSxRQVlBLENBa0ZELElBdkVFLHdDQTBEQSxNQS9DSixBQTZETSxrQkFuQjNCLENBM0V5QixNQStGSixFQW5GSSxpQkFvRjhCLFNBekVsQyx3Q0FXckIsQUErQ2lCLHlCQWhGSSxRQVlBLG9CQVdyQixJQTJEa0IsTUFjbEIsVUFia0IsZ0JBQ2xCLDZCQWxGQSxRQVlBIiwiZmlsZSI6IkQ6XFxuZXh0anMtYmFzaFxcbmV4dGpzLWJsb2dcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgZnVuY3Rpb24gZmlyc3RTY3JpcHQoKSB7XHJcbiAgICBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTozMDAxL2F1dG9ob3Nwb3RfaW50ZXJuZXQnKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlO30pXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHNlY29uZFNjcmlwdCgpIHtcclxuICAgIGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjMwMDEvYXV0b2hvdHNwb3RfZGlyZWN0JykudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZTt9KVxyXG4gIH1cclxuICBmdW5jdGlvbiB0aGlyZFNjcmlwdCgpIHtcclxuICAgIGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjMwMDEvc3RhdGljX2hvdHNwb3QnKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlO30pXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGZvdXJ0aFNjcmlwdCgpIHtcclxuICAgIGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjMwMDEvcmVtb3ZlX2F1dG9ob3RzcG90X29yX3N0YXRpY19ob3RzcG90JykudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZTt9KVxyXG4gIH1cclxuICBmdW5jdGlvbiBmaWZ0aFNjcmlwdCgpIHsgLy8gUm91dGluZyB0byBiZSBhZGRlZCBpbiB0aGlzIEJ1dHRvblxyXG4gICAgICAgIHJvdXRlci5wdXNoKClcclxuLyogICAgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMS9jaGFuZ2VfYWRkX3dpZmlfbmV0d29yaycpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2U7fSkqL1xyXG4gIH1cclxuICBmdW5jdGlvbiBzaXh0aFNjcmlwdCgpIHtcclxuICAgIGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjMwMDEvZm9yY2VfaG90c3BvdF9mb3JjZV9uZXR3b3JrJykudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZTt9KVxyXG4gIH1cclxuICBmdW5jdGlvbiBzZXZlbnRoU2NyaXB0KCkge1xyXG4gICAgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMS9jaGFuZ2VfaG90c3BvdF9zU0lEX2FuZF9wYXNzd29yZCcpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2U7fSlcclxuXHJcbiAgfVxyXG4gIGxldCBzdHlsZUNvbmZpZyA9IHsgYmFja2dyb3VuZGltYWdlIDogJy9hYmMuanBlZycgfVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuXHJcbiAgICAgIFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiAgc3R5bGU9e3N0eWxlQ29uZmlnfSA+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDx0aXRsZT5SYXNiZXJyeS1waS13aWZpLXNldHVwPC90aXRsZT5cclxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgIFxyXG4gICAgICA8bWFpbj5cclxuICAgICAgXHJcblxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgUmVzcGJlcnJ5IFBpZSBBdXRvIFdpZmkhXHJcbiAgICAgICAgPC9oMT5cclxuXHJcblxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIiA+XHJcbiAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT1cImNhcmRcIiBvbkNsaWNrPXtmaXJzdFNjcmlwdH0+QXV0b2hvc3BvdCBJbnRlcm5ldDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNhcmRcIiBvbkNsaWNrPXtzZWNvbmRTY3JpcHR9PkF1dG9ob3RzcG90IERpcmVjdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uICBjbGFzc05hbWU9XCJjYXJkXCIgb25DbGljaz17dGhpcmRTY3JpcHR9PlN0YXRpYyBIb3RzcG90PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2FyZFwiIG9uQ2xpY2s9e2ZvdXJ0aFNjcmlwdH0+UmVtb3ZlIEF1dG9ob3RzcG90IG9yIFN0YXRpYyBIb3RzcG90PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2FyZFwiIG9uQ2xpY2s9e2ZpZnRoU2NyaXB0fT5DaGFuZ2UvQWRkIFdpZmkgTmV0d29yazwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNhcmRcIiBvbkNsaWNrPXtzaXh0aFNjcmlwdH0+Rm9yY2UgSG90c3BvdDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImNhcmRcIiBvbkNsaWNrPXtzZXZlbnRoU2NyaXB0fT5DaGFuZ2UgSG90c3BvdCBTU0lEIGFuZCBQYXNzd29yZDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPC9tYWluPlxyXG5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuXHJcbiAgICAgICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgICBiYWNrICBcclxuICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgcGFkZGluZzogMCAwLjVyZW07XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBtYWluIHtcclxuIFxyXG4gICAgICAgICAgcGFkZGluZzogNXJlbSAwO1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9vdGVyIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWFlYWVhO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvb3RlciBpbWcge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvb3RlciBhIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlIGEge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUgYTpob3ZlcixcclxuICAgICAgICAudGl0bGUgYTpmb2N1cyxcclxuICAgICAgICAudGl0bGUgYTphY3RpdmUge1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUsXHJcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb2RlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmYWZhZmE7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICBmb250LWZhbWlseTogTWVubG8sIE1vbmFjbywgTHVjaWRhIENvbnNvbGUsIExpYmVyYXRpb24gTW9ubyxcclxuICAgICAgICAgICAgRGVqYVZ1IFNhbnMgTW9ubywgQml0c3RyZWFtIFZlcmEgU2FucyBNb25vLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmdyaWQge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkIHtcclxuICAgICAgICAgIG1hcmdpbjogMXJlbTtcclxuICAgICAgICAgIGZsZXgtYmFzaXM6IDQ1JTtcclxuICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4xNXMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZDpob3ZlcixcclxuICAgICAgICAuY2FyZDpmb2N1cyxcclxuICAgICAgICAuY2FyZDphY3RpdmUge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgICBib3JkZXItY29sb3I6ICMwMDcwZjM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY2FyZCBoMyB7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMCAxcmVtIDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkIHAge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2dvIHtcclxuICAgICAgICAgIGhlaWdodDogMWVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuXHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAgICAgICAuZ3JpZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgIGB9PC9zdHlsZT5cclxuXHJcblxyXG5cclxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICBodG1sLFxyXG4gICAgICAgIGJvZHkge1xyXG5cclxuICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLFxyXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxyXG4gICAgICAgICAgICBzYW5zLXNlcmlmO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgKiB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\nextjs-bash\\\\nextjs-blog\\\\pages\\\\index.js */"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1705596744",
    __self: this
  }, "html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;}*{box-sizing:border-box;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxuZXh0anMtYmFzaFxcbmV4dGpzLWJsb2dcXHBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvTnlCLEFBS3FCLEFBUVksVUFQYixTQUdHLEdBS2QsbUlBSkEiLCJmaWxlIjoiRDpcXG5leHRqcy1iYXNoXFxuZXh0anMtYmxvZ1xccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBmdW5jdGlvbiBmaXJzdFNjcmlwdCgpIHtcclxuICAgIGZldGNoKCdodHRwOi8vMTI3LjAuMC4xOjMwMDEvYXV0b2hvc3BvdF9pbnRlcm5ldCcpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2U7fSlcclxuICB9XHJcbiAgZnVuY3Rpb24gc2Vjb25kU2NyaXB0KCkge1xyXG4gICAgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMS9hdXRvaG90c3BvdF9kaXJlY3QnKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlO30pXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHRoaXJkU2NyaXB0KCkge1xyXG4gICAgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMS9zdGF0aWNfaG90c3BvdCcpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2U7fSlcclxuICB9XHJcbiAgZnVuY3Rpb24gZm91cnRoU2NyaXB0KCkge1xyXG4gICAgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMS9yZW1vdmVfYXV0b2hvdHNwb3Rfb3Jfc3RhdGljX2hvdHNwb3QnKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlO30pXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIGZpZnRoU2NyaXB0KCkgeyAvLyBSb3V0aW5nIHRvIGJlIGFkZGVkIGluIHRoaXMgQnV0dG9uXHJcbiAgICAgICAgcm91dGVyLnB1c2goKVxyXG4vKiAgICBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTozMDAxL2NoYW5nZV9hZGRfd2lmaV9uZXR3b3JrJykudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZTt9KSovXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHNpeHRoU2NyaXB0KCkge1xyXG4gICAgZmV0Y2goJ2h0dHA6Ly8xMjcuMC4wLjE6MzAwMS9mb3JjZV9ob3RzcG90X2ZvcmNlX25ldHdvcmsnKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlO30pXHJcbiAgfVxyXG4gIGZ1bmN0aW9uIHNldmVudGhTY3JpcHQoKSB7XHJcbiAgICBmZXRjaCgnaHR0cDovLzEyNy4wLjAuMTozMDAxL2NoYW5nZV9ob3RzcG90X3NTSURfYW5kX3Bhc3N3b3JkJykudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZTt9KVxyXG5cclxuICB9XHJcbiAgbGV0IHN0eWxlQ29uZmlnID0geyBiYWNrZ3JvdW5kaW1hZ2UgOiAnL2FiYy5qcGVnJyB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG5cclxuICAgICAgXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiICBzdHlsZT17c3R5bGVDb25maWd9ID5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlJhc2JlcnJ5LXBpLXdpZmktc2V0dXA8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgXHJcbiAgICAgIDxtYWluPlxyXG4gICAgICBcclxuXHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICBSZXNwYmVycnkgUGllIEF1dG8gV2lmaSFcclxuICAgICAgICA8L2gxPlxyXG5cclxuXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZFwiID5cclxuICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3NOYW1lPVwiY2FyZFwiIG9uQ2xpY2s9e2ZpcnN0U2NyaXB0fT5BdXRvaG9zcG90IEludGVybmV0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2FyZFwiIG9uQ2xpY2s9e3NlY29uZFNjcmlwdH0+QXV0b2hvdHNwb3QgRGlyZWN0PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gIGNsYXNzTmFtZT1cImNhcmRcIiBvbkNsaWNrPXt0aGlyZFNjcmlwdH0+U3RhdGljIEhvdHNwb3Q8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjYXJkXCIgb25DbGljaz17Zm91cnRoU2NyaXB0fT5SZW1vdmUgQXV0b2hvdHNwb3Qgb3IgU3RhdGljIEhvdHNwb3Q8L2J1dHRvbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJjYXJkXCIgb25DbGljaz17ZmlmdGhTY3JpcHR9PkNoYW5nZS9BZGQgV2lmaSBOZXR3b3JrPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2FyZFwiIG9uQ2xpY2s9e3NpeHRoU2NyaXB0fT5Gb3JjZSBIb3RzcG90PC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiY2FyZFwiIG9uQ2xpY2s9e3NldmVudGhTY3JpcHR9PkNoYW5nZSBIb3RzcG90IFNTSUQgYW5kIFBhc3N3b3JkPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8L21haW4+XHJcblxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG5cclxuICAgICAgICAuY29udGFpbmVyIHtcclxuICAgICAgICAgIGJhY2sgIFxyXG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIG1haW4ge1xyXG4gXHJcbiAgICAgICAgICBwYWRkaW5nOiA1cmVtIDA7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb290ZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYWVhZWE7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9vdGVyIGltZyB7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9vdGVyIGEge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGEge1xyXG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGl0bGUgYSB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwNzBmMztcclxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSBhOmhvdmVyLFxyXG4gICAgICAgIC50aXRsZSBhOmZvY3VzLFxyXG4gICAgICAgIC50aXRsZSBhOmFjdGl2ZSB7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC50aXRsZSxcclxuICAgICAgICAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvZGUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBMdWNpZGEgQ29uc29sZSwgTGliZXJhdGlvbiBNb25vLFxyXG4gICAgICAgICAgICBEZWphVnUgU2FucyBNb25vLCBCaXRzdHJlYW0gVmVyYSBTYW5zIE1vbm8sIENvdXJpZXIgTmV3LCBtb25vc3BhY2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZ3JpZCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQge1xyXG4gICAgICAgICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgICAgICAgZmxleC1iYXNpczogNDUlO1xyXG4gICAgICAgICAgcGFkZGluZzogMS41cmVtO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjE1cyBlYXNlLCBib3JkZXItY29sb3IgMC4xNXMgZWFzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkOmhvdmVyLFxyXG4gICAgICAgIC5jYXJkOmZvY3VzLFxyXG4gICAgICAgIC5jYXJkOmFjdGl2ZSB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwNzBmMztcclxuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwNzBmMztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYXJkIGgzIHtcclxuICAgICAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmNhcmQgcCB7XHJcbiAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmxvZ28ge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgICAgICAgIC5ncmlkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgYH08L3N0eWxlPlxyXG5cclxuXHJcblxyXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgIGh0bWwsXHJcbiAgICAgICAgYm9keSB7XHJcblxyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXHJcbiAgICAgICAgICAgIE94eWdlbiwgVWJ1bnR1LCBDYW50YXJlbGwsIEZpcmEgU2FucywgRHJvaWQgU2FucywgSGVsdmV0aWNhIE5ldWUsXHJcbiAgICAgICAgICAgIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAqIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgfVxyXG4gICAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl19 */\n/*@ sourceURL=D:\\\\nextjs-bash\\\\nextjs-blog\\\\pages\\\\index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.2afbe503ec150a122666.hot-update.js.map