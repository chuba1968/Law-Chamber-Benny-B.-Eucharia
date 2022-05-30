(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["divorcecustody-divorcecustody-module"],{

/***/ "DYBr":
/*!*******************************************************!*\
  !*** ./src/app/divorcecustody/divorcecustody.page.ts ***!
  \*******************************************************/
/*! exports provided: DivorcecustodyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivorcecustodyPage", function() { return DivorcecustodyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_divorcecustody_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./divorcecustody.page.html */ "olQk");
/* harmony import */ var _divorcecustody_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./divorcecustody.page.scss */ "gmEz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");






let DivorcecustodyPage = class DivorcecustodyPage {
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
        var url = 'https://fbiforms.web.app/PracticeAreas/Businessname/';
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
DivorcecustodyPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"] }
];
DivorcecustodyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-divorcecustody',
        template: _raw_loader_divorcecustody_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_divorcecustody_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DivorcecustodyPage);



/***/ }),

/***/ "Vs68":
/*!*********************************************************!*\
  !*** ./src/app/divorcecustody/divorcecustody.module.ts ***!
  \*********************************************************/
/*! exports provided: DivorcecustodyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivorcecustodyPageModule", function() { return DivorcecustodyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _divorcecustody_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./divorcecustody-routing.module */ "w27W");
/* harmony import */ var _divorcecustody_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./divorcecustody.page */ "DYBr");







let DivorcecustodyPageModule = class DivorcecustodyPageModule {
};
DivorcecustodyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _divorcecustody_routing_module__WEBPACK_IMPORTED_MODULE_5__["DivorcecustodyPageRoutingModule"]
        ],
        declarations: [_divorcecustody_page__WEBPACK_IMPORTED_MODULE_6__["DivorcecustodyPage"]]
    })
], DivorcecustodyPageModule);



/***/ }),

/***/ "gmEz":
/*!*********************************************************!*\
  !*** ./src/app/divorcecustody/divorcecustody.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #023e8a !important;\n}\n\nion-back-button {\n  --color: white !important;\n}\n\nion-icon {\n  color: white !important;\n}\n\n.element {\n  transform: translateY(-20px);\n}\n\np {\n  font-family: OpenSans;\n}\n\nh1 {\n  font-family: OpenSans-Bold;\n}\n\n/* DOES NOT WORK - not specific enough */\n\n.alert-wrapper {\n  background: #e5e5e5;\n}\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\n.my-custom-class {\n  background: #e5e5e5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRpdm9yY2VjdXN0b2R5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7QUFDRjs7QUFFQTtFQUVFLDRCQUFBO0FBQUY7O0FBSUE7RUFDRSxxQkFBQTtBQURGOztBQUtBO0VBRUUsMEJBQUE7QUFIRjs7QUFNQSx3Q0FBQTs7QUFDQTtFQUNFLG1CQUFBO0FBSEY7O0FBS0EsdUVBQUE7O0FBQ0E7RUFDRSxtQkFBQTtBQUZGIiwiZmlsZSI6ImRpdm9yY2VjdXN0b2R5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6ICMwMjNlOGEgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWJhY2stYnV0dG9ue1xyXG4gIC0tY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1pY29uIHtcclxuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5lbGVtZW50IHtcclxuXHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcclxufVxyXG5cclxuXHJcbnB7XHJcbiAgZm9udC1mYW1pbHk6T3BlblNhbnM7XHJcblxyXG59XHJcblxyXG5oMVxyXG57XHJcbiAgZm9udC1mYW1pbHk6T3BlblNhbnMtQm9sZDtcclxufVxyXG5cclxuLyogRE9FUyBOT1QgV09SSyAtIG5vdCBzcGVjaWZpYyBlbm91Z2ggKi9cclxuLmFsZXJ0LXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6ICNlNWU1ZTU7XHJcbn1cclxuLyogV29ya3MgLSBwYXNzIFwibXktY3VzdG9tLWNsYXNzXCIgaW4gY3NzQ2xhc3MgdG8gaW5jcmVhc2Ugc3BlY2lmaWNpdHkgKi9cclxuLm15LWN1c3RvbS1jbGFzc3tcclxuICBiYWNrZ3JvdW5kOiAjZTVlNWU1O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "olQk":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/divorcecustody/divorcecustody.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-header>\n  <ion-toolbar> <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/folder\"></ion-back-button>\n  </ion-buttons>\n  <ion-buttons slot=\"end\" (Click)=\"openBrowser()\">\n\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <img src=\"/assets/images/svg.png\" alt=\"\" srcset=\"\">\n\n  <ion-grid> <ion-row>\n    <ion-col>\n    </ion-col>\n    <ion-col>\n      <div class=\"element\"><img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\" ></div>\n\n    </ion-col>\n    <ion-col>\n    </ion-col>\n  </ion-row>\n\n\n</ion-grid>\n\n<h1 style=\"text-align: center;\" class=\"ion-padding\">DIVORCE & CHILD CUSTODY</h1>\n<P style=\"font-size: 15px; padding-left: 20px; padding-right: 20px;\">We are committed to making a positive difference in the lives of our clients. We Will assist you in filing for divorce, responding to divorce proceedings, and representing you at a hearing.</P>\n\n<P style=\"font-size: 15px; padding-left: 20px; padding-right: 20px;\">Our team of lawyers includes independently accredited specialists in divorce, matrimonial finance, and children law, as well as prenuptial and postnuptial agreements,cohabitation, child abduction and adoption.</P>\n<P style=\"font-size: 15px; padding-left: 20px; padding-right: 20px;\">\n  Our attorneys are known for being excellent strategists who are also highly intelligent and incisive. Our divorce attorneys are sensitive to the needs of your family and work hard to provide our clients with fair settlements.</P>\n\n<P style=\"font-size: 15px; padding-left: 20px; padding-right: 20px;\">We handle all aspects of divorce, including property, complex financial arrangements, international divorce, and business assets.</P>\n\n<P style=\"font-size: 15px; padding-left: 20px; padding-right: 20px;\"><br> <br>\n  <ion-button expand=\"block\" class=\"ion-padding\" [routerLink]=\"['/choosereg']\" class=\"routes\" > <ion-icon slot=\"start\" name=\"cart-outline\"></ion-icon> <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon> <p>Apply</p> </ion-button>\n\n\n</P>\n\n\n\n</ion-content>\n\n");

/***/ }),

/***/ "w27W":
/*!*****************************************************************!*\
  !*** ./src/app/divorcecustody/divorcecustody-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: DivorcecustodyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DivorcecustodyPageRoutingModule", function() { return DivorcecustodyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _divorcecustody_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./divorcecustody.page */ "DYBr");




const routes = [
    {
        path: '',
        component: _divorcecustody_page__WEBPACK_IMPORTED_MODULE_3__["DivorcecustodyPage"]
    }
];
let DivorcecustodyPageRoutingModule = class DivorcecustodyPageRoutingModule {
};
DivorcecustodyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DivorcecustodyPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=divorcecustody-divorcecustody-module.js.map