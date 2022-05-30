(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["choosereg-choosereg-module"],{

/***/ "LjcO":
/*!***********************************************!*\
  !*** ./src/app/choosereg/choosereg.module.ts ***!
  \***********************************************/
/*! exports provided: ChooseregPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseregPageModule", function() { return ChooseregPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _choosereg_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./choosereg-routing.module */ "hz5C");
/* harmony import */ var _choosereg_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./choosereg.page */ "f+xf");







let ChooseregPageModule = class ChooseregPageModule {
};
ChooseregPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _choosereg_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChooseregPageRoutingModule"]
        ],
        declarations: [_choosereg_page__WEBPACK_IMPORTED_MODULE_6__["ChooseregPage"]]
    })
], ChooseregPageModule);



/***/ }),

/***/ "QvZ3":
/*!***********************************************!*\
  !*** ./src/app/choosereg/choosereg.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-toolbar {\n  --background: #023e8a !important;\n}\n\nion-back-button {\n  --color: white !important;\n}\n\nion-icon {\n  color: white !important;\n}\n\n.element {\n  transform: translateY(-20px);\n}\n\np {\n  font-family: OpenSans;\n}\n\nh1 {\n  font-family: OpenSans-Bold;\n}\n\n/* DOES NOT WORK - not specific enough */\n\n.alert-wrapper {\n  background: #e5e5e5;\n}\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\n.my-custom-class {\n  background: #e5e5e5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNob29zZXJlZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFFRSw0QkFBQTtBQUFGOztBQUlBO0VBQ0UscUJBQUE7QUFERjs7QUFLQTtFQUVFLDBCQUFBO0FBSEY7O0FBTUEsd0NBQUE7O0FBQ0E7RUFDRSxtQkFBQTtBQUhGOztBQUtBLHVFQUFBOztBQUNBO0VBQ0UsbUJBQUE7QUFGRiIsImZpbGUiOiJjaG9vc2VyZWcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogIzAyM2U4YSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5pb24tYmFjay1idXR0b257XHJcbiAgLS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWljb24ge1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmVsZW1lbnQge1xyXG5cclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG59XHJcblxyXG5cclxucHtcclxuICBmb250LWZhbWlseTpPcGVuU2FucztcclxuXHJcbn1cclxuXHJcbmgxXHJcbntcclxuICBmb250LWZhbWlseTpPcGVuU2Fucy1Cb2xkO1xyXG59XHJcblxyXG4vKiBET0VTIE5PVCBXT1JLIC0gbm90IHNwZWNpZmljIGVub3VnaCAqL1xyXG4uYWxlcnQtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcclxufVxyXG4vKiBXb3JrcyAtIHBhc3MgXCJteS1jdXN0b20tY2xhc3NcIiBpbiBjc3NDbGFzcyB0byBpbmNyZWFzZSBzcGVjaWZpY2l0eSAqL1xyXG4ubXktY3VzdG9tLWNsYXNze1xyXG4gIGJhY2tncm91bmQ6ICNlNWU1ZTU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "f+xf":
/*!*********************************************!*\
  !*** ./src/app/choosereg/choosereg.page.ts ***!
  \*********************************************/
/*! exports provided: ChooseregPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseregPage", function() { return ChooseregPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_choosereg_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./choosereg.page.html */ "nyz/");
/* harmony import */ var _choosereg_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./choosereg.page.scss */ "QvZ3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ChooseregPage = class ChooseregPage {
    //alert controller
    constructor(alertController) {
        this.alertController = alertController;
    }
    ngOnInit() {
    }
    showAlert() {
        this.alertController.create({
            header: 'Type of Companies',
            cssClass: 'my-custom-class',
            subHeader: 'Limited by shares',
            message: 'The higher the share capital the more CAC charges for registration',
            buttons: ['OK']
        }).then(res => {
            res.present();
        });
    }
};
ChooseregPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
ChooseregPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-choosereg',
        template: _raw_loader_choosereg_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_choosereg_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChooseregPage);



/***/ }),

/***/ "hz5C":
/*!*******************************************************!*\
  !*** ./src/app/choosereg/choosereg-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ChooseregPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseregPageRoutingModule", function() { return ChooseregPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _choosereg_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./choosereg.page */ "f+xf");




const routes = [
    {
        path: '',
        component: _choosereg_page__WEBPACK_IMPORTED_MODULE_3__["ChooseregPage"]
    }
];
let ChooseregPageRoutingModule = class ChooseregPageRoutingModule {
};
ChooseregPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChooseregPageRoutingModule);



/***/ }),

/***/ "nyz/":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/choosereg/choosereg.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-header>\n  <ion-toolbar> <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/folder\"></ion-back-button>\n  </ion-buttons>\n  <ion-buttons slot=\"end\" >\n    <ion-icon slot=\"start\" name=\"information-circle\" (click)=\"showAlert()\"></ion-icon>\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <img src=\"/assets/images/svg.png\" alt=\"\" srcset=\"\">\n\n  <ion-grid> <ion-row>\n    <ion-col>\n    </ion-col>\n    <ion-col>\n      <div class=\"element\"><img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\" ></div>\n\n    </ion-col>\n    <ion-col>\n    </ion-col>\n  </ion-row>\n\n\n</ion-grid>\n\n<h2 style=\"text-align: center;\">Choose Company to Register</h2>\n\n\n\n<br>\n<ion-list [routerLink]=\"['/proceedbusinesname']\" class=\"routes\">\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\">\n    </ion-thumbnail>\n    <ion-label>\n      <h3>Business Name</h3>\n      <p>N25,000.00</p>\n    </ion-label>\n  </ion-item>\n</ion-list>\n<br>\n<ion-list [routerLink]=\"['/proceedonemillion']\" class=\"routes\">\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\">\n    </ion-thumbnail>\n    <ion-label>\n      <h3>LTD with 1 Million Share Capital</h3>\n      <p>N50,000.00</p>\n    </ion-label>\n  </ion-item>\n</ion-list>\n<br>\n<ion-list [routerLink]=\"['/proceedtwomillion']\" class=\"routes\">\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\">\n    </ion-thumbnail>\n    <ion-label>\n      <h3>LTD with 2 Million Share Capital</h3>\n      <p>N100,000.00</p>\n    </ion-label>\n  </ion-item>\n</ion-list>\n<br>\n<ion-list [routerLink]=\"['/proceedthreemillion']\" class=\"routes\">\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\">\n    </ion-thumbnail>\n    <ion-label>\n      <h3>LTD with 3 Million Share Capital</h3>\n      <p>N120,000.00</p>\n    </ion-label>\n  </ion-item>\n</ion-list>\n<br>\n<ion-list [routerLink]=\"['/fourmillion']\" class=\"routes\">\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\">\n    </ion-thumbnail>\n    <ion-label>\n      <h3>LTD with 4 Million Share Capital</h3>\n      <p>N150,000.00</p>\n    </ion-label>\n  </ion-item>\n</ion-list>\n<br>\n<ion-list [routerLink]=\"['/fivemillion']\" class=\"routes\">\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\">\n    </ion-thumbnail>\n    <ion-label>\n      <h3>LTD with 5 Million Share Capital</h3>\n      <p>N230,000.00</p>\n    </ion-label>\n  </ion-item>\n</ion-list>\n<br>\n<ion-list [routerLink]=\"['/tenmillion']\" class=\"routes\">\n  <ion-item>\n    <ion-thumbnail slot=\"start\">\n      <img src=\"/assets/images/favpng_coat-of-arms-of-nigeria-flag-of-nigeria-national-symbol.png\">\n    </ion-thumbnail>\n    <ion-label>\n      <h3>LTD with 10 Million Share Capital</h3>\n      <p>N300,000.00</p>\n    </ion-label>\n  </ion-item>\n</ion-list>\n<br>\n\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=choosereg-choosereg-module.js.map