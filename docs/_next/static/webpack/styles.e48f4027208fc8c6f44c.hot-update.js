webpackHotUpdate("styles",{

/***/ "./components/content/section/styles.css":
/*!***********************************************!*\
  !*** ./components/content/section/styles.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"section":"_3O-fMnP7CSL20iXrG8SRdW","title":"_1T7GOO4H33eE6wYSahRA7d","anchor":"_2I8U69SiIB1k6IULVSdZKI"};;
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
            injectCss(link, link.href.split("?")[0] + "?unix=1541262179678");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.e48f4027208fc8c6f44c.hot-update.js.map