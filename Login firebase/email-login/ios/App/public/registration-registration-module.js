(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["registration-registration-module"],{

/***/ "DNuw":
/*!*****************************************************!*\
  !*** ./src/app/registration/registration.module.ts ***!
  \*****************************************************/
/*! exports provided: RegistrationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageModule", function() { return RegistrationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration-routing.module */ "zF/k");
/* harmony import */ var _registration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./registration.page */ "hHzj");








let RegistrationPageModule = class RegistrationPageModule {
};
RegistrationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _registration_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegistrationPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_registration_page__WEBPACK_IMPORTED_MODULE_6__["RegistrationPage"]]
    })
], RegistrationPageModule);



/***/ }),

/***/ "XDXw":
/*!*****************************************************!*\
  !*** ./src/app/registration/registration.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3RyYXRpb24ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "hHzj":
/*!***************************************************!*\
  !*** ./src/app/registration/registration.page.ts ***!
  \***************************************************/
/*! exports provided: RegistrationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPage", function() { return RegistrationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_registration_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./registration.page.html */ "mE0+");
/* harmony import */ var _registration_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration.page.scss */ "XDXw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ionic-auth.service */ "StDr");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");







let RegistrationPage = class RegistrationPage {
    constructor(router, ionicAuthService, fb) {
        this.router = router;
        this.ionicAuthService = ionicAuthService;
        this.fb = fb;
        this.successMsg = '';
        this.errorMsg = '';
        this.error_msg = {
            'email': [
                {
                    type: 'required',
                    message: 'Provide email.'
                },
                {
                    type: 'pattern',
                    message: 'Email is not valid.'
                }
            ],
            'password': [
                {
                    type: 'required',
                    message: 'Password is required.'
                },
                {
                    type: 'minlength',
                    message: 'Password length should be 6 characters long.'
                }
            ]
        };
    }
    ngOnInit() {
        this.userForm = this.fb.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(6),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required
            ])),
        });
    }
    signUp(value) {
        this.ionicAuthService.createUser(value)
            .then((response) => {
            this.errorMsg = "";
            this.successMsg = "New user created.";
        }, error => {
            this.errorMsg = error.message;
            this.successMsg = "";
        });
    }
    goToLogin() {
        this.router.navigateByUrl('login');
    }
};
RegistrationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_auth_service__WEBPACK_IMPORTED_MODULE_5__["IonicAuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
RegistrationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-registration',
        template: _raw_loader_registration_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_registration_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegistrationPage);



/***/ }),

/***/ "mE0+":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>registration</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-header>\n    <ion-toolbar color=\"danger\">\n      <ion-title>User Registeration</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content class=\"ion-padding\">\n    <form class=\"form\" [formGroup]=\"userForm\" (ngSubmit)=\"signUp(userForm.value)\">\n      <ion-item>\n        <ion-label position=\"floating\">Email</ion-label>\n        <ion-input type=\"text\" formControlName=\"email\"></ion-input>\n      </ion-item>\n\n      <ng-container *ngFor=\"let error of error_msg.email\">\n        <div *ngIf=\"userForm.get('email').hasError(error.type) && (userForm.get('email').dirty || userForm.get('email').touched)\">\n          {{ error.message }}\n        </div>\n      </ng-container>\n\n      <ion-item>\n        <ion-label position=\"floating\" color=\"primary\">Password</ion-label>\n        <ion-input type=\"password\" formControlName=\"password\" class=\"form-controll\" required></ion-input>\n      </ion-item>\n\n      <ng-container *ngFor=\"let error of error_msg.password\">\n          <div *ngIf=\"userForm.get('password').hasError(error.type) && (userForm.get('password').dirty || userForm.get('password').touched)\">\n            {{ error.message }}\n          </div>\n      </ng-container>\n\n      <ion-button type=\"submit\" expand=\"block\" [disabled]=\"!userForm.valid\">Register</ion-button>\n\n      <label class=\"ion-text-center\" color=\"danger\">{{errorMsg}}</label>\n      <label class=\"ion-text-center\" color=\"success\">{{successMsg}}</label>\n    </form>\n    <p class=\"ion-text-center\">Already registered? <a (click)=\"goToLogin()\">Login</a></p>\n  </ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "zF/k":
/*!*************************************************************!*\
  !*** ./src/app/registration/registration-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: RegistrationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationPageRoutingModule", function() { return RegistrationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _registration_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration.page */ "hHzj");




const routes = [
    {
        path: '',
        component: _registration_page__WEBPACK_IMPORTED_MODULE_3__["RegistrationPage"]
    }
];
let RegistrationPageRoutingModule = class RegistrationPageRoutingModule {
};
RegistrationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegistrationPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=registration-registration-module.js.map