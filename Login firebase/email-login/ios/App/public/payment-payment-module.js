(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payment-payment-module"],{

/***/ "6w7n":
/*!***************************************************!*\
  !*** ./src/app/payment/payment-routing.module.ts ***!
  \***************************************************/
/*! exports provided: PaymentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageRoutingModule", function() { return PaymentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment.page */ "SCHJ");




const routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_3__["PaymentPage"]
    }
];
let PaymentPageRoutingModule = class PaymentPageRoutingModule {
};
PaymentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentPageRoutingModule);



/***/ }),

/***/ "AiYy":
/*!***********************************************************************************!*\
  !*** ./node_modules/angular4-paystack/__ivy_ngcc__/fesm2015/angular4-paystack.js ***!
  \***********************************************************************************/
/*! exports provided: Angular4PaystackComponent, Angular4PaystackDirective, Angular4PaystackEmbedComponent, Angular4PaystackModule, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Angular4PaystackComponent", function() { return Angular4PaystackComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Angular4PaystackDirective", function() { return Angular4PaystackDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Angular4PaystackEmbedComponent", function() { return Angular4PaystackEmbedComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Angular4PaystackModule", function() { return Angular4PaystackModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return Angular4PaystackService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return PUBLIC_KEY_TOKEN; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "O1h7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */



const _c0 = ["*"];
const PUBLIC_KEY_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('paystack.publickey');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MyWindow() { }
if (false) {}
class Angular4PaystackService {
    /**
     * @param {?} token
     */
    constructor(token) {
        this.token = token;
    }
    /**
     * @return {?}
     */
    loadScript() {
        return new Promise((/**
         * @param {?} resolve
         * @return {?}
         */
        resolve => {
            if (window.PaystackPop && typeof window.PaystackPop.setup === 'function') {
                resolve();
                return;
            }
            /** @type {?} */
            const script = window.document.createElement('script');
            window.document.head.appendChild(script);
            /** @type {?} */
            const onLoadFunc = (/**
             * @return {?}
             */
            () => {
                script.removeEventListener('load', onLoadFunc);
                resolve();
            });
            script.addEventListener('load', onLoadFunc);
            script.setAttribute('src', 'https://js.paystack.co/v1/inline.js');
        }));
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    checkInput(obj) {
        if (!obj.key && !this.token) {
            return 'ANGULAR-PAYSTACK: Please insert a your public key';
        }
        if (!obj.email) {
            return 'ANGULAR-PAYSTACK: Paystack email cannot be empty';
        }
        if (!obj.amount) {
            return 'ANGULAR-PAYSTACK: Paystack amount cannot be empty';
        }
        if (!obj.ref) {
            return 'ANGULAR-PAYSTACK: Paystack ref cannot be empty';
        }
        return '';
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    getPaystackOptions(obj) {
        /** @type {?} */
        const paystackOptions = {
            key: obj.key || this.token,
            email: obj.email,
            amount: obj.amount,
            ref: obj.ref,
            metadata: obj.metadata || {},
            currency: obj.currency || 'NGN',
            plan: obj.plan || '',
            channels: obj.channels,
            quantity: obj.quantity || '',
            subaccount: obj.subaccount || '',
            transaction_charge: obj.transaction_charge || 0,
            // tslint:disable-line
            bearer: obj.bearer || '',
        };
        return paystackOptions;
    }
}
Angular4PaystackService.ɵfac = function Angular4PaystackService_Factory(t) { return new (t || Angular4PaystackService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](PUBLIC_KEY_TOKEN)); };
Angular4PaystackService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: Angular4PaystackService, factory: Angular4PaystackService.ɵfac, providedIn: 'root' });
/** @nocollapse */
Angular4PaystackService.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [PUBLIC_KEY_TOKEN,] }] }
];
/** @nocollapse */ Angular4PaystackService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({ factory: function Angular4PaystackService_Factory() { return new Angular4PaystackService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(PUBLIC_KEY_TOKEN)); }, token: Angular4PaystackService, providedIn: "root" });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Angular4PaystackService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: String, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [PUBLIC_KEY_TOKEN]
            }] }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MyWindow$1() { }
