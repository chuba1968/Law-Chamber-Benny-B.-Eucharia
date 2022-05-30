(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["getlegalservices-getlegalservices-module"],{

/***/ "U1YK":
/*!*************************************************************!*\
  !*** ./src/app/getlegalservices/getlegalservices.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #023e8a !important;\n}\n\nion-back-button {\n  --color: white !important;\n}\n\n.element {\n  transform: translateY(-20px);\n}\n\np {\n  font-family: OpenSans;\n}\n\nh3 {\n  font-family: OpenSans-Bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGdldGxlZ2Fsc2VydmljZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBR0E7RUFFRSw0QkFBQTtBQURGOztBQUtBO0VBQ0UscUJBQUE7QUFGRjs7QUFNQTtFQUVFLDBCQUFBO0FBSkYiLCJmaWxlIjoiZ2V0bGVnYWxzZXJ2aWNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMDIzZThhICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1iYWNrLWJ1dHRvbntcclxuICAtLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmVsZW1lbnQge1xyXG5cclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG59XHJcblxyXG5cclxucHtcclxuICBmb250LWZhbWlseTpPcGVuU2FucztcclxuXHJcbn1cclxuXHJcbmgzXHJcbntcclxuICBmb250LWZhbWlseTpPcGVuU2Fucy1Cb2xkO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "dR1J":
/*!*********************************************************************!*\
  !*** ./src/app/getlegalservices/getlegalservices-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: GetlegalservicesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetlegalservicesPageRoutingModule", function() { return GetlegalservicesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _getlegalservices_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getlegalservices.page */ "iTxY");




const routes = [
    {
        path: '',
        component: _getlegalservices_page__WEBPACK_IMPORTED_MODULE_3__["GetlegalservicesPage"]
    }
];
let GetlegalservicesPageRoutingModule = class GetlegalservicesPageRoutingModule {
};
GetlegalservicesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GetlegalservicesPageRoutingModule);



/***/ }),

/***/ "dr5z":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/getlegalservices/getlegalservices.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar> <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/folder\"></ion-back-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <img src=\"/assets/images/svg.png\" alt=\"\" srcset=\"\">\n<ion-list [routerLink]=\"['/companyregrequirments']\" class=\"routes\">\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\">\n    </ion-thumbnail>\n    <ion-label>\n      <h3>Company Registration</h3>\n      <p>Name Search / Registration</p>\n    </ion-label>\n  </ion-item>\n</ion-list>\n\n\n<br>\n<ion-list [routerLink]=\"['/lettersofadministration']\" class=\"routes\">\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"/assets/images/iconmonstr-script-5-120.png\">\n    </ion-thumbnail>\n    <ion-label>\n      <h3>Letters of Administration</h3>\n      <p>Obtain Property of the deceased</p>\n    </ion-label>\n  </ion-item>\n</ion-list>\n<br>\n\n<ion-list [routerLink]=\"['/caveat']\" class=\"routes\">\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\">\n    </ion-thumbnail>\n    <ion-label>\n      <h3>Caveat</h3>\n      <p>Object to a Letter of Administration</p>\n    </ion-label>\n  </ion-item>\n</ion-list>\n<br>\n<ion-list [routerLink]=\"['/drafting']\" class=\"routes\">\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\">\n    </ion-thumbnail>\n    <ion-label>\n      <h3>Draft / Review Agreements</h3>\n      <p>We also help negotiate / review contracts</p>\n    </ion-label>\n  </ion-item>\n</ion-list>\n<br>\n\n\n<ion-list [routerLink]=\"['/simplewill']\" class=\"routes\">\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\">\n    </ion-thumbnail>\n    <ion-label>\n      <h3>Simple Will</h3>\n      <p>Get a Simple Will</p>\n    </ion-label>\n  </ion-item>\n</ion-list>\n\n\n<br>\n\n<ion-list [routerLink]=\"['/lodgwillservices']\" class=\"routes\">\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\">\n    </ion-thumbnail>\n    <ion-label>\n      <h3>Lodgement of Will Services</h3>\n      <p>Lodge your Will in court</p>\n    </ion-label>\n  </ion-item>\n</ion-list>\n\n<br>\n<ion-list [routerLink]=\"['/applybail']\" class=\"routes\">\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\">\n    </ion-thumbnail>\n    <ion-label>\n      <h3>Apply for Bail</h3>\n      <p>The temporary release of an accused person</p>\n    </ion-label>\n  </ion-item>\n</ion-list>\n<br>\n<ion-list [routerLink]=\"['/divorcecustody']\" class=\"routes\">\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\">\n    </ion-thumbnail>\n    <ion-label>\n      <h3>Divorce & Child Custody</h3>\n      <p>Representation at hearing</p>\n    </ion-label>\n  </ion-item>\n</ion-list>\n\n<br>\n<ion-list [routerLink]=\"['/powerofattorney']\" class=\"routes\">\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\">\n    </ion-thumbnail>\n    <ion-label>\n      <h3>Power of Attorney</h3>\n      <p>Get an instant Power of Attorney</p>\n    </ion-label>\n  </ion-item>\n</ion-list>\n<br>\n<ion-list [routerLink]=\"['/criminaldefence']\" class=\"routes\">\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\">\n    </ion-thumbnail>    <ion-label>\n      <h3>Representation in Court</h3>\n      <p>Instant Representation</p>\n    </ion-label>\n  </ion-item>\n</ion-list>\n\n</ion-content>\n");

/***/ }),

/***/ "iTxY":
/*!***********************************************************!*\
  !*** ./src/app/getlegalservices/getlegalservices.page.ts ***!
  \***********************************************************/
/*! exports provided: GetlegalservicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetlegalservicesPage", function() { return GetlegalservicesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_getlegalservices_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./getlegalservices.page.html */ "dr5z");
/* harmony import */ var _getlegalservices_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getlegalservices.page.scss */ "U1YK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");





let GetlegalservicesPage = class GetlegalservicesPage {
    constructor(browser) {
        this.browser = browser;
    }
    ngOnInit() {
    }
    openBrowser() {
        var url = 'https://fbiforms.web.app/';
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
GetlegalservicesPage.ctorParameters = () => [
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_4__["InAppBrowser"] }
];
GetlegalservicesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-getlegalservices',
        template: _raw_loader_getlegalservices_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_getlegalservices_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GetlegalservicesPage);



/***/ }),

/***/ "qAIu":
/*!*************************************************************!*\
  !*** ./src/app/getlegalservices/getlegalservices.module.ts ***!
  \*************************************************************/
/*! exports provided: GetlegalservicesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetlegalservicesPageModule", function() { return GetlegalservicesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _getlegalservices_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./getlegalservices-routing.module */ "dR1J");
/* harmony import */ var _getlegalservices_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./getlegalservices.page */ "iTxY");







let GetlegalservicesPageModule = class GetlegalservicesPageModule {
};
GetlegalservicesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _getlegalservices_routing_module__WEBPACK_IMPORTED_MODULE_5__["GetlegalservicesPageRoutingModule"]
        ],
        declarations: [_getlegalservices_page__WEBPACK_IMPORTED_MODULE_6__["GetlegalservicesPage"]]
    })
], GetlegalservicesPageModule);



/***/ })

}]);
//# sourceMappingURL=getlegalservices-getlegalservices-module.js.map