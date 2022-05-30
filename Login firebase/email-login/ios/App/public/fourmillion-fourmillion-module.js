(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["fourmillion-fourmillion-module"],{

/***/ "Lz1a":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fourmillion/fourmillion.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-header>\n  <ion-toolbar> <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/folder\"></ion-back-button>\n  </ion-buttons>\n  <ion-buttons slot=\"end\" >\n    <ion-icon slot=\"start\" name=\"information-circle\" (click)=\"showAlert()\"></ion-icon>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <img src=\"/assets/images/svg.png\" alt=\"\" srcset=\"\">\n\n  <ion-grid> <ion-row>\n    <ion-col>\n    </ion-col>\n    <ion-col>\n      <div class=\"element\"><img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\" ></div>\n\n    </ion-col>\n    <ion-col>\n    </ion-col>\n  </ion-row>\n\n\n</ion-grid>\n\n<h2 style=\"text-align: center;\">Hide Office Address from the public</h2>\n\n\n<p class=\"ion-padding\">\n  <ion-button expand=\"block\" class=\"ion-padding\" (click)=\"openBrowserhideaddress()\" class=\"routes\"> <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon> <p>Yes</p> </ion-button>\n  <br>\n\n  <ion-button expand=\"block\" class=\"ion-padding\" (click)=\"openBrowser()\" class=\"routes\"> <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon> <p>No</p> </ion-button>\n  <br>\n</p>\n\n</ion-content>\n\n");

/***/ }),

/***/ "Z/np":
/*!***************************************************!*\
  !*** ./src/app/fourmillion/fourmillion.module.ts ***!
  \***************************************************/
/*! exports provided: FourmillionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FourmillionPageModule", function() { return FourmillionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _fourmillion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fourmillion-routing.module */ "vnr2");
/* harmony import */ var _fourmillion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fourmillion.page */ "n2Kx");







let FourmillionPageModule = class FourmillionPageModule {
};
FourmillionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _fourmillion_routing_module__WEBPACK_IMPORTED_MODULE_5__["FourmillionPageRoutingModule"]
        ],
        declarations: [_fourmillion_page__WEBPACK_IMPORTED_MODULE_6__["FourmillionPage"]]
    })
], FourmillionPageModule);



/***/ }),

/***/ "iuvJ":
/*!***************************************************!*\
  !*** ./src/app/fourmillion/fourmillion.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #023e8a !important;\n}\n\nion-back-button {\n  --color: white !important;\n}\n\nion-icon {\n  color: white !important;\n}\n\n.element {\n  transform: translateY(-20px);\n}\n\np {\n  font-family: OpenSans;\n}\n\nh1 {\n  font-family: OpenSans-Bold;\n}\n\n/* DOES NOT WORK - not specific enough */\n\n.alert-wrapper {\n  background: #e5e5e5;\n}\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\n.my-custom-class {\n  background: #e5e5e5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZvdXJtaWxsaW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtBQUNKOztBQUVFO0VBQ0UsdUJBQUE7QUFDSjs7QUFFRTtFQUVFLDRCQUFBO0FBQUo7O0FBSUU7RUFDRSxxQkFBQTtBQURKOztBQUtFO0VBRUUsMEJBQUE7QUFISjs7QUFNRSx3Q0FBQTs7QUFDQTtFQUNFLG1CQUFBO0FBSEo7O0FBS0UsdUVBQUE7O0FBQ0E7RUFDRSxtQkFBQTtBQUZKIiwiZmlsZSI6ImZvdXJtaWxsaW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzAyM2U4YSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBpb24tYmFjay1idXR0b257XHJcbiAgICAtLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5lbGVtZW50IHtcclxuICBcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIHB7XHJcbiAgICBmb250LWZhbWlseTpPcGVuU2FucztcclxuICBcclxuICB9XHJcbiAgXHJcbiAgaDFcclxuICB7XHJcbiAgICBmb250LWZhbWlseTpPcGVuU2Fucy1Cb2xkO1xyXG4gIH1cclxuICBcclxuICAvKiBET0VTIE5PVCBXT1JLIC0gbm90IHNwZWNpZmljIGVub3VnaCAqL1xyXG4gIC5hbGVydC13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNlNWU1ZTU7XHJcbiAgfVxyXG4gIC8qIFdvcmtzIC0gcGFzcyBcIm15LWN1c3RvbS1jbGFzc1wiIGluIGNzc0NsYXNzIHRvIGluY3JlYXNlIHNwZWNpZmljaXR5ICovXHJcbiAgLm15LWN1c3RvbS1jbGFzc3tcclxuICAgIGJhY2tncm91bmQ6ICNlNWU1ZTU7XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "n2Kx":
/*!*************************************************!*\
  !*** ./src/app/fourmillion/fourmillion.page.ts ***!
  \*************************************************/
/*! exports provided: FourmillionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FourmillionPage", function() { return FourmillionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_fourmillion_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./fourmillion.page.html */ "Lz1a");
/* harmony import */ var _fourmillion_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fourmillion.page.scss */ "iuvJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");






let FourmillionPage = class FourmillionPage {
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
FourmillionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"] }
];
FourmillionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-fourmillion',
        template: _raw_loader_fourmillion_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_fourmillion_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FourmillionPage);



/***/ }),

/***/ "vnr2":
/*!***********************************************************!*\
  !*** ./src/app/fourmillion/fourmillion-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: FourmillionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FourmillionPageRoutingModule", function() { return FourmillionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fourmillion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fourmillion.page */ "n2Kx");




const routes = [
    {
        path: '',
        component: _fourmillion_page__WEBPACK_IMPORTED_MODULE_3__["FourmillionPage"]
    }
];
let FourmillionPageRoutingModule = class FourmillionPageRoutingModule {
};
FourmillionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FourmillionPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=fourmillion-fourmillion-module.js.map