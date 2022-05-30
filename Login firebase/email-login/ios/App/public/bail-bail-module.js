(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bail-bail-module"],{

/***/ "9Xzk":
/*!*************************************!*\
  !*** ./src/app/bail/bail.module.ts ***!
  \*************************************/
/*! exports provided: BailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BailPageModule", function() { return BailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _bail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bail-routing.module */ "vnfe");
/* harmony import */ var _bail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bail.page */ "jks/");







let BailPageModule = class BailPageModule {
};
BailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _bail_routing_module__WEBPACK_IMPORTED_MODULE_5__["BailPageRoutingModule"]
        ],
        declarations: [_bail_page__WEBPACK_IMPORTED_MODULE_6__["BailPage"]]
    })
], BailPageModule);



/***/ }),

/***/ "QzGJ":
/*!*************************************!*\
  !*** ./src/app/bail/bail.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYWlsLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "Yjej":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bail/bail.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>bail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "jks/":
/*!***********************************!*\
  !*** ./src/app/bail/bail.page.ts ***!
  \***********************************/
/*! exports provided: BailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BailPage", function() { return BailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_bail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bail.page.html */ "Yjej");
/* harmony import */ var _bail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bail.page.scss */ "QzGJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let BailPage = class BailPage {
    constructor() { }
    ngOnInit() {
    }
};
BailPage.ctorParameters = () => [];
BailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-bail',
        template: _raw_loader_bail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BailPage);



/***/ }),

/***/ "vnfe":
/*!*********************************************!*\
  !*** ./src/app/bail/bail-routing.module.ts ***!
  \*********************************************/
/*! exports provided: BailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BailPageRoutingModule", function() { return BailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _bail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bail.page */ "jks/");




const routes = [
    {
        path: '',
        component: _bail_page__WEBPACK_IMPORTED_MODULE_3__["BailPage"]
    }
];
let BailPageRoutingModule = class BailPageRoutingModule {
};
BailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BailPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=bail-bail-module.js.map