if (false) {}
class Angular4PaystackComponent {
    /**
     * @param {?} paystackService
     */
    constructor(paystackService) {
        this.paystackService = paystackService;
        this.paymentInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // tslint:disable-line
        // tslint:disable-line
        this.callback = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // tslint:disable-line
        this.isPaying = false;
    }
    /**
     * @return {?}
     */
    pay() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /** @type {?} */
            let errorText = '';
            if (this.paystackOptions && Object.keys(this.paystackOptions).length >= 2) {
                errorText = this.valdateInput(this.paystackOptions);
                this.generateOptions(this.paystackOptions);
            }
            else {
                errorText = this.valdateInput(this);
                this.generateOptions(this);
            }
            if (errorText) {
                console.error(errorText);
                return errorText;
            }
            yield this.paystackService.loadScript();
            if (this.isPaying) {
                return;
            }
            if (this.paymentInit.observers.length) {
                this.paymentInit.emit();
            }
            /** @type {?} */
            const payment = window.PaystackPop.setup(this._paystackOptions);
            payment.openIframe();
            this.isPaying = true;
        });
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    valdateInput(obj) {
        if (!this.callback.observers.length) {
            return 'ANGULAR-PAYSTACK: Insert a callback output like so (callback)=\'PaymentComplete($event)\' to check payment status';
        }
        return this.paystackService.checkInput(obj);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    generateOptions(obj) {
        this._paystackOptions = this.paystackService.getPaystackOptions(obj);
        this._paystackOptions.onClose = (/**
         * @return {?}
         */
        () => {
            if (this.onClose.observers.length) {
                this.onClose.emit();
            }
        });
        this._paystackOptions.callback = (/**
         * @param {...?} response
         * @return {?}
         */
        (...response) => {
            this.callback.emit(...response);
        });
    }
}
Angular4PaystackComponent.ɵfac = function Angular4PaystackComponent_Factory(t) { return new (t || Angular4PaystackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Angular4PaystackService)); };
Angular4PaystackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Angular4PaystackComponent, selectors: [["angular4-paystack"]], inputs: { key: "key", email: "email", amount: "amount", metadata: "metadata", ref: "ref", currency: "currency", plan: "plan", quantity: "quantity", channels: "channels", subaccount: "subaccount", transaction_charge: "transaction_charge", bearer: "bearer", class: "class", style: "style", paystackOptions: "paystackOptions" }, outputs: { paymentInit: "paymentInit", onClose: "onClose", callback: "callback" }, ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[3, "ngClass", "ngStyle", "click"]], template: function Angular4PaystackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Angular4PaystackComponent_Template_button_click_0_listener() { return ctx.pay(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.class)("ngStyle", ctx.style);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], encapsulation: 2 });
/** @nocollapse */
Angular4PaystackComponent.ctorParameters = () => [
    { type: Angular4PaystackService }
];
Angular4PaystackComponent.propDecorators = {
    key: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    metadata: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    ref: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    currency: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    plan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    quantity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    channels: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    subaccount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    transaction_charge: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    bearer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    style: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    paystackOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    paymentInit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    onClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    callback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Angular4PaystackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'angular4-paystack',
                template: `<button [ngClass]="class" [ngStyle]="style" (click)="pay()"><ng-content></ng-content></button>`
            }]
    }], function () { return [{ type: Angular4PaystackService }]; }, { paymentInit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], callback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], key: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], email: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], amount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], metadata: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], ref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], currency: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], plan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], quantity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], channels: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], subaccount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], transaction_charge: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], bearer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], class: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], style: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], paystackOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MyWindow$2() { }
if (false) {}
class Angular4PaystackDirective {
    /**
     * @param {?} paystackService
     */
    constructor(paystackService) {
        this.paystackService = paystackService;
        this.paymentInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // tslint:disable-line
        // tslint:disable-line
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // tslint:disable-line
        // tslint:disable-line
        this.callback = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // tslint:disable-line
        this.isPaying = false;
    }
    /**
     * @return {?}
     */
    pay() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /** @type {?} */
            let errorText = '';
            if (this.paystackOptions && Object.keys(this.paystackOptions).length >= 2) {
                errorText = this.valdateInput(this.paystackOptions);
                this.generateOptions(this.paystackOptions);
            }
            else {
                errorText = this.valdateInput(this);
                this.generateOptions(this);
            }
            if (errorText) {
                console.error(errorText);
                return errorText;
            }
            yield this.paystackService.loadScript();
            if (this.isPaying) {
                return;
            }
            if (this.paymentInit.observers.length) {
                this.paymentInit.emit();
            }
            /** @type {?} */
            const payment = window.PaystackPop.setup(this._paystackOptions);
            payment.openIframe();
            this.isPaying = true;
        });
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    valdateInput(obj) {
        if (!this.callback.observers.length) {
            return 'ANGULAR-PAYSTACK: Insert a callback output like so (callback)=\'PaymentComplete($event)\' to check payment status';
        }
        return this.paystackService.checkInput(obj);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    generateOptions(obj) {
        this._paystackOptions = this.paystackService.getPaystackOptions(obj);
        this._paystackOptions.onClose = (/**
         * @return {?}
         */
        () => {
            if (this.onClose.observers.length) {
                this.onClose.emit();
            }
        });
        this._paystackOptions.callback = (/**
         * @param {...?} response
         * @return {?}
         */
        (...response) => {
            this.callback.emit(...response);
        });
    }
    /**
     * @return {?}
     */
    buttonClick() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.pay();
        });
    }
}
Angular4PaystackDirective.ɵfac = function Angular4PaystackDirective_Factory(t) { return new (t || Angular4PaystackDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Angular4PaystackService)); };
Angular4PaystackDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: Angular4PaystackDirective, selectors: [["", "angular4-paystack", ""]], hostBindings: function Angular4PaystackDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function Angular4PaystackDirective_click_HostBindingHandler() { return ctx.buttonClick(); });
    } }, inputs: { key: "key", email: "email", amount: "amount", metadata: "metadata", ref: "ref", currency: "currency", plan: "plan", quantity: "quantity", subaccount: "subaccount", channels: "channels", transaction_charge: "transaction_charge", bearer: "bearer", class: "class", style: "style", paystackOptions: "paystackOptions" }, outputs: { paymentInit: "paymentInit", onClose: "onClose", callback: "callback" } });
