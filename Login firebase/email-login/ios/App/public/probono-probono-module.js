(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["probono-probono-module"],{

/***/ "4RJ/":
/*!*****************************************!*\
  !*** ./src/app/probono/probono.page.ts ***!
  \*****************************************/
/*! exports provided: ProbonoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProbonoPage", function() { return ProbonoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_probono_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./probono.page.html */ "A8hg");
/* harmony import */ var _probono_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./probono.page.scss */ "OIPa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");






let ProbonoPage = class ProbonoPage {
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
        var url = 'https://fbiforms.web.app/PracticeAreas/ApplyforProbono/';
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
ProbonoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_5__["InAppBrowser"] }
];
ProbonoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-probono',
        template: _raw_loader_probono_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_probono_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProbonoPage);



/***/ }),

/***/ "9PfZ":
/*!***************************************************!*\
  !*** ./src/app/probono/probono-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProbonoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProbonoPageRoutingModule", function() { return ProbonoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _probono_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./probono.page */ "4RJ/");




const routes = [
    {
        path: '',
        component: _probono_page__WEBPACK_IMPORTED_MODULE_3__["ProbonoPage"]
    }
];
let ProbonoPageRoutingModule = class ProbonoPageRoutingModule {
};
ProbonoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProbonoPageRoutingModule);



/***/ }),

/***/ "9x5u":
/*!*******************************************!*\
  !*** ./src/app/probono/probono.module.ts ***!
  \*******************************************/
/*! exports provided: ProbonoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProbonoPageModule", function() { return ProbonoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _probono_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./probono-routing.module */ "9PfZ");
/* harmony import */ var _probono_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./probono.page */ "4RJ/");







let ProbonoPageModule = class ProbonoPageModule {
};
ProbonoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _probono_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProbonoPageRoutingModule"]
        ],
        declarations: [_probono_page__WEBPACK_IMPORTED_MODULE_6__["ProbonoPage"]]
    })
], ProbonoPageModule);



/***/ }),

/***/ "A8hg":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/probono/probono.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-header>\n  <ion-toolbar> <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/folder\"></ion-back-button>\n  </ion-buttons>\n  <ion-buttons slot=\"end\">\n    <ion-icon (click)=\"openBrowser()\" slot=\"start\" name=\"mail-outline\"></ion-icon>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <img src=\"/assets/images/svg.png\" alt=\"\" srcset=\"\">\n\n  <ion-grid> <ion-row>\n    <ion-col>\n    </ion-col>\n    <ion-col>\n      <div class=\"element\"><img src=\"/assets/images/free.png\" ></div>\n\n    </ion-col>\n    <ion-col>\n    </ion-col>\n  </ion-row>\n\n\n</ion-grid>\n\n<h1 style=\"text-align: center;\">FREE LEGAL SERVICES</h1>\n<P style=\"font-size: 15px; padding-left: 20px; padding-right: 20px;\">There is a deliberate policy in place to ensure that legal services are available to everyone. </P>\n\n<P style=\"font-size: 15px; padding-left: 20px; padding-right: 20px;\">This policy is based on our opinion that the most valuable contribution we can make to society as a law firm is to use our knowledge and skills to have a real difference on the lives of the less fortunate, the ignorant, by bridging the gap in access to rights, services, and justice.</P>\n\n\n\n<P style=\"font-size: 15px; padding-left: 20px; padding-right: 20px;\">We have a long history of providing pro bono legal services, and we take on a substantial number of pro bono cases each year. We routinely encourage our lawyers to volunteer for pro bono work early in their careers, and we also support lawyers who volunteer for pro bono work that is outside of their practice areas.</P>\n\n<P style=\"font-size: 15px; padding-left: 20px; padding-right: 20px;\"> All pro bono work that the firm undertakes is handled like all billable matters, with the dedication of all available firm resources appropriate to the needs of the representation.</P>\n\n<ion-button (click)=\"openBrowser()\" expand=\"block\" class=\"ion-padding\">  <ion-icon slot=\"start\" name=\"mail-outline\"></ion-icon> <p>Apply</p> </ion-button>\n<br><br>\n</ion-content>\n");

/***/ }),

/***/ "OIPa":
/*!*******************************************!*\
  !*** ./src/app/probono/probono.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #023e8a !important;\n}\n\nion-back-button {\n  --color: white !important;\n}\n\n.element {\n  transform: translateY(-20px);\n}\n\np {\n  font-family: OpenSans;\n}\n\nh1 {\n  font-family: OpenSans-Bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2Jvbm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBR0E7RUFFRSw0QkFBQTtBQURGOztBQUtBO0VBQ0UscUJBQUE7QUFGRjs7QUFNQTtFQUVFLDBCQUFBO0FBSkYiLCJmaWxlIjoicHJvYm9uby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMDIzZThhICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1iYWNrLWJ1dHRvbntcclxuICAtLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmVsZW1lbnQge1xyXG5cclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG59XHJcblxyXG5cclxucHtcclxuICBmb250LWZhbWlseTpPcGVuU2FucztcclxuXHJcbn1cclxuXHJcbmgxXHJcbntcclxuICBmb250LWZhbWlseTpPcGVuU2Fucy1Cb2xkO1xyXG59XHJcbiJdfQ== */");

/***/ })

}]);
//# sourceMappingURL=probono-probono-module.js.map