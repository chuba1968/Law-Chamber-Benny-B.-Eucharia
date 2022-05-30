(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lodgedetachwill-lodgedetachwill-module"],{

/***/ "0zKx":
/*!*******************************************************************!*\
  !*** ./src/app/lodgedetachwill/lodgedetachwill-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: LodgedetachwillPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LodgedetachwillPageRoutingModule", function() { return LodgedetachwillPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _lodgedetachwill_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lodgedetachwill.page */ "tYw+");




const routes = [
    {
        path: '',
        component: _lodgedetachwill_page__WEBPACK_IMPORTED_MODULE_3__["LodgedetachwillPage"]
    }
];
let LodgedetachwillPageRoutingModule = class LodgedetachwillPageRoutingModule {
};
LodgedetachwillPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LodgedetachwillPageRoutingModule);



/***/ }),

/***/ "6BC9":
/*!***********************************************************!*\
  !*** ./src/app/lodgedetachwill/lodgedetachwill.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #023e8a !important;\n}\n\nion-back-button {\n  --color: white !important;\n}\n\nion-icon {\n  color: white !important;\n}\n\n.element {\n  transform: translateY(-20px);\n}\n\np {\n  font-family: OpenSans;\n}\n\nh1 {\n  font-family: OpenSans-Bold;\n}\n\n/* DOES NOT WORK - not specific enough */\n\n.alert-wrapper {\n  background: #e5e5e5;\n}\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\n.my-custom-class {\n  background: #e5e5e5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZGdlZGV0YWNod2lsbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFFRSw0QkFBQTtBQUFGOztBQUlBO0VBQ0UscUJBQUE7QUFERjs7QUFLQTtFQUVFLDBCQUFBO0FBSEY7O0FBTUEsd0NBQUE7O0FBQ0E7RUFDRSxtQkFBQTtBQUhGOztBQUtBLHVFQUFBOztBQUNBO0VBQ0UsbUJBQUE7QUFGRiIsImZpbGUiOiJsb2RnZWRldGFjaHdpbGwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogIzAyM2U4YSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tYmFjay1idXR0b257XHJcbiAgLS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmVsZW1lbnQge1xyXG5cclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG59XHJcblxyXG5cclxucHtcclxuICBmb250LWZhbWlseTpPcGVuU2FucztcclxuXHJcbn1cclxuXHJcbmgxXHJcbntcclxuICBmb250LWZhbWlseTpPcGVuU2Fucy1Cb2xkO1xyXG59XHJcblxyXG4vKiBET0VTIE5PVCBXT1JLIC0gbm90IHNwZWNpZmljIGVub3VnaCAqL1xyXG4uYWxlcnQtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcclxufVxyXG4vKiBXb3JrcyAtIHBhc3MgXCJteS1jdXN0b20tY2xhc3NcIiBpbiBjc3NDbGFzcyB0byBpbmNyZWFzZSBzcGVjaWZpY2l0eSAqL1xyXG4ubXktY3VzdG9tLWNsYXNze1xyXG4gIGJhY2tncm91bmQ6ICNlNWU1ZTU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "8Lvo":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/lodgedetachwill/lodgedetachwill.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-header>\n  <ion-toolbar> <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/folder\"></ion-back-button>\n  </ion-buttons>\n  <ion-buttons slot=\"end\" (Click)=\"openBrowser()\">\n\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <img src=\"/assets/images/svg.png\" alt=\"\" srcset=\"\">\n\n  <ion-grid> <ion-row>\n    <ion-col>\n    </ion-col>\n    <ion-col>\n      <div class=\"element\"><img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\" ></div>\n\n    </ion-col>\n    <ion-col>\n    </ion-col>\n  </ion-row>\n\n\n</ion-grid>\n\n<h1 style=\"text-align: center;\">LODGE DETACHED WILL</h1>\n<P style=\"font-size: 15px; padding-left: 20px; padding-right: 20px;\">A Detached Will is a Will lodged with or stored at the Probate after the death of the testator/testatrix. An Ordinary Will is the Will lodged at the Probate during the lifetime of the testator/testatrix.</P>\n\n<P style=\"font-size: 15px; padding-left: 20px; padding-right: 20px;\">\n\n</P>\n<h2 style=\"text-align:center;\">Requirements</h2>\n\n<P style=\"font-size: 15px; padding-left: 20px; padding-right: 20px;\"> If the Testator/Testatrix died within 3 months to the date of lodgment, the fee for lodgement of the Detached Will is N50,000.00\n  <br> <br>\n  If the Testator/Testatrix died 3 months after the date of lodgment, the fee for lodgement of the Detached Will is N120,000.00\n  <br>\n  <br><ion-button expand=\"block\" class=\"ion-padding\" (click)=\"openBrowser()\" class=\"routes\" > <ion-icon slot=\"start\" name=\"cart-outline\"></ion-icon> <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon> <p>Within 3 Months</p> </ion-button>\n  <br>\n  <ion-button expand=\"block\" class=\"ion-padding\" (click)=\"openBrowserhideaddress()\"  class=\"routes\" > <ion-icon slot=\"start\" name=\"cart-outline\"></ion-icon> <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon> <p>After 3 Months</p> </ion-button>\n\n\n</P>\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "cPey":
/*!***********************************************************!*\
  !*** ./src/app/lodgedetachwill/lodgedetachwill.module.ts ***!
  \***********************************************************/
/*! exports provided: LodgedetachwillPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LodgedetachwillPageModule", function() { return LodgedetachwillPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _lodgedetachwill_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lodgedetachwill-routing.module */ "0zKx");
/* harmony import */ var _lodgedetachwill_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lodgedetachwill.page */ "tYw+");







let LodgedetachwillPageModule = class LodgedetachwillPageModule {
};
LodgedetachwillPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _lodgedetachwill_routing_module__WEBPACK_IMPORTED_MODULE_5__["LodgedetachwillPageRoutingModule"]
        ],
        declarations: [_lodgedetachwill_page__WEBPACK_IMPORTED_MODULE_6__["LodgedetachwillPage"]]
    })
], LodgedetachwillPageModule);



/***/ }),

/***/ "tYw+":
/*!*********************************************************!*\
  !*** ./src/app/lodgedetachwill/lodgedetachwill.page.ts ***!
  \*********************************************************/
/*! exports provided: LodgedetachwillPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LodgedetachwillPage", function() { return LodgedetachwillPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lodgedetachwill_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lodgedetachwill.page.html */ "8Lvo");
/* harmony import */ var _lodgedetachwill_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lodgedetachwill.page.scss */ "6BC9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");






let LodgedetachwillPage = class LodgedetachwillPage {
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
        var url = 'https://paystack.com/pay/qdv8ct7ns-';
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
LodgedetachwillPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"] }
];
LodgedetachwillPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-lodgedetachwill',
        template: _raw_loader_lodgedetachwill_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lodgedetachwill_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LodgedetachwillPage);



/***/ })

}]);
//# sourceMappingURL=lodgedetachwill-lodgedetachwill-module.js.map