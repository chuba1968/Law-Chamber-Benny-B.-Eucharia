(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["powerofattorney-powerofattorney-module"],{

/***/ "44D2":
/*!*******************************************************************!*\
  !*** ./src/app/powerofattorney/powerofattorney-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: PowerofattorneyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowerofattorneyPageRoutingModule", function() { return PowerofattorneyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _powerofattorney_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./powerofattorney.page */ "6tfk");




const routes = [
    {
        path: '',
        component: _powerofattorney_page__WEBPACK_IMPORTED_MODULE_3__["PowerofattorneyPage"]
    }
];
let PowerofattorneyPageRoutingModule = class PowerofattorneyPageRoutingModule {
};
PowerofattorneyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PowerofattorneyPageRoutingModule);



/***/ }),

/***/ "6tfk":
/*!*********************************************************!*\
  !*** ./src/app/powerofattorney/powerofattorney.page.ts ***!
  \*********************************************************/
/*! exports provided: PowerofattorneyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowerofattorneyPage", function() { return PowerofattorneyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_powerofattorney_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./powerofattorney.page.html */ "l0uI");
/* harmony import */ var _powerofattorney_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./powerofattorney.page.scss */ "j6ia");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");






let PowerofattorneyPage = class PowerofattorneyPage {
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
        var url = 'https://paystack.com/pay/hqwgda-cja';
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
        var url = 'https://fbiforms.web.app/PracticeAreas/Businessname/IndexhideAddress.html';
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
PowerofattorneyPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"] }
];
PowerofattorneyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-powerofattorney',
        template: _raw_loader_powerofattorney_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_powerofattorney_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PowerofattorneyPage);



/***/ }),

/***/ "j6ia":
/*!***********************************************************!*\
  !*** ./src/app/powerofattorney/powerofattorney.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #023e8a !important;\n}\n\nion-back-button {\n  --color: white !important;\n}\n\nion-icon {\n  color: white !important;\n}\n\n.element {\n  transform: translateY(-20px);\n}\n\np {\n  font-family: OpenSans;\n}\n\nh1 {\n  font-family: OpenSans-Bold;\n}\n\n/* DOES NOT WORK - not specific enough */\n\n.alert-wrapper {\n  background: #e5e5e5;\n}\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\n.my-custom-class {\n  background: #e5e5e5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHBvd2Vyb2ZhdHRvcm5leS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtBQUNKOztBQUVFO0VBQ0UseUJBQUE7QUFDSjs7QUFFRTtFQUNFLHVCQUFBO0FBQ0o7O0FBRUU7RUFFRSw0QkFBQTtBQUFKOztBQUlFO0VBQ0UscUJBQUE7QUFESjs7QUFLRTtFQUVFLDBCQUFBO0FBSEo7O0FBTUUsd0NBQUE7O0FBQ0E7RUFDRSxtQkFBQTtBQUhKOztBQUtFLHVFQUFBOztBQUNBO0VBQ0UsbUJBQUE7QUFGSiIsImZpbGUiOiJwb3dlcm9mYXR0b3JuZXkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDIzZThhICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBpb24tYmFjay1idXR0b257XHJcbiAgICAtLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgaW9uLWljb24ge1xyXG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmVsZW1lbnQge1xyXG5cclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgcHtcclxuICAgIGZvbnQtZmFtaWx5Ok9wZW5TYW5zO1xyXG5cclxuICB9XHJcblxyXG4gIGgxXHJcbiAge1xyXG4gICAgZm9udC1mYW1pbHk6T3BlblNhbnMtQm9sZDtcclxuICB9XHJcblxyXG4gIC8qIERPRVMgTk9UIFdPUksgLSBub3Qgc3BlY2lmaWMgZW5vdWdoICovXHJcbiAgLmFsZXJ0LXdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2U1ZTVlNTtcclxuICB9XHJcbiAgLyogV29ya3MgLSBwYXNzIFwibXktY3VzdG9tLWNsYXNzXCIgaW4gY3NzQ2xhc3MgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgKi9cclxuICAubXktY3VzdG9tLWNsYXNze1xyXG4gICAgYmFja2dyb3VuZDogI2U1ZTVlNTtcclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ "l0uI":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/powerofattorney/powerofattorney.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-header>\n  <ion-toolbar> <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/folder\"></ion-back-button>\n  </ion-buttons>\n  <ion-buttons slot=\"end\" (Click)=\"openBrowser()\">\n\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <img src=\"/assets/images/svg.png\" alt=\"\" srcset=\"\">\n\n  <ion-grid> <ion-row>\n    <ion-col>\n    </ion-col>\n    <ion-col>\n      <div class=\"element\"><img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\" ></div>\n\n    </ion-col>\n    <ion-col>\n    </ion-col>\n  </ion-row>\n\n\n</ion-grid>\n\n<h1 style=\"text-align: center;\">POWER OF ATTORNEY</h1>\n<P style=\"font-size: 15px; padding-left: 20px; padding-right: 20px;\">You can get an Instant power of attorney, Fill and Answer our questions, to get a well drafted, legally binding Power of Attorney.</P>\n\n<P style=\"font-size: 15px; padding-left: 20px; padding-right: 20px;\"></P>\n\n<h2 style=\"text-align:center;\"></h2>\n<P style=\"font-size: 15px; padding-left: 20px; padding-right: 20px;\">\n  <br> <br>\n  <ion-button expand=\"block\" class=\"ion-padding\" (click)=\"openBrowser()\" class=\"routes\" > <ion-icon slot=\"start\" name=\"cart-outline\"></ion-icon> <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon> <p>POA</p> </ion-button>\n\n</P>\n\n</ion-content>\n\n");

/***/ }),

/***/ "l6mL":
/*!***********************************************************!*\
  !*** ./src/app/powerofattorney/powerofattorney.module.ts ***!
  \***********************************************************/
/*! exports provided: PowerofattorneyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowerofattorneyPageModule", function() { return PowerofattorneyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _powerofattorney_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./powerofattorney-routing.module */ "44D2");
/* harmony import */ var _powerofattorney_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./powerofattorney.page */ "6tfk");







let PowerofattorneyPageModule = class PowerofattorneyPageModule {
};
PowerofattorneyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _powerofattorney_routing_module__WEBPACK_IMPORTED_MODULE_5__["PowerofattorneyPageRoutingModule"]
        ],
        declarations: [_powerofattorney_page__WEBPACK_IMPORTED_MODULE_6__["PowerofattorneyPage"]]
    })
], PowerofattorneyPageModule);



/***/ })

}]);
//# sourceMappingURL=powerofattorney-powerofattorney-module.js.map