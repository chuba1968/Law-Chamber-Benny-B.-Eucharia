(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["criminaldefence-criminaldefence-module"],{

/***/ "+PYP":
/*!***********************************************************!*\
  !*** ./src/app/criminaldefence/criminaldefence.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #023e8a !important;\n}\n\nion-back-button {\n  --color: white !important;\n}\n\nion-icon {\n  color: white !important;\n}\n\n.element {\n  transform: translateY(-20px);\n}\n\np {\n  font-family: OpenSans;\n}\n\nh1 {\n  font-family: OpenSans-Bold;\n}\n\n/* DOES NOT WORK - not specific enough */\n\n.alert-wrapper {\n  background: #e5e5e5;\n}\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\n.my-custom-class {\n  background: #e5e5e5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNyaW1pbmFsZGVmZW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFFRSw0QkFBQTtBQUFGOztBQUlBO0VBQ0UscUJBQUE7QUFERjs7QUFLQTtFQUVFLDBCQUFBO0FBSEY7O0FBTUEsd0NBQUE7O0FBQ0E7RUFDRSxtQkFBQTtBQUhGOztBQUtBLHVFQUFBOztBQUNBO0VBQ0UsbUJBQUE7QUFGRiIsImZpbGUiOiJjcmltaW5hbGRlZmVuY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogIzAyM2U4YSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tYmFjay1idXR0b257XHJcbiAgLS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmVsZW1lbnQge1xyXG5cclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG59XHJcblxyXG5cclxucHtcclxuICBmb250LWZhbWlseTpPcGVuU2FucztcclxuXHJcbn1cclxuXHJcbmgxXHJcbntcclxuICBmb250LWZhbWlseTpPcGVuU2Fucy1Cb2xkO1xyXG59XHJcblxyXG4vKiBET0VTIE5PVCBXT1JLIC0gbm90IHNwZWNpZmljIGVub3VnaCAqL1xyXG4uYWxlcnQtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcclxufVxyXG4vKiBXb3JrcyAtIHBhc3MgXCJteS1jdXN0b20tY2xhc3NcIiBpbiBjc3NDbGFzcyB0byBpbmNyZWFzZSBzcGVjaWZpY2l0eSAqL1xyXG4ubXktY3VzdG9tLWNsYXNze1xyXG4gIGJhY2tncm91bmQ6ICNlNWU1ZTU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "Pip5":
/*!*********************************************************!*\
  !*** ./src/app/criminaldefence/criminaldefence.page.ts ***!
  \*********************************************************/
/*! exports provided: CriminaldefencePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriminaldefencePage", function() { return CriminaldefencePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_criminaldefence_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./criminaldefence.page.html */ "wPjw");
/* harmony import */ var _criminaldefence_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./criminaldefence.page.scss */ "+PYP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");






let CriminaldefencePage = class CriminaldefencePage {
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
CriminaldefencePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"] }
];
CriminaldefencePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-criminaldefence',
        template: _raw_loader_criminaldefence_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_criminaldefence_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CriminaldefencePage);



/***/ }),

/***/ "ZBHi":
/*!***********************************************************!*\
  !*** ./src/app/criminaldefence/criminaldefence.module.ts ***!
  \***********************************************************/
/*! exports provided: CriminaldefencePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriminaldefencePageModule", function() { return CriminaldefencePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _criminaldefence_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./criminaldefence-routing.module */ "avsz");
/* harmony import */ var _criminaldefence_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./criminaldefence.page */ "Pip5");







let CriminaldefencePageModule = class CriminaldefencePageModule {
};
CriminaldefencePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _criminaldefence_routing_module__WEBPACK_IMPORTED_MODULE_5__["CriminaldefencePageRoutingModule"]
        ],
        declarations: [_criminaldefence_page__WEBPACK_IMPORTED_MODULE_6__["CriminaldefencePage"]]
    })
], CriminaldefencePageModule);



/***/ }),

/***/ "avsz":
/*!*******************************************************************!*\
  !*** ./src/app/criminaldefence/criminaldefence-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CriminaldefencePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CriminaldefencePageRoutingModule", function() { return CriminaldefencePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _criminaldefence_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./criminaldefence.page */ "Pip5");




const routes = [
    {
        path: '',
        component: _criminaldefence_page__WEBPACK_IMPORTED_MODULE_3__["CriminaldefencePage"]
    }
];
let CriminaldefencePageRoutingModule = class CriminaldefencePageRoutingModule {
};
CriminaldefencePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CriminaldefencePageRoutingModule);



/***/ }),

/***/ "wPjw":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/criminaldefence/criminaldefence.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n  <ion-toolbar> <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/folder\"></ion-back-button>\n  </ion-buttons>\n  <ion-buttons slot=\"end\" (Click)=\"openBrowser()\">\n\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <img src=\"/assets/images/svg.png\" alt=\"\" srcset=\"\">\n\n  <ion-grid> <ion-row>\n    <ion-col>\n    </ion-col>\n    <ion-col>\n      <div class=\"element\"><img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\" ></div>\n\n    </ion-col>\n    <ion-col>\n    </ion-col>\n  </ion-row>\n\n\n</ion-grid>\n\n<h1 style=\"text-align: center;\">Legal Representation In Court</h1>\n<P style=\"font-size: 15px; padding-left: 20px; padding-right: 20px;\">Litigation is sometimes an unavoidable method of resolving a dispute. As a full service law firm, we ensure our clients; both foreign and local, are effectively represented in all matters. As committed legal practitioners, we advise against hasty disputes but when litigation becomes inevitable, we take it up, even to the apex level provided it Will be in the interest of our clients.</P>\n\n\n<P>\n  <a href=\"tel:+2348066053162\">\n    <ion-button expand=\"block\" class=\"ion-padding\"> <ion-icon slot=\"start\" name=\"call-outline\"></ion-icon><p>Call US</p> </ion-button>\n</a>  </P>\n\n\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=criminaldefence-criminaldefence-module.js.map