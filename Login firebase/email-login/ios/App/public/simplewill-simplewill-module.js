(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["simplewill-simplewill-module"],{

/***/ "/3wN":
/*!*********************************************************!*\
  !*** ./src/app/simplewill/simplewill-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SimplewillPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplewillPageRoutingModule", function() { return SimplewillPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _simplewill_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simplewill.page */ "rCHn");




const routes = [
    {
        path: '',
        component: _simplewill_page__WEBPACK_IMPORTED_MODULE_3__["SimplewillPage"]
    }
];
let SimplewillPageRoutingModule = class SimplewillPageRoutingModule {
};
SimplewillPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SimplewillPageRoutingModule);



/***/ }),

/***/ "b9KB":
/*!*************************************************!*\
  !*** ./src/app/simplewill/simplewill.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #023e8a !important;\n}\n\nion-back-button {\n  --color: white !important;\n}\n\nion-icon {\n  color: white !important;\n}\n\n.element {\n  transform: translateY(-20px);\n}\n\np {\n  font-family: OpenSans;\n}\n\nh1 {\n  font-family: OpenSans-Bold;\n}\n\n/* DOES NOT WORK - not specific enough */\n\n.alert-wrapper {\n  background: #e5e5e5;\n}\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\n.my-custom-class {\n  background: #e5e5e5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNpbXBsZXdpbGwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtBQUNGOztBQUVBO0VBRUUsNEJBQUE7QUFBRjs7QUFJQTtFQUNFLHFCQUFBO0FBREY7O0FBS0E7RUFFRSwwQkFBQTtBQUhGOztBQU1BLHdDQUFBOztBQUNBO0VBQ0UsbUJBQUE7QUFIRjs7QUFLQSx1RUFBQTs7QUFDQTtFQUNFLG1CQUFBO0FBRkYiLCJmaWxlIjoic2ltcGxld2lsbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMDIzZThhICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1iYWNrLWJ1dHRvbntcclxuICAtLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZWxlbWVudCB7XHJcblxyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XHJcbn1cclxuXHJcblxyXG5we1xyXG4gIGZvbnQtZmFtaWx5Ok9wZW5TYW5zO1xyXG5cclxufVxyXG5cclxuaDFcclxue1xyXG4gIGZvbnQtZmFtaWx5Ok9wZW5TYW5zLUJvbGQ7XHJcbn1cclxuXHJcbi8qIERPRVMgTk9UIFdPUksgLSBub3Qgc3BlY2lmaWMgZW5vdWdoICovXHJcbi5hbGVydC13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xyXG59XHJcbi8qIFdvcmtzIC0gcGFzcyBcIm15LWN1c3RvbS1jbGFzc1wiIGluIGNzc0NsYXNzIHRvIGluY3JlYXNlIHNwZWNpZmljaXR5ICovXHJcbi5teS1jdXN0b20tY2xhc3N7XHJcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "l0bU":
/*!*************************************************!*\
  !*** ./src/app/simplewill/simplewill.module.ts ***!
  \*************************************************/
/*! exports provided: SimplewillPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplewillPageModule", function() { return SimplewillPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _simplewill_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./simplewill-routing.module */ "/3wN");
/* harmony import */ var _simplewill_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./simplewill.page */ "rCHn");







let SimplewillPageModule = class SimplewillPageModule {
};
SimplewillPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _simplewill_routing_module__WEBPACK_IMPORTED_MODULE_5__["SimplewillPageRoutingModule"]
        ],
        declarations: [_simplewill_page__WEBPACK_IMPORTED_MODULE_6__["SimplewillPage"]]
    })
], SimplewillPageModule);



/***/ }),

/***/ "ncME":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/simplewill/simplewill.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-header>\n  <ion-toolbar> <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/folder\"></ion-back-button>\n  </ion-buttons>\n  <ion-buttons slot=\"end\" >\n\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <img src=\"/assets/images/svg.png\" alt=\"\" srcset=\"\">\n\n  <ion-grid> <ion-row>\n    <ion-col>\n    </ion-col>\n    <ion-col>\n      <div class=\"element\"><img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\" ></div>\n\n    </ion-col>\n    <ion-col>\n    </ion-col>\n  </ion-row>\n\n\n</ion-grid>\n\n<h1 style=\"text-align: center;\">SIMPLE WILL</h1>\n<P style=\"font-size: 15px; padding-left: 20px; padding-right: 20px;\"> Before you make this Will, please note these 5 salient points: <br><br>\n\n  1. Making  this Will automatically cancels any former Will you must have made anywhere and at any time.<br><br>\n\n  2. Availability of executors at the same place and time is the secret to a fast execution of Will. For this reason we have suggested our Solicitors as Executors and your family members as Alternate Executors to ensure transparency and speed.<br><br>\n\n  3. Treat your Will discreetly and confidentially. It is not for public consumption.<br><br>\n\n  4. We will issue you a Probate Certificate once you deposit your Will with us as evidence that your Will is in our custody.<br><br>\n\n  5. If you keep custody of your Will by yourself after signing it, who will execute it? It is safe to keep custody of your Will at the Probate or with your Lawyer.<br><br>\n\n  6. If you have lived a complicated lifestyle, own a very large estate or business, need additional professional Executors, appoint your own Executors, disinherit any of your beneficiaries,  please give us a call. We will consider your peculiar circumstance(s) and tailor a befitting Will for you.<br><br>\n\n  7. Our goal is to ensure that all Nigerians can get a Will from any part of the world and without breaking the bank</P>\n\n\n\n\n\n\n<P style=\"font-size: 15px; padding-left: 20px; padding-right: 20px;\">\n  <br>\n  <ion-button expand=\"block\" class=\"ion-padding\" (click)=\"openPage()\"> <ion-icon slot=\"start\" name=\"cart-outline\"></ion-icon> <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon> <p>Sole Executor Will</p> </ion-button>\n  <br>\n  <ion-button expand=\"block\" class=\"ion-padding\" (click)=\"SecondPage()\"> <ion-icon slot=\"start\" name=\"cart-outline\"></ion-icon> <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon> <p>Co Executor Will</p> </ion-button>\n\n\n</P>\n\n\n\n</ion-content>\n\n");

/***/ }),

/***/ "rCHn":
/*!***********************************************!*\
  !*** ./src/app/simplewill/simplewill.page.ts ***!
  \***********************************************/
/*! exports provided: SimplewillPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplewillPage", function() { return SimplewillPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_simplewill_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./simplewill.page.html */ "ncME");
/* harmony import */ var _simplewill_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simplewill.page.scss */ "b9KB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "gcOT");





const { Browser } = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"];
let SimplewillPage = class SimplewillPage {
    //alert controller
    constructor() {
        Browser.addListener('browserPageLoaded', () => {
            console.log('browserPageloaded event called');
        });
        Browser.addListener('browserFinished', () => {
            console.log('browserFinished event called');
        });
        Browser.prefetch({
            urls: ['https://paystack.com/pay/s7ynxx6svy']
        });
    }
    openPage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Browser.open({ toolbarColor: "#023e8a", url: 'https://paystack.com/pay/s7ynxx6svy' });
        });
    }
    SecondPage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Browser.open({ toolbarColor: "#023e8a", url: 'https://paystack.com/pay/wvi-b09sgu' });
        });
    }
};
SimplewillPage.ctorParameters = () => [];
SimplewillPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-simplewill',
        template: _raw_loader_simplewill_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_simplewill_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SimplewillPage);



/***/ })

}]);
//# sourceMappingURL=simplewill-simplewill-module.js.map