webpackJsonp([0,6],{

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_static_pages_static_pages_module__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__static_page_static_page_component_ngfactory__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_static_pages_static_page_static_page_component__ = __webpack_require__(343);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticPagesModuleNgFactory", function() { return StaticPagesModuleNgFactory; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();






var StaticPagesModuleInjector = (function (_super) {
    __extends(StaticPagesModuleInjector, _super);
    function StaticPagesModuleInjector(parent) {
        return _super.call(this, parent, [__WEBPACK_IMPORTED_MODULE_4__static_page_static_page_component_ngfactory__["a" /* StaticPageComponentNgFactory */]], []) || this;
    }
    Object.defineProperty(StaticPagesModuleInjector.prototype, "_NgLocalization_3", {
        get: function () {
            if ((this.__NgLocalization_3 == null)) {
                (this.__NgLocalization_3 = new __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* NgLocaleLocalization */](this.parent.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* LOCALE_ID */])));
            }
            return this.__NgLocalization_3;
        },
        enumerable: true,
        configurable: true
    });
    StaticPagesModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]();
        this._RouterModule_1 = new __WEBPACK_IMPORTED_MODULE_3__angular_router__["q" /* RouterModule */](this.parent.get(__WEBPACK_IMPORTED_MODULE_3__angular_router__["r" /* ɵa */], null), this.parent.get(__WEBPACK_IMPORTED_MODULE_3__angular_router__["j" /* Router */], null));
        this._StaticPagesModule_2 = new __WEBPACK_IMPORTED_MODULE_1__app_static_pages_static_pages_module__["a" /* StaticPagesModule */]();
        this._ROUTES_4 = [[{
                    path: '',
                    component: __WEBPACK_IMPORTED_MODULE_5__app_static_pages_static_page_static_page_component__["a" /* StaticPageComponent */]
                }
            ]];
        return this._StaticPagesModule_2;
    };
    StaticPagesModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */])) {
            return this._CommonModule_0;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_router__["q" /* RouterModule */])) {
            return this._RouterModule_1;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_1__app_static_pages_static_pages_module__["a" /* StaticPagesModule */])) {
            return this._StaticPagesModule_2;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* NgLocalization */])) {
            return this._NgLocalization_3;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_router__["u" /* ROUTES */])) {
            return this._ROUTES_4;
        }
        return notFoundResult;
    };
    StaticPagesModuleInjector.prototype.destroyInternal = function () {
    };
    return StaticPagesModuleInjector;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* ɵNgModuleInjector */]));
var StaticPagesModuleNgFactory = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* NgModuleFactory */](StaticPagesModuleInjector, __WEBPACK_IMPORTED_MODULE_1__app_static_pages_static_pages_module__["a" /* StaticPagesModule */]);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL21hYy9Eb2N1bWVudHMvcGhwc3Rvcm0vZGNfc2NvbGFyL2RjLXNpdGUvc3JjL2FwcC9zdGF0aWMtcGFnZXMvc3RhdGljLXBhZ2VzLm1vZHVsZS5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy9tYWMvRG9jdW1lbnRzL3BocHN0b3JtL2RjX3Njb2xhci9kYy1zaXRlL3NyYy9hcHAvc3RhdGljLXBhZ2VzL3N0YXRpYy1wYWdlcy5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
//# sourceMappingURL=static-pages.module.ngfactory.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaticPageComponent; });
var StaticPageComponent = (function () {
    function StaticPageComponent() {
    }
    StaticPageComponent.prototype.ngOnInit = function () {
    };
    StaticPageComponent.ctorParameters = function () { return []; };
    return StaticPageComponent;
}());

//# sourceMappingURL=static-page.component.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */ var styles = [''];
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL21hYy9Eb2N1bWVudHMvcGhwc3Rvcm0vZGNfc2NvbGFyL2RjLXNpdGUvc3JjL2FwcC9zdGF0aWMtcGFnZXMvc3RhdGljLXBhZ2Uvc3RhdGljLXBhZ2UuY29tcG9uZW50LmNzcy5zaGltLm5nc3R5bGUudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9Vc2Vycy9tYWMvRG9jdW1lbnRzL3BocHN0b3JtL2RjX3Njb2xhci9kYy1zaXRlL3NyYy9hcHAvc3RhdGljLXBhZ2VzL3N0YXRpYy1wYWdlL3N0YXRpYy1wYWdlLmNvbXBvbmVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7In0=
//# sourceMappingURL=static-page.component.css.shim.ngstyle.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__static_page_component_css_shim_ngstyle__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_static_pages_static_page_static_page_component__ = __webpack_require__(343);
/* unused harmony export RenderType_StaticPageComponent */
/* unused harmony export View_StaticPageComponent_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaticPageComponentNgFactory; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */



var styles_StaticPageComponent = [__WEBPACK_IMPORTED_MODULE_0__static_page_component_css_shim_ngstyle__["a" /* styles */]];
var RenderType_StaticPageComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["D" /* ɵcrt */]({
    encapsulation: 0,
    styles: styles_StaticPageComponent,
    data: {}
});
function View_StaticPageComponent_0(l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* ɵeld */](0, null, null, 1, 'p', [], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* ɵted */](null, ['\n  static-page works!\n'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["G" /* ɵted */](null, ['\n']))
    ], null, null);
}
function View_StaticPageComponent_Host_0(l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* ɵeld */](0, null, null, 1, 'app-static-page', [], null, null, null, View_StaticPageComponent_0, RenderType_StaticPageComponent)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* ɵdid */](114688, null, 0, __WEBPACK_IMPORTED_MODULE_2__app_static_pages_static_page_static_page_component__["a" /* StaticPageComponent */], [], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
var StaticPageComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* ɵccf */]('app-static-page', __WEBPACK_IMPORTED_MODULE_2__app_static_pages_static_page_static_page_component__["a" /* StaticPageComponent */], View_StaticPageComponent_Host_0, {}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiL1VzZXJzL21hYy9Eb2N1bWVudHMvcGhwc3Rvcm0vZGNfc2NvbGFyL2RjLXNpdGUvc3JjL2FwcC9zdGF0aWMtcGFnZXMvc3RhdGljLXBhZ2Uvc3RhdGljLXBhZ2UuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL1VzZXJzL21hYy9Eb2N1bWVudHMvcGhwc3Rvcm0vZGNfc2NvbGFyL2RjLXNpdGUvc3JjL2FwcC9zdGF0aWMtcGFnZXMvc3RhdGljLXBhZ2Uvc3RhdGljLXBhZ2UuY29tcG9uZW50LnRzIiwibmc6Ly8vVXNlcnMvbWFjL0RvY3VtZW50cy9waHBzdG9ybS9kY19zY29sYXIvZGMtc2l0ZS9zcmMvYXBwL3N0YXRpYy1wYWdlcy9zdGF0aWMtcGFnZS9zdGF0aWMtcGFnZS5jb21wb25lbnQuaHRtbCIsIm5nOi8vL1VzZXJzL21hYy9Eb2N1bWVudHMvcGhwc3Rvcm0vZGNfc2NvbGFyL2RjLXNpdGUvc3JjL2FwcC9zdGF0aWMtcGFnZXMvc3RhdGljLXBhZ2Uvc3RhdGljLXBhZ2UuY29tcG9uZW50LnRzLlN0YXRpY1BhZ2VDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8cD5cbiAgc3RhdGljLXBhZ2Ugd29ya3MhXG48L3A+XG4iLCI8YXBwLXN0YXRpYy1wYWdlPjwvYXBwLXN0YXRpYy1wYWdlPiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDQUE7SUFBRztJQUVDOzs7Ozs7SUNGSjtnQkFBQTs7O0lBQUE7OzsifQ==
//# sourceMappingURL=static-page.component.ngfactory.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StaticPagesModule; });
var StaticPagesModule = (function () {
    function StaticPagesModule() {
    }
    return StaticPagesModule;
}());

//# sourceMappingURL=static-pages.module.js.map

/***/ })

});
//# sourceMappingURL=0.chunk.js.map