(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lettersofadministration-lettersofadministration-module"],{

/***/ "+b+a":
/*!***************************************************************************!*\
  !*** ./src/app/lettersofadministration/lettersofadministration.module.ts ***!
  \***************************************************************************/
/*! exports provided: LettersofadministrationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LettersofadministrationPageModule", function() { return LettersofadministrationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _lettersofadministration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lettersofadministration-routing.module */ "GjUi");
/* harmony import */ var _lettersofadministration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lettersofadministration.page */ "Wa9R");







let LettersofadministrationPageModule = class LettersofadministrationPageModule {
};
LettersofadministrationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _lettersofadministration_routing_module__WEBPACK_IMPORTED_MODULE_5__["LettersofadministrationPageRoutingModule"]
        ],
        declarations: [_lettersofadministration_page__WEBPACK_IMPORTED_MODULE_6__["LettersofadministrationPage"]]
    })
], LettersofadministrationPageModule);



/***/ }),

/***/ "7Gjg":
/*!***************************************************************************!*\
  !*** ./src/app/lettersofadministration/lettersofadministration.page.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #023e8a !important;\n}\n\nion-back-button {\n  --color: white !important;\n}\n\n.element {\n  transform: translateY(-20px);\n}\n\np {\n  font-family: OpenSans;\n}\n\nh1 {\n  font-family: OpenSans-Bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxldHRlcnNvZmFkbWluaXN0cmF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUdBO0VBRUUsNEJBQUE7QUFERjs7QUFLQTtFQUNFLHFCQUFBO0FBRkY7O0FBTUE7RUFFRSwwQkFBQTtBQUpGIiwiZmlsZSI6ImxldHRlcnNvZmFkbWluaXN0cmF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6ICMwMjNlOGEgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWJhY2stYnV0dG9ue1xyXG4gIC0tY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uZWxlbWVudCB7XHJcblxyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XHJcbn1cclxuXHJcblxyXG5we1xyXG4gIGZvbnQtZmFtaWx5Ok9wZW5TYW5zO1xyXG5cclxufVxyXG5cclxuaDFcclxue1xyXG4gIGZvbnQtZmFtaWx5Ok9wZW5TYW5zLUJvbGQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "GjUi":
/*!***********************************************************************************!*\
  !*** ./src/app/lettersofadministration/lettersofadministration-routing.module.ts ***!
  \***********************************************************************************/
/*! exports provided: LettersofadministrationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LettersofadministrationPageRoutingModule", function() { return LettersofadministrationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _lettersofadministration_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lettersofadministration.page */ "Wa9R");




const routes = [
    {
        path: '',
        component: _lettersofadministration_page__WEBPACK_IMPORTED_MODULE_3__["LettersofadministrationPage"]
    }
];
let LettersofadministrationPageRoutingModule = class LettersofadministrationPageRoutingModule {
};
LettersofadministrationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LettersofadministrationPageRoutingModule);



/***/ }),

/***/ "Wa9R":
/*!*************************************************************************!*\
  !*** ./src/app/lettersofadministration/lettersofadministration.page.ts ***!
  \*************************************************************************/
/*! exports provided: LettersofadministrationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LettersofadministrationPage", function() { return LettersofadministrationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lettersofadministration_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lettersofadministration.page.html */ "qH2p");
/* harmony import */ var _lettersofadministration_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lettersofadministration.page.scss */ "7Gjg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");





let LettersofadministrationPage = class LettersofadministrationPage {
    // Code for the InappBrowser
    constructor(browser) {
        this.browser = browser;
    }
    ngOnInit() {
    }
    openBrowser() {
        var url = 'https://fbiforms.web.app/PracticeAreas/Letters%20of%20Administration/';
        var options = {
            zoom: 'no',
            hardwareback: 'yes',
            hideurlbar: 'yes',
            hidenavigationbuttons: 'yes',
            location: 'yes',
            toolbarcolor: '#023e8a',
            fullscreen: 'no',
            footer: 'yes',
            footercolor: '#ffffff',
            closebuttoncaption: 'Close',
            closebuttoncolor: '#023e8a'
        };
        this.browser.create(url, '_blank', options);
    }
};
LettersofadministrationPage.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"] }
];
LettersofadministrationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-lettersofadministration',
        template: _raw_loader_lettersofadministration_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lettersofadministration_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LettersofadministrationPage);



/***/ }),

/***/ "qH2p":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lettersofadministration/lettersofadministration.page.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n  <ion-toolbar> <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/folder\"></ion-back-button>\n  </ion-buttons>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <img src=\"/assets/images/svg.png\" alt=\"\" srcset=\"\">\n\n<h1 style=\"text-align: center;\">Letters of Administration</h1>\n<P style=\"font-size: 15px; padding-left: 20px; padding-right: 20px;\">It is always a difficult and disappointing moment for beneficiaries and dependents of the deceased when they are asked to get Letters of Administration before they can claim the monies or assets the deceased left behind in the bank or with the Pension Fund Administrators.</P>\n\n\n\n<P style=\"font-size: 15px; padding-left: 20px; padding-right: 20px;\">Some may even want to sell off the property of the deceased in order to temporarily sustain themselves but only to find it difficult to get a serious buyer because they cannot pass a valid title to the buyer without the Letters of Administration or Grant of Probate as the case may be.</P>\n\n<P style=\"font-size: 15px; padding-left: 20px; padding-right: 20px;\">It can take years before they obtain the Letters of Administration and receive the said death benefits or monies in bank if they choose to do it themselves and not seek expert advice. <br><br>\n  <ion-button expand=\"block\" class=\"ion-padding\" (click)=\"openBrowser()\"> <ion-icon slot=\"start\" name=\"cart-outline\"></ion-icon> <p>APPLY FOR THE LETTERS</p> </ion-button>\n  <br>\n</P>\n\n\n\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=lettersofadministration-lettersofadministration-module.js.map