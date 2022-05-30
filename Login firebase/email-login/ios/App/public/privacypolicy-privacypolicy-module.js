(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["privacypolicy-privacypolicy-module"],{

/***/ "1w5g":
/*!*******************************************************!*\
  !*** ./src/app/privacypolicy/privacypolicy.module.ts ***!
  \*******************************************************/
/*! exports provided: PrivacypolicyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacypolicyPageModule", function() { return PrivacypolicyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _privacypolicy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./privacypolicy-routing.module */ "VPGa");
/* harmony import */ var _privacypolicy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./privacypolicy.page */ "jZuH");







let PrivacypolicyPageModule = class PrivacypolicyPageModule {
};
PrivacypolicyPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _privacypolicy_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrivacypolicyPageRoutingModule"]
        ],
        declarations: [_privacypolicy_page__WEBPACK_IMPORTED_MODULE_6__["PrivacypolicyPage"]]
    })
], PrivacypolicyPageModule);



/***/ }),

/***/ "JznP":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/privacypolicy/privacypolicy.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar> <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/folder\"></ion-back-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <img src=\"/assets/images/svg.png\" alt=\"\" srcset=\"\">\n\n  <ion-grid> <ion-row>\n    <ion-col>\n    </ion-col>\n    <ion-col>\n      <div class=\"element\"><img src=\"/assets/images/iconmonstr-lock-22-240.png\"></div>\n\n    </ion-col>\n    <ion-col>\n    </ion-col>\n  </ion-row>\n\n\n</ion-grid>\n\n<h1 style=\"text-align: center;\">PRIVACY POLICY</h1>\n<H1 style=\"text-align: center;\">Bennybonny Chambers</H1>\n<P style=\"font-size: 15px; padding-left: 20px; padding-right: 20px;\">Attorney-Client privilege has long been regarded as one of the oldest and most sacred privileges in evidence law. The privilege was established to protect the attorney from having to testify against his client under oath, as such testimony would be a breach of the attorney's honor as a gentleman.</P>\n\n\n\n<P style=\"font-size: 15px; padding-left: 20px; padding-right: 20px;\">At its most basic, the Attorney-Client privilege ensures that \"anyone seeking advice or assistance from a lawyer should be completely free of any fear that his confidential data,secret or information Will be revealed.</P>\n\n<P style=\"font-size: 15px; padding-left: 20px; padding-right: 20px;\">Under Nigerian law, privilege is provided for in Section 192 of the Evidence Act: It states:\n  No Legal Practitioner shall at any time be permitted, unless with his client’s express consent,\n  to disclose any communication made to him in the course and for the purpose of his\n  employment as such legal practitioner by or on behalf of his client, or to state the contents\n  or conditions of any document with which he has become acquainted in the course and for the\n  purpose of his professional employment or to disclose any advice given by him to his client in\n  the course and for the purpose of such employment.\"</P>\n\n<P style=\"font-size: 15px; padding-left: 20px; padding-right: 20px;\">On this basis, information, data, secrets, revealed and communicated to us during the course of our employment as your legal practitioner are privileged and we are bound by law not to share or reveal such information.</P>\n\n</ion-content>\n");

/***/ }),

/***/ "MXG2":
/*!*******************************************************!*\
  !*** ./src/app/privacypolicy/privacypolicy.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #023e8a !important;\n}\n\nion-back-button {\n  --color: white !important;\n}\n\n.element {\n  transform: translateY(-20px);\n}\n\np {\n  font-family: OpenSans;\n}\n\nh1 {\n  font-family: OpenSans-Bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByaXZhY3lwb2xpY3kucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBR0E7RUFFRSw0QkFBQTtBQURGOztBQUtBO0VBQ0UscUJBQUE7QUFGRjs7QUFNQTtFQUVFLDBCQUFBO0FBSkYiLCJmaWxlIjoicHJpdmFjeXBvbGljeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMDIzZThhICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1iYWNrLWJ1dHRvbntcclxuICAtLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmVsZW1lbnQge1xyXG5cclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG59XHJcblxyXG5cclxucHtcclxuICBmb250LWZhbWlseTpPcGVuU2FucztcclxuXHJcbn1cclxuXHJcbmgxXHJcbntcclxuICBmb250LWZhbWlseTpPcGVuU2Fucy1Cb2xkO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "VPGa":
/*!***************************************************************!*\
  !*** ./src/app/privacypolicy/privacypolicy-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: PrivacypolicyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacypolicyPageRoutingModule", function() { return PrivacypolicyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _privacypolicy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./privacypolicy.page */ "jZuH");




const routes = [
    {
        path: '',
        component: _privacypolicy_page__WEBPACK_IMPORTED_MODULE_3__["PrivacypolicyPage"]
    }
];
let PrivacypolicyPageRoutingModule = class PrivacypolicyPageRoutingModule {
};
PrivacypolicyPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PrivacypolicyPageRoutingModule);



/***/ }),

/***/ "jZuH":
/*!*****************************************************!*\
  !*** ./src/app/privacypolicy/privacypolicy.page.ts ***!
  \*****************************************************/
/*! exports provided: PrivacypolicyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacypolicyPage", function() { return PrivacypolicyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_privacypolicy_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./privacypolicy.page.html */ "JznP");
/* harmony import */ var _privacypolicy_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./privacypolicy.page.scss */ "MXG2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PrivacypolicyPage = class PrivacypolicyPage {
    constructor() { }
    ngOnInit() {
    }
};
PrivacypolicyPage.ctorParameters = () => [];
PrivacypolicyPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-privacypolicy',
        template: _raw_loader_privacypolicy_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_privacypolicy_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PrivacypolicyPage);



/***/ })

}]);
//# sourceMappingURL=privacypolicy-privacypolicy-module.js.map