/** @nocollapse */
Angular4PaystackDirective.ctorParameters = () => [
    { type: Angular4PaystackService }
];
Angular4PaystackDirective.propDecorators = {
    key: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    metadata: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    ref: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    currency: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    plan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    quantity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    subaccount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    channels: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    transaction_charge: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    bearer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    class: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    style: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    paystackOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    paymentInit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    onClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    callback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    buttonClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['click',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Angular4PaystackDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[angular4-paystack]'
            }]
    }], function () { return [{ type: Angular4PaystackService }]; }, { paymentInit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], callback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], 
    /**
     * @return {?}
     */
    buttonClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['click']
        }], key: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], email: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], amount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], metadata: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], ref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], currency: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], plan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], quantity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], subaccount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], channels: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], transaction_charge: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], bearer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], class: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], style: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], paystackOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function MyWindow$3() { }
if (false) {}
class Angular4PaystackEmbedComponent {
    // tslint:disable-line
    /**
     * @param {?} paystackService
     */
    constructor(paystackService) {
        this.paystackService = paystackService;
        this.paymentInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // tslint:disable-line
        // tslint:disable-line
        this.callback = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    pay() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /** @type {?} */
            let errorText = '';
            if (this.paystackOptions && Object.keys(this.paystackOptions).length >= 2) {
                errorText = this.valdateInput(this.paystackOptions);
                this.generateOptions(this.paystackOptions);
            }
            else {
                errorText = this.valdateInput(this);
                this.generateOptions(this);
            }
            if (errorText) {
                console.error(errorText);
                return errorText;
            }
            yield this.paystackService.loadScript();
            if (this.paymentInit.observers.length) {
                this.paymentInit.emit();
            }
            /** @type {?} */
            const payment = window.PaystackPop.setup(this._paystackOptions);
            payment.openIframe();
        });
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    valdateInput(obj) {
        if (!this.callback.observers.length) {
            return 'ANGULAR-PAYSTACK: Insert a callback output like so (callback)=\'PaymentComplete($event)\' to check payment status';
        }
        return this.paystackService.checkInput(obj);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    generateOptions(obj) {
        this._paystackOptions = this.paystackService.getPaystackOptions(obj);
        this._paystackOptions.onClose = (/**
         * @return {?}
         */
        () => {
            if (this.onClose.observers.length) {
                this.onClose.emit();
            }
        });
        this._paystackOptions.callback = (/**
         * @param {...?} response
         * @return {?}
         */
        (...response) => {
            this.callback.emit(...response);
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.error('ANGULAR-PAYSTACK: The paystack embed option is deprecated. Please use the paystack component or directive');
            this.pay();
        });
    }
}
Angular4PaystackEmbedComponent.ɵfac = function Angular4PaystackEmbedComponent_Factory(t) { return new (t || Angular4PaystackEmbedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](Angular4PaystackService)); };
Angular4PaystackEmbedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Angular4PaystackEmbedComponent, selectors: [["angular4-paystack-embed"]], inputs: { key: "key", email: "email", amount: "amount", metadata: "metadata", channels: "channels", ref: "ref", currency: "currency", plan: "plan", quantity: "quantity", subaccount: "subaccount", transaction_charge: "transaction_charge", bearer: "bearer", paystackOptions: "paystackOptions" }, outputs: { paymentInit: "paymentInit", onClose: "onClose", callback: "callback" }, decls: 1, vars: 0, consts: [["id", "paystackEmbedContainer"]], template: function Angular4PaystackEmbedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
    } }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
