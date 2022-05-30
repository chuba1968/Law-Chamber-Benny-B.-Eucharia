(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["partners-partners-module"],{

/***/ "IDru":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partners/partners.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n  <ion-toolbar> <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/folder\"></ion-back-button>\n  </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <img src=\"/assets/images/svg.png\" alt=\"\" srcset=\"\">\n\n  <ion-grid> <ion-row>\n    <ion-col>\n    </ion-col>\n    <ion-col>\n      <div class=\"element\"><img src=\"/assets/images/iconmonstr-user-29-240 (1).png\" ></div>\n\n    </ion-col>\n    <ion-col>\n    </ion-col>\n  </ion-row>\n\n\n</ion-grid>\n\n<ion-list [routerLink]=\"['/bennybonny']\" class=\"routes\">\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"/assets/images/iconmonstr-id-card-4-240.png\">\n    </ion-thumbnail>\n    <ion-label>\n      <h3>Eucharia BennyBonny </h3>\n      <p>Managing Partner</p>\n    </ion-label>\n  </ion-item>\n  </ion-list>\n  <br>\n  <ion-list [routerLink]=\"['/nnamdi']\" class=\"routes\">\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"/assets/images/iconmonstr-id-card-3-240 (1).png\">\n    </ion-thumbnail>\n    <ion-label>\n      <h3>Nnamdi Benjamin Azikwe</h3>\n      <p>Associate</p>\n    </ion-label>\n  </ion-item>\n</ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "hsdL":
/*!*******************************************!*\
  !*** ./src/app/partners/partners.page.ts ***!
  \*******************************************/
/*! exports provided: PartnersPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnersPage", function() { return PartnersPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_partners_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./partners.page.html */ "IDru");
/* harmony import */ var _partners_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./partners.page.scss */ "qyw1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");





let PartnersPage = class PartnersPage {
    constructor(browser) {
        this.browser = browser;
    }
    ngOnInit() {
    }
    openBrowser() {
        var url = 'https://evasupermax.com.ng/word/';
        var options = {
            zoom: 'no',
            location: 'no'
        };
        this.browser.create(url, '_blank', options);
    }
};
PartnersPage.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"] }
];
PartnersPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-partners',
        template: _raw_loader_partners_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_partners_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PartnersPage);



/***/ }),

/***/ "pDGo":
/*!*****************************************************!*\
  !*** ./src/app/partners/partners-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PartnersPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnersPageRoutingModule", function() { return PartnersPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _partners_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partners.page */ "hsdL");




const routes = [
    {
        path: '',
        component: _partners_page__WEBPACK_IMPORTED_MODULE_3__["PartnersPage"]
    }
];
let PartnersPageRoutingModule = class PartnersPageRoutingModule {
};
PartnersPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PartnersPageRoutingModule);



/***/ }),

/***/ "qHMa":
/*!*********************************************!*\
  !*** ./src/app/partners/partners.module.ts ***!
  \*********************************************/
/*! exports provided: PartnersPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartnersPageModule", function() { return PartnersPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _partners_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./partners-routing.module */ "pDGo");
/* harmony import */ var _partners_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./partners.page */ "hsdL");







let PartnersPageModule = class PartnersPageModule {
};
PartnersPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _partners_routing_module__WEBPACK_IMPORTED_MODULE_5__["PartnersPageRoutingModule"]
        ],
        declarations: [_partners_page__WEBPACK_IMPORTED_MODULE_6__["PartnersPage"]]
    })
], PartnersPageModule);



/***/ }),

/***/ "qyw1":
/*!*********************************************!*\
  !*** ./src/app/partners/partners.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #023e8a !important;\n}\n\nion-back-button {\n  --color: white !important;\n}\n\n.element {\n  transform: translateY(-20px);\n}\n\np {\n  font-family: OpenSans;\n}\n\nh1 {\n  font-family: OpenSans-Bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBhcnRuZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUdBO0VBRUUsNEJBQUE7QUFERjs7QUFLQTtFQUNFLHFCQUFBO0FBRkY7O0FBTUE7RUFFRSwwQkFBQTtBQUpGIiwiZmlsZSI6InBhcnRuZXJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6ICMwMjNlOGEgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWJhY2stYnV0dG9ue1xyXG4gIC0tY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uZWxlbWVudCB7XHJcblxyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XHJcbn1cclxuXHJcblxyXG5we1xyXG4gIGZvbnQtZmFtaWx5Ok9wZW5TYW5zO1xyXG5cclxufVxyXG5cclxuaDFcclxue1xyXG4gIGZvbnQtZmFtaWx5Ok9wZW5TYW5zLUJvbGQ7XHJcbn1cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=partners-partners-module.js.map