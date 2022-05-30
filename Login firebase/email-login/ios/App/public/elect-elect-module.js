(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["elect-elect-module"],{

/***/ "LIvV":
/*!***************************************!*\
  !*** ./src/app/elect/elect.module.ts ***!
  \***************************************/
/*! exports provided: ElectPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectPageModule", function() { return ElectPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _elect_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elect-routing.module */ "Uw6T");
/* harmony import */ var _elect_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./elect.page */ "VewL");







let ElectPageModule = class ElectPageModule {
};
ElectPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _elect_routing_module__WEBPACK_IMPORTED_MODULE_5__["ElectPageRoutingModule"]
        ],
        declarations: [_elect_page__WEBPACK_IMPORTED_MODULE_6__["ElectPage"]]
    })
], ElectPageModule);



/***/ }),

/***/ "Uw6T":
/*!***********************************************!*\
  !*** ./src/app/elect/elect-routing.module.ts ***!
  \***********************************************/
/*! exports provided: ElectPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectPageRoutingModule", function() { return ElectPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _elect_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./elect.page */ "VewL");




const routes = [
    {
        path: '',
        component: _elect_page__WEBPACK_IMPORTED_MODULE_3__["ElectPage"]
    }
];
let ElectPageRoutingModule = class ElectPageRoutingModule {
};
ElectPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ElectPageRoutingModule);



/***/ }),

/***/ "VewL":
/*!*************************************!*\
  !*** ./src/app/elect/elect.page.ts ***!
  \*************************************/
/*! exports provided: ElectPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectPage", function() { return ElectPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_elect_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./elect.page.html */ "sDtL");
/* harmony import */ var _elect_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./elect.page.scss */ "nTCh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ElectPage = class ElectPage {
    constructor() { }
    ngOnInit() {
    }
};
ElectPage.ctorParameters = () => [];
ElectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-elect',
        template: _raw_loader_elect_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_elect_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ElectPage);



/***/ }),

/***/ "nTCh":
/*!***************************************!*\
  !*** ./src/app/elect/elect.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #023e8a !important;\n}\n\nion-back-button {\n  --color: white !important;\n}\n\n.element {\n  transform: translateY(-20px);\n}\n\np {\n  font-family: OpenSans;\n}\n\nh1 {\n  font-family: OpenSans-Bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGVsZWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtBQUNKOztBQUdFO0VBRUUsNEJBQUE7QUFESjs7QUFLRTtFQUNFLHFCQUFBO0FBRko7O0FBTUU7RUFFRSwwQkFBQTtBQUpKIiwiZmlsZSI6ImVsZWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzAyM2U4YSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBpb24tYmFjay1idXR0b257XHJcbiAgICAtLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBcclxuICAuZWxlbWVudCB7XHJcbiAgXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG4gIH1cclxuICBcclxuICBcclxuICBwe1xyXG4gICAgZm9udC1mYW1pbHk6T3BlblNhbnM7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIGgxXHJcbiAge1xyXG4gICAgZm9udC1mYW1pbHk6T3BlblNhbnMtQm9sZDtcclxuICB9XHJcbiAgIl19 */");

/***/ }),

/***/ "sDtL":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/elect/elect.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar> <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/folder\"></ion-back-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n<img src=\"/assets/images/svg.png\" alt=\"\" srcset=\"\">\n\n  <ion-grid> <ion-row>\n    <ion-col>\n    </ion-col>\n    <ion-col>\n      <div class=\"element\"><img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\" ></div>\n\n    </ion-col>\n    <ion-col>\n    </ion-col>\n  </ion-row>\n\n\n</ion-grid>\n\n<h1 style=\"text-align: center;\">Election Petition</h1>\n<P style=\"font-size: 15px; padding-left: 20px; padding-right: 20px;\">Our firm has successfully defended election petitions filed against some elected Senators, Members of House of Representatives, Houses of Assembly and Chairmen of Local Government Councils. The firm is either briefed by the individuals concerned or by the Independent National Electoral Commission.</P>\n\n\n<P>\n  <a href=\"tel:+2348066053162\">\n    <ion-button expand=\"block\" class=\"ion-padding\"> <ion-icon slot=\"start\" name=\"call-outline\"></ion-icon><p>Call US</p> </ion-button>\n</a>  </P>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=elect-elect-module.js.map