Angular4PaystackEmbedComponent.ctorParameters = () => [
    { type: Angular4PaystackService }
];
Angular4PaystackEmbedComponent.propDecorators = {
    key: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    email: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    amount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    metadata: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    channels: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    ref: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    currency: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    plan: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    quantity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    subaccount: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    transaction_charge: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    bearer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    paystackOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }],
    paymentInit: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    onClose: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }],
    callback: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Angular4PaystackEmbedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'angular4-paystack-embed',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
                template: `<div id="paystackEmbedContainer"></div>`
            }]
    }], function () { return [{ type: Angular4PaystackService }]; }, { paymentInit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], onClose: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], callback: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], key: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], email: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], amount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], metadata: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], channels: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], ref: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], currency: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], plan: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], quantity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], subaccount: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], transaction_charge: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], bearer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], paystackOptions: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Angular4PaystackModule {
    /**
     * @param {?} token
     * @return {?}
     */
    static forRoot(token) {
        return {
            ngModule: Angular4PaystackModule,
            providers: [
                Angular4PaystackService,
                { provide: PUBLIC_KEY_TOKEN, useValue: token }
            ]
        };
    }
}
Angular4PaystackModule.ɵfac = function Angular4PaystackModule_Factory(t) { return new (t || Angular4PaystackModule)(); };
Angular4PaystackModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: Angular4PaystackModule });
Angular4PaystackModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ providers: [], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Angular4PaystackModule, { declarations: function () { return [Angular4PaystackComponent, Angular4PaystackDirective, Angular4PaystackEmbedComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]; }, exports: function () { return [Angular4PaystackComponent, Angular4PaystackDirective, Angular4PaystackEmbedComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Angular4PaystackModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                exports: [Angular4PaystackComponent, Angular4PaystackDirective, Angular4PaystackEmbedComponent],
                declarations: [Angular4PaystackComponent, Angular4PaystackDirective, Angular4PaystackEmbedComponent],
                providers: []
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=angular4-paystack.js.map

/***/ }),

/***/ "NSaA":
/*!*******************************************!*\
  !*** ./src/app/payment/payment.module.ts ***!
  \*******************************************/
/*! exports provided: PaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-routing.module */ "6w7n");
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment.page */ "SCHJ");
/* harmony import */ var angular4_paystack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular4-paystack */ "AiYy");








let PaymentPageModule = class PaymentPageModule {
};
PaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            angular4_paystack__WEBPACK_IMPORTED_MODULE_7__["Angular4PaystackModule"].forRoot('pk_test_b3c5a2b5d3eb1a8a9179d4dfacb409aa31c4379b'),
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentPageRoutingModule"]
        ],
        declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]]
    })
], PaymentPageModule);



/***/ }),

/***/ "SCHJ":
/*!*****************************************!*\
  !*** ./src/app/payment/payment.page.ts ***!
  \*****************************************/
/*! exports provided: PaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPage", function() { return PaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_payment_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./payment.page.html */ "dXRR");
/* harmony import */ var _payment_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment.page.scss */ "xeWX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let PaymentPage = class PaymentPage {
    constructor() {
        this.title = '';
        this.reference = '';
    }
    paymentInit() {
        console.log('Payment initialized');
    }
    paymentDone(ref) {
        this.title = 'Payment successfull';
        console.log(this.title, ref);
    }
    paymentCancel() {
        console.log('payment failed');
    }
    ngOnInit() {
        this.reference = `ref-${Math.ceil(Math.random() * 10e13)}`;
    }
};
PaymentPage.ctorParameters = () => [];
PaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-payment',
        template: _raw_loader_payment_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_payment_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PaymentPage);



/***/ }),

/***/ "dXRR":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payment/payment.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-header>\n  <ion-toolbar> <ion-buttons slot=\"start\">\n    <ion-back-button defaultHref=\"/folder\"></ion-back-button>\n  </ion-buttons>\n\n  <ion-buttons slot=\"end\"  >\n    <angular4-paystack\n    [email]=\"'mailexample@mail.com'\"\n    [amount]=\"50000\"\n    [ref]=\"reference\"\n    [channels]=\"['bank']\"\n    (onClose)=\"paymentCancel()\"\n    (callback)=\"paymentDone($event)\"\n  >\n  <ion-icon slot=\"start\" name=\"cart-outline\"></ion-icon>\n\n\n  </angular4-paystack>\n\n\n\n  </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n<br>\n\n\n\n\n</ion-content>\n");

/***/ }),

/***/ "xeWX":
/*!*******************************************!*\
  !*** ./src/app/payment/payment.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50LnBhZ2Uuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=payment-payment-module.js.map