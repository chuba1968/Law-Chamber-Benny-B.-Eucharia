(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["practiceareas-practiceareas-module"],{

/***/ "7Hye":
/*!***************************************************************!*\
  !*** ./src/app/practiceareas/practiceareas-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: PracticeareasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PracticeareasPageRoutingModule", function() { return PracticeareasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _practiceareas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./practiceareas.page */ "xVtW");




const routes = [
    {
        path: '',
        component: _practiceareas_page__WEBPACK_IMPORTED_MODULE_3__["PracticeareasPage"]
    }
];
let PracticeareasPageRoutingModule = class PracticeareasPageRoutingModule {
};
PracticeareasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PracticeareasPageRoutingModule);



/***/ }),

/***/ "8rHP":
/*!*******************************************************!*\
  !*** ./src/app/practiceareas/practiceareas.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #023e8a !important;\n}\n\nion-back-button {\n  --color: white !important;\n}\n\n.element {\n  transform: translateY(-20px);\n}\n\np {\n  font-family: OpenSans;\n}\n\nh1 {\n  font-family: OpenSans-Bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByYWN0aWNlYXJlYXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBR0E7RUFFRSw0QkFBQTtBQURGOztBQUtBO0VBQ0UscUJBQUE7QUFGRjs7QUFNQTtFQUVFLDBCQUFBO0FBSkYiLCJmaWxlIjoicHJhY3RpY2VhcmVhcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMDIzZThhICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1iYWNrLWJ1dHRvbntcclxuICAtLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmVsZW1lbnQge1xyXG5cclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG59XHJcblxyXG5cclxucHtcclxuICBmb250LWZhbWlseTpPcGVuU2FucztcclxuXHJcbn1cclxuXHJcbmgxXHJcbntcclxuICBmb250LWZhbWlseTpPcGVuU2Fucy1Cb2xkO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "Pdgd":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/practiceareas/practiceareas.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar> <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/folder\"></ion-back-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <img src=\"/assets/images/svg.png\" alt=\"\" srcset=\"\">\n\n\n  <ion-grid> <ion-row>\n    <ion-col>\n    </ion-col>\n    <ion-col>\n      <div class=\"element\"><img src=\"/assets/images/iconmonstr-clipboard-6-240.png\"></div>\n\n    </ion-col>\n    <ion-col>\n    </ion-col>\n  </ion-row>\n\n\n</ion-grid>\n<br>\n<ion-list [routerLink]=\"['/simplyprobate']\" class=\"routes\">\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\">\n    </ion-thumbnail>\n    <ion-label>\n      <h3>Simply Probate</h3>\n      <p>Our Probate Practise</p>\n    </ion-label>\n  </ion-item>\n</ion-list>\n<br>\n<ion-list [routerLink]=\"['/elect']\" class=\"routes\">\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\">\n    </ion-thumbnail>\n    <ion-label>\n      <h3>Election Petition</h3>\n      <p>Sui generis</p>\n    </ion-label>\n  </ion-item>\n</ion-list>\n<br>\n<ion-list [routerLink]=\"['/coop']\" class=\"routes\">\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\">\n    </ion-thumbnail>\n    <ion-label>\n      <h3>Corporate Matters</h3>\n      <p>All corporate Matters</p>\n    </ion-label>\n  </ion-item>\n</ion-list>\n<br>\n\n</ion-content>\n");

/***/ }),

/***/ "X8Ml":
/*!*******************************************************!*\
  !*** ./src/app/practiceareas/practiceareas.module.ts ***!
  \*******************************************************/
/*! exports provided: PracticeareasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PracticeareasPageModule", function() { return PracticeareasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _practiceareas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./practiceareas-routing.module */ "7Hye");
/* harmony import */ var _practiceareas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./practiceareas.page */ "xVtW");







let PracticeareasPageModule = class PracticeareasPageModule {
};
PracticeareasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _practiceareas_routing_module__WEBPACK_IMPORTED_MODULE_5__["PracticeareasPageRoutingModule"]
        ],
        declarations: [_practiceareas_page__WEBPACK_IMPORTED_MODULE_6__["PracticeareasPage"]]
    })
], PracticeareasPageModule);



/***/ }),

/***/ "xVtW":
/*!*****************************************************!*\
  !*** ./src/app/practiceareas/practiceareas.page.ts ***!
  \*****************************************************/
/*! exports provided: PracticeareasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PracticeareasPage", function() { return PracticeareasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_practiceareas_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./practiceareas.page.html */ "Pdgd");
/* harmony import */ var _practiceareas_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./practiceareas.page.scss */ "8rHP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PracticeareasPage = class PracticeareasPage {
    constructor() { }
    ngOnInit() {
    }
};
PracticeareasPage.ctorParameters = () => [];
PracticeareasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-practiceareas',
        template: _raw_loader_practiceareas_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_practiceareas_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PracticeareasPage);



/***/ })

}]);
//# sourceMappingURL=practiceareas-practiceareas-module.js.map