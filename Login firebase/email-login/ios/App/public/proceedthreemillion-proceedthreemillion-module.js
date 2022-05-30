(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["proceedthreemillion-proceedthreemillion-module"],{

/***/ "KAp5":
/*!***************************************************************************!*\
  !*** ./src/app/proceedthreemillion/proceedthreemillion-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ProceedthreemillionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProceedthreemillionPageRoutingModule", function() { return ProceedthreemillionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _proceedthreemillion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proceedthreemillion.page */ "zUN+");




const routes = [
    {
        path: '',
        component: _proceedthreemillion_page__WEBPACK_IMPORTED_MODULE_3__["ProceedthreemillionPage"]
    }
];
let ProceedthreemillionPageRoutingModule = class ProceedthreemillionPageRoutingModule {
};
ProceedthreemillionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProceedthreemillionPageRoutingModule);



/***/ }),

/***/ "dSNI":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proceedthreemillion/proceedthreemillion.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-header>\n  <ion-toolbar> <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/folder\"></ion-back-button>\n  </ion-buttons>\n  <ion-buttons slot=\"end\" >\n    <ion-icon slot=\"start\" name=\"information-circle\" (click)=\"showAlert()\"></ion-icon>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <img src=\"/assets/images/svg.png\" alt=\"\" srcset=\"\">\n\n  <ion-grid> <ion-row>\n    <ion-col>\n    </ion-col>\n    <ion-col>\n      <div class=\"element\"><img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\" ></div>\n\n    </ion-col>\n    <ion-col>\n    </ion-col>\n  </ion-row>\n\n\n</ion-grid>\n\n<h2 style=\"text-align: center;\">Hide Office Address from the public</h2>\n\n\n<p class=\"ion-padding\">\n  <ion-button expand=\"block\" class=\"ion-padding\" (click)=\"openBrowserhideaddress()\" class=\"routes\"> <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon> <p>Yes</p> </ion-button>\n  <br>\n\n  <ion-button expand=\"block\" class=\"ion-padding\" (click)=\"openBrowser()\" class=\"routes\"> <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon> <p>No</p> </ion-button>\n  <br>\n</p>\n\n</ion-content>\n\n");

/***/ }),

/***/ "nh2q":
/*!*******************************************************************!*\
  !*** ./src/app/proceedthreemillion/proceedthreemillion.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #023e8a !important;\n}\n\nion-back-button {\n  --color: white !important;\n}\n\nion-icon {\n  color: white !important;\n}\n\n.element {\n  transform: translateY(-20px);\n}\n\np {\n  font-family: OpenSans;\n}\n\nh1 {\n  font-family: OpenSans-Bold;\n}\n\n/* DOES NOT WORK - not specific enough */\n\n.alert-wrapper {\n  background: #e5e5e5;\n}\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\n.my-custom-class {\n  background: #e5e5e5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2NlZWR0aHJlZW1pbGxpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtBQUNGOztBQUVBO0VBRUUsNEJBQUE7QUFBRjs7QUFJQTtFQUNFLHFCQUFBO0FBREY7O0FBS0E7RUFFRSwwQkFBQTtBQUhGOztBQU1BLHdDQUFBOztBQUNBO0VBQ0UsbUJBQUE7QUFIRjs7QUFLQSx1RUFBQTs7QUFDQTtFQUNFLG1CQUFBO0FBRkYiLCJmaWxlIjoicHJvY2VlZHRocmVlbWlsbGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMDIzZThhICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1iYWNrLWJ1dHRvbntcclxuICAtLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24taWNvbiB7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZWxlbWVudCB7XHJcblxyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XHJcbn1cclxuXHJcblxyXG5we1xyXG4gIGZvbnQtZmFtaWx5Ok9wZW5TYW5zO1xyXG5cclxufVxyXG5cclxuaDFcclxue1xyXG4gIGZvbnQtZmFtaWx5Ok9wZW5TYW5zLUJvbGQ7XHJcbn1cclxuXHJcbi8qIERPRVMgTk9UIFdPUksgLSBub3Qgc3BlY2lmaWMgZW5vdWdoICovXHJcbi5hbGVydC13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xyXG59XHJcbi8qIFdvcmtzIC0gcGFzcyBcIm15LWN1c3RvbS1jbGFzc1wiIGluIGNzc0NsYXNzIHRvIGluY3JlYXNlIHNwZWNpZmljaXR5ICovXHJcbi5teS1jdXN0b20tY2xhc3N7XHJcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "wYz9":
/*!*******************************************************************!*\
  !*** ./src/app/proceedthreemillion/proceedthreemillion.module.ts ***!
  \*******************************************************************/
/*! exports provided: ProceedthreemillionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProceedthreemillionPageModule", function() { return ProceedthreemillionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _proceedthreemillion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./proceedthreemillion-routing.module */ "KAp5");
/* harmony import */ var _proceedthreemillion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./proceedthreemillion.page */ "zUN+");







let ProceedthreemillionPageModule = class ProceedthreemillionPageModule {
};
ProceedthreemillionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _proceedthreemillion_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProceedthreemillionPageRoutingModule"]
        ],
        declarations: [_proceedthreemillion_page__WEBPACK_IMPORTED_MODULE_6__["ProceedthreemillionPage"]]
    })
], ProceedthreemillionPageModule);



/***/ }),

/***/ "zUN+":
/*!*****************************************************************!*\
  !*** ./src/app/proceedthreemillion/proceedthreemillion.page.ts ***!
  \*****************************************************************/
/*! exports provided: ProceedthreemillionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProceedthreemillionPage", function() { return ProceedthreemillionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_proceedthreemillion_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./proceedthreemillion.page.html */ "dSNI");
/* harmony import */ var _proceedthreemillion_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proceedthreemillion.page.scss */ "nh2q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");






let ProceedthreemillionPage = class ProceedthreemillionPage {
    //alert controller
    constructor(alertController, browser) {
        this.alertController = alertController;
        this.browser = browser;
    }
    ngOnInit() {
    }
    showAlert() {
        this.alertController.create({
            header: 'Hide Company Address from the public',
            cssClass: 'my-custom-class',
            subHeader: 'Do you want your Companies Residential address to be Private ?',
            message: 'If Yes, this attracts an Additional N30,000 Naira',
            buttons: ['OK']
        }).then(res => {
            res.present();
        });
    }
    openBrowser() {
        var url = 'https://paystack.com/pay/bh9v14g8m2';
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
    openBrowserhideaddress() {
        var url = 'https://paystack.com/pay/oderc6x10w';
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
ProceedthreemillionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"] }
];
ProceedthreemillionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-proceedthreemillion',
        template: _raw_loader_proceedthreemillion_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_proceedthreemillion_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProceedthreemillionPage);



/***/ })

}]);
//# sourceMappingURL=proceedthreemillion-proceedthreemillion-module.js.map