(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["drafting-drafting-module"],{

/***/ "Ek0K":
/*!*******************************************!*\
  !*** ./src/app/drafting/drafting.page.ts ***!
  \*******************************************/
/*! exports provided: DraftingPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraftingPage", function() { return DraftingPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_drafting_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./drafting.page.html */ "waBl");
/* harmony import */ var _drafting_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drafting.page.scss */ "q+J5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");






let DraftingPage = class DraftingPage {
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
DraftingPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"] }
];
DraftingPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-drafting',
        template: _raw_loader_drafting_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_drafting_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DraftingPage);



/***/ }),

/***/ "dusS":
/*!*********************************************!*\
  !*** ./src/app/drafting/drafting.module.ts ***!
  \*********************************************/
/*! exports provided: DraftingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraftingPageModule", function() { return DraftingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _drafting_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./drafting-routing.module */ "sJpx");
/* harmony import */ var _drafting_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drafting.page */ "Ek0K");







let DraftingPageModule = class DraftingPageModule {
};
DraftingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _drafting_routing_module__WEBPACK_IMPORTED_MODULE_5__["DraftingPageRoutingModule"]
        ],
        declarations: [_drafting_page__WEBPACK_IMPORTED_MODULE_6__["DraftingPage"]]
    })
], DraftingPageModule);



/***/ }),

/***/ "q+J5":
/*!*********************************************!*\
  !*** ./src/app/drafting/drafting.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #023e8a !important;\n}\n\nion-back-button {\n  --color: white !important;\n}\n\nion-icon {\n  color: white !important;\n}\n\n.element {\n  transform: translateY(-20px);\n}\n\np {\n  font-family: OpenSans;\n}\n\nh1 {\n  font-family: OpenSans-Bold;\n}\n\n/* DOES NOT WORK - not specific enough */\n\n.alert-wrapper {\n  background: #e5e5e5;\n}\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\n.my-custom-class {\n  background: #e5e5e5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGRyYWZ0aW5nLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtBQUNKOztBQUVFO0VBQ0UsdUJBQUE7QUFDSjs7QUFFRTtFQUVFLDRCQUFBO0FBQUo7O0FBSUU7RUFDRSxxQkFBQTtBQURKOztBQUtFO0VBRUUsMEJBQUE7QUFISjs7QUFNRSx3Q0FBQTs7QUFDQTtFQUNFLG1CQUFBO0FBSEo7O0FBS0UsdUVBQUE7O0FBQ0E7RUFDRSxtQkFBQTtBQUZKIiwiZmlsZSI6ImRyYWZ0aW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogIzAyM2U4YSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgaW9uLWJhY2stYnV0dG9ue1xyXG4gICAgLS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5lbGVtZW50IHtcclxuXHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG4gIH1cclxuXHJcblxyXG4gIHB7XHJcbiAgICBmb250LWZhbWlseTpPcGVuU2FucztcclxuXHJcbiAgfVxyXG5cclxuICBoMVxyXG4gIHtcclxuICAgIGZvbnQtZmFtaWx5Ok9wZW5TYW5zLUJvbGQ7XHJcbiAgfVxyXG5cclxuICAvKiBET0VTIE5PVCBXT1JLIC0gbm90IHNwZWNpZmljIGVub3VnaCAqL1xyXG4gIC5hbGVydC13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNlNWU1ZTU7XHJcbiAgfVxyXG4gIC8qIFdvcmtzIC0gcGFzcyBcIm15LWN1c3RvbS1jbGFzc1wiIGluIGNzc0NsYXNzIHRvIGluY3JlYXNlIHNwZWNpZmljaXR5ICovXHJcbiAgLm15LWN1c3RvbS1jbGFzc3tcclxuICAgIGJhY2tncm91bmQ6ICNlNWU1ZTU7XHJcbiAgfVxyXG4iXX0= */");

/***/ }),

/***/ "sJpx":
/*!*****************************************************!*\
  !*** ./src/app/drafting/drafting-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: DraftingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DraftingPageRoutingModule", function() { return DraftingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _drafting_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drafting.page */ "Ek0K");




const routes = [
    {
        path: '',
        component: _drafting_page__WEBPACK_IMPORTED_MODULE_3__["DraftingPage"]
    }
];
let DraftingPageRoutingModule = class DraftingPageRoutingModule {
};
DraftingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DraftingPageRoutingModule);



/***/ }),

/***/ "waBl":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/drafting/drafting.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n  <ion-toolbar> <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/folder\"></ion-back-button>\n  </ion-buttons>\n  <ion-buttons slot=\"end\" (Click)=\"openBrowser()\">\n\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <img src=\"/assets/images/svg.png\" alt=\"\" srcset=\"\">\n\n  <ion-grid> <ion-row>\n    <ion-col>\n    </ion-col>\n    <ion-col>\n      <div class=\"element\"><img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\" ></div>\n\n    </ion-col>\n    <ion-col>\n    </ion-col>\n  </ion-row>\n\n\n</ion-grid>\n\n<h1 style=\"text-align: center;\">LEGAL DRAFTING</h1>\n<P style=\"font-size: 15px; padding-left: 20px; padding-right: 20px;\">When it comes to drafting and reviewing legal documents, our Legal Drafting practice handles areas such as: drafting laws and operating agreements, Partnership Agreement, Corporate Finance, Purchase or Sale of existing Company, Purchase or Sale of Intellectual Property, Dissolution of Company, drafting commercial contracts, Import & Export, Distribution, Purchase and Sale of Goods, Letters of Credit Shipping Agreements. </P>\n\n<P style=\"font-size: 15px; padding-left: 20px; padding-right: 20px;\">Personal Contract, Joint Venture Agreement, Operating Agreements, Partnership Agreement, Shareholder Agreements, Client Services Agreement, Employment Agreements, Non-Disclosure Agreement, Confidential Agreements, Merger and Acquisition Agreements, Trade Agreements, Tenancy Agreements, We also assist in the enforcement of a breach of contract.</P>\n\n<P>\n  <a href=\"tel:+2348066053162\">\n    <ion-button expand=\"block\" class=\"ion-padding\"> <ion-icon slot=\"start\" name=\"call-outline\"></ion-icon><p>Call US</p> </ion-button>\n</a>  </P>\n\n\n\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=drafting-drafting-module.js.map