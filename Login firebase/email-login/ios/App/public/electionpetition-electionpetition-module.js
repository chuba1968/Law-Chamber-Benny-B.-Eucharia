(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["electionpetition-electionpetition-module"],{

/***/ "+Ggz":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/electionpetition/electionpetition.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-header>\n  <ion-toolbar> <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/folder\"></ion-back-button>\n  </ion-buttons>\n  <ion-buttons slot=\"end\" (Click)=\"openBrowser()\">\n\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <img src=\"/assets/images/svg.png\" alt=\"\" srcset=\"\">\n\n  <ion-grid> <ion-row>\n    <ion-col>\n    </ion-col>\n    <ion-col>\n      <div class=\"element\"><img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\" ></div>\n\n    </ion-col>\n    <ion-col>\n    </ion-col>\n  </ion-row>\n\n\n</ion-grid>\n\n<h1 style=\"text-align: center;\">COMPANY REGISTRATION</h1>\n<P style=\"font-size: 15px; padding-left: 20px; padding-right: 20px;\">A company is a corporate structure with separate legal personality status. It is statutorily regulated and incorporated for the purpose of profit maximization. </P>\n\n<P style=\"font-size: 15px; padding-left: 20px; padding-right: 20px;\">All companies, whether a private company limited by shares, private unlimited or a company limited by guarantee must be registered in accordance with the Companies and Allied Matters Act (CAMA), which is the principal law that regulates companies in Nigeria. The requirements for registering a company in Nigeria are straightforward with no intricacies</P>\n\n<h2 style=\"text-align:center;\">Requirements</h2>\n<P style=\"font-size: 15px; padding-left: 20px; padding-right: 20px;\">Two suitable names for the company, type of company to be registered, the address of the company, details of the shareholders of the company, the share capital and shareholding formula, particulars of the company secretary\n  <br> <br>\n  <ion-button expand=\"block\" class=\"ion-padding\" [routerLink]=\"['/choosereg']\" class=\"routes\" > <ion-icon slot=\"start\" name=\"cart-outline\"></ion-icon> <ion-icon slot=\"end\" name=\"arrow-forward\"></ion-icon> <p>REGISTER</p> </ion-button>\n\n\n</P>\n\n\n\n\n\n\n</ion-content>\n\n");

/***/ }),

/***/ "NN/D":
/*!*********************************************************************!*\
  !*** ./src/app/electionpetition/electionpetition-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ElectionpetitionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectionpetitionPageRoutingModule", function() { return ElectionpetitionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _electionpetition_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./electionpetition.page */ "gmiP");




const routes = [
    {
        path: '',
        component: _electionpetition_page__WEBPACK_IMPORTED_MODULE_3__["ElectionpetitionPage"]
    }
];
let ElectionpetitionPageRoutingModule = class ElectionpetitionPageRoutingModule {
};
ElectionpetitionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ElectionpetitionPageRoutingModule);



/***/ }),

/***/ "gmiP":
/*!***********************************************************!*\
  !*** ./src/app/electionpetition/electionpetition.page.ts ***!
  \***********************************************************/
/*! exports provided: ElectionpetitionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectionpetitionPage", function() { return ElectionpetitionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_electionpetition_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./electionpetition.page.html */ "+Ggz");
/* harmony import */ var _electionpetition_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./electionpetition.page.scss */ "pxt8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");






let ElectionpetitionPage = class ElectionpetitionPage {
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
ElectionpetitionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"] }
];
ElectionpetitionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-electionpetition',
        template: _raw_loader_electionpetition_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_electionpetition_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ElectionpetitionPage);



/***/ }),

/***/ "pxt8":
/*!*************************************************************!*\
  !*** ./src/app/electionpetition/electionpetition.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #023e8a !important;\n}\n\nion-back-button {\n  --color: white !important;\n}\n\n.element {\n  transform: translateY(-20px);\n}\n\np {\n  font-family: OpenSans;\n}\n\nh1 {\n  font-family: OpenSans-Bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGVsZWN0aW9ucGV0aXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBR0E7RUFFRSw0QkFBQTtBQURGOztBQUtBO0VBQ0UscUJBQUE7QUFGRjs7QUFNQTtFQUVFLDBCQUFBO0FBSkYiLCJmaWxlIjoiZWxlY3Rpb25wZXRpdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMDIzZThhICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1iYWNrLWJ1dHRvbntcclxuICAtLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmVsZW1lbnQge1xyXG5cclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG59XHJcblxyXG5cclxucHtcclxuICBmb250LWZhbWlseTpPcGVuU2FucztcclxuXHJcbn1cclxuXHJcbmgxXHJcbntcclxuICBmb250LWZhbWlseTpPcGVuU2Fucy1Cb2xkO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "t2ec":
/*!*************************************************************!*\
  !*** ./src/app/electionpetition/electionpetition.module.ts ***!
  \*************************************************************/
/*! exports provided: ElectionpetitionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElectionpetitionPageModule", function() { return ElectionpetitionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _electionpetition_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./electionpetition-routing.module */ "NN/D");
/* harmony import */ var _electionpetition_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./electionpetition.page */ "gmiP");







let ElectionpetitionPageModule = class ElectionpetitionPageModule {
};
ElectionpetitionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _electionpetition_routing_module__WEBPACK_IMPORTED_MODULE_5__["ElectionpetitionPageRoutingModule"]
        ],
        declarations: [_electionpetition_page__WEBPACK_IMPORTED_MODULE_6__["ElectionpetitionPage"]]
    })
], ElectionpetitionPageModule);



/***/ })

}]);
//# sourceMappingURL=electionpetition-electionpetition-module.js.map