webpackHotUpdate("styles",{

/***/ "./components/header/styles.css":
/*!**************************************!*\
  !*** ./components/header/styles.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"header":"header--2sFna","imageWrapper":"imageWrapper--2xsVE","intro":"intro--1X18_","subHeader":"subHeader--1IJsZ","hexagon":"hexagon--39JsI"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1542139715846");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.67f28b62e03e3ce378a2.hot-update.js.map