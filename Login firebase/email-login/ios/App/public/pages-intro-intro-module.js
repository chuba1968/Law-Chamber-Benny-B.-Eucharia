(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-intro-intro-module"],{

/***/ "EIgh":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/intro/intro.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  <ion-toolbar>\n  <button ion-button icon-only clear style=\"float: right;margin-right: 25px; background-color: transparent;\" (click)=\"start()\">\n    <img src=\"/assets/images/iconmonstr-log-out-9-240.png\" style=\"width: 30px;\" >\n  </button>\n  </ion-toolbar>\n\n<ion-content>\n  <ion-slides pager=\"true\">\n\n    <!-- Slide 1 -->\n    <ion-slide>\n      <ion-text color=\"light\">\n        <img src=\"/assets/images/undraw_Connected_re_lmq2.svg\">\n        <h1 style=\"color: white;\">Welcome to our law Firm, Bennybonny Chambers</h1>\n        <p class=\"ion-padding\" style=\"color: white;\">Our Goal is helping you get Justice</p>\n        <ion-button shape=\"round\" (click)=\"next()\" color=\"white\">Next</ion-button>\n      </ion-text>\n    </ion-slide>\n\n    <!-- Slide 2 -->\n    <ion-slide>\n      <ion-text color=\"light\">\n        <img src=\"/assets/images/undraw_My_documents_re_13dc.svg\">\n        <h1  style=\"color: white;\">Legal Filing</h1>\n        <p  class=\"ion-padding\" style=\"color: white;\">We help file your case & represent you in court</p>\n        <ion-button shape=\"round\" (click)=\"next()\" color=\"white\">Next</ion-button>\n      </ion-text>\n    </ion-slide>\n\n    <ion-slide>\n      <ion-text color=\"light\">\n        <img src=\"/assets/images/undraw_Agreement_re_d4dv.svg\" style>\n        <h1 style=\"color: white;\">Legal Drafting</h1>\n        <p style=\"color: white;\" class=\"ion-padding\">We also help draft, review and negotiate your contracts</p>\n        <ion-button shape=\"round\" (click)=\"next()\" color=\"white\">Next</ion-button>\n      </ion-text>\n    </ion-slide>\n\n\n\n    <ion-slide>\n      <ion-text color=\"light\">\n        <img src=\"/assets/images/undraw_conference_call_b0w6.svg\" style>\n        <h1 style=\"color: white;\">Probono services</h1>\n        <p style=\"color: white;\" class=\"ion-padding\" >We also offer free legal services, if you Apply</p>\n\n        <ion-button shape=\"round\" (click)=\"next()\" color=\"white\">Next</ion-button>\n\n\n         </ion-text>\n\n\n\n    </ion-slide>\n\n    <ion-slide>\n      <ion-text color=\"light\">\n\n         <img src=\"/assets/images/undraw_Push_notifications_re_t84m.svg\" alt=\"\" srcset=\"\">\n\n        <h1 style=\"color: white;\">Bennybonny Chambers </h1>\n        <p style=\"color: white;\" class=\"ion-padding\"> Barristers and Solicitors of the Supreme Court</p>\n        <ion-button shape=\"round\" (click)=\"start()\" color=\"white\">Start</ion-button>\n      </ion-text>\n    </ion-slide>\n\n\n\n  </ion-slides>\n\n</ion-content>\n");

/***/ }),

/***/ "JaV3":
/*!*******************************************!*\
  !*** ./src/app/pages/intro/intro.page.ts ***!
  \*******************************************/
/*! exports provided: IntroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPage", function() { return IntroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_intro_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./intro.page.html */ "EIgh");
/* harmony import */ var _intro_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./intro.page.scss */ "JnBO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_guards_intro_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/guards/intro.guard */ "cu8M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/core */ "gcOT");








const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_7__["Plugins"];
let IntroPage = class IntroPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    next() {
        this.slides.slideNext();
    }
    start() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield Storage.set({ key: src_app_guards_intro_guard__WEBPACK_IMPORTED_MODULE_5__["INTRO_KEY"], value: 'true' });
            this.router.navigateByUrl('/folder', { replaceUrl: true });
        });
    }
};
IntroPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
IntroPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSlides"],] }]
};
IntroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-intro',
        template: _raw_loader_intro_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_intro_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], IntroPage);



/***/ }),

/***/ "JnBO":
/*!*********************************************!*\
  !*** ./src/app/pages/intro/intro.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #023e8a;\n}\n\nion-toolbar {\n  --background: #023e8a;\n}\n\nion-slides {\n  height: 100%;\n  --bullet-background-active: #fff;\n  --bullet-background: #000;\n}\n\nimg {\n  padding: 5px;\n  width: 250px;\n}\n\nion-icon {\n  font-size: 50px;\n}\n\np {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\np {\n  font-family: OpenSans;\n}\n\nh1 {\n  font-family: OpenSans-Bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxpbnRyby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0UscUJBQUE7QUFDRjs7QUFHQTtFQUNJLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLHlCQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUlFO0VBQ0UsZUFBQTtBQURKOztBQUlFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtBQURKOztBQUlFO0VBQ0UscUJBQUE7QUFESjs7QUFLRTtFQUVFLDBCQUFBO0FBSEoiLCJmaWxlIjoiaW50cm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAgIzAyM2U4YTtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogICMwMjNlOGE7XHJcblxyXG59XHJcblxyXG5pb24tc2xpZGVzIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiAjZmZmO1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZDogIzAwMDtcclxufVxyXG5cclxuaW1nIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICB9XHJcblxyXG5cclxuICBpb24taWNvbntcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICB9XHJcblxyXG4gIHB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIH1cclxuXHJcbiAgcHtcclxuICAgIGZvbnQtZmFtaWx5Ok9wZW5TYW5zO1xyXG5cclxuICB9XHJcblxyXG4gIGgxXHJcbiAge1xyXG4gICAgZm9udC1mYW1pbHk6T3BlblNhbnMtQm9sZDtcclxuICB9XHJcbiJdfQ== */");

/***/ }),

/***/ "a+tW":
/*!*********************************************!*\
  !*** ./src/app/pages/intro/intro.module.ts ***!
  \*********************************************/
/*! exports provided: IntroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageModule", function() { return IntroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _intro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./intro-routing.module */ "pPll");
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./intro.page */ "JaV3");







let IntroPageModule = class IntroPageModule {
};
IntroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _intro_routing_module__WEBPACK_IMPORTED_MODULE_5__["IntroPageRoutingModule"]
        ],
        declarations: [_intro_page__WEBPACK_IMPORTED_MODULE_6__["IntroPage"]]
    })
], IntroPageModule);



/***/ }),

/***/ "pPll":
/*!*****************************************************!*\
  !*** ./src/app/pages/intro/intro-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: IntroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageRoutingModule", function() { return IntroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _intro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./intro.page */ "JaV3");




const routes = [
    {
        path: '',
        component: _intro_page__WEBPACK_IMPORTED_MODULE_3__["IntroPage"]
    }
];
let IntroPageRoutingModule = class IntroPageRoutingModule {
};
IntroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IntroPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=pages-intro-intro-module.js.map