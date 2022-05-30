(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coop-coop-module"],{

/***/ "26Jz":
/*!*************************************!*\
  !*** ./src/app/coop/coop.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #023e8a !important;\n}\n\nion-back-button {\n  --color: white !important;\n}\n\n.element {\n  transform: translateY(-20px);\n}\n\np {\n  font-family: OpenSans;\n}\n\nh1 {\n  font-family: OpenSans-Bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvb3AucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7QUFDSjs7QUFFRTtFQUNFLHlCQUFBO0FBQ0o7O0FBR0U7RUFFRSw0QkFBQTtBQURKOztBQUtFO0VBQ0UscUJBQUE7QUFGSjs7QUFNRTtFQUVFLDBCQUFBO0FBSkoiLCJmaWxlIjoiY29vcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMjNlOGEgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWJhY2stYnV0dG9ue1xyXG4gICAgLS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmVsZW1lbnQge1xyXG4gIFxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgcHtcclxuICAgIGZvbnQtZmFtaWx5Ok9wZW5TYW5zO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICBoMVxyXG4gIHtcclxuICAgIGZvbnQtZmFtaWx5Ok9wZW5TYW5zLUJvbGQ7XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "DRZV":
/*!*********************************************!*\
  !*** ./src/app/coop/coop-routing.module.ts ***!
  \*********************************************/
/*! exports provided: CoopPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoopPageRoutingModule", function() { return CoopPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _coop_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coop.page */ "PdNq");




const routes = [
    {
        path: '',
        component: _coop_page__WEBPACK_IMPORTED_MODULE_3__["CoopPage"]
    }
];
let CoopPageRoutingModule = class CoopPageRoutingModule {
};
CoopPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CoopPageRoutingModule);



/***/ }),

/***/ "Dksj":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/coop/coop.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar> <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/folder\"></ion-back-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <img src=\"/assets/images/svg.png\" alt=\"\" srcset=\"\">\n\n  <ion-grid> <ion-row>\n    <ion-col>\n    </ion-col>\n    <ion-col>\n      <div class=\"element\"><img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\" ></div>\n\n    </ion-col>\n    <ion-col>\n    </ion-col>\n  </ion-row>\n\n\n</ion-grid>\n\n<h1 style=\"text-align: center;\">Corporate Matters</h1>\n<P style=\"font-size: 15px; padding-left: 20px; padding-right: 20px;\">Our firm's Corporate & Commercial law practice has earned the respect of clients and practitioners for the high quality of its advisory and transaction work.</P>\n\n\n<P>\n  <a href=\"tel:+2348066053162\">\n    <ion-button expand=\"block\" class=\"ion-padding\"> <ion-icon slot=\"start\" name=\"call-outline\"></ion-icon><p>Call US</p> </ion-button>\n</a>  </P>\n\n\n</ion-content>\n");

/***/ }),

/***/ "PdNq":
/*!***********************************!*\
  !*** ./src/app/coop/coop.page.ts ***!
  \***********************************/
/*! exports provided: CoopPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoopPage", function() { return CoopPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_coop_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./coop.page.html */ "Dksj");
/* harmony import */ var _coop_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./coop.page.scss */ "26Jz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CoopPage = class CoopPage {
    constructor() { }
    ngOnInit() {
    }
};
CoopPage.ctorParameters = () => [];
CoopPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-coop',
        template: _raw_loader_coop_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_coop_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CoopPage);



/***/ }),

/***/ "yEDV":
/*!*************************************!*\
  !*** ./src/app/coop/coop.module.ts ***!
  \*************************************/
/*! exports provided: CoopPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoopPageModule", function() { return CoopPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _coop_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coop-routing.module */ "DRZV");
/* harmony import */ var _coop_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coop.page */ "PdNq");







let CoopPageModule = class CoopPageModule {
};
CoopPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _coop_routing_module__WEBPACK_IMPORTED_MODULE_5__["CoopPageRoutingModule"]
        ],
        declarations: [_coop_page__WEBPACK_IMPORTED_MODULE_6__["CoopPage"]]
    })
], CoopPageModule);



/***/ })

}]);
//# sourceMappingURL=coop-coop-module.js.map