(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["simplyprobate-simplyprobate-module"],{

/***/ "NrUS":
/*!*******************************************************!*\
  !*** ./src/app/simplyprobate/simplyprobate.module.ts ***!
  \*******************************************************/
/*! exports provided: SimplyprobatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplyprobatePageModule", function() { return SimplyprobatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _simplyprobate_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./simplyprobate-routing.module */ "lFXN");
/* harmony import */ var _simplyprobate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./simplyprobate.page */ "W3Ww");







let SimplyprobatePageModule = class SimplyprobatePageModule {
};
SimplyprobatePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _simplyprobate_routing_module__WEBPACK_IMPORTED_MODULE_5__["SimplyprobatePageRoutingModule"]
        ],
        declarations: [_simplyprobate_page__WEBPACK_IMPORTED_MODULE_6__["SimplyprobatePage"]]
    })
], SimplyprobatePageModule);



/***/ }),

/***/ "SEtN":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/simplyprobate/simplyprobate.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar> <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/folder\"></ion-back-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <img src=\"/assets/images/svg.png\" alt=\"\" srcset=\"\">\n  <ion-list [routerLink]=\"['/simplewill']\" class=\"routes\">\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\">\n      </ion-thumbnail>\n      <ion-label>\n        <h3>Simple Will</h3>\n        <p>Get a Simple Will</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n\n  <br>\n  <ion-list [routerLink]=\"['/lodgwillservices']\" class=\"routes\">\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\">\n      </ion-thumbnail>\n      <ion-label>\n        <h3>Lodgement of Will Services</h3>\n        <p>Lodge your Will in court</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <br>\n  <ion-list [routerLink]=\"['/powerofattorney']\" class=\"routes\">\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\">\n      </ion-thumbnail>\n      <ion-label>\n        <h3>Power of Attorney</h3>\n        <p>Get an instant Power of Attorney</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <br>\n  <ion-list [routerLink]=\"['/lettersofadministration']\" class=\"routes\">\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <img src=\"/assets/images/iconmonstr-script-5-120.png\">\n      </ion-thumbnail>\n      <ion-label>\n        <h3>Letters of Administration</h3>\n        <p>Obtain Property of the deceased</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <br>\n\n  <ion-list [routerLink]=\"['/caveat']\" class=\"routes\">\n    <ion-item>\n      <ion-thumbnail slot=\"start\">\n        <img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\">\n      </ion-thumbnail>\n      <ion-label>\n        <h3>Caveat</h3>\n        <p>Object to a Letter of Administration</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ }),

/***/ "W3Ww":
/*!*****************************************************!*\
  !*** ./src/app/simplyprobate/simplyprobate.page.ts ***!
  \*****************************************************/
/*! exports provided: SimplyprobatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplyprobatePage", function() { return SimplyprobatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_simplyprobate_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./simplyprobate.page.html */ "SEtN");
/* harmony import */ var _simplyprobate_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simplyprobate.page.scss */ "eKFX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let SimplyprobatePage = class SimplyprobatePage {
    constructor() { }
    ngOnInit() {
    }
};
SimplyprobatePage.ctorParameters = () => [];
SimplyprobatePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-simplyprobate',
        template: _raw_loader_simplyprobate_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_simplyprobate_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SimplyprobatePage);



/***/ }),

/***/ "eKFX":
/*!*******************************************************!*\
  !*** ./src/app/simplyprobate/simplyprobate.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #023e8a !important;\n}\n\nion-back-button {\n  --color: white !important;\n}\n\n.element {\n  transform: translateY(-20px);\n}\n\np {\n  font-family: OpenSans;\n}\n\nh1 {\n  font-family: OpenSans-Bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNpbXBseXByb2JhdGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7QUFDSjs7QUFFRTtFQUNFLHlCQUFBO0FBQ0o7O0FBR0U7RUFFRSw0QkFBQTtBQURKOztBQUtFO0VBQ0UscUJBQUE7QUFGSjs7QUFNRTtFQUVFLDBCQUFBO0FBSkoiLCJmaWxlIjoic2ltcGx5cHJvYmF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICMwMjNlOGEgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWJhY2stYnV0dG9ue1xyXG4gICAgLS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmVsZW1lbnQge1xyXG4gIFxyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgcHtcclxuICAgIGZvbnQtZmFtaWx5Ok9wZW5TYW5zO1xyXG4gIFxyXG4gIH1cclxuICBcclxuICBoMVxyXG4gIHtcclxuICAgIGZvbnQtZmFtaWx5Ok9wZW5TYW5zLUJvbGQ7XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "lFXN":
/*!***************************************************************!*\
  !*** ./src/app/simplyprobate/simplyprobate-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: SimplyprobatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimplyprobatePageRoutingModule", function() { return SimplyprobatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _simplyprobate_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./simplyprobate.page */ "W3Ww");




const routes = [
    {
        path: '',
        component: _simplyprobate_page__WEBPACK_IMPORTED_MODULE_3__["SimplyprobatePage"]
    }
];
let SimplyprobatePageRoutingModule = class SimplyprobatePageRoutingModule {
};
SimplyprobatePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SimplyprobatePageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=simplyprobate-simplyprobate-module.js.map