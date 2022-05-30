(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["cooperate-cooperate-module"],{

/***/ "KNoL":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooperate/cooperate.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>cooperate</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "QwtX":
/*!***********************************************!*\
  !*** ./src/app/cooperate/cooperate.module.ts ***!
  \***********************************************/
/*! exports provided: CooperatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CooperatePageModule", function() { return CooperatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cooperate_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cooperate-routing.module */ "xIC2");
/* harmony import */ var _cooperate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cooperate.page */ "bxaS");







let CooperatePageModule = class CooperatePageModule {
};
CooperatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cooperate_routing_module__WEBPACK_IMPORTED_MODULE_5__["CooperatePageRoutingModule"]
        ],
        declarations: [_cooperate_page__WEBPACK_IMPORTED_MODULE_6__["CooperatePage"]]
    })
], CooperatePageModule);



/***/ }),

/***/ "bxaS":
/*!*********************************************!*\
  !*** ./src/app/cooperate/cooperate.page.ts ***!
  \*********************************************/
/*! exports provided: CooperatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CooperatePage", function() { return CooperatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cooperate_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cooperate.page.html */ "KNoL");
/* harmony import */ var _cooperate_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cooperate.page.scss */ "qkVc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CooperatePage = class CooperatePage {
    constructor() { }
    ngOnInit() {
    }
};
CooperatePage.ctorParameters = () => [];
CooperatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cooperate',
        template: _raw_loader_cooperate_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cooperate_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CooperatePage);



/***/ }),

/***/ "qkVc":
/*!***********************************************!*\
  !*** ./src/app/cooperate/cooperate.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb29wZXJhdGUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "xIC2":
/*!*******************************************************!*\
  !*** ./src/app/cooperate/cooperate-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: CooperatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CooperatePageRoutingModule", function() { return CooperatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cooperate_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cooperate.page */ "bxaS");




const routes = [
    {
        path: '',
        component: _cooperate_page__WEBPACK_IMPORTED_MODULE_3__["CooperatePage"]
    }
];
let CooperatePageRoutingModule = class CooperatePageRoutingModule {
};
CooperatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CooperatePageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=cooperate-cooperate-module.js.map