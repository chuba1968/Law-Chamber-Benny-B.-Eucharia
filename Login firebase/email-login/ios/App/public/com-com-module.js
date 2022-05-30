(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["com-com-module"],{

/***/ "2Wkq":
/*!*********************************!*\
  !*** ./src/app/com/com.page.ts ***!
  \*********************************/
/*! exports provided: ComPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComPage", function() { return ComPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_com_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./com.page.html */ "q5jO");
/* harmony import */ var _com_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./com.page.scss */ "WxUS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ComPage = class ComPage {
    constructor() { }
    ngOnInit() {
    }
};
ComPage.ctorParameters = () => [];
ComPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-com',
        template: _raw_loader_com_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_com_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ComPage);



/***/ }),

/***/ "IwE2":
/*!***********************************!*\
  !*** ./src/app/com/com.module.ts ***!
  \***********************************/
/*! exports provided: ComPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComPageModule", function() { return ComPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _com_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./com-routing.module */ "k8HD");
/* harmony import */ var _com_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./com.page */ "2Wkq");







let ComPageModule = class ComPageModule {
};
ComPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _com_routing_module__WEBPACK_IMPORTED_MODULE_5__["ComPageRoutingModule"]
        ],
        declarations: [_com_page__WEBPACK_IMPORTED_MODULE_6__["ComPage"]]
    })
], ComPageModule);



/***/ }),

/***/ "WxUS":
/*!***********************************!*\
  !*** ./src/app/com/com.page.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #023e8a !important;\n}\n\nion-back-button {\n  --color: white !important;\n}\n\n.element {\n  transform: translateY(-20px);\n}\n\np {\n  font-family: OpenSans;\n}\n\nh1 {\n  font-family: OpenSans-Bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvbS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtBQUNKOztBQUVFO0VBQ0UseUJBQUE7QUFDSjs7QUFHRTtFQUVFLDRCQUFBO0FBREo7O0FBS0U7RUFDRSxxQkFBQTtBQUZKOztBQU1FO0VBRUUsMEJBQUE7QUFKSiIsImZpbGUiOiJjb20ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjMDIzZThhICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1iYWNrLWJ1dHRvbntcclxuICAgIC0tY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5lbGVtZW50IHtcclxuICBcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjBweCk7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIHB7XHJcbiAgICBmb250LWZhbWlseTpPcGVuU2FucztcclxuICBcclxuICB9XHJcbiAgXHJcbiAgaDFcclxuICB7XHJcbiAgICBmb250LWZhbWlseTpPcGVuU2Fucy1Cb2xkO1xyXG4gIH1cclxuICAiXX0= */");

/***/ }),

/***/ "k8HD":
/*!*******************************************!*\
  !*** ./src/app/com/com-routing.module.ts ***!
  \*******************************************/
/*! exports provided: ComPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComPageRoutingModule", function() { return ComPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _com_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./com.page */ "2Wkq");




const routes = [
    {
        path: '',
        component: _com_page__WEBPACK_IMPORTED_MODULE_3__["ComPage"]
    }
];
let ComPageRoutingModule = class ComPageRoutingModule {
};
ComPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ComPageRoutingModule);



/***/ }),

/***/ "q5jO":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/com/com.page.html ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar> <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/folder\"></ion-back-button>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=com-com-module.js.map