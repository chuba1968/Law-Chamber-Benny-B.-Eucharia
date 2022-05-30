(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["proceed4million-proceed4million-module"],{

/***/ "/LWT":
/*!*********************************************************!*\
  !*** ./src/app/proceed4million/proceed4million.page.ts ***!
  \*********************************************************/
/*! exports provided: Proceed4millionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Proceed4millionPage", function() { return Proceed4millionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_proceed4million_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./proceed4million.page.html */ "XbnD");
/* harmony import */ var _proceed4million_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proceed4million.page.scss */ "RSd4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let Proceed4millionPage = class Proceed4millionPage {
    constructor() { }
    ngOnInit() {
    }
};
Proceed4millionPage.ctorParameters = () => [];
Proceed4millionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-proceed4million',
        template: _raw_loader_proceed4million_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_proceed4million_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Proceed4millionPage);



/***/ }),

/***/ "RSd4":
/*!***********************************************************!*\
  !*** ./src/app/proceed4million/proceed4million.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9jZWVkNG1pbGxpb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "SN8E":
/*!***********************************************************!*\
  !*** ./src/app/proceed4million/proceed4million.module.ts ***!
  \***********************************************************/
/*! exports provided: Proceed4millionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Proceed4millionPageModule", function() { return Proceed4millionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _proceed4million_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./proceed4million-routing.module */ "ln1U");
/* harmony import */ var _proceed4million_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./proceed4million.page */ "/LWT");







let Proceed4millionPageModule = class Proceed4millionPageModule {
};
Proceed4millionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _proceed4million_routing_module__WEBPACK_IMPORTED_MODULE_5__["Proceed4millionPageRoutingModule"]
        ],
        declarations: [_proceed4million_page__WEBPACK_IMPORTED_MODULE_6__["Proceed4millionPage"]]
    })
], Proceed4millionPageModule);



/***/ }),

/***/ "XbnD":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proceed4million/proceed4million.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>proceed4million</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "ln1U":
/*!*******************************************************************!*\
  !*** ./src/app/proceed4million/proceed4million-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: Proceed4millionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Proceed4millionPageRoutingModule", function() { return Proceed4millionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _proceed4million_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proceed4million.page */ "/LWT");




const routes = [
    {
        path: '',
        component: _proceed4million_page__WEBPACK_IMPORTED_MODULE_3__["Proceed4millionPage"]
    }
];
let Proceed4millionPageRoutingModule = class Proceed4millionPageRoutingModule {
};
Proceed4millionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Proceed4millionPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=proceed4million-proceed4million-module.js.map