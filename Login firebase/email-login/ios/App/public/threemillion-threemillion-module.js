(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["threemillion-threemillion-module"],{

/***/ "EkOa":
/*!*************************************************************!*\
  !*** ./src/app/threemillion/threemillion-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ThreemillionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreemillionPageRoutingModule", function() { return ThreemillionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _threemillion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./threemillion.page */ "p/Zg");




const routes = [
    {
        path: '',
        component: _threemillion_page__WEBPACK_IMPORTED_MODULE_3__["ThreemillionPage"]
    }
];
let ThreemillionPageRoutingModule = class ThreemillionPageRoutingModule {
};
ThreemillionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ThreemillionPageRoutingModule);



/***/ }),

/***/ "IjhM":
/*!*****************************************************!*\
  !*** ./src/app/threemillion/threemillion.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aHJlZW1pbGxpb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "YsEQ":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/threemillion/threemillion.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>threemillion</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "eYr7":
/*!*****************************************************!*\
  !*** ./src/app/threemillion/threemillion.module.ts ***!
  \*****************************************************/
/*! exports provided: ThreemillionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreemillionPageModule", function() { return ThreemillionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _threemillion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./threemillion-routing.module */ "EkOa");
/* harmony import */ var _threemillion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./threemillion.page */ "p/Zg");







let ThreemillionPageModule = class ThreemillionPageModule {
};
ThreemillionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _threemillion_routing_module__WEBPACK_IMPORTED_MODULE_5__["ThreemillionPageRoutingModule"]
        ],
        declarations: [_threemillion_page__WEBPACK_IMPORTED_MODULE_6__["ThreemillionPage"]]
    })
], ThreemillionPageModule);



/***/ }),

/***/ "p/Zg":
/*!***************************************************!*\
  !*** ./src/app/threemillion/threemillion.page.ts ***!
  \***************************************************/
/*! exports provided: ThreemillionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreemillionPage", function() { return ThreemillionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_threemillion_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./threemillion.page.html */ "YsEQ");
/* harmony import */ var _threemillion_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./threemillion.page.scss */ "IjhM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ThreemillionPage = class ThreemillionPage {
    constructor() { }
    ngOnInit() {
    }
};
ThreemillionPage.ctorParameters = () => [];
ThreemillionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-threemillion',
        template: _raw_loader_threemillion_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_threemillion_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ThreemillionPage);



/***/ })

}]);
//# sourceMappingURL=threemillion-threemillion-module.js.map