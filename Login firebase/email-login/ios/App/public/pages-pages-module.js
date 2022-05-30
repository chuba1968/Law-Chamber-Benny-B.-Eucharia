(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "8PYf":
/*!***************************************!*\
  !*** ./src/app/pages/pages.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "F1in":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pages.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>pages</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "Q3A5":
/*!*************************************!*\
  !*** ./src/app/pages/pages.page.ts ***!
  \*************************************/
/*! exports provided: PagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesPage", function() { return PagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_pages_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./pages.page.html */ "F1in");
/* harmony import */ var _pages_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages.page.scss */ "8PYf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PagesPage = class PagesPage {
    constructor() { }
    ngOnInit() {
    }
};
PagesPage.ctorParameters = () => [];
PagesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-pages',
        template: _raw_loader_pages_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_pages_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PagesPage);



/***/ }),

/***/ "dgmN":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesPageModule", function() { return PagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages-routing.module */ "viRw");
/* harmony import */ var _pages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages.page */ "Q3A5");







let PagesPageModule = class PagesPageModule {
};
PagesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_5__["PagesPageRoutingModule"]
        ],
        declarations: [_pages_page__WEBPACK_IMPORTED_MODULE_6__["PagesPage"]]
    })
], PagesPageModule);



/***/ }),

/***/ "viRw":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PagesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesPageRoutingModule", function() { return PagesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages.page */ "Q3A5");




const routes = [
    {
        path: '',
        component: _pages_page__WEBPACK_IMPORTED_MODULE_3__["PagesPage"]
    }
];
let PagesPageRoutingModule = class PagesPageRoutingModule {
};
PagesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PagesPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map