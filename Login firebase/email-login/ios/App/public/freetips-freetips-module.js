(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["freetips-freetips-module"],{

/***/ "K5Sj":
/*!*********************************************!*\
  !*** ./src/app/freetips/freetips.module.ts ***!
  \*********************************************/
/*! exports provided: FreetipsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreetipsPageModule", function() { return FreetipsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _freetips_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./freetips-routing.module */ "kqml");
/* harmony import */ var _freetips_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./freetips.page */ "lwMQ");







let FreetipsPageModule = class FreetipsPageModule {
};
FreetipsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _freetips_routing_module__WEBPACK_IMPORTED_MODULE_5__["FreetipsPageRoutingModule"]
        ],
        declarations: [_freetips_page__WEBPACK_IMPORTED_MODULE_6__["FreetipsPage"]]
    })
], FreetipsPageModule);



/***/ }),

/***/ "kqml":
/*!*****************************************************!*\
  !*** ./src/app/freetips/freetips-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: FreetipsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreetipsPageRoutingModule", function() { return FreetipsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _freetips_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./freetips.page */ "lwMQ");




const routes = [
    {
        path: '',
        component: _freetips_page__WEBPACK_IMPORTED_MODULE_3__["FreetipsPage"]
    }
];
let FreetipsPageRoutingModule = class FreetipsPageRoutingModule {
};
FreetipsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FreetipsPageRoutingModule);



/***/ }),

/***/ "lwMQ":
/*!*******************************************!*\
  !*** ./src/app/freetips/freetips.page.ts ***!
  \*******************************************/
/*! exports provided: FreetipsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreetipsPage", function() { return FreetipsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_freetips_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./freetips.page.html */ "m1nq");
/* harmony import */ var _freetips_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./freetips.page.scss */ "ou1a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let FreetipsPage = class FreetipsPage {
    constructor() { }
    ngOnInit() {
    }
};
FreetipsPage.ctorParameters = () => [];
FreetipsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-freetips',
        template: _raw_loader_freetips_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_freetips_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FreetipsPage);



/***/ }),

/***/ "m1nq":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/freetips/freetips.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar> <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/folder\"></ion-back-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <img src=\"/assets/images/svg.png\" alt=\"\" srcset=\"\">\n\n  <ion-grid> <ion-row>\n    <ion-col>\n    </ion-col>\n    <ion-col>\n      <div class=\"element\"><img src=\"/assets/images/iconmonstr-help-2-240.png\"></div>\n\n    </ion-col>\n    <ion-col>\n    </ion-col>\n  </ion-row>\n\n\n</ion-grid>\n<div style=\"padding-left: 20px; padding-right: 20px;\">\n  <h1 style=\"text-align: center;\">FREE LEGAL TIPS</h1>\n  <H5 style=\"text-align: center;\">1. Never Sign Anything Without Getting a Copy</H5>\n\n  <p>A huge majority of these cases would be resolved if every client had a copy of the agreement that they signed. When they do, we are able to clearly point out to the other party what they are obligated to do under the contract and they are much more willing to step up and do it. Save yourself potential thousands of Naira and up to several years in court by asking for a copy, or if that’s not convenient, quickly snapping a picture of every document you ever sign.</p>\n\n  <H5 style=\"text-align: center;\">2. Don’t Delay, Create a Will or Trust</H5>\n\n  <p>\n    No matter what stage of life you are in, everyone needs some form of a Will, trust, or estate plan. In our practice, we see that life is fragile, and families are so grateful to know the wishes of the deceased when any death, expected or not, occurs. Even if you don’t have a lot of assets, everyone should have in place a document outlining their wishes upon their death, including the guardianship of minor children, the distribution of personal items, and the management or care of pets, property, or anything else for which they are responsible.\n  </p>\n  <H5 style=\"text-align: center;\">3.  Don’t Admit Liability Until You Talk to a lawyer</H5>\n  <p>\n    One unfortunate fact of life is that what you say under the stress of a particular moment very often comes back to haunt you. We have clients every day that find themselves on the hook for much more than they should be, simply because they spoke rashly without realizing the legal ramifications. In the event that there is an accident or that an individual or company claims that you acted wrongly, it is ok to simply remain silent and, if necessary, wait until you are able to speak to an attorney.\n  </p>\n\n  <P>\n    <a href=\"tel:+2348066053162\">\n      <ion-button expand=\"block\" class=\"ion-padding\"> <ion-icon slot=\"start\" name=\"call-outline\"></ion-icon><p>Call US</p> </ion-button>\n  </a>  </P>\n\n</div>\n\n</ion-content>\n");

/***/ }),

/***/ "ou1a":
/*!*********************************************!*\
  !*** ./src/app/freetips/freetips.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #023e8a !important;\n}\n\nion-back-button {\n  --color: white !important;\n}\n\n.element {\n  transform: translateY(-20px);\n}\n\np {\n  font-family: OpenSans;\n}\n\nh1 {\n  font-family: OpenSans-Bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZyZWV0aXBzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUdBO0VBRUUsNEJBQUE7QUFERjs7QUFLQTtFQUNFLHFCQUFBO0FBRkY7O0FBTUE7RUFFRSwwQkFBQTtBQUpGIiwiZmlsZSI6ImZyZWV0aXBzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6ICMwMjNlOGEgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWJhY2stYnV0dG9ue1xyXG4gIC0tY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uZWxlbWVudCB7XHJcblxyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XHJcbn1cclxuXHJcblxyXG5we1xyXG4gIGZvbnQtZmFtaWx5Ok9wZW5TYW5zO1xyXG5cclxufVxyXG5cclxuaDFcclxue1xyXG4gIGZvbnQtZmFtaWx5Ok9wZW5TYW5zLUJvbGQ7XHJcbn1cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=freetips-freetips-module.js.map