(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lodgwillservices-lodgwillservices-module"],{

/***/ "5XNO":
/*!*************************************************************!*\
  !*** ./src/app/lodgwillservices/lodgwillservices.module.ts ***!
  \*************************************************************/
/*! exports provided: LodgwillservicesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LodgwillservicesPageModule", function() { return LodgwillservicesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _lodgwillservices_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lodgwillservices-routing.module */ "guQR");
/* harmony import */ var _lodgwillservices_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lodgwillservices.page */ "IhAU");







let LodgwillservicesPageModule = class LodgwillservicesPageModule {
};
LodgwillservicesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _lodgwillservices_routing_module__WEBPACK_IMPORTED_MODULE_5__["LodgwillservicesPageRoutingModule"]
        ],
        declarations: [_lodgwillservices_page__WEBPACK_IMPORTED_MODULE_6__["LodgwillservicesPage"]]
    })
], LodgwillservicesPageModule);



/***/ }),

/***/ "IhAU":
/*!***********************************************************!*\
  !*** ./src/app/lodgwillservices/lodgwillservices.page.ts ***!
  \***********************************************************/
/*! exports provided: LodgwillservicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LodgwillservicesPage", function() { return LodgwillservicesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lodgwillservices_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lodgwillservices.page.html */ "xXQ3");
/* harmony import */ var _lodgwillservices_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lodgwillservices.page.scss */ "wkjA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");






let LodgwillservicesPage = class LodgwillservicesPage {
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
        var url = 'https://paystack.com/pay/lm98-e1s9b';
        var options = {
            zoom: 'no',
            location: 'no',
            footer: 'yes',
            footercolor: '#ffffff',
            closebuttoncaption: 'Close',
            fullscreen: 'no',
            closebuttoncolor: '#023e8a'
        };
        this.browser.create(url, '_blank', options);
    }
    openBrowserhideaddress() {
        var url = 'https://fbiforms.web.app/PracticeAreas/Businessname/IndexhideAddress.html';
        var options = {
            zoom: 'no',
            location: 'no',
            footer: 'yes',
            footercolor: '#ffffff',
            closebuttoncaption: 'Close',
            fullscreen: 'no',
            closebuttoncolor: '#023e8a'
        };
        this.browser.create(url, '_blank', options);
    }
};
LodgwillservicesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"] }
];
LodgwillservicesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-lodgwillservices',
        template: _raw_loader_lodgwillservices_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lodgwillservices_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LodgwillservicesPage);



/***/ }),

/***/ "guQR":
/*!*********************************************************************!*\
  !*** ./src/app/lodgwillservices/lodgwillservices-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: LodgwillservicesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LodgwillservicesPageRoutingModule", function() { return LodgwillservicesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _lodgwillservices_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lodgwillservices.page */ "IhAU");




const routes = [
    {
        path: '',
        component: _lodgwillservices_page__WEBPACK_IMPORTED_MODULE_3__["LodgwillservicesPage"]
    }
];
let LodgwillservicesPageRoutingModule = class LodgwillservicesPageRoutingModule {
};
LodgwillservicesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LodgwillservicesPageRoutingModule);



/***/ }),

/***/ "wkjA":
/*!*************************************************************!*\
  !*** ./src/app/lodgwillservices/lodgwillservices.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #023e8a !important;\n}\n\nion-back-button {\n  --color: white !important;\n}\n\nion-icon {\n  color: white !important;\n}\n\n.element {\n  transform: translateY(-20px);\n}\n\np {\n  font-family: OpenSans;\n}\n\nh1 {\n  font-family: OpenSans-Bold;\n}\n\n/* DOES NOT WORK - not specific enough */\n\n.alert-wrapper {\n  background: #e5e5e5;\n}\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\n.my-custom-class {\n  background: #e5e5e5;\n}\n\ndiv > img {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZGd3aWxsc2VydmljZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtBQUNGOztBQUVBO0VBRUUsNEJBQUE7QUFBRjs7QUFJQTtFQUNFLHFCQUFBO0FBREY7O0FBS0E7RUFFRSwwQkFBQTtBQUhGOztBQU1BLHdDQUFBOztBQUNBO0VBQ0UsbUJBQUE7QUFIRjs7QUFLQSx1RUFBQTs7QUFDQTtFQUNFLG1CQUFBO0FBRkY7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUhGIiwiZmlsZSI6ImxvZGd3aWxsc2VydmljZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogIzAyM2U4YSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tYmFjay1idXR0b257XHJcbiAgLS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmVsZW1lbnQge1xyXG5cclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG59XHJcblxyXG5cclxucHtcclxuICBmb250LWZhbWlseTpPcGVuU2FucztcclxuXHJcbn1cclxuXHJcbmgxXHJcbntcclxuICBmb250LWZhbWlseTpPcGVuU2Fucy1Cb2xkO1xyXG59XHJcblxyXG4vKiBET0VTIE5PVCBXT1JLIC0gbm90IHNwZWNpZmljIGVub3VnaCAqL1xyXG4uYWxlcnQtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcclxufVxyXG4vKiBXb3JrcyAtIHBhc3MgXCJteS1jdXN0b20tY2xhc3NcIiBpbiBjc3NDbGFzcyB0byBpbmNyZWFzZSBzcGVjaWZpY2l0eSAqL1xyXG4ubXktY3VzdG9tLWNsYXNze1xyXG4gIGJhY2tncm91bmQ6ICNlNWU1ZTU7XHJcbn1cclxuXHJcblxyXG5kaXYgPiBpbWd7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "xXQ3":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lodgwillservices/lodgwillservices.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-header>\n  <ion-toolbar> <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/folder\"></ion-back-button>\n  </ion-buttons>\n  <ion-buttons slot=\"end\" (Click)=\"openBrowser()\">\n\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <img src=\"/assets/images/svg.png\" alt=\"\" srcset=\"\">\n\n  <ion-grid> <ion-row>\n    <ion-col>\n    </ion-col>\n    <ion-col>\n      <div class=\"element\"><img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\" ></div>\n\n    </ion-col>\n    <ion-col>\n    </ion-col>\n  </ion-row>\n\n\n</ion-grid>\n\n<h1 style=\"text-align: center;\">LODGEMENT OF WILL</h1>\n<P style=\"font-size: 15px; padding-left: 20px; padding-right: 20px;\">Lodgement of Will refers to the process of depositing the Will with the Probate and in the jurisdiction where the testator/testatrix lived or died.</P>\n\n<P style=\"font-size: 15px; padding-left: 20px; padding-right: 20px;\">We will lodge your Will adequately & in record time, before the appropriate probate court, which has jurisdiction.</P>\n<h2 style=\"text-align:center;\">Requirements</h2>\n<P style=\"font-size: 15px; padding-left: 20px; padding-right: 20px;\">Please choose the kind of Will you want to lodge. A detached Will, is any Will left by a Testator/Testatrix who is deceased.\n  <br> <br>\n  While the Ordinary Will, is a Will left by a Testator/Testatrix, who is alive.\n  <br> <br>\n  <ion-button expand=\"block\" class=\"ion-padding\" [routerLink]=\"['/lodgedetachwill']\" class=\"routes\" > <ion-icon slot=\"start\" name=\"cart-outline\"></ion-icon> <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon> <p>lodge detached Will</p> </ion-button>\n\n  <br><ion-button expand=\"block\" class=\"ion-padding\" [routerLink]=\"['/lodgedetachwill']\" class=\"routes\" > <ion-icon slot=\"start\" name=\"cart-outline\"></ion-icon> <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon> <p>lodge Ordinary Will</p> </ion-button>\n\n</P>\n\n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=lodgwillservices-lodgwillservices-module.js.map