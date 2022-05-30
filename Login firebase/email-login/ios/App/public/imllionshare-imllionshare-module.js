(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["imllionshare-imllionshare-module"],{

/***/ "+U0P":
/*!*****************************************************!*\
  !*** ./src/app/imllionshare/imllionshare.module.ts ***!
  \*****************************************************/
/*! exports provided: ImllionsharePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImllionsharePageModule", function() { return ImllionsharePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _imllionshare_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./imllionshare-routing.module */ "ZCBk");
/* harmony import */ var _imllionshare_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./imllionshare.page */ "OiEJ");







let ImllionsharePageModule = class ImllionsharePageModule {
};
ImllionsharePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _imllionshare_routing_module__WEBPACK_IMPORTED_MODULE_5__["ImllionsharePageRoutingModule"]
        ],
        declarations: [_imllionshare_page__WEBPACK_IMPORTED_MODULE_6__["ImllionsharePage"]]
    })
], ImllionsharePageModule);



/***/ }),

/***/ "59GW":
/*!*****************************************************!*\
  !*** ./src/app/imllionshare/imllionshare.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #023e8a !important;\n}\n\nion-back-button {\n  --color: white !important;\n}\n\n.element {\n  transform: translateY(-20px);\n}\n\np {\n  font-family: OpenSans;\n}\n\nh1 {\n  font-family: OpenSans-Bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGltbGxpb25zaGFyZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFHQTtFQUVFLDRCQUFBO0FBREY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGOztBQU1BO0VBRUUsMEJBQUE7QUFKRiIsImZpbGUiOiJpbWxsaW9uc2hhcmUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogIzAyM2U4YSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tYmFjay1idXR0b257XHJcbiAgLS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5lbGVtZW50IHtcclxuXHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcclxufVxyXG5cclxuXHJcbnB7XHJcbiAgZm9udC1mYW1pbHk6T3BlblNhbnM7XHJcblxyXG59XHJcblxyXG5oMVxyXG57XHJcbiAgZm9udC1mYW1pbHk6T3BlblNhbnMtQm9sZDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "FlRh":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/imllionshare/imllionshare.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>imllionshare</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "OiEJ":
/*!***************************************************!*\
  !*** ./src/app/imllionshare/imllionshare.page.ts ***!
  \***************************************************/
/*! exports provided: ImllionsharePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImllionsharePage", function() { return ImllionsharePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_imllionshare_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./imllionshare.page.html */ "FlRh");
/* harmony import */ var _imllionshare_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imllionshare.page.scss */ "59GW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ImllionsharePage = class ImllionsharePage {
    constructor() { }
    ngOnInit() {
    }
};
ImllionsharePage.ctorParameters = () => [];
ImllionsharePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-imllionshare',
        template: _raw_loader_imllionshare_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_imllionshare_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ImllionsharePage);



/***/ }),

/***/ "ZCBk":
/*!*************************************************************!*\
  !*** ./src/app/imllionshare/imllionshare-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ImllionsharePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImllionsharePageRoutingModule", function() { return ImllionsharePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _imllionshare_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imllionshare.page */ "OiEJ");




const routes = [
    {
        path: '',
        component: _imllionshare_page__WEBPACK_IMPORTED_MODULE_3__["ImllionsharePage"]
    }
];
let ImllionsharePageRoutingModule = class ImllionsharePageRoutingModule {
};
ImllionsharePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ImllionsharePageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=imllionshare-imllionshare-module.js.map