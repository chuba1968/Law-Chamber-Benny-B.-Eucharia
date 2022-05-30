(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\NINTELS TRAVELS\Desktop\Ionic capacitor inappbrowser\Law firms\Login firebase\email-login\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebaseConfig: {
        apiKey: "AIzaSyCvOw8-ucu4ktbh6m82J4qXJs3ldAoYdwc",
        authDomain: "login-b4174.firebaseapp.com",
        projectId: "login-b4174",
        storageBucket: "login-b4174.appspot.com",
        messagingSenderId: "731322565329",
        appId: "1:731322565329:web:17c5ecc301e322cdd23bf0",
        measurementId: "G-W6WJEC61L5"
    }
};


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "gcOT");





const { Browser } = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"];
let AppComponent = class AppComponent {
    constructor() { }
};
AppComponent.ctorParameters = () => [];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "UTcu":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/authentication.service */ "ej43");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





let AuthGuard = class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canLoad() {
        return this.authService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(val => val !== null), // Filter out initial Behaviour subject value
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), // Otherwise the Observable doesn't complete!
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(isAuthenticated => {
            if (isAuthenticated) {
                return true;
            }
            else {
                this.router.navigateByUrl('/login');
                return false;
            }
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n\n\n        <ion-list >\n          <ion-item  [routerLink]=\"['/getlegalservices']\">\n            <ion-icon name=\"cart\" slot=\"start\" color=\"primary\"></ion-icon>\n            <ion-label>Services</ion-label>\n          </ion-item>\n          <ion-item [routerLink]=\"['/profile']\">\n            <ion-icon name=\"newspaper\" slot=\"start\" color=\"primary\" ></ion-icon>\n            <ion-label>Our Profile</ion-label>\n          </ion-item>\n          <ion-item consultants [routerLink]=\"['/partners']\">\n            <ion-icon name=\"person-circle\" slot=\"start\" color=\"primary\"></ion-icon>\n            <ion-label>Our Partners</ion-label>\n          </ion-item>\n\n          <a href=\"tel:+2348066053162\">\n            <ion-item>\n              <ion-icon name=\"phone-portrait\" slot=\"start\" color=\"primary\"></ion-icon>\n              <ion-label>Contact Us</ion-label>\n            </ion-item>\n\n          </a>\n\n\n        </ion-list>\n\n\n\n\n        <div class=\"footer\">\n\n          <div class=\"header\">\n            <img src=\"/assets/images/Screen22Asset 7mdpi.png\" alt=\"\"/>\n              </div>\n              <div class=\"footer-app-version\">\n                <H5>BennyBonny Chambers</H5>\n             </div>\n\n              <div>\n\n              </div>\n\n\n\n\n      </div>\n\n      </ion-content>\n    </ion-menu>\n\n    <ion-router-outlet id=\"main-content\">\n\n    </ion-router-outlet>\n\n  </ion-split-pane>\n\n</ion-app>\n\n\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ "spgP");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "m/P+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");












let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].firebaseConfig),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"]
        ],
        providers: [
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }, _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__["InAppBrowser"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "cu8M":
/*!***************************************!*\
  !*** ./src/app/guards/intro.guard.ts ***!
  \***************************************/
/*! exports provided: INTRO_KEY, IntroGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INTRO_KEY", function() { return INTRO_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroGuard", function() { return IntroGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "gcOT");




const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"];
const INTRO_KEY = 'intro-seen';
let IntroGuard = class IntroGuard {
    constructor(router) {
        this.router = router;
    }
    canLoad() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const hasSeenIntro = yield Storage.get({ key: INTRO_KEY });
            if (hasSeenIntro && (hasSeenIntro.value === 'true')) {
                return true;
            }
            else {
                this.router.navigateByUrl('/intro', { replaceUrl: true });
                return false;
            }
        });
    }
};
IntroGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
IntroGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IntroGuard);



/***/ }),

/***/ "ej43":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "gcOT");






const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];
const TOKEN_KEY = 'my-token';
let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
        // Init with null to filter out the first value in a guard!
        this.isAuthenticated = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.token = '';
        this.loadToken();
    }
    loadToken() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const token = yield Storage.get({ key: TOKEN_KEY });
            if (token && token.value) {
                console.log('set token: ', token.value);
                this.token = token.value;
                this.isAuthenticated.next(true);
            }
            else {
                this.isAuthenticated.next(false);
            }
        });
    }
    login(credentials) {
        return this.http.post(`https://reqres.in/api/login`, credentials).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((data) => data.token), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(token => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(Storage.set({ key: TOKEN_KEY, value: token }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(_ => {
            this.isAuthenticated.next(true);
        }));
    }
    logout() {
        this.isAuthenticated.next(false);
        return Storage.remove({ key: TOKEN_KEY });
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guards_intro_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/intro.guard */ "cu8M");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/auth.guard */ "UTcu");





const routes = [
    {
        path: '',
        redirectTo: '/folder',
        pathMatch: 'full'
    },
    {
        path: 'folder',
        loadChildren: () => Promise.all(/*! import() | folder-folder-module */[__webpack_require__.e("common"), __webpack_require__.e("folder-folder-module")]).then(__webpack_require__.bind(null, /*! ./folder/folder.module */ "yIOV")).then(m => m.FolderPageModule),
        canLoad: [_guards_intro_guard__WEBPACK_IMPORTED_MODULE_3__["IntroGuard"]]
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() | login-login-module */[__webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then(m => m.LoginPageModule)
    },
    {
        path: 'registration',
        loadChildren: () => Promise.all(/*! import() | registration-registration-module */[__webpack_require__.e("common"), __webpack_require__.e("registration-registration-module")]).then(__webpack_require__.bind(null, /*! ./registration/registration.module */ "DNuw")).then(m => m.RegistrationPageModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("common"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "TDBs")).then(m => m.DashboardPageModule),
        canLoad: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]]
    },
    {
        path: 'intro',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-intro-intro-module */ "pages-intro-intro-module").then(__webpack_require__.bind(null, /*! ./pages/intro/intro.module */ "a+tW")).then(m => m.IntroPageModule)
    },
    {
        path: 'profile',
        loadChildren: () => __webpack_require__.e(/*! import() | profile-profile-module */ "profile-profile-module").then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "cRhG")).then(m => m.ProfilePageModule)
    },
    {
        path: 'partners',
        loadChildren: () => __webpack_require__.e(/*! import() | partners-partners-module */ "partners-partners-module").then(__webpack_require__.bind(null, /*! ./partners/partners.module */ "qHMa")).then(m => m.PartnersPageModule)
    },
    {
        path: 'getlegalservices',
        loadChildren: () => __webpack_require__.e(/*! import() | getlegalservices-getlegalservices-module */ "getlegalservices-getlegalservices-module").then(__webpack_require__.bind(null, /*! ./getlegalservices/getlegalservices.module */ "qAIu")).then(m => m.GetlegalservicesPageModule)
    },
    {
        path: 'practiceareas',
        loadChildren: () => __webpack_require__.e(/*! import() | practiceareas-practiceareas-module */ "practiceareas-practiceareas-module").then(__webpack_require__.bind(null, /*! ./practiceareas/practiceareas.module */ "X8Ml")).then(m => m.PracticeareasPageModule)
    },
    {
        path: 'freetips',
        loadChildren: () => __webpack_require__.e(/*! import() | freetips-freetips-module */ "freetips-freetips-module").then(__webpack_require__.bind(null, /*! ./freetips/freetips.module */ "K5Sj")).then(m => m.FreetipsPageModule)
    },
    {
        path: 'privacypolicy',
        loadChildren: () => __webpack_require__.e(/*! import() | privacypolicy-privacypolicy-module */ "privacypolicy-privacypolicy-module").then(__webpack_require__.bind(null, /*! ./privacypolicy/privacypolicy.module */ "1w5g")).then(m => m.PrivacypolicyPageModule)
    },
    {
        path: 'drafting',
        loadChildren: () => __webpack_require__.e(/*! import() | drafting-drafting-module */ "drafting-drafting-module").then(__webpack_require__.bind(null, /*! ./drafting/drafting.module */ "dusS")).then(m => m.DraftingPageModule)
    },
    {
        path: 'probono',
        loadChildren: () => __webpack_require__.e(/*! import() | probono-probono-module */ "probono-probono-module").then(__webpack_require__.bind(null, /*! ./probono/probono.module */ "9x5u")).then(m => m.ProbonoPageModule)
    },
    {
        path: 'agreement',
        loadChildren: () => __webpack_require__.e(/*! import() | agreement-agreement-module */ "agreement-agreement-module").then(__webpack_require__.bind(null, /*! ./agreement/agreement.module */ "GR7A")).then(m => m.AgreementPageModule)
    },
    {
        path: 'payment',
        loadChildren: () => __webpack_require__.e(/*! import() | payment-payment-module */ "payment-payment-module").then(__webpack_require__.bind(null, /*! ./payment/payment.module */ "NSaA")).then(m => m.PaymentPageModule)
    },
    {
        path: 'companyregrequirments',
        loadChildren: () => __webpack_require__.e(/*! import() | companyregrequirments-companyregrequirments-module */ "companyregrequirments-companyregrequirments-module").then(__webpack_require__.bind(null, /*! ./companyregrequirments/companyregrequirments.module */ "x6hN")).then(m => m.CompanyregrequirmentsPageModule)
    },
    {
        path: 'imllionshare',
        loadChildren: () => __webpack_require__.e(/*! import() | imllionshare-imllionshare-module */ "imllionshare-imllionshare-module").then(__webpack_require__.bind(null, /*! ./imllionshare/imllionshare.module */ "+U0P")).then(m => m.ImllionsharePageModule)
    },
    {
        path: 'threemillion',
        loadChildren: () => __webpack_require__.e(/*! import() | threemillion-threemillion-module */ "threemillion-threemillion-module").then(__webpack_require__.bind(null, /*! ./threemillion/threemillion.module */ "eYr7")).then(m => m.ThreemillionPageModule)
    },
    {
        path: 'fivemillion',
        loadChildren: () => __webpack_require__.e(/*! import() | fivemillion-fivemillion-module */ "fivemillion-fivemillion-module").then(__webpack_require__.bind(null, /*! ./fivemillion/fivemillion.module */ "cRRN")).then(m => m.FivemillionPageModule)
    },
    {
        path: 'tenmillion',
        loadChildren: () => __webpack_require__.e(/*! import() | tenmillion-tenmillion-module */ "tenmillion-tenmillion-module").then(__webpack_require__.bind(null, /*! ./tenmillion/tenmillion.module */ "0XVJ")).then(m => m.TenmillionPageModule)
    },
    {
        path: 'choosereg',
        loadChildren: () => __webpack_require__.e(/*! import() | choosereg-choosereg-module */ "choosereg-choosereg-module").then(__webpack_require__.bind(null, /*! ./choosereg/choosereg.module */ "LjcO")).then(m => m.ChooseregPageModule)
    },
    {
        path: 'lettersofadministration',
        loadChildren: () => __webpack_require__.e(/*! import() | lettersofadministration-lettersofadministration-module */ "lettersofadministration-lettersofadministration-module").then(__webpack_require__.bind(null, /*! ./lettersofadministration/lettersofadministration.module */ "+b+a")).then(m => m.LettersofadministrationPageModule)
    },
    {
        path: 'pages',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-pages-module */ "pages-pages-module").then(__webpack_require__.bind(null, /*! ./pages/pages.module */ "dgmN")).then(m => m.PagesPageModule)
    },
    {
        path: 'proceedbusinesname',
        loadChildren: () => __webpack_require__.e(/*! import() | proceedbusinesname-proceedbusinesname-module */ "proceedbusinesname-proceedbusinesname-module").then(__webpack_require__.bind(null, /*! ./proceedbusinesname/proceedbusinesname.module */ "bKH0")).then(m => m.ProceedbusinesnamePageModule)
    },
    {
        path: 'proceedonemillion',
        loadChildren: () => __webpack_require__.e(/*! import() | proceedonemillion-proceedonemillion-module */ "proceedonemillion-proceedonemillion-module").then(__webpack_require__.bind(null, /*! ./proceedonemillion/proceedonemillion.module */ "3uR5")).then(m => m.ProceedonemillionPageModule)
    },
    {
        path: 'proceedtwomillion',
        loadChildren: () => __webpack_require__.e(/*! import() | proceedtwomillion-proceedtwomillion-module */ "proceedtwomillion-proceedtwomillion-module").then(__webpack_require__.bind(null, /*! ./proceedtwomillion/proceedtwomillion.module */ "ZV0i")).then(m => m.ProceedtwomillionPageModule)
    },
    {
        path: 'proceedthreemillion',
        loadChildren: () => __webpack_require__.e(/*! import() | proceedthreemillion-proceedthreemillion-module */ "proceedthreemillion-proceedthreemillion-module").then(__webpack_require__.bind(null, /*! ./proceedthreemillion/proceedthreemillion.module */ "wYz9")).then(m => m.ProceedthreemillionPageModule)
    },
    {
        path: 'proceedfivemillion',
        loadChildren: () => __webpack_require__.e(/*! import() | proceedfivemillion-proceedfivemillion-module */ "proceedfivemillion-proceedfivemillion-module").then(__webpack_require__.bind(null, /*! ./proceedfivemillion/proceedfivemillion.module */ "yNiq")).then(m => m.ProceedfivemillionPageModule)
    },
    {
        path: 'powerofattorney',
        loadChildren: () => __webpack_require__.e(/*! import() | powerofattorney-powerofattorney-module */ "powerofattorney-powerofattorney-module").then(__webpack_require__.bind(null, /*! ./powerofattorney/powerofattorney.module */ "l6mL")).then(m => m.PowerofattorneyPageModule)
    },
    {
        path: 'criminaldefence',
        loadChildren: () => __webpack_require__.e(/*! import() | criminaldefence-criminaldefence-module */ "criminaldefence-criminaldefence-module").then(__webpack_require__.bind(null, /*! ./criminaldefence/criminaldefence.module */ "ZBHi")).then(m => m.CriminaldefencePageModule)
    },
    {
        path: 'electionpetition',
        loadChildren: () => __webpack_require__.e(/*! import() | electionpetition-electionpetition-module */ "electionpetition-electionpetition-module").then(__webpack_require__.bind(null, /*! ./electionpetition/electionpetition.module */ "t2ec")).then(m => m.ElectionpetitionPageModule)
    },
    {
        path: 'divorcecustody',
        loadChildren: () => __webpack_require__.e(/*! import() | divorcecustody-divorcecustody-module */ "divorcecustody-divorcecustody-module").then(__webpack_require__.bind(null, /*! ./divorcecustody/divorcecustody.module */ "Vs68")).then(m => m.DivorcecustodyPageModule)
    },
    {
        path: 'bail',
        loadChildren: () => __webpack_require__.e(/*! import() | bail-bail-module */ "bail-bail-module").then(__webpack_require__.bind(null, /*! ./bail/bail.module */ "9Xzk")).then(m => m.BailPageModule)
    },
    {
        path: 'drafting',
        loadChildren: () => __webpack_require__.e(/*! import() | drafting-drafting-module */ "drafting-drafting-module").then(__webpack_require__.bind(null, /*! ./drafting/drafting.module */ "dusS")).then(m => m.DraftingPageModule)
    },
    {
        path: 'simplewill',
        loadChildren: () => __webpack_require__.e(/*! import() | simplewill-simplewill-module */ "simplewill-simplewill-module").then(__webpack_require__.bind(null, /*! ./simplewill/simplewill.module */ "l0bU")).then(m => m.SimplewillPageModule)
    },
    {
        path: 'simplewill',
        loadChildren: () => __webpack_require__.e(/*! import() | simplewill-simplewill-module */ "simplewill-simplewill-module").then(__webpack_require__.bind(null, /*! ./simplewill/simplewill.module */ "l0bU")).then(m => m.SimplewillPageModule)
    },
    {
        path: 'lodgwillservices',
        loadChildren: () => __webpack_require__.e(/*! import() | lodgwillservices-lodgwillservices-module */ "lodgwillservices-lodgwillservices-module").then(__webpack_require__.bind(null, /*! ./lodgwillservices/lodgwillservices.module */ "5XNO")).then(m => m.LodgwillservicesPageModule)
    },
    {
        path: 'lodgedetachwill',
        loadChildren: () => __webpack_require__.e(/*! import() | lodgedetachwill-lodgedetachwill-module */ "lodgedetachwill-lodgedetachwill-module").then(__webpack_require__.bind(null, /*! ./lodgedetachwill/lodgedetachwill.module */ "cPey")).then(m => m.LodgedetachwillPageModule)
    },
    {
        path: 'simplewill',
        loadChildren: () => __webpack_require__.e(/*! import() | simplewill-simplewill-module */ "simplewill-simplewill-module").then(__webpack_require__.bind(null, /*! ./simplewill/simplewill.module */ "l0bU")).then(m => m.SimplewillPageModule)
    },
    {
        path: 'simplewill',
        loadChildren: () => __webpack_require__.e(/*! import() | simplewill-simplewill-module */ "simplewill-simplewill-module").then(__webpack_require__.bind(null, /*! ./simplewill/simplewill.module */ "l0bU")).then(m => m.SimplewillPageModule)
    },
    {
        path: 'applybail',
        loadChildren: () => __webpack_require__.e(/*! import() | applybail-applybail-module */ "applybail-applybail-module").then(__webpack_require__.bind(null, /*! ./applybail/applybail.module */ "roBJ")).then(m => m.ApplybailPageModule)
    },
    {
        path: 'caveat',
        loadChildren: () => __webpack_require__.e(/*! import() | caveat-caveat-module */ "caveat-caveat-module").then(__webpack_require__.bind(null, /*! ./caveat/caveat.module */ "6Vj1")).then(m => m.CaveatPageModule)
    },
    {
        path: 'proceed4million',
        loadChildren: () => __webpack_require__.e(/*! import() | proceed4million-proceed4million-module */ "proceed4million-proceed4million-module").then(__webpack_require__.bind(null, /*! ./proceed4million/proceed4million.module */ "SN8E")).then(m => m.Proceed4millionPageModule)
    },
    {
        path: 'proceed5million',
        loadChildren: () => __webpack_require__.e(/*! import() | proceed5million-proceed5million-module */ "proceed5million-proceed5million-module").then(__webpack_require__.bind(null, /*! ./proceed5million/proceed5million.module */ "f+rS")).then(m => m.Proceed5millionPageModule)
    },
    {
        path: 'fourmillion',
        loadChildren: () => __webpack_require__.e(/*! import() | fourmillion-fourmillion-module */ "fourmillion-fourmillion-module").then(__webpack_require__.bind(null, /*! ./fourmillion/fourmillion.module */ "Z/np")).then(m => m.FourmillionPageModule)
    },
    {
        path: 'simplyprobate',
        loadChildren: () => __webpack_require__.e(/*! import() | simplyprobate-simplyprobate-module */ "simplyprobate-simplyprobate-module").then(__webpack_require__.bind(null, /*! ./simplyprobate/simplyprobate.module */ "NrUS")).then(m => m.SimplyprobatePageModule)
    },
    {
        path: 'cooperate',
        loadChildren: () => __webpack_require__.e(/*! import() | cooperate-cooperate-module */ "cooperate-cooperate-module").then(__webpack_require__.bind(null, /*! ./cooperate/cooperate.module */ "QwtX")).then(m => m.CooperatePageModule)
    },
    {
        path: 'elect',
        loadChildren: () => __webpack_require__.e(/*! import() | elect-elect-module */ "elect-elect-module").then(__webpack_require__.bind(null, /*! ./elect/elect.module */ "LIvV")).then(m => m.ElectPageModule)
    },
    {
        path: 'coop',
        loadChildren: () => __webpack_require__.e(/*! import() | coop-coop-module */ "coop-coop-module").then(__webpack_require__.bind(null, /*! ./coop/coop.module */ "yEDV")).then(m => m.CoopPageModule)
    },
    {
        path: 'com',
        loadChildren: () => __webpack_require__.e(/*! import() | com-com-module */ "com-com-module").then(__webpack_require__.bind(null, /*! ./com/com.module */ "IwE2")).then(m => m.ComPageModule)
    },
    {
        path: 'bennybonny',
        loadChildren: () => __webpack_require__.e(/*! import() | bennybonny-bennybonny-module */ "bennybonny-bennybonny-module").then(__webpack_require__.bind(null, /*! ./bennybonny/bennybonny.module */ "wB3T")).then(m => m.BennybonnyPageModule)
    },
    {
        path: 'nnamdi',
        loadChildren: () => __webpack_require__.e(/*! import() | nnamdi-nnamdi-module */ "nnamdi-nnamdi-module").then(__webpack_require__.bind(null, /*! ./nnamdi/nnamdi.module */ "f5va")).then(m => m.NnamdiPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\nion-toolbar {\n  --background: #023e8a !important;\n}\n\nion-back-button {\n  --color: white !important;\n}\n\nion-icon {\n  color: white !important;\n}\n\n.element {\n  transform: translateY(-20px);\n}\n\np {\n  font-family: OpenSans;\n}\n\nh1 {\n  font-family: OpenSans-Bold;\n}\n\n/* DOES NOT WORK - not specific enough */\n\n.alert-wrapper {\n  background: #e5e5e5;\n}\n\n/* Works - pass \"my-custom-class\" in cssClass to increase specificity */\n\n.my-custom-class {\n  background: #e5e5e5;\n}\n\n.nav {\n  display: flex;\n  flex-grow: 5;\n  flex-direction: column;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.nav-item {\n  padding: 0.75rem 0.5rem 0 0.5rem;\n  font-size: 1.2rem;\n}\n\n.nav-item span.divider {\n  padding-top: 0.75rem;\n  width: 100%;\n  display: block;\n  border-bottom: solid 1px rgba(34, 34, 34, 0.18);\n}\n\n.icon {\n  margin-right: 0.5rem;\n}\n\n.nav-item:hover, .nav-item:active {\n  background: rgba(var(34, 34, 34), 0.1);\n}\n\n.footer {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n}\n\n.footer-nav {\n  padding: 0.5rem;\n}\n\n.footer-nav ul {\n  width: 100%;\n  padding: 0;\n  text-align: center;\n}\n\n.footer-nav ul li {\n  padding: 0;\n  list-style: none;\n}\n\n.footer-social {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  font-size: 2rem;\n}\n\n.footer-app-version {\n  padding: 0.3rem;\n  text-align: center;\n  font-size: 0.8rem;\n}\n\nh3 {\n  font-size: 17px;\n}\n\na:hover, a:visited, a:link, a:active {\n  text-decoration: none;\n}\n\ndiv > img {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n  height: 50%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkVBQUE7QUFDRjs7QUFFQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBOztFQUVFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyREFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxzREFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGNBQUE7QUFIRjs7QUFNQTtFQUNFLGdCQUFBO0FBSEY7O0FBTUE7RUFDRSxzQkFBQTtBQUhGOztBQU1BO0VBQ0UsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UsK0JBQUE7QUFIRjs7QUFNQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQUpGOztBQU9BO0VBQ0UsaUNBQUE7QUFKRjs7QUFPQTtFQUNFLGdDQUFBO0FBSkY7O0FBT0E7RUFDRSx5QkFBQTtBQUpGOztBQU9BO0VBQ0UsdUJBQUE7QUFKRjs7QUFPQTtFQUVFLDRCQUFBO0FBTEY7O0FBU0E7RUFDRSxxQkFBQTtBQU5GOztBQVVBO0VBRUUsMEJBQUE7QUFSRjs7QUFXQSx3Q0FBQTs7QUFDQTtFQUNFLG1CQUFBO0FBUkY7O0FBVUEsdUVBQUE7O0FBQ0E7RUFDRSxtQkFBQTtBQVBGOztBQVVBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFQRjs7QUFVQTtFQUNFLGdDQUFBO0VBQ0EsaUJBQUE7QUFQRjs7QUFVQTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSwrQ0FBQTtBQVBGOztBQVVBO0VBQ0Usb0JBQUE7QUFQRjs7QUFVQTtFQUNFLHNDQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQVBGOztBQVVBO0VBQ0UsZUFBQTtBQVBGOztBQVVBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQVBGOztBQVNFO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0FBUE47O0FBV0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBUkY7O0FBV0E7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQVJGOztBQVdBO0VBQ0UsZUFBQTtBQVJGOztBQVdBO0VBRUUscUJBQUE7QUFURjs7QUFZQTtFQUVFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQVZGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xufVxuXG5pb24tbWVudS5tZCBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuXG4gIGNvbG9yOiAjNzU3NTc1O1xuXG4gIG1pbi1oZWlnaHQ6IDI2cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6ICM2MTZlN2U7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzczODQ5YTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbm90ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMDIzZThhICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1iYWNrLWJ1dHRvbntcbiAgLS1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuaW9uLWljb24ge1xuICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpICFpbXBvcnRhbnQ7XG59XG5cbi5lbGVtZW50IHtcblxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xufVxuXG5cbnB7XG4gIGZvbnQtZmFtaWx5Ok9wZW5TYW5zO1xuXG59XG5cbmgxXG57XG4gIGZvbnQtZmFtaWx5Ok9wZW5TYW5zLUJvbGQ7XG59XG5cbi8qIERPRVMgTk9UIFdPUksgLSBub3Qgc3BlY2lmaWMgZW5vdWdoICovXG4uYWxlcnQtd3JhcHBlciB7XG4gIGJhY2tncm91bmQ6ICNlNWU1ZTU7XG59XG4vKiBXb3JrcyAtIHBhc3MgXCJteS1jdXN0b20tY2xhc3NcIiBpbiBjc3NDbGFzcyB0byBpbmNyZWFzZSBzcGVjaWZpY2l0eSAqL1xuLm15LWN1c3RvbS1jbGFzc3tcbiAgYmFja2dyb3VuZDogI2U1ZTVlNTtcbn1cblxuLm5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZ3JvdzogNTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5uYXYtaXRlbSB7XG4gIHBhZGRpbmc6IDAuNzVyZW0gMC41cmVtIDAgMC41cmVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxuLm5hdi1pdGVtIHNwYW4uZGl2aWRlciB7XG4gIHBhZGRpbmctdG9wOiAwLjc1cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCByZ2JhKDM0LCAzNCwgMzQsIDAuMTgpO1xufVxuXG4uaWNvbiB7XG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xufVxuXG4ubmF2LWl0ZW06aG92ZXIsIC5uYXYtaXRlbTphY3RpdmUge1xuICBiYWNrZ3JvdW5kOiByZ2JhKHZhcigzNCwgMzQsIDM0KSwgMC4xKTtcbn1cblxuLmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG59XG5cbi5mb290ZXItbmF2IHtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG4uZm9vdGVyLW5hdiB1bCB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgbGkge1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cbn1cblxuLmZvb3Rlci1zb2NpYWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG4uZm9vdGVyLWFwcC12ZXJzaW9uIHtcbiAgcGFkZGluZzogMC4zcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG5oM3tcbiAgZm9udC1zaXplOiAxN3B4O1xuXG59XG5hOmhvdmVyLCBhOnZpc2l0ZWQsIGE6bGluaywgYTphY3RpdmVcbntcbiAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XG59XG5cbmRpdiA+IGltZ1xue1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxufVxuIl19 */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map