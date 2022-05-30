(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["proceedbusinesname-proceedbusinesname-module"],{

/***/ "Wi7F":
/*!*************************************************************************!*\
  !*** ./src/app/proceedbusinesname/proceedbusinesname-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ProceedbusinesnamePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProceedbusinesnamePageRoutingModule", function() { return ProceedbusinesnamePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _proceedbusinesname_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proceedbusinesname.page */ "Z+Qu");




const routes = [
    {
        path: '',
        component: _proceedbusinesname_page__WEBPACK_IMPORTED_MODULE_3__["ProceedbusinesnamePage"]
    }
];
let ProceedbusinesnamePageRoutingModule = class ProceedbusinesnamePageRoutingModule {
};
ProceedbusinesnamePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProceedbusinesnamePageRoutingModule);



/***/ }),

/***/ "Z+Qu":
/*!***************************************************************!*\
  !*** ./src/app/proceedbusinesname/proceedbusinesname.page.ts ***!
  \***************************************************************/
/*! exports provided: ProceedbusinesnamePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProceedbusinesnamePage", function() { return ProceedbusinesnamePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_proceedbusinesname_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./proceedbusinesname.page.html */ "ZxeK");
/* harmony import */ var _proceedbusinesname_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./proceedbusinesname.page.scss */ "fkmS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");






let ProceedbusinesnamePage = class ProceedbusinesnamePage {
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
        var url = 'https://paystack.com/pay/inmfy1qa85';
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
        var url = 'https://paystack.com/pay/vtbh-x7dai';
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
ProceedbusinesnamePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"] }
];
ProceedbusinesnamePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-proceedbusinesname',
        template: _raw_loader_proceedbusinesname_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_proceedbusinesname_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProceedbusinesnamePage);



/***/ }),

/***/ "ZxeK":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/proceedbusinesname/proceedbusinesname.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-header>\n  <ion-toolbar> <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/folder\"></ion-back-button>\n  </ion-buttons>\n  <ion-buttons slot=\"end\" >\n    <ion-icon slot=\"start\" name=\"information-circle\" (click)=\"showAlert()\"></ion-icon>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <img src=\"/assets/images/svg.png\" alt=\"\" srcset=\"\">\n\n  <ion-grid> <ion-row>\n    <ion-col>\n    </ion-col>\n    <ion-col>\n      <div class=\"element\"><img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\" ></div>\n\n    </ion-col>\n    <ion-col>\n    </ion-col>\n  </ion-row>\n\n\n</ion-grid>\n\n<h2 style=\"text-align: center;\">Hide Office Address from the public</h2>\n\n\n\n<ion-button expand=\"block\" class=\"ion-padding\" (click)=\"openBrowserhideaddress()\">  <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon> <p>Yes</p> </ion-button>\n<br>\n\n<ion-button expand=\"block\" class=\"ion-padding\" (click)=\"openBrowser()\" > <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon> <p>No</p> </ion-button>\n<br>\n</ion-content>\n\n");

/***/ }),

/***/ "bKH0":
/*!*****************************************************************!*\
  !*** ./src/app/proceedbusinesname/proceedbusinesname.module.ts ***!
  \*****************************************************************/
/*! exports provided: ProceedbusinesnamePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProceedbusinesnamePageModule", function() { return ProceedbusinesnamePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _proceedbusinesname_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./proceedbusinesname-routing.module */ "Wi7F");
/* harmony import */ var _proceedbusinesname_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./proceedbusinesname.page */ "Z+Qu");







let ProceedbusinesnamePageModule = class ProceedbusinesnamePageModule {
};
ProceedbusinesnamePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _proceedbusinesname_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProceedbusinesnamePageRoutingModule"]
        ],
        declarations: [_proceedbusinesname_page__WEBPACK_IMPORTED_MODULE_6__["ProceedbusinesnamePage"]]
    })
], ProceedbusinesnamePageModule);



/***/ }),

/***/ "fkmS":
/*!*****************************************************************!*\
  !*** ./src/app/proceedbusinesname/proceedbusinesname.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #023e8a !important;\n}\n\nion-back-button {\n  --color: white !important;\n}\n\nion-icon {\n  color: white !important;\n}\n\n.element {\n  transform: translateY(-20px);\n}\n\np {\n  font-family: OpenSans;\n}\n\nh1 {\n  font-family: OpenSans-Bold;\n}\n\n/* DOES NOT WORK - not specific enough */\n\n.alert-wrapper {\n  background: #e5e5e5;\n}\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\n.my-custom-class {\n  background: #e5e5e5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2NlZWRidXNpbmVzbmFtZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFFRSw0QkFBQTtBQUFGOztBQUlBO0VBQ0UscUJBQUE7QUFERjs7QUFLQTtFQUVFLDBCQUFBO0FBSEY7O0FBTUEsd0NBQUE7O0FBQ0E7RUFDRSxtQkFBQTtBQUhGOztBQUtBLHVFQUFBOztBQUNBO0VBQ0UsbUJBQUE7QUFGRiIsImZpbGUiOiJwcm9jZWVkYnVzaW5lc25hbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogIzAyM2U4YSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tYmFjay1idXR0b257XHJcbiAgLS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmVsZW1lbnQge1xyXG5cclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG59XHJcblxyXG5cclxucHtcclxuICBmb250LWZhbWlseTpPcGVuU2FucztcclxuXHJcbn1cclxuXHJcbmgxXHJcbntcclxuICBmb250LWZhbWlseTpPcGVuU2Fucy1Cb2xkO1xyXG59XHJcblxyXG4vKiBET0VTIE5PVCBXT1JLIC0gbm90IHNwZWNpZmljIGVub3VnaCAqL1xyXG4uYWxlcnQtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcclxufVxyXG4vKiBXb3JrcyAtIHBhc3MgXCJteS1jdXN0b20tY2xhc3NcIiBpbiBjc3NDbGFzcyB0byBpbmNyZWFzZSBzcGVjaWZpY2l0eSAqL1xyXG4ubXktY3VzdG9tLWNsYXNze1xyXG4gIGJhY2tncm91bmQ6ICNlNWU1ZTU7XHJcbn1cclxuIl19 */");

/***/ })

}]);
//# sourceMappingURL=proceedbusinesname-proceedbusinesname-module.js.map