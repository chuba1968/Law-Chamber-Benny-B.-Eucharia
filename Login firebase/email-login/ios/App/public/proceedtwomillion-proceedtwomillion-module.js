(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["proceedtwomillion-proceedtwomillion-module"],{

/***/ "1nzL":
/*!***************************************************************!*\
  !*** ./src/app/proceedtwomillion/proceedtwomillion.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #023e8a !important;\n}\n\nion-back-button {\n  --color: white !important;\n}\n\nion-icon {\n  color: white !important;\n}\n\n.element {\n  transform: translateY(-20px);\n}\n\np {\n  font-family: OpenSans;\n}\n\nh1 {\n  font-family: OpenSans-Bold;\n}\n\n/* DOES NOT WORK - not specific enough */\n\n.alert-wrapper {\n  background: #e5e5e5;\n}\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\n.my-custom-class {\n  background: #e5e5e5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2NlZWR0d29taWxsaW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7QUFDRjs7QUFFQTtFQUVFLDRCQUFBO0FBQUY7O0FBSUE7RUFDRSxxQkFBQTtBQURGOztBQUtBO0VBRUUsMEJBQUE7QUFIRjs7QUFNQSx3Q0FBQTs7QUFDQTtFQUNFLG1CQUFBO0FBSEY7O0FBS0EsdUVBQUE7O0FBQ0E7RUFDRSxtQkFBQTtBQUZGIiwiZmlsZSI6InByb2NlZWR0d29taWxsaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6ICMwMjNlOGEgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWJhY2stYnV0dG9ue1xyXG4gIC0tY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5lbGVtZW50IHtcclxuXHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcclxufVxyXG5cclxuXHJcbnB7XHJcbiAgZm9udC1mYW1pbHk6T3BlblNhbnM7XHJcblxyXG59XHJcblxyXG5oMVxyXG57XHJcbiAgZm9udC1mYW1pbHk6T3BlblNhbnMtQm9sZDtcclxufVxyXG5cclxuLyogRE9FUyBOT1QgV09SSyAtIG5vdCBzcGVjaWZpYyBlbm91Z2ggKi9cclxuLmFsZXJ0LXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6ICNlNWU1ZTU7XHJcbn1cclxuLyogV29ya3MgLSBwYXNzIFwibXktY3VzdG9tLWNsYXNzXCIgaW4gY3NzQ2xhc3MgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgKi9cclxuLm15LWN1c3RvbS1jbGFzc3tcclxuICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "5UIQ":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proceedtwomillion/proceedtwomillion.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-header>\n  <ion-toolbar> <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/folder\"></ion-back-button>\n  </ion-buttons>\n  <ion-buttons slot=\"end\" >\n    <ion-icon slot=\"start\" name=\"information-circle\" (click)=\"showAlert()\"></ion-icon>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <img src=\"/assets/images/svg.png\" alt=\"\" srcset=\"\">\n\n  <ion-grid> <ion-row>\n    <ion-col>\n    </ion-col>\n    <ion-col>\n      <div class=\"element\"><img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\" ></div>\n\n    </ion-col>\n    <ion-col>\n    </ion-col>\n  </ion-row>\n\n\n</ion-grid>\n\n<h2 style=\"text-align: center;\">Hide Office Address from the public</h2>\n\n\n<p class=\"ion-padding\">\n  <ion-button expand=\"block\" class=\"ion-padding\" (click)=\"openBrowserhideaddress()\" class=\"routes\"> <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon> <p>Yes</p> </ion-button>\n  <br>\n\n  <ion-button expand=\"block\" class=\"ion-padding\" (click)=\"openBrowser()\" class=\"routes\"> <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon> <p>No</p> </ion-button>\n  <br>\n</p>\n\n</ion-content>\n\n");

/***/ }),

/***/ "SysH":
/*!***********************************************************************!*\
  !*** ./src/app/proceedtwomillion/proceedtwomillion-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: ProceedtwomillionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProceedtwomillionPageRoutingModule", function() { return ProceedtwomillionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _proceedtwomillion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proceedtwomillion.page */ "kRv/");




const routes = [
    {
        path: '',
        component: _proceedtwomillion_page__WEBPACK_IMPORTED_MODULE_3__["ProceedtwomillionPage"]
    }
];
let ProceedtwomillionPageRoutingModule = class ProceedtwomillionPageRoutingModule {
};
ProceedtwomillionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProceedtwomillionPageRoutingModule);



/***/ }),

/***/ "ZV0i":
/*!***************************************************************!*\
  !*** ./src/app/proceedtwomillion/proceedtwomillion.module.ts ***!
  \***************************************************************/
/*! exports provided: ProceedtwomillionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProceedtwomillionPageModule", function() { return ProceedtwomillionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _proceedtwomillion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./proceedtwomillion-routing.module */ "SysH");
/* harmony import */ var _proceedtwomillion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./proceedtwomillion.page */ "kRv/");







let ProceedtwomillionPageModule = class ProceedtwomillionPageModule {
};
ProceedtwomillionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _proceedtwomillion_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProceedtwomillionPageRoutingModule"]
        ],
        declarations: [_proceedtwomillion_page__WEBPACK_IMPORTED_MODULE_6__["ProceedtwomillionPage"]]
    })
], ProceedtwomillionPageModule);



/***/ }),

/***/ "kRv/":
/*!*************************************************************!*\
  !*** ./src/app/proceedtwomillion/proceedtwomillion.page.ts ***!
  \*************************************************************/
/*! exports provided: ProceedtwomillionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProceedtwomillionPage", function() { return ProceedtwomillionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_proceedtwomillion_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./proceedtwomillion.page.html */ "5UIQ");
/* harmony import */ var _proceedtwomillion_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proceedtwomillion.page.scss */ "1nzL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");






let ProceedtwomillionPage = class ProceedtwomillionPage {
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
        var url = 'https://paystack.com/pay/551ixr300w';
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
        var url = 'https://paystack.com/pay/76-d6n5i6a';
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
ProceedtwomillionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"] }
];
ProceedtwomillionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-proceedtwomillion',
        template: _raw_loader_proceedtwomillion_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_proceedtwomillion_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProceedtwomillionPage);



/***/ })

}]);
//# sourceMappingURL=proceedtwomillion-proceedtwomillion-module.js.map