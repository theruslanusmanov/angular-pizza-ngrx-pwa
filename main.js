(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pizza_containers_pizza_container_pizza_container_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pizza/containers/pizza-container/pizza-container.component */ "./src/app/pizza/containers/pizza-container/pizza-container.component.ts");




var routes = [
    { path: 'pizzas', component: _pizza_containers_pizza_container_pizza_container_component__WEBPACK_IMPORTED_MODULE_3__["PizzaContainerComponent"] },
    { path: '', redirectTo: '/pizzas', pathMatch: 'prefix' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-pizza-container></app-pizza-container>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'pizza-pwa';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _pizza_pizza_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pizza/pizza.module */ "./src/app/pizza/pizza.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _pizza_pizza_module__WEBPACK_IMPORTED_MODULE_8__["PizzaModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pizza/components/pizza-form-details/pizza-form-details.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/pizza/components/pizza-form-details/pizza-form-details.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit($event)\" [formGroup]=\"parent\">\n  <div class=\"section\" formGroupName=\"details\">\n    <div class=\"input\">\n      <label>\n        Name <span class=\"required\">*</span>\n        <span *ngIf=\"parent.get('details').get('name').hasError('required') && parent.get('details').get('name').touched\"\n              class=\"error\">\n          Field is required\n        </span>\n      </label>\n      <input formControlName=\"name\" type=\"text\" placeholder=\"John Smith\">\n    </div>\n    <div class=\"input\">\n      <label>\n        Email <span class=\"required\">*</span>\n        <span *ngIf=\"parent.get('details').get('email').errors && parent.get('details').get('email').touched\"\n              class=\"error\">\n          Field is required\n        </span>\n      </label>\n      <input formControlName=\"email\" type=\"email\" placeholder=\"Enter your email\">\n    </div>\n  </div>\n  <div class=\"section\" formGroupName=\"details\">\n    <div class=\"input\">\n      <label>\n        Address <span class=\"required\">*</span>\n        <span *ngIf=\"parent.get('details').get('address').errors && parent.get('details').get('address').touched\"\n              class=\"error\">\n          <span *ngIf=\"parent.get('details').get('address').hasError('required')\">\n            Field is required\n          </span>\n          <span *ngIf=\"parent.get('details').get('address').hasError('minlength')\">\n            Min of 3 characters\n          </span>\n        </span>\n      </label>\n      <input formControlName=\"address\" type=\"text\" placeholder=\"44 Pizza Street\">\n    </div>\n    <div class=\"input\">\n      <label>\n        Contact Number <span class=\"required\">*</span>\n        <span *ngIf=\"parent.get('details').get('phone').errors && parent.get('details').get('phone').touched\"\n              class=\"error\">\n          Field is required\n        </span>\n      </label>\n      <input formControlName=\"phone\" type=\"text\" placeholder=\"01234 567 890\">\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/pizza/components/pizza-form-details/pizza-form-details.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pizza/components/pizza-form-details/pizza-form-details.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".required,\n.error {\n  color: #E01D3B;\n  font-weight: 700; }\n\n.input {\n  margin: 0 30px 20px 0 !important;\n  flex-grow: 1; }\n\n.input:last-child {\n    margin-right: 0; }\n\n.input label {\n    font-size: 12px;\n    font-weight: 700;\n    text-transform: uppercase;\n    color: rgba(0, 0, 0, 0.6);\n    display: block;\n    margin-bottom: 10px; }\n\n.input label .error {\n      float: right; }\n\n.input input {\n    background: #fff;\n    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.02);\n    border-radius: 2px;\n    border: 1px solid #d7d7e7;\n    font-size: 18px;\n    padding: 10px 10px;\n    outline: none;\n    font-family: inherit;\n    color: rgba(0, 0, 0, 0.8);\n    width: 100%; }\n\n.input input:focus {\n      outline: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9vd2xydXNsYW4vYW5ndWxhci1waXp6YS1uZ3J4LXB3YS9zcmMvYXBwL3BpenphL2NvbXBvbmVudHMvcGl6emEtZm9ybS1kZXRhaWxzL3BpenphLWZvcm0tZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxlQUFjO0VBQ2QsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsaUNBQWdDO0VBQ2hDLGFBQVksRUFnQ2I7O0FBbENEO0lBSUksZ0JBQWUsRUFDaEI7O0FBTEg7SUFPSSxnQkFBZTtJQUNmLGlCQUFnQjtJQUNoQiwwQkFBeUI7SUFDekIsMEJBQXlCO0lBQ3pCLGVBQWM7SUFDZCxvQkFBbUIsRUFLcEI7O0FBakJIO01BZU0sYUFBWSxFQUNiOztBQWhCTDtJQW1CSSxpQkFBZ0I7SUFDaEIsMENBQXNDO0lBQ3RDLG1CQUFrQjtJQUNsQiwwQkFBeUI7SUFDekIsZ0JBQWU7SUFDZixtQkFBa0I7SUFDbEIsY0FBYTtJQUNiLHFCQUFvQjtJQUNwQiwwQkFBeUI7SUFDekIsWUFBVyxFQUtaOztBQWpDSDtNQStCTSxjQUFhLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9waXp6YS9jb21wb25lbnRzL3BpenphLWZvcm0tZGV0YWlscy9waXp6YS1mb3JtLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVxdWlyZWQsXHJcbiAgLmVycm9yIHtcclxuICAgIGNvbG9yOiAjRTAxRDNCO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0IHtcclxuICAgIG1hcmdpbjogMCAzMHB4IDIwcHggMCAhaW1wb3J0YW50O1xyXG4gICAgZmxleC1ncm93OiAxO1xyXG4gICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gICAgbGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIFxyXG4gICAgICAuZXJyb3Ige1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW5wdXQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDNweCA1cHggcmdiYSgwLDAsMCwwLjAyKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDdkN2U3O1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gIFxyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/pizza/components/pizza-form-details/pizza-form-details.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pizza/components/pizza-form-details/pizza-form-details.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PizzaFormDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzaFormDetailsComponent", function() { return PizzaFormDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var PizzaFormDetailsComponent = /** @class */ (function () {
    function PizzaFormDetailsComponent() {
    }
    PizzaFormDetailsComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], PizzaFormDetailsComponent.prototype, "parent", void 0);
    PizzaFormDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pizza-form-details',
            template: __webpack_require__(/*! ./pizza-form-details.component.html */ "./src/app/pizza/components/pizza-form-details/pizza-form-details.component.html"),
            styles: [__webpack_require__(/*! ./pizza-form-details.component.scss */ "./src/app/pizza/components/pizza-form-details/pizza-form-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PizzaFormDetailsComponent);
    return PizzaFormDetailsComponent;
}());



/***/ }),

/***/ "./src/app/pizza/components/pizza-form-steps/pizza-form-steps.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pizza/components/pizza-form-steps/pizza-form-steps.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngStyle]=\"{'width': percentage + '%'}\" class=\"step-line\"></div>\n"

/***/ }),

/***/ "./src/app/pizza/components/pizza-form-steps/pizza-form-steps.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pizza/components/pizza-form-steps/pizza-form-steps.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  height: 5px;\n  z-index: 2;\n  background-color: #f6fffa; }\n\n.step-line {\n  background-color: #9affb8;\n  height: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9vd2xydXNsYW4vYW5ndWxhci1waXp6YS1uZ3J4LXB3YS9zcmMvYXBwL3BpenphL2NvbXBvbmVudHMvcGl6emEtZm9ybS1zdGVwcy9waXp6YS1mb3JtLXN0ZXBzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVztFQUNYLFlBQVc7RUFDWCxXQUFVO0VBQ1YsMEJBQXlCLEVBQzVCOztBQUVEO0VBQ0ksMEJBQXlCO0VBQ3pCLFlBQVcsRUFDZCIsImZpbGUiOiJzcmMvYXBwL3BpenphL2NvbXBvbmVudHMvcGl6emEtZm9ybS1zdGVwcy9waXp6YS1mb3JtLXN0ZXBzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmZmZhO1xyXG59XHJcblxyXG4uc3RlcC1saW5lIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5YWZmYjg7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pizza/components/pizza-form-steps/pizza-form-steps.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pizza/components/pizza-form-steps/pizza-form-steps.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PizzaFormStepsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzaFormStepsComponent", function() { return PizzaFormStepsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store_selectors_forms_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/selectors/forms.selector */ "./src/app/pizza/store/selectors/forms.selector.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions_forms_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/forms.actions */ "./src/app/pizza/store/actions/forms.actions.ts");





var PizzaFormStepsComponent = /** @class */ (function () {
    function PizzaFormStepsComponent(store) {
        this.store = store;
        this.steps$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_selectors_forms_selector__WEBPACK_IMPORTED_MODULE_2__["selectFormSteps"]));
    }
    PizzaFormStepsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.dispatch(new _store_actions_forms_actions__WEBPACK_IMPORTED_MODULE_4__["UpdateSteps"](10));
        this.steps$.subscribe(function (value) { return _this.percentage = value; });
    };
    PizzaFormStepsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pizza-form-steps',
            template: __webpack_require__(/*! ./pizza-form-steps.component.html */ "./src/app/pizza/components/pizza-form-steps/pizza-form-steps.component.html"),
            styles: [__webpack_require__(/*! ./pizza-form-steps.component.scss */ "./src/app/pizza/components/pizza-form-steps/pizza-form-steps.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], PizzaFormStepsComponent);
    return PizzaFormStepsComponent;
}());



/***/ }),

/***/ "./src/app/pizza/components/pizza-form-summary/pizza-form-summary.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/pizza/components/pizza-form-summary/pizza-form-summary.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"check\">\n    <div>Confirmation</div>\n    <div>№1234567</div>\n    <div class=\"summary\">{{ price | currency}}</div>\n</div>\n<button class=\"button\">BUY</button>"

/***/ }),

/***/ "./src/app/pizza/components/pizza-form-summary/pizza-form-summary.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/pizza/components/pizza-form-summary/pizza-form-summary.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button {\n  bottom: 0;\n  width: 100%;\n  background: #41946b;\n  border: none;\n  padding: 20px 15px;\n  text-align: center;\n  font-size: 18px;\n  color: rgba(255, 255, 255, 0.9);\n  cursor: pointer;\n  margin-top: 20px;\n  font-family: inherit;\n  border-radius: 3px; }\n  .button:disabled {\n    background: rgba(0, 0, 0, 0.1);\n    color: rgba(0, 0, 0, 0.4);\n    cursor: not-allowed; }\n  .check {\n  padding: 30px;\n  background-color: black;\n  color: white; }\n  .check div {\n    width: 100%; }\n  .check div:nth-child(1) {\n      font-size: 24pt; }\n  .check .summary {\n    color: #9afbca;\n    margin-top: 40px;\n    font-size: 18pt; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9vd2xydXNsYW4vYW5ndWxhci1waXp6YS1uZ3J4LXB3YS9zcmMvYXBwL3BpenphL2NvbXBvbmVudHMvcGl6emEtZm9ybS1zdW1tYXJ5L3BpenphLWZvcm0tc3VtbWFyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQVM7RUFDVCxZQUFXO0VBQ1gsb0JBQW1CO0VBQ25CLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsZ0NBQStCO0VBQy9CLGdCQUFlO0VBQ2YsaUJBQWdCO0VBQ2hCLHFCQUFvQjtFQUNwQixtQkFBa0IsRUFPckI7RUFuQkQ7SUFlTSwrQkFBOEI7SUFDOUIsMEJBQXlCO0lBQ3pCLG9CQUFtQixFQUNwQjtFQUdMO0VBQ0ksY0FBYTtFQUNiLHdCQUF1QjtFQUN2QixhQUFZLEVBZWY7RUFsQkQ7SUFNUSxZQUFXLEVBS2Q7RUFYTDtNQVNZLGdCQUFlLEVBQ2xCO0VBVlQ7SUFjUSxlQUFjO0lBQ2QsaUJBQWdCO0lBQ2hCLGdCQUFlLEVBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcGl6emEvY29tcG9uZW50cy9waXp6YS1mb3JtLXN1bW1hcnkvcGl6emEtZm9ybS1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICM0MTk0NmI7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHBhZGRpbmc6IDIwcHggMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICB9XG59XG5cbi5jaGVjayB7XG4gICAgcGFkZGluZzogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICBkaXYge1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAmOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc3VtbWFyeSB7XG4gICAgICAgIGNvbG9yOiAjOWFmYmNhO1xuICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHQ7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pizza/components/pizza-form-summary/pizza-form-summary.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/pizza/components/pizza-form-summary/pizza-form-summary.component.ts ***!
  \*************************************************************************************/
/*! exports provided: PizzaFormSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzaFormSummaryComponent", function() { return PizzaFormSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_selectors_forms_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/selectors/forms.selector */ "./src/app/pizza/store/selectors/forms.selector.ts");




var PizzaFormSummaryComponent = /** @class */ (function () {
    function PizzaFormSummaryComponent(store) {
        this.store = store;
        this.summary$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_selectors_forms_selector__WEBPACK_IMPORTED_MODULE_3__["selectFormSummary"]));
    }
    PizzaFormSummaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.summary$.subscribe(function (value) {
            _this.price = value;
        });
    };
    PizzaFormSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pizza-form-summary',
            template: __webpack_require__(/*! ./pizza-form-summary.component.html */ "./src/app/pizza/components/pizza-form-summary/pizza-form-summary.component.html"),
            styles: [__webpack_require__(/*! ./pizza-form-summary.component.scss */ "./src/app/pizza/components/pizza-form-summary/pizza-form-summary.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], PizzaFormSummaryComponent);
    return PizzaFormSummaryComponent;
}());



/***/ }),

/***/ "./src/app/pizza/components/pizza-form/pizza-form.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pizza/components/pizza-form/pizza-form.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"forms-container\">\n  <div *ngIf=\"showFormDetails\">\n    <app-pizza-form-details [parent]=\"form\"></app-pizza-form-details>\n  </div>\n  <div *ngIf=\"showFormToppings\" [formGroup]=\"form.get('toppings')\">\n    <app-pizza-toppings formControlName=\"toppings\"></app-pizza-toppings>\n  </div>\n  <div *ngIf=\"showFormConfirmation\">\n    <app-pizza-form-summary></app-pizza-form-summary>\n  </div>\n</div>\n<button *ngIf=\"!showFormConfirmation\" type=\"submit\" class=\"button\" (click)=\"onNext($event)\" [disabled]=\"form.invalid\">NEXT</button>"

/***/ }),

/***/ "./src/app/pizza/components/pizza-form/pizza-form.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pizza/components/pizza-form/pizza-form.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  background: #fff;\n  position: relative;\n  z-index: 2;\n  flex-grow: 1;\n  box-shadow: 0 1px 54px rgba(0, 0, 0, 0.27);\n  height: 100%;\n  overflow-y: auto; }\n\n.forms-container {\n  padding: 10px 30px;\n  margin-bottom: 60px; }\n\n.button {\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  background: #41946b;\n  border: none;\n  padding: 20px 15px;\n  text-align: center;\n  font-size: 18px;\n  color: rgba(255, 255, 255, 0.9);\n  cursor: pointer;\n  margin-top: 20px;\n  font-family: inherit; }\n\n.button:disabled {\n    background: rgba(0, 0, 0, 0.1);\n    color: rgba(0, 0, 0, 0.4);\n    cursor: not-allowed; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9vd2xydXNsYW4vYW5ndWxhci1waXp6YS1uZ3J4LXB3YS9zcmMvYXBwL3BpenphL2NvbXBvbmVudHMvcGl6emEtZm9ybS9waXp6YS1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWdCO0VBQ2hCLG1CQUFrQjtFQUNsQixXQUFVO0VBQ1YsYUFBWTtFQUNaLDJDQUEwQztFQUMxQyxhQUFZO0VBQ1osaUJBQWdCLEVBQ25COztBQUVEO0VBQ0ksbUJBQWtCO0VBQ2xCLG9CQUFtQixFQUN0Qjs7QUFFRDtFQUNJLGdCQUFlO0VBQ2YsVUFBUztFQUNULFlBQVc7RUFDWCxvQkFBbUI7RUFDbkIsYUFBWTtFQUNaLG1CQUFrQjtFQUNsQixtQkFBa0I7RUFDbEIsZ0JBQWU7RUFDZixnQ0FBK0I7RUFDL0IsZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIscUJBQW9CLEVBT3ZCOztBQW5CRDtJQWVNLCtCQUE4QjtJQUM5QiwwQkFBeUI7SUFDekIsb0JBQW1CLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcGl6emEvY29tcG9uZW50cy9waXp6YS1mb3JtL3BpenphLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDU0cHggcmdiYSgwLCAwLCAwLCAwLjI3KTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5mb3Jtcy1jb250YWluZXIge1xyXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICM0MTk0NmI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG5cclxuICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XHJcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICB9XHJcbn1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/pizza/components/pizza-form/pizza-form.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pizza/components/pizza-form/pizza-form.component.ts ***!
  \*********************************************************************/
/*! exports provided: PizzaFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzaFormComponent", function() { return PizzaFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _validators_pizza_validator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../validators/pizza.validator */ "./src/app/pizza/validators/pizza.validator.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions_forms_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/forms.actions */ "./src/app/pizza/store/actions/forms.actions.ts");






var PizzaFormComponent = /** @class */ (function () {
    function PizzaFormComponent(store, fb) {
        this.store = store;
        this.fb = fb;
        this.showFormDetails = true;
        this.showFormToppings = false;
        this.showFormConfirmation = false;
        this.form = this.fb.group({
            details: this.fb.group({
                name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                phone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
                address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            }, { validator: _validators_pizza_validator__WEBPACK_IMPORTED_MODULE_3__["PizzaValidator"].checkEmailsMatch }),
            toppings: this.fb.group({
                toppings: [[]]
            })
        });
    }
    PizzaFormComponent.prototype.onNext = function (e) {
        if (this.form.get('details').valid) {
            this.showFormDetails = false;
            this.showFormToppings = true;
            this.showFormConfirmation = false;
        }
        if (this.form.get('details').valid && this.form.get('toppings').touched) {
            this.showFormDetails = false;
            this.showFormToppings = false;
            this.showFormConfirmation = true;
        }
    };
    PizzaFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        // On details form section actions
        this.form.get('details')
            .valueChanges
            .subscribe(function (inputs) {
            if (inputs.name) {
                _this.store.dispatch(new _store_actions_forms_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateSteps"](30));
            }
            if (inputs.name && inputs.email) {
                _this.store.dispatch(new _store_actions_forms_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateSteps"](40));
            }
            if (inputs.name && inputs.email && inputs.address) {
                _this.store.dispatch(new _store_actions_forms_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateSteps"](50));
            }
            if (inputs.name && inputs.email && inputs.address && inputs.phone) {
                _this.store.dispatch(new _store_actions_forms_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateSteps"](60));
            }
        });
        // On toppings form section actions
        this.form.get('toppings')
            .valueChanges
            .subscribe(function (value) {
            if (_this.form.get('details').valid) {
                _this.store.dispatch(new _store_actions_forms_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateForm"](value.toppings));
                var summary_1 = 0;
                value.toppings.forEach(function (topping) {
                    summary_1 += topping.price;
                });
                _this.store.dispatch(new _store_actions_forms_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateSummary"](summary_1));
                _this.store.dispatch(new _store_actions_forms_actions__WEBPACK_IMPORTED_MODULE_5__["UpdateSteps"](80));
            }
        });
    };
    PizzaFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pizza-form',
            template: __webpack_require__(/*! ./pizza-form.component.html */ "./src/app/pizza/components/pizza-form/pizza-form.component.html"),
            styles: [__webpack_require__(/*! ./pizza-form.component.scss */ "./src/app/pizza/components/pizza-form/pizza-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], PizzaFormComponent);
    return PizzaFormComponent;
}());



/***/ }),

/***/ "./src/app/pizza/components/pizza-price/pizza-price.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pizza/components/pizza-price/pizza-price.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  {{ price | currency}}\n</div>"

/***/ }),

/***/ "./src/app/pizza/components/pizza-price/pizza-price.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/pizza/components/pizza-price/pizza-price.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: absolute;\n  width: 100px;\n  height: 20px;\n  padding: 5px;\n  text-align: center;\n  bottom: 0px;\n  left: 30px;\n  background-color: black;\n  color: white;\n  box-shadow: 4px 4px 20px rgba(0, 0, 0, 0.5); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9vd2xydXNsYW4vYW5ndWxhci1waXp6YS1uZ3J4LXB3YS9zcmMvYXBwL3BpenphL2NvbXBvbmVudHMvcGl6emEtcHJpY2UvcGl6emEtcHJpY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBa0I7RUFDbEIsYUFBWTtFQUNaLGFBQVk7RUFDWixhQUFZO0VBQ1osbUJBQWtCO0VBQ2xCLFlBQVc7RUFDWCxXQUFVO0VBQ1Ysd0JBQXVCO0VBQ3pCLGFBQVk7RUFDWiw0Q0FBMEMsRUFDM0MiLCJmaWxlIjoic3JjL2FwcC9waXp6YS9jb21wb25lbnRzL3BpenphLXByaWNlL3BpenphLXByaWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgbGVmdDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcblx0XHRjb2xvcjogd2hpdGU7XG5cdFx0Ym94LXNoYWRvdzogNHB4IDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgLjUpO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pizza/components/pizza-price/pizza-price.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pizza/components/pizza-price/pizza-price.component.ts ***!
  \***********************************************************************/
/*! exports provided: PizzaPriceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzaPriceComponent", function() { return PizzaPriceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_selectors_forms_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/selectors/forms.selector */ "./src/app/pizza/store/selectors/forms.selector.ts");




var PizzaPriceComponent = /** @class */ (function () {
    function PizzaPriceComponent(store) {
        this.store = store;
        this.summary$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_store_selectors_forms_selector__WEBPACK_IMPORTED_MODULE_3__["selectFormSummary"]));
        this.price = 1000;
    }
    PizzaPriceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.summary$.subscribe(function (value) {
            _this.price = value;
        });
    };
    PizzaPriceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pizza-price',
            template: __webpack_require__(/*! ./pizza-price.component.html */ "./src/app/pizza/components/pizza-price/pizza-price.component.html"),
            styles: [__webpack_require__(/*! ./pizza-price.component.scss */ "./src/app/pizza/components/pizza-price/pizza-price.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], PizzaPriceComponent);
    return PizzaPriceComponent;
}());



/***/ }),

/***/ "./src/app/pizza/components/pizza-toppings/pizza-toppings.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/pizza/components/pizza-toppings/pizza-toppings.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pizza-toppings\">\n  <label \n    *ngFor=\"let topping of toppings\"\n    class=\"pizza-topping\"\n    [class.pizza-topping--active]=\"value.includes(topping)\"\n    [class.pizza-topping--focused]=\"focused === topping\">\n    <input \n      type=\"checkbox\"\n      [attr.name]=\"topping\"\n      [attr.value]=\"topping\"\n      (blur)=\"onBlur(topping)\"\n      (change)=\"updateTopping(topping)\"\n      (focus)=\"onFocus(topping)\"\n      [checked]=\"value.includes(topping)\">\n    <span class=\"pizza-topping__icon pizza-topping__icon--{{ topping.name }}\"></span>\n    {{ topping.name | titlecase }}\n  </label>\n</div>\n"

/***/ }),

/***/ "./src/app/pizza/components/pizza-toppings/pizza-toppings.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/pizza/components/pizza-toppings/pizza-toppings.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pizza-toppings {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between; }\n\n.pizza-topping {\n  margin: 20px 0 0;\n  background: rgba(0, 0, 0, 0.05);\n  border-radius: 3px;\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.7);\n  padding: 10px 15px 10px 53px;\n  cursor: pointer;\n  overflow: hidden;\n  position: relative;\n  flex-basis: 24%;\n  flex-shrink: 1;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n\n.pizza-topping:nth-child(4n) {\n    margin-right: 0; }\n\n.pizza-topping input {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px; }\n\n.pizza-topping--focused {\n    background: rgba(0, 0, 0, 0.15);\n    font-weight: 500; }\n\n.pizza-topping--active {\n    background: #1a98e1;\n    color: #fff;\n    font-weight: 500; }\n\n.pizza-topping--extra .pizza-topping__extra {\n    -webkit-transform: rotate(90deg) translate3d(0, 0, 0);\n            transform: rotate(90deg) translate3d(0, 0, 0); }\n\n.pizza-topping__extra {\n    background-color: rgba(0, 0, 0, 0.2);\n    color: #fff;\n    display: block;\n    text-transform: uppercase;\n    width: 50px;\n    font-size: 12px;\n    position: absolute;\n    right: -15px;\n    top: 11px;\n    padding: 2px 0px;\n    text-align: center;\n    -webkit-transform: rotate(90deg) translate3d(0, -20px, 0);\n            transform: rotate(90deg) translate3d(0, -20px, 0);\n    transition: -webkit-transform 0.1s linear;\n    transition: transform 0.1s linear;\n    transition: transform 0.1s linear, -webkit-transform 0.1s linear; }\n\n.pizza-topping__icon {\n    background: #e6e6e6 no-repeat center center;\n    background-size: 30px;\n    width: 40px;\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0; }\n\n.pizza-topping__icon--anchovy {\n      background-image: url('anchovy.svg'); }\n\n.pizza-topping__icon--bacon {\n      background-image: url('bacon.svg'); }\n\n.pizza-topping__icon--basil {\n      background-image: url('basil.svg'); }\n\n.pizza-topping__icon--chili {\n      background-image: url('chili.svg'); }\n\n.pizza-topping__icon--mozzarella {\n      background-image: url('mozzarella.svg'); }\n\n.pizza-topping__icon--mushroom {\n      background-image: url('mushroom.svg'); }\n\n.pizza-topping__icon--olive {\n      background-image: url('olive.svg'); }\n\n.pizza-topping__icon--onion {\n      background-image: url('onion.svg'); }\n\n.pizza-topping__icon--pepper {\n      background-image: url('pepper.svg'); }\n\n.pizza-topping__icon--pepperoni {\n      background-image: url('pepperoni.svg'); }\n\n.pizza-topping__icon--sweetcorn {\n      background-image: url('sweetcorn.svg'); }\n\n.pizza-topping__icon--tomato {\n      background-image: url('tomato.svg'); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9vd2xydXNsYW4vYW5ndWxhci1waXp6YS1uZ3J4LXB3YS9zcmMvYXBwL3BpenphL2NvbXBvbmVudHMvcGl6emEtdG9wcGluZ3MvcGl6emEtdG9wcGluZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxjQUFhO0VBQ2IsZ0JBQWU7RUFDZiwrQkFBOEIsRUFDOUI7O0FBRUM7RUFDRSxpQkFBZ0I7RUFDaEIsZ0NBQStCO0VBQy9CLG1CQUFrQjtFQUNsQixnQkFBZTtFQUNmLDBCQUF5QjtFQUN6Qiw2QkFBNEI7RUFDNUIsZ0JBQWU7RUFDZixpQkFBZ0I7RUFDaEIsbUJBQWtCO0VBQ2xCLGdCQUFlO0VBQ2YsZUFBYztFQUNkLDBCQUFpQjtLQUFqQix1QkFBaUI7TUFBakIsc0JBQWlCO1VBQWpCLGtCQUFpQixFQWdHbEI7O0FBNUdEO0lBZUksZ0JBQWUsRUFDaEI7O0FBaEJIO0lBbUJJLFVBQVM7SUFDVCxvQkFBbUI7SUFDbkIsWUFBVztJQUNYLGFBQVk7SUFDWixpQkFBZ0I7SUFDaEIsV0FBVTtJQUNWLG1CQUFrQjtJQUNsQixXQUFVLEVBQ1g7O0FBRUQ7SUFDRSxnQ0FBK0I7SUFDL0IsaUJBQWdCLEVBQ2pCOztBQUVEO0lBQ0Usb0JBQW1CO0lBQ25CLFlBQVc7SUFDWCxpQkFBZ0IsRUFDakI7O0FBRUE7SUFFRyxzREFBNkM7WUFBN0MsOENBQTZDLEVBQzlDOztBQUdIO0lBQ0UscUNBQW9DO0lBQ3BDLFlBQVc7SUFDWCxlQUFjO0lBQ2QsMEJBQXlCO0lBQ3pCLFlBQVc7SUFDWCxnQkFBZTtJQUNmLG1CQUFrQjtJQUNsQixhQUFZO0lBQ1osVUFBUztJQUNULGlCQUFnQjtJQUNoQixtQkFBa0I7SUFDbEIsMERBQWlEO1lBQWpELGtEQUFpRDtJQUNqRCwwQ0FBaUM7SUFBakMsa0NBQWlDO0lBQWpDLGlFQUFpQyxFQUNsQzs7QUFFRDtJQUNFLDRDQUF1RDtJQUN2RCxzQkFBcUI7SUFDckIsWUFBVztJQUNYLGVBQWM7SUFDZCxtQkFBa0I7SUFDbEIsT0FBTTtJQUNOLFFBQU87SUFDUCxVQUFTLEVBcUNWOztBQXBDQztNQUNFLHFDQUFnRSxFQUNqRTs7QUFDRDtNQUNFLG1DQUE4RCxFQUMvRDs7QUFDRDtNQUNFLG1DQUE4RCxFQUMvRDs7QUFDRDtNQUNFLG1DQUE4RCxFQUMvRDs7QUFDRDtNQUNFLHdDQUFtRSxFQUNwRTs7QUFDRDtNQUNFLHNDQUFpRSxFQUNsRTs7QUFDRDtNQUNFLG1DQUE4RCxFQUMvRDs7QUFDRDtNQUNFLG1DQUE4RCxFQUMvRDs7QUFDRDtNQUNFLG9DQUErRCxFQUNoRTs7QUFDRDtNQUNFLHVDQUFrRSxFQUNuRTs7QUFDRDtNQUNFLHVDQUFrRSxFQUNuRTs7QUFDRDtNQUNFLG9DQUErRCxFQUNoRSIsImZpbGUiOiJzcmMvYXBwL3BpenphL2NvbXBvbmVudHMvcGl6emEtdG9wcGluZ3MvcGl6emEtdG9wcGluZ3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGl6emEtdG9wcGluZ3Mge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LXdyYXA6IHdyYXA7XG5cdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbiAgXG4gIC5waXp6YS10b3BwaW5nIHtcbiAgICBtYXJnaW46IDIwcHggMCAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpO1xuICAgIHBhZGRpbmc6IDEwcHggMTVweCAxMHB4IDUzcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsZXgtYmFzaXM6IDI0JTtcbiAgICBmbGV4LXNocmluazogMTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgXG4gICAgJjpudGgtY2hpbGQoNG4pIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG4gIFxuICAgIGlucHV0IHtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGNsaXA6IHJlY3QoMCAwIDAgMCk7XG4gICAgICBoZWlnaHQ6IDFweDtcbiAgICAgIG1hcmdpbjogLTFweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDFweDtcbiAgICB9XG4gIFxuICAgICYtLWZvY3VzZWQge1xuICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjE1KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICBcbiAgICAmLS1hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogIzFhOThlMTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gIFxuICAgICYtLWV4dHJhIHtcbiAgICAgIC5waXp6YS10b3BwaW5nX19leHRyYSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgIH1cbiAgICB9XG4gIFxuICAgICZfX2V4dHJhIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogLTE1cHg7XG4gICAgICB0b3A6IDExcHg7XG4gICAgICBwYWRkaW5nOiAycHggMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKTtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGxpbmVhcjtcbiAgICB9XG4gIFxuICAgICZfX2ljb24ge1xuICAgICAgYmFja2dyb3VuZDogZGFya2VuKCNGM0YzRjMsIDUlKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMzBweDtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgJi0tYW5jaG92eSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLy4uLy4uLy4uLy4uL2Fzc2V0cy90b3BwaW5ncy9hbmNob3Z5LnN2Zyk7XG4gICAgICB9XG4gICAgICAmLS1iYWNvbiB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLy4uLy4uLy4uLy4uL2Fzc2V0cy90b3BwaW5ncy9iYWNvbi5zdmcpO1xuICAgICAgfVxuICAgICAgJi0tYmFzaWwge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi8uLi8uLi8uLi8uLi9hc3NldHMvdG9wcGluZ3MvYmFzaWwuc3ZnKTtcbiAgICAgIH1cbiAgICAgICYtLWNoaWxpIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vLi4vLi4vLi4vLi4vYXNzZXRzL3RvcHBpbmdzL2NoaWxpLnN2Zyk7XG4gICAgICB9XG4gICAgICAmLS1tb3p6YXJlbGxhIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vLi4vLi4vLi4vLi4vYXNzZXRzL3RvcHBpbmdzL21venphcmVsbGEuc3ZnKTtcbiAgICAgIH1cbiAgICAgICYtLW11c2hyb29tIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vLi4vLi4vLi4vLi4vYXNzZXRzL3RvcHBpbmdzL211c2hyb29tLnN2Zyk7XG4gICAgICB9XG4gICAgICAmLS1vbGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLy4uLy4uLy4uLy4uL2Fzc2V0cy90b3BwaW5ncy9vbGl2ZS5zdmcpO1xuICAgICAgfVxuICAgICAgJi0tb25pb24ge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi8uLi8uLi8uLi8uLi9hc3NldHMvdG9wcGluZ3Mvb25pb24uc3ZnKTtcbiAgICAgIH1cbiAgICAgICYtLXBlcHBlciB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLy4uLy4uLy4uLy4uL2Fzc2V0cy90b3BwaW5ncy9wZXBwZXIuc3ZnKTtcbiAgICAgIH1cbiAgICAgICYtLXBlcHBlcm9uaSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLy4uLy4uLy4uLy4uL2Fzc2V0cy90b3BwaW5ncy9wZXBwZXJvbmkuc3ZnKTtcbiAgICAgIH1cbiAgICAgICYtLXN3ZWV0Y29ybiB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLy4uLy4uLy4uLy4uL2Fzc2V0cy90b3BwaW5ncy9zd2VldGNvcm4uc3ZnKTtcbiAgICAgIH1cbiAgICAgICYtLXRvbWF0byB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLy4uLy4uLy4uLy4uL2Fzc2V0cy90b3BwaW5ncy90b21hdG8uc3ZnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/pizza/components/pizza-toppings/pizza-toppings.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pizza/components/pizza-toppings/pizza-toppings.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PizzaToppingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzaToppingsComponent", function() { return PizzaToppingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var PIZZA_TOPPINGS_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return PizzaToppingsComponent; }),
    multi: true
};
var PizzaToppingsComponent = /** @class */ (function () {
    function PizzaToppingsComponent() {
        this.toppings = [
            { name: 'anchovy', price: 1 },
            { name: 'bacon', price: 1 },
            { name: 'basil', price: 1 },
            { name: 'chili', price: 1 },
            { name: 'mozzarella', price: 1 },
            { name: 'mushroom', price: 1 },
            { name: 'olive', price: 1 },
            { name: 'onion', price: 1 },
            { name: 'pepper', price: 1 },
            { name: 'pepperoni', price: 1 },
            { name: 'sweetcorn', price: 1 },
            { name: 'tomato', price: 1 },
        ];
        this.value = [];
    }
    PizzaToppingsComponent.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    PizzaToppingsComponent.prototype.registerOnTouched = function (fn) {
        this.onTouch = fn;
    };
    PizzaToppingsComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    PizzaToppingsComponent.prototype.updateTopping = function (topping) {
        if (this.value.includes(topping)) {
            this.value = this.value.filter(function (x) { return topping !== x; });
        }
        else {
            this.value = this.value.concat([topping]);
        }
        this.onModelChange(this.value);
    };
    PizzaToppingsComponent.prototype.onBlur = function (value) {
        this.focused = null;
    };
    PizzaToppingsComponent.prototype.onFocus = function (value) {
        this.focused = value;
        this.onTouch();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], PizzaToppingsComponent.prototype, "parent", void 0);
    PizzaToppingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pizza-toppings',
            providers: [PIZZA_TOPPINGS_ACCESSOR],
            template: __webpack_require__(/*! ./pizza-toppings.component.html */ "./src/app/pizza/components/pizza-toppings/pizza-toppings.component.html"),
            styles: [__webpack_require__(/*! ./pizza-toppings.component.scss */ "./src/app/pizza/components/pizza-toppings/pizza-toppings.component.scss")]
        })
    ], PizzaToppingsComponent);
    return PizzaToppingsComponent;
}());



/***/ }),

/***/ "./src/app/pizza/components/pizza-view/pizza-view.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/pizza/components/pizza-view/pizza-view.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pizza-viewer\">\n\t<div class=\"pizza-viewer__table-side\"></div>\n\t<div class=\"pizza-viewer__table\"></div>\n\t{{ activePizza }}\n\t<div \n\t\tclass=\"pizza--active\">\n\t\t<div class=\"pizza__board\"></div>\n\t\t<div class=\"pizza__base\"></div>\n\t\t<div class=\"pizza__toppings\">\n\t\t\t<div \n\t\t\t\t*ngFor=\"let topping of toppings$ | async; let i = index;\"\n\t\t\t\t[style.zIndex]=\"i\"\n\t\t\t\t@drop>\n\t\t\t\t<div class=\"pizza__topping pizza__topping--{{ topping.name }}\"></div>\n\t\t\t\t<div class=\"pizza__topping pizza__topping--{{ topping.name }}\"></div>\n\t\t\t\t<div class=\"pizza__topping pizza__topping--{{ topping.name }}\"></div>\n\t\t\t\t<div class=\"pizza__topping pizza__topping--{{ topping.name }}\"></div>\n\t\t\t\t<div class=\"pizza__topping pizza__topping--{{ topping.name }}\"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<app-pizza-price></app-pizza-price>\n"

/***/ }),

/***/ "./src/app/pizza/components/pizza-view/pizza-view.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/pizza/components/pizza-view/pizza-view.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  background-color: rgba(248, 250, 234, 0.829);\n  width: 100%;\n  overflow: hidden;\n  position: relative; }\n\n.pizza-viewer {\n  height: 300px;\n  width: 600px;\n  position: relative;\n  left: -120px; }\n\n.pizza-viewer__table-side, .pizza-viewer__table {\n    position: absolute;\n    height: 300px;\n    z-index: 0;\n    -webkit-transform: skewX(62deg);\n            transform: skewX(62deg); }\n\n.pizza-viewer__table-side {\n    top: 100px;\n    left: -100px;\n    background: #463c3a;\n    width: 100%; }\n\n.pizza-viewer__table {\n    left: 50px;\n    background: #665854;\n    width: 100%; }\n\n.pizza {\n  width: 530px;\n  height: 342px;\n  position: absolute;\n  z-index: 1;\n  -webkit-transform: translate3d(-530px, -282px, 0);\n          transform: translate3d(-530px, -282px, 0);\n  transition: -webkit-transform 0.2s;\n  transition: transform 0.2s;\n  transition: transform 0.2s, -webkit-transform 0.2s; }\n\n.pizza--active {\n    -webkit-transform: translate3d(0, -30px, 0);\n            transform: translate3d(0, -30px, 0); }\n\n.pizza__board {\n    background: url('board.svg') no-repeat 0 20px;\n    background-size: contain;\n    width: 300px;\n    height: 220px;\n    position: absolute;\n    z-index: 1;\n    top: 30px;\n    left: 150px; }\n\n.pizza__base {\n    background: url('base.svg') no-repeat;\n    background-size: contain;\n    width: 230px;\n    height: 150px;\n    position: absolute;\n    left: 203px;\n    top: 42px;\n    z-index: 2; }\n\n.pizza__toppings {\n    width: 230px;\n    height: 150px;\n    position: absolute;\n    left: 170px;\n    -webkit-transform: scale(0.6);\n            transform: scale(0.6);\n    top: 20px;\n    z-index: 3; }\n\n.pizza__topping {\n    position: absolute;\n    background-repeat: no-repeat;\n    background-size: contain; }\n\n.pizza__topping--anchovy {\n      background-image: url('anchovy.svg');\n      width: 51px;\n      height: 37px; }\n\n.pizza__topping--anchovy:nth-child(1) {\n        left: 140px;\n        top: 26px; }\n\n.pizza__topping--anchovy:nth-child(2) {\n        left: 8px;\n        top: 82px; }\n\n.pizza__topping--anchovy:nth-child(3) {\n        left: 263px;\n        top: 95px; }\n\n.pizza__topping--anchovy:nth-child(4), .pizza__topping--anchovy:nth-child(5) {\n        display: none; }\n\n.pizza__topping--bacon {\n      background-image: url('bacon.svg');\n      width: 56px;\n      height: 31px; }\n\n.pizza__topping--bacon:nth-child(1) {\n        left: 124px;\n        top: 50px; }\n\n.pizza__topping--bacon:nth-child(2) {\n        left: 39px;\n        top: 100px; }\n\n.pizza__topping--bacon:nth-child(3) {\n        left: 132px;\n        top: 86px; }\n\n.pizza__topping--bacon:nth-child(4) {\n        left: 199px;\n        top: 59px; }\n\n.pizza__topping--bacon:nth-child(5) {\n        left: 140px;\n        top: 154px; }\n\n.pizza__topping--basil {\n      background-image: url('basil.svg');\n      width: 46px;\n      height: 32px; }\n\n.pizza__topping--basil:nth-child(1) {\n        left: 136px;\n        top: 63px; }\n\n.pizza__topping--basil:nth-child(2) {\n        left: 126px;\n        top: 127px; }\n\n.pizza__topping--basil:nth-child(3) {\n        left: 222px;\n        top: 98px; }\n\n.pizza__topping--basil:nth-child(4), .pizza__topping--basil:nth-child(5) {\n        display: none; }\n\n.pizza__topping--chili {\n      background-image: url('chili.svg');\n      width: 63px;\n      height: 35px; }\n\n.pizza__topping--chili:nth-child(1) {\n        left: 150px;\n        top: 40px; }\n\n.pizza__topping--chili:nth-child(2) {\n        left: 68px;\n        top: 77px; }\n\n.pizza__topping--chili:nth-child(3) {\n        left: 52px;\n        top: 144px; }\n\n.pizza__topping--chili:nth-child(4) {\n        left: 210px;\n        top: 17px; }\n\n.pizza__topping--chili:nth-child(5) {\n        left: 240px;\n        top: 120px; }\n\n.pizza__topping--mozzarella {\n      background-image: url('mozzarella.svg');\n      width: 46px;\n      height: 32px; }\n\n.pizza__topping--mozzarella:nth-child(1) {\n        left: 6px;\n        top: 106px; }\n\n.pizza__topping--mozzarella:nth-child(2) {\n        left: 186px;\n        top: 114px; }\n\n.pizza__topping--mozzarella:nth-child(3) {\n        left: 162px;\n        top: 8px; }\n\n.pizza__topping--mozzarella:nth-child(4), .pizza__topping--mozzarella:nth-child(5) {\n        display: none; }\n\n.pizza__topping--mushroom {\n      background-image: url('mushroom.svg');\n      width: 45px;\n      height: 26px; }\n\n.pizza__topping--mushroom:nth-child(1) {\n        left: 120px;\n        top: 20px; }\n\n.pizza__topping--mushroom:nth-child(2) {\n        left: 40px;\n        top: 60px; }\n\n.pizza__topping--mushroom:nth-child(3) {\n        left: 90px;\n        top: 120px; }\n\n.pizza__topping--mushroom:nth-child(4) {\n        left: 240px;\n        top: 30px; }\n\n.pizza__topping--mushroom:nth-child(5) {\n        left: 220px;\n        top: 129px; }\n\n.pizza__topping--olive {\n      background-image: url('olive.svg');\n      width: 45px;\n      height: 26px; }\n\n.pizza__topping--olive:nth-child(1) {\n        left: 161px;\n        top: 60px; }\n\n.pizza__topping--olive:nth-child(2) {\n        left: 90px;\n        top: 57px; }\n\n.pizza__topping--olive:nth-child(3) {\n        left: 110px;\n        top: 110px; }\n\n.pizza__topping--olive:nth-child(4) {\n        left: 279px;\n        top: 47px; }\n\n.pizza__topping--olive:nth-child(5) {\n        display: none; }\n\n.pizza__topping--onion {\n      background-image: url('onion.svg');\n      width: 57px;\n      height: 36px; }\n\n.pizza__topping--onion:nth-child(1) {\n        left: 101px;\n        top: 55px; }\n\n.pizza__topping--onion:nth-child(2) {\n        left: 10px;\n        top: 61px; }\n\n.pizza__topping--onion:nth-child(3) {\n        left: 261px;\n        top: 55px; }\n\n.pizza__topping--onion:nth-child(4) {\n        left: 172px;\n        top: 132px; }\n\n.pizza__topping--onion:nth-child(5) {\n        display: none; }\n\n.pizza__topping--pepper {\n      background-image: url('pepper.svg');\n      width: 57px;\n      height: 36px; }\n\n.pizza__topping--pepper:nth-child(1) {\n        left: 122px;\n        top: 30px; }\n\n.pizza__topping--pepper:nth-child(2) {\n        left: 175px;\n        top: 87px; }\n\n.pizza__topping--pepper:nth-child(3) {\n        left: 30px;\n        top: 81px; }\n\n.pizza__topping--pepper:nth-child(4) {\n        left: 282px;\n        top: 69px; }\n\n.pizza__topping--pepper:nth-child(5) {\n        left: 105px;\n        top: 147px; }\n\n.pizza__topping--pepperoni {\n      background-image: url('pepperoni.svg');\n      width: 57px;\n      height: 36px; }\n\n.pizza__topping--pepperoni:nth-child(1) {\n        left: 222px;\n        top: 35px; }\n\n.pizza__topping--pepperoni:nth-child(2) {\n        left: 145px;\n        top: 107px; }\n\n.pizza__topping--pepperoni:nth-child(3) {\n        left: 81px;\n        top: 21px; }\n\n.pizza__topping--pepperoni:nth-child(4) {\n        left: 221px;\n        top: 80px; }\n\n.pizza__topping--pepperoni:nth-child(5) {\n        left: 75px;\n        top: 137px; }\n\n.pizza__topping--sweetcorn {\n      background-image: url('sweetcorn.svg');\n      width: 57px;\n      height: 36px; }\n\n.pizza__topping--sweetcorn:nth-child(1) {\n        left: 192px;\n        top: 35px; }\n\n.pizza__topping--sweetcorn:nth-child(2) {\n        left: 41px;\n        top: 41px; }\n\n.pizza__topping--sweetcorn:nth-child(3) {\n        left: 212px;\n        top: 146px; }\n\n.pizza__topping--sweetcorn:nth-child(4), .pizza__topping--sweetcorn:nth-child(5) {\n        display: none; }\n\n.pizza__topping--tomato {\n      background-image: url('tomato.svg');\n      width: 57px;\n      height: 36px; }\n\n.pizza__topping--tomato:nth-child(1) {\n        left: 175px;\n        top: 147px; }\n\n.pizza__topping--tomato:nth-child(2) {\n        left: 41px;\n        top: 41px; }\n\n.pizza__topping--tomato:nth-child(3) {\n        left: 85px;\n        top: 100px; }\n\n.pizza__topping--tomato:nth-child(4) {\n        left: 280px;\n        top: 99px; }\n\n.pizza__topping--tomato:nth-child(5) {\n        display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9vd2xydXNsYW4vYW5ndWxhci1waXp6YS1uZ3J4LXB3YS9zcmMvYXBwL3BpenphL2NvbXBvbmVudHMvcGl6emEtdmlldy9waXp6YS12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsNkNBQTRDO0VBQzVDLFlBQVc7RUFDWCxpQkFBZ0I7RUFDaEIsbUJBQWtCLEVBQ2xCOztBQUVEO0VBQ0MsY0FBYTtFQUNiLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsYUFBWSxFQXFCWjs7QUFuQkE7SUFDQyxtQkFBa0I7SUFDbEIsY0FBYTtJQUNiLFdBQVU7SUFDVixnQ0FBdUI7WUFBdkIsd0JBQXVCLEVBQ3ZCOztBQUVEO0lBQ0MsV0FBVTtJQUNWLGFBQVk7SUFDWixvQkFBMkI7SUFDM0IsWUFBVyxFQUNYOztBQUVEO0lBQ0MsV0FBVTtJQUNWLG9CQUE0QjtJQUM1QixZQUFXLEVBQ1g7O0FBR0Y7RUFDQyxhQUFZO0VBQ1osY0FBYTtFQUNiLG1CQUFrQjtFQUNsQixXQUFVO0VBQ1Ysa0RBQXlDO1VBQXpDLDBDQUF5QztFQUN6QyxtQ0FBMEI7RUFBMUIsMkJBQTBCO0VBQTFCLG1EQUEwQixFQTZVMUI7O0FBM1VBO0lBQ0MsNENBQW1DO1lBQW5DLG9DQUFtQyxFQUNuQzs7QUFFRDtJQUNDLDhDQUF5RTtJQUN6RSx5QkFBd0I7SUFDeEIsYUFBWTtJQUNaLGNBQWE7SUFDYixtQkFBa0I7SUFDbEIsV0FBVTtJQUNWLFVBQVM7SUFDVCxZQUFXLEVBQ1g7O0FBRUQ7SUFDQyxzQ0FBaUU7SUFDakUseUJBQXdCO0lBQ3hCLGFBQVk7SUFDWixjQUFhO0lBQ2IsbUJBQWtCO0lBQ2xCLFlBQVc7SUFDWCxVQUFTO0lBQ1QsV0FBVSxFQUNWOztBQUVEO0lBQ0MsYUFBWTtJQUNaLGNBQWE7SUFDYixtQkFBa0I7SUFDaEIsWUFBVztJQUNYLDhCQUFxQjtZQUFyQixzQkFBcUI7SUFDdkIsVUFBUztJQUNULFdBQVUsRUFDVjs7QUFFRDtJQUNDLG1CQUFrQjtJQUNsQiw2QkFBNEI7SUFDNUIseUJBQXdCLEVBbVN0Qjs7QUFqU0Y7TUFDRSxxQ0FBZ0U7TUFDaEUsWUFBVztNQUNYLGFBQVksRUFpQmI7O0FBcEJBO1FBTUEsWUFBVztRQUNYLFVBQVMsRUFDUDs7QUFSRjtRQVVBLFVBQVM7UUFDVCxVQUFTLEVBQ1A7O0FBWkY7UUFjQSxZQUFXO1FBQ1gsVUFBUyxFQUNQOztBQWhCRjtRQWtCQSxjQUFhLEVBQ1g7O0FBRUg7TUFDRSxtQ0FBOEQ7TUFDOUQsWUFBVztNQUNYLGFBQVksRUFzQmI7O0FBekJBO1FBTUEsWUFBVztRQUNYLFVBQVMsRUFDUDs7QUFSRjtRQVVBLFdBQVU7UUFDVixXQUFVLEVBQ1I7O0FBWkY7UUFjQSxZQUFXO1FBQ1gsVUFBUyxFQUNQOztBQWhCRjtRQWtCQSxZQUFXO1FBQ1gsVUFBUyxFQUNQOztBQXBCRjtRQXNCQSxZQUFXO1FBQ1gsV0FBVSxFQUNSOztBQUVIO01BQ0UsbUNBQThEO01BQzlELFlBQVc7TUFDWCxhQUFZLEVBaUJiOztBQXBCQTtRQU1BLFlBQVc7UUFDWCxVQUFTLEVBQ1A7O0FBUkY7UUFVQSxZQUFXO1FBQ1gsV0FBVSxFQUNSOztBQVpGO1FBY0EsWUFBVztRQUNYLFVBQVMsRUFDUDs7QUFoQkY7UUFrQkEsY0FBYSxFQUNYOztBQUVIO01BQ0UsbUNBQThEO01BQzlELFlBQVc7TUFDWCxhQUFZLEVBc0JiOztBQXpCQTtRQU1BLFlBQVc7UUFDWCxVQUFTLEVBQ1A7O0FBUkY7UUFVQSxXQUFVO1FBQ1YsVUFBUyxFQUNQOztBQVpGO1FBY0EsV0FBVTtRQUNWLFdBQVUsRUFDUjs7QUFoQkY7UUFrQkEsWUFBVztRQUNYLFVBQVMsRUFDUDs7QUFwQkY7UUFzQkEsWUFBVztRQUNYLFdBQVUsRUFDUjs7QUFFSDtNQUNFLHdDQUFtRTtNQUNuRSxZQUFXO01BQ1gsYUFBWSxFQWlCYjs7QUFwQkE7UUFNQSxVQUFTO1FBQ1QsV0FBVSxFQUNSOztBQVJGO1FBVUEsWUFBVztRQUNYLFdBQVUsRUFDUjs7QUFaRjtRQWNBLFlBQVc7UUFDWCxTQUFRLEVBQ047O0FBaEJGO1FBa0JBLGNBQWEsRUFDWDs7QUFFSDtNQUNFLHNDQUFpRTtNQUNqRSxZQUFXO01BQ1gsYUFBWSxFQXNCYjs7QUF6QkE7UUFNQSxZQUFXO1FBQ1gsVUFBUyxFQUNQOztBQVJGO1FBVUEsV0FBVTtRQUNWLFVBQVMsRUFDUDs7QUFaRjtRQWNBLFdBQVU7UUFDVixXQUFVLEVBQ1I7O0FBaEJGO1FBa0JBLFlBQVc7UUFDWCxVQUFTLEVBQ1A7O0FBcEJGO1FBc0JBLFlBQVc7UUFDWCxXQUFVLEVBQ1I7O0FBRUg7TUFDRSxtQ0FBOEQ7TUFDOUQsWUFBVztNQUNYLGFBQVksRUFxQmI7O0FBeEJBO1FBTUEsWUFBVztRQUNYLFVBQVMsRUFDUDs7QUFSRjtRQVVBLFdBQVU7UUFDVixVQUFTLEVBQ1A7O0FBWkY7UUFjQSxZQUFXO1FBQ1gsV0FBVSxFQUNSOztBQWhCRjtRQWtCQSxZQUFXO1FBQ1gsVUFBUyxFQUNQOztBQXBCRjtRQXNCQSxjQUFhLEVBQ1g7O0FBRUg7TUFDRSxtQ0FBOEQ7TUFDOUQsWUFBVztNQUNYLGFBQVksRUFxQmI7O0FBeEJBO1FBTUEsWUFBVztRQUNYLFVBQVMsRUFDUDs7QUFSRjtRQVVBLFdBQVU7UUFDVixVQUFTLEVBQ1A7O0FBWkY7UUFjQSxZQUFXO1FBQ1gsVUFBUyxFQUNQOztBQWhCRjtRQWtCQSxZQUFXO1FBQ1gsV0FBVSxFQUNSOztBQXBCRjtRQXNCQSxjQUFhLEVBQ1g7O0FBRUg7TUFDRSxvQ0FBK0Q7TUFDL0QsWUFBVztNQUNYLGFBQVksRUFzQmI7O0FBekJBO1FBTUEsWUFBVztRQUNYLFVBQVMsRUFDUDs7QUFSRjtRQVVBLFlBQVc7UUFDWCxVQUFTLEVBQ1A7O0FBWkY7UUFjQSxXQUFVO1FBQ1YsVUFBUyxFQUNQOztBQWhCRjtRQWtCQSxZQUFXO1FBQ1gsVUFBUyxFQUNQOztBQXBCRjtRQXNCQSxZQUFXO1FBQ1gsV0FBVSxFQUNSOztBQUVIO01BQ0UsdUNBQWtFO01BQ2xFLFlBQVc7TUFDWCxhQUFZLEVBc0JiOztBQXpCQTtRQU1BLFlBQVc7UUFDWCxVQUFTLEVBQ1A7O0FBUkY7UUFVQSxZQUFXO1FBQ1gsV0FBVSxFQUNSOztBQVpGO1FBY0EsV0FBVTtRQUNWLFVBQVMsRUFDUDs7QUFoQkY7UUFrQkEsWUFBVztRQUNYLFVBQVMsRUFDUDs7QUFwQkY7UUFzQkEsV0FBVTtRQUNWLFdBQVUsRUFDUjs7QUFFSDtNQUNFLHVDQUFrRTtNQUNsRSxZQUFXO01BQ1gsYUFBWSxFQWlCYjs7QUFwQkE7UUFNQSxZQUFXO1FBQ1gsVUFBUyxFQUNQOztBQVJGO1FBVUEsV0FBVTtRQUNWLFVBQVMsRUFDUDs7QUFaRjtRQWNBLFlBQVc7UUFDWCxXQUFVLEVBQ1I7O0FBaEJGO1FBa0JBLGNBQWEsRUFDWDs7QUFFSDtNQUNFLG9DQUErRDtNQUMvRCxZQUFXO01BQ1gsYUFBWSxFQXFCYjs7QUF4QkE7UUFNQSxZQUFXO1FBQ1gsV0FBVSxFQUNSOztBQVJGO1FBVUEsV0FBVTtRQUNWLFVBQVMsRUFDUDs7QUFaRjtRQWNBLFdBQVU7UUFDVixXQUFVLEVBQ1I7O0FBaEJGO1FBa0JBLFlBQVc7UUFDWCxVQUFTLEVBQ1A7O0FBcEJGO1FBc0JBLGNBQWEsRUFDWCIsImZpbGUiOiJzcmMvYXBwL3BpenphL2NvbXBvbmVudHMvcGl6emEtdmlldy9waXp6YS12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ4LCAyNTAsIDIzNCwgMC44MjkpO1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdG92ZXJmbG93OiBoaWRkZW47XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucGl6emEtdmlld2VyIHtcclxuXHRoZWlnaHQ6IDMwMHB4O1xyXG5cdHdpZHRoOiA2MDBweDtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0bGVmdDogLTEyMHB4O1xyXG5cdFxyXG5cdCZfX3RhYmxlLXNpZGUsICZfX3RhYmxlIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdGhlaWdodDogMzAwcHg7XHJcblx0XHR6LWluZGV4OiAwO1xyXG5cdFx0dHJhbnNmb3JtOiBza2V3WCg2MmRlZyk7XHJcblx0fVxyXG5cclxuXHQmX190YWJsZS1zaWRlIHtcclxuXHRcdHRvcDogMTAwcHg7XHJcblx0XHRsZWZ0OiAtMTAwcHg7XHJcblx0XHRiYWNrZ3JvdW5kOiByZ2IoNzAsIDYwLCA1OCk7XHJcblx0XHR3aWR0aDogMTAwJTtcclxuXHR9XHJcblxyXG5cdCZfX3RhYmxlIHtcclxuXHRcdGxlZnQ6IDUwcHg7XHJcblx0XHRiYWNrZ3JvdW5kOiByZ2IoMTAyLCA4OCwgODQpO1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0fVxyXG59XHJcblxyXG4ucGl6emEge1xyXG5cdHdpZHRoOiA1MzBweDtcclxuXHRoZWlnaHQ6IDM0MnB4O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR6LWluZGV4OiAxO1xyXG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUzMHB4LCAtMjgycHgsIDApO1xyXG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzO1xyXG5cclxuXHQmLS1hY3RpdmUge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMzBweCwgMCk7XHJcblx0fVxyXG5cclxuXHQmX19ib2FyZCB7XHJcblx0XHRiYWNrZ3JvdW5kOiB1cmwoLi8uLi8uLi8uLi8uLi9hc3NldHMvdG9wcGluZ3MvYm9hcmQuc3ZnKSBuby1yZXBlYXQgMCAyMHB4O1xyXG5cdFx0YmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG5cdFx0d2lkdGg6IDMwMHB4O1xyXG5cdFx0aGVpZ2h0OiAyMjBweDtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHotaW5kZXg6IDE7XHJcblx0XHR0b3A6IDMwcHg7XHJcblx0XHRsZWZ0OiAxNTBweDtcclxuXHR9XHJcblxyXG5cdCZfX2Jhc2Uge1xyXG5cdFx0YmFja2dyb3VuZDogdXJsKC4vLi4vLi4vLi4vLi4vYXNzZXRzL3RvcHBpbmdzL2Jhc2Uuc3ZnKSBuby1yZXBlYXQ7XHJcblx0XHRiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcblx0XHR3aWR0aDogMjMwcHg7XHJcblx0XHRoZWlnaHQ6IDE1MHB4O1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0bGVmdDogMjAzcHg7XHJcblx0XHR0b3A6IDQycHg7XHJcblx0XHR6LWluZGV4OiAyO1xyXG5cdH1cclxuXHJcblx0Jl9fdG9wcGluZ3Mge1xyXG5cdFx0d2lkdGg6IDIzMHB4O1xyXG5cdFx0aGVpZ2h0OiAxNTBweDtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDE3MHB4O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpO1xyXG5cdFx0dG9wOiAyMHB4O1xyXG5cdFx0ei1pbmRleDogMztcclxuXHR9XHJcblxyXG5cdCZfX3RvcHBpbmcge1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0YmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuXHRcdGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuXHRcclxuXHRcdCYtLWFuY2hvdnkge1xyXG5cdFx0ICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi8uLi8uLi8uLi8uLi9hc3NldHMvdG9wcGluZ3MvYW5jaG92eS5zdmcpO1xyXG5cdFx0ICB3aWR0aDogNTFweDtcclxuXHRcdCAgaGVpZ2h0OiAzN3B4O1xyXG5cdFxyXG5cdFx0ICAmOm50aC1jaGlsZCgxKSB7XHJcblx0XHRcdGxlZnQ6IDE0MHB4O1xyXG5cdFx0XHR0b3A6IDI2cHg7XHJcblx0XHQgIH1cclxuXHRcdCAgJjpudGgtY2hpbGQoMikge1xyXG5cdFx0XHRsZWZ0OiA4cHg7XHJcblx0XHRcdHRvcDogODJweDtcclxuXHRcdCAgfVxyXG5cdFx0ICAmOm50aC1jaGlsZCgzKSB7XHJcblx0XHRcdGxlZnQ6IDI2M3B4O1xyXG5cdFx0XHR0b3A6IDk1cHg7XHJcblx0XHQgIH1cclxuXHRcdCAgJjpudGgtY2hpbGQoNCksICY6bnRoLWNoaWxkKDUpIHtcclxuXHRcdFx0ZGlzcGxheTogbm9uZTtcclxuXHRcdCAgfVxyXG5cdFx0fVxyXG5cdFx0Ji0tYmFjb24ge1xyXG5cdFx0ICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi8uLi8uLi8uLi8uLi9hc3NldHMvdG9wcGluZ3MvYmFjb24uc3ZnKTtcclxuXHRcdCAgd2lkdGg6IDU2cHg7XHJcblx0XHQgIGhlaWdodDogMzFweDtcclxuXHRcclxuXHRcdCAgJjpudGgtY2hpbGQoMSkge1xyXG5cdFx0XHRsZWZ0OiAxMjRweDtcclxuXHRcdFx0dG9wOiA1MHB4O1xyXG5cdFx0ICB9XHJcblx0XHQgICY6bnRoLWNoaWxkKDIpIHtcclxuXHRcdFx0bGVmdDogMzlweDtcclxuXHRcdFx0dG9wOiAxMDBweDtcclxuXHRcdCAgfVxyXG5cdFx0ICAmOm50aC1jaGlsZCgzKSB7XHJcblx0XHRcdGxlZnQ6IDEzMnB4O1xyXG5cdFx0XHR0b3A6IDg2cHg7XHJcblx0XHQgIH1cclxuXHRcdCAgJjpudGgtY2hpbGQoNCkge1xyXG5cdFx0XHRsZWZ0OiAxOTlweDtcclxuXHRcdFx0dG9wOiA1OXB4O1xyXG5cdFx0ICB9XHJcblx0XHQgICY6bnRoLWNoaWxkKDUpIHtcclxuXHRcdFx0bGVmdDogMTQwcHg7XHJcblx0XHRcdHRvcDogMTU0cHg7XHJcblx0XHQgIH1cclxuXHRcdH1cclxuXHRcdCYtLWJhc2lsIHtcclxuXHRcdCAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vLi4vLi4vLi4vLi4vYXNzZXRzL3RvcHBpbmdzL2Jhc2lsLnN2Zyk7XHJcblx0XHQgIHdpZHRoOiA0NnB4O1xyXG5cdFx0ICBoZWlnaHQ6IDMycHg7XHJcblx0XHJcblx0XHQgICY6bnRoLWNoaWxkKDEpIHtcclxuXHRcdFx0bGVmdDogMTM2cHg7XHJcblx0XHRcdHRvcDogNjNweDtcclxuXHRcdCAgfVxyXG5cdFx0ICAmOm50aC1jaGlsZCgyKSB7XHJcblx0XHRcdGxlZnQ6IDEyNnB4O1xyXG5cdFx0XHR0b3A6IDEyN3B4O1xyXG5cdFx0ICB9XHJcblx0XHQgICY6bnRoLWNoaWxkKDMpIHtcclxuXHRcdFx0bGVmdDogMjIycHg7XHJcblx0XHRcdHRvcDogOThweDtcclxuXHRcdCAgfVxyXG5cdFx0ICAmOm50aC1jaGlsZCg0KSwgJjpudGgtY2hpbGQoNSkge1xyXG5cdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0ICB9XHJcblx0XHR9XHJcblx0XHQmLS1jaGlsaSB7XHJcblx0XHQgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLy4uLy4uLy4uLy4uL2Fzc2V0cy90b3BwaW5ncy9jaGlsaS5zdmcpO1xyXG5cdFx0ICB3aWR0aDogNjNweDtcclxuXHRcdCAgaGVpZ2h0OiAzNXB4O1xyXG5cdFxyXG5cdFx0ICAmOm50aC1jaGlsZCgxKSB7XHJcblx0XHRcdGxlZnQ6IDE1MHB4O1xyXG5cdFx0XHR0b3A6IDQwcHg7XHJcblx0XHQgIH1cclxuXHRcdCAgJjpudGgtY2hpbGQoMikge1xyXG5cdFx0XHRsZWZ0OiA2OHB4O1xyXG5cdFx0XHR0b3A6IDc3cHg7XHJcblx0XHQgIH1cclxuXHRcdCAgJjpudGgtY2hpbGQoMykge1xyXG5cdFx0XHRsZWZ0OiA1MnB4O1xyXG5cdFx0XHR0b3A6IDE0NHB4O1xyXG5cdFx0ICB9XHJcblx0XHQgICY6bnRoLWNoaWxkKDQpIHtcclxuXHRcdFx0bGVmdDogMjEwcHg7XHJcblx0XHRcdHRvcDogMTdweDtcclxuXHRcdCAgfVxyXG5cdFx0ICAmOm50aC1jaGlsZCg1KSB7XHJcblx0XHRcdGxlZnQ6IDI0MHB4O1xyXG5cdFx0XHR0b3A6IDEyMHB4O1xyXG5cdFx0ICB9XHJcblx0XHR9XHJcblx0XHQmLS1tb3p6YXJlbGxhIHtcclxuXHRcdCAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vLi4vLi4vLi4vLi4vYXNzZXRzL3RvcHBpbmdzL21venphcmVsbGEuc3ZnKTtcclxuXHRcdCAgd2lkdGg6IDQ2cHg7XHJcblx0XHQgIGhlaWdodDogMzJweDtcclxuXHRcclxuXHRcdCAgJjpudGgtY2hpbGQoMSkge1xyXG5cdFx0XHRsZWZ0OiA2cHg7XHJcblx0XHRcdHRvcDogMTA2cHg7XHJcblx0XHQgIH1cclxuXHRcdCAgJjpudGgtY2hpbGQoMikge1xyXG5cdFx0XHRsZWZ0OiAxODZweDtcclxuXHRcdFx0dG9wOiAxMTRweDtcclxuXHRcdCAgfVxyXG5cdFx0ICAmOm50aC1jaGlsZCgzKSB7XHJcblx0XHRcdGxlZnQ6IDE2MnB4O1xyXG5cdFx0XHR0b3A6IDhweDtcclxuXHRcdCAgfVxyXG5cdFx0ICAmOm50aC1jaGlsZCg0KSwgJjpudGgtY2hpbGQoNSkge1xyXG5cdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0ICB9XHJcblx0XHR9XHJcblx0XHQmLS1tdXNocm9vbSB7XHJcblx0XHQgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLy4uLy4uLy4uLy4uL2Fzc2V0cy90b3BwaW5ncy9tdXNocm9vbS5zdmcpO1xyXG5cdFx0ICB3aWR0aDogNDVweDtcclxuXHRcdCAgaGVpZ2h0OiAyNnB4O1xyXG5cdFxyXG5cdFx0ICAmOm50aC1jaGlsZCgxKSB7XHJcblx0XHRcdGxlZnQ6IDEyMHB4O1xyXG5cdFx0XHR0b3A6IDIwcHg7XHJcblx0XHQgIH1cclxuXHRcdCAgJjpudGgtY2hpbGQoMikge1xyXG5cdFx0XHRsZWZ0OiA0MHB4O1xyXG5cdFx0XHR0b3A6IDYwcHg7XHJcblx0XHQgIH1cclxuXHRcdCAgJjpudGgtY2hpbGQoMykge1xyXG5cdFx0XHRsZWZ0OiA5MHB4O1xyXG5cdFx0XHR0b3A6IDEyMHB4O1xyXG5cdFx0ICB9XHJcblx0XHQgICY6bnRoLWNoaWxkKDQpIHtcclxuXHRcdFx0bGVmdDogMjQwcHg7XHJcblx0XHRcdHRvcDogMzBweDtcclxuXHRcdCAgfVxyXG5cdFx0ICAmOm50aC1jaGlsZCg1KSB7XHJcblx0XHRcdGxlZnQ6IDIyMHB4O1xyXG5cdFx0XHR0b3A6IDEyOXB4O1xyXG5cdFx0ICB9XHJcblx0XHR9XHJcblx0XHQmLS1vbGl2ZSB7XHJcblx0XHQgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLy4uLy4uLy4uLy4uL2Fzc2V0cy90b3BwaW5ncy9vbGl2ZS5zdmcpO1xyXG5cdFx0ICB3aWR0aDogNDVweDtcclxuXHRcdCAgaGVpZ2h0OiAyNnB4O1xyXG5cdFxyXG5cdFx0ICAmOm50aC1jaGlsZCgxKSB7XHJcblx0XHRcdGxlZnQ6IDE2MXB4O1xyXG5cdFx0XHR0b3A6IDYwcHg7XHJcblx0XHQgIH1cclxuXHRcdCAgJjpudGgtY2hpbGQoMikge1xyXG5cdFx0XHRsZWZ0OiA5MHB4O1xyXG5cdFx0XHR0b3A6IDU3cHg7XHJcblx0XHQgIH1cclxuXHRcdCAgJjpudGgtY2hpbGQoMykge1xyXG5cdFx0XHRsZWZ0OiAxMTBweDtcclxuXHRcdFx0dG9wOiAxMTBweDtcclxuXHRcdCAgfVxyXG5cdFx0ICAmOm50aC1jaGlsZCg0KSB7XHJcblx0XHRcdGxlZnQ6IDI3OXB4O1xyXG5cdFx0XHR0b3A6IDQ3cHg7XHJcblx0XHQgIH1cclxuXHRcdCAgJjpudGgtY2hpbGQoNSkge1xyXG5cdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0ICB9XHJcblx0XHR9XHJcblx0XHQmLS1vbmlvbiB7XHJcblx0XHQgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLy4uLy4uLy4uLy4uL2Fzc2V0cy90b3BwaW5ncy9vbmlvbi5zdmcpO1xyXG5cdFx0ICB3aWR0aDogNTdweDtcclxuXHRcdCAgaGVpZ2h0OiAzNnB4O1xyXG5cdFxyXG5cdFx0ICAmOm50aC1jaGlsZCgxKSB7XHJcblx0XHRcdGxlZnQ6IDEwMXB4O1xyXG5cdFx0XHR0b3A6IDU1cHg7XHJcblx0XHQgIH1cclxuXHRcdCAgJjpudGgtY2hpbGQoMikge1xyXG5cdFx0XHRsZWZ0OiAxMHB4O1xyXG5cdFx0XHR0b3A6IDYxcHg7XHJcblx0XHQgIH1cclxuXHRcdCAgJjpudGgtY2hpbGQoMykge1xyXG5cdFx0XHRsZWZ0OiAyNjFweDtcclxuXHRcdFx0dG9wOiA1NXB4O1xyXG5cdFx0ICB9XHJcblx0XHQgICY6bnRoLWNoaWxkKDQpIHtcclxuXHRcdFx0bGVmdDogMTcycHg7XHJcblx0XHRcdHRvcDogMTMycHg7XHJcblx0XHQgIH1cclxuXHRcdCAgJjpudGgtY2hpbGQoNSkge1xyXG5cdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0ICB9XHJcblx0XHR9XHJcblx0XHQmLS1wZXBwZXIge1xyXG5cdFx0ICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi8uLi8uLi8uLi8uLi9hc3NldHMvdG9wcGluZ3MvcGVwcGVyLnN2Zyk7XHJcblx0XHQgIHdpZHRoOiA1N3B4O1xyXG5cdFx0ICBoZWlnaHQ6IDM2cHg7XHJcblx0XHJcblx0XHQgICY6bnRoLWNoaWxkKDEpIHtcclxuXHRcdFx0bGVmdDogMTIycHg7XHJcblx0XHRcdHRvcDogMzBweDtcclxuXHRcdCAgfVxyXG5cdFx0ICAmOm50aC1jaGlsZCgyKSB7XHJcblx0XHRcdGxlZnQ6IDE3NXB4O1xyXG5cdFx0XHR0b3A6IDg3cHg7XHJcblx0XHQgIH1cclxuXHRcdCAgJjpudGgtY2hpbGQoMykge1xyXG5cdFx0XHRsZWZ0OiAzMHB4O1xyXG5cdFx0XHR0b3A6IDgxcHg7XHJcblx0XHQgIH1cclxuXHRcdCAgJjpudGgtY2hpbGQoNCkge1xyXG5cdFx0XHRsZWZ0OiAyODJweDtcclxuXHRcdFx0dG9wOiA2OXB4O1xyXG5cdFx0ICB9XHJcblx0XHQgICY6bnRoLWNoaWxkKDUpIHtcclxuXHRcdFx0bGVmdDogMTA1cHg7XHJcblx0XHRcdHRvcDogMTQ3cHg7XHJcblx0XHQgIH1cclxuXHRcdH1cclxuXHRcdCYtLXBlcHBlcm9uaSB7XHJcblx0XHQgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLy4uLy4uLy4uLy4uL2Fzc2V0cy90b3BwaW5ncy9wZXBwZXJvbmkuc3ZnKTtcclxuXHRcdCAgd2lkdGg6IDU3cHg7XHJcblx0XHQgIGhlaWdodDogMzZweDtcclxuXHRcclxuXHRcdCAgJjpudGgtY2hpbGQoMSkge1xyXG5cdFx0XHRsZWZ0OiAyMjJweDtcclxuXHRcdFx0dG9wOiAzNXB4O1xyXG5cdFx0ICB9XHJcblx0XHQgICY6bnRoLWNoaWxkKDIpIHtcclxuXHRcdFx0bGVmdDogMTQ1cHg7XHJcblx0XHRcdHRvcDogMTA3cHg7XHJcblx0XHQgIH1cclxuXHRcdCAgJjpudGgtY2hpbGQoMykge1xyXG5cdFx0XHRsZWZ0OiA4MXB4O1xyXG5cdFx0XHR0b3A6IDIxcHg7XHJcblx0XHQgIH1cclxuXHRcdCAgJjpudGgtY2hpbGQoNCkge1xyXG5cdFx0XHRsZWZ0OiAyMjFweDtcclxuXHRcdFx0dG9wOiA4MHB4O1xyXG5cdFx0ICB9XHJcblx0XHQgICY6bnRoLWNoaWxkKDUpIHtcclxuXHRcdFx0bGVmdDogNzVweDtcclxuXHRcdFx0dG9wOiAxMzdweDtcclxuXHRcdCAgfVxyXG5cdFx0fVxyXG5cdFx0Ji0tc3dlZXRjb3JuIHtcclxuXHRcdCAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4vLi4vLi4vLi4vLi4vYXNzZXRzL3RvcHBpbmdzL3N3ZWV0Y29ybi5zdmcpO1xyXG5cdFx0ICB3aWR0aDogNTdweDtcclxuXHRcdCAgaGVpZ2h0OiAzNnB4O1xyXG5cdFxyXG5cdFx0ICAmOm50aC1jaGlsZCgxKSB7XHJcblx0XHRcdGxlZnQ6IDE5MnB4O1xyXG5cdFx0XHR0b3A6IDM1cHg7XHJcblx0XHQgIH1cclxuXHRcdCAgJjpudGgtY2hpbGQoMikge1xyXG5cdFx0XHRsZWZ0OiA0MXB4O1xyXG5cdFx0XHR0b3A6IDQxcHg7XHJcblx0XHQgIH1cclxuXHRcdCAgJjpudGgtY2hpbGQoMykge1xyXG5cdFx0XHRsZWZ0OiAyMTJweDtcclxuXHRcdFx0dG9wOiAxNDZweDtcclxuXHRcdCAgfVxyXG5cdFx0ICAmOm50aC1jaGlsZCg0KSwgJjpudGgtY2hpbGQoNSkge1xyXG5cdFx0XHRkaXNwbGF5OiBub25lO1xyXG5cdFx0ICB9XHJcblx0XHR9XHJcblx0XHQmLS10b21hdG8ge1xyXG5cdFx0ICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi8uLi8uLi8uLi8uLi9hc3NldHMvdG9wcGluZ3MvdG9tYXRvLnN2Zyk7XHJcblx0XHQgIHdpZHRoOiA1N3B4O1xyXG5cdFx0ICBoZWlnaHQ6IDM2cHg7XHJcblx0XHJcblx0XHQgICY6bnRoLWNoaWxkKDEpIHtcclxuXHRcdFx0bGVmdDogMTc1cHg7XHJcblx0XHRcdHRvcDogMTQ3cHg7XHJcblx0XHQgIH1cclxuXHRcdCAgJjpudGgtY2hpbGQoMikge1xyXG5cdFx0XHRsZWZ0OiA0MXB4O1xyXG5cdFx0XHR0b3A6IDQxcHg7XHJcblx0XHQgIH1cclxuXHRcdCAgJjpudGgtY2hpbGQoMykge1xyXG5cdFx0XHRsZWZ0OiA4NXB4O1xyXG5cdFx0XHR0b3A6IDEwMHB4O1xyXG5cdFx0ICB9XHJcblx0XHQgICY6bnRoLWNoaWxkKDQpIHtcclxuXHRcdFx0bGVmdDogMjgwcHg7XHJcblx0XHRcdHRvcDogOTlweDtcclxuXHRcdCAgfVxyXG5cdFx0ICAmOm50aC1jaGlsZCg1KSB7XHJcblx0XHRcdGRpc3BsYXk6IG5vbmU7XHJcblx0XHQgIH1cclxuXHRcdH1cclxuXHQgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pizza/components/pizza-view/pizza-view.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pizza/components/pizza-view/pizza-view.component.ts ***!
  \*********************************************************************/
/*! exports provided: DROP_ANIMATION, PizzaViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DROP_ANIMATION", function() { return DROP_ANIMATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzaViewComponent", function() { return PizzaViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _store_selectors_forms_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/selectors/forms.selector */ "./src/app/pizza/store/selectors/forms.selector.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");





var DROP_ANIMATION = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('drop', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(-200px)', opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('300ms cubic-bezier(1.000, 0.000, 0.000, 1.000)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(0)', opacity: 1 }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(0)', opacity: 1 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('200ms cubic-bezier(1.000, 0.000, 0.000, 1.000)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(-200px)', opacity: 0 }))
    ])
]);
var PizzaViewComponent = /** @class */ (function () {
    function PizzaViewComponent(store) {
        this.store = store;
        this.toppings$ = this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["select"])(_store_selectors_forms_selector__WEBPACK_IMPORTED_MODULE_3__["selectFormsList"]));
    }
    PizzaViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pizza-view',
            animations: [DROP_ANIMATION],
            template: __webpack_require__(/*! ./pizza-view.component.html */ "./src/app/pizza/components/pizza-view/pizza-view.component.html"),
            styles: [__webpack_require__(/*! ./pizza-view.component.scss */ "./src/app/pizza/components/pizza-view/pizza-view.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], PizzaViewComponent);
    return PizzaViewComponent;
}());



/***/ }),

/***/ "./src/app/pizza/containers/pizza-container/pizza-container.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pizza/containers/pizza-container/pizza-container.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"pizza-app\">\n    <app-pizza-view ></app-pizza-view>\n    <app-pizza-form-steps></app-pizza-form-steps>\n    <app-pizza-form></app-pizza-form>\n</div>\n"

/***/ }),

/***/ "./src/app/pizza/containers/pizza-container/pizza-container.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pizza/containers/pizza-container/pizza-container.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host, .pizza-app {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9vd2xydXNsYW4vYW5ndWxhci1waXp6YS1uZ3J4LXB3YS9zcmMvYXBwL3BpenphL2NvbnRhaW5lcnMvcGl6emEtY29udGFpbmVyL3BpenphLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQVk7RUFDWixjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLFlBQVcsRUFDZCIsImZpbGUiOiJzcmMvYXBwL3BpenphL2NvbnRhaW5lcnMvcGl6emEtY29udGFpbmVyL3BpenphLWNvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0LCAucGl6emEtYXBwIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuICAiXX0= */"

/***/ }),

/***/ "./src/app/pizza/containers/pizza-container/pizza-container.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pizza/containers/pizza-container/pizza-container.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PizzaContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzaContainerComponent", function() { return PizzaContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PizzaContainerComponent = /** @class */ (function () {
    function PizzaContainerComponent() {
    }
    PizzaContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pizza-container',
            template: __webpack_require__(/*! ./pizza-container.component.html */ "./src/app/pizza/containers/pizza-container/pizza-container.component.html"),
            styles: [__webpack_require__(/*! ./pizza-container.component.scss */ "./src/app/pizza/containers/pizza-container/pizza-container.component.scss")]
        })
    ], PizzaContainerComponent);
    return PizzaContainerComponent;
}());



/***/ }),

/***/ "./src/app/pizza/pizza.module.ts":
/*!***************************************!*\
  !*** ./src/app/pizza/pizza.module.ts ***!
  \***************************************/
/*! exports provided: PizzaModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzaModule", function() { return PizzaModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_pizza_view_pizza_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/pizza-view/pizza-view.component */ "./src/app/pizza/components/pizza-view/pizza-view.component.ts");
/* harmony import */ var _components_pizza_form_pizza_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/pizza-form/pizza-form.component */ "./src/app/pizza/components/pizza-form/pizza-form.component.ts");
/* harmony import */ var _containers_pizza_container_pizza_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./containers/pizza-container/pizza-container.component */ "./src/app/pizza/containers/pizza-container/pizza-container.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_pizza_form_details_pizza_form_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/pizza-form-details/pizza-form-details.component */ "./src/app/pizza/components/pizza-form-details/pizza-form-details.component.ts");
/* harmony import */ var _components_pizza_form_summary_pizza_form_summary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/pizza-form-summary/pizza-form-summary.component */ "./src/app/pizza/components/pizza-form-summary/pizza-form-summary.component.ts");
/* harmony import */ var _store_effects_pizza_effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./store/effects/pizza.effects */ "./src/app/pizza/store/effects/pizza.effects.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _services_pizza_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/pizza.service */ "./src/app/pizza/services/pizza.service.ts");
/* harmony import */ var _store_reducers_app_reducers__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./store/reducers/app.reducers */ "./src/app/pizza/store/reducers/app.reducers.ts");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _components_pizza_form_steps_pizza_form_steps_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/pizza-form-steps/pizza-form-steps.component */ "./src/app/pizza/components/pizza-form-steps/pizza-form-steps.component.ts");
/* harmony import */ var _components_pizza_toppings_pizza_toppings_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/pizza-toppings/pizza-toppings.component */ "./src/app/pizza/components/pizza-toppings/pizza-toppings.component.ts");
/* harmony import */ var _components_pizza_price_pizza_price_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/pizza-price/pizza-price.component */ "./src/app/pizza/components/pizza-price/pizza-price.component.ts");




















var PizzaModule = /** @class */ (function () {
    function PizzaModule() {
    }
    PizzaModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _containers_pizza_container_pizza_container_component__WEBPACK_IMPORTED_MODULE_5__["PizzaContainerComponent"],
                _components_pizza_view_pizza_view_component__WEBPACK_IMPORTED_MODULE_3__["PizzaViewComponent"],
                _components_pizza_form_pizza_form_component__WEBPACK_IMPORTED_MODULE_4__["PizzaFormComponent"], _components_pizza_form_details_pizza_form_details_component__WEBPACK_IMPORTED_MODULE_10__["PizzaFormDetailsComponent"], _components_pizza_form_summary_pizza_form_summary_component__WEBPACK_IMPORTED_MODULE_11__["PizzaFormSummaryComponent"], _components_pizza_form_steps_pizza_form_steps_component__WEBPACK_IMPORTED_MODULE_17__["PizzaFormStepsComponent"], _components_pizza_toppings_pizza_toppings_component__WEBPACK_IMPORTED_MODULE_18__["PizzaToppingsComponent"], _components_pizza_price_pizza_price_component__WEBPACK_IMPORTED_MODULE_19__["PizzaPriceComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_store_reducers_app_reducers__WEBPACK_IMPORTED_MODULE_15__["appReducers"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_13__["EffectsModule"].forRoot([_store_effects_pizza_effects__WEBPACK_IMPORTED_MODULE_12__["PizzaEffects"]]),
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_16__["StoreRouterConnectingModule"].forRoot({ stateKey: 'router' }),
            ],
            providers: [_services_pizza_service__WEBPACK_IMPORTED_MODULE_14__["PizzaService"]],
            exports: [
                _containers_pizza_container_pizza_container_component__WEBPACK_IMPORTED_MODULE_5__["PizzaContainerComponent"]
            ]
        })
    ], PizzaModule);
    return PizzaModule;
}());



/***/ }),

/***/ "./src/app/pizza/services/pizza.service.ts":
/*!*************************************************!*\
  !*** ./src/app/pizza/services/pizza.service.ts ***!
  \*************************************************/
/*! exports provided: PizzaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzaService", function() { return PizzaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");




var PizzaService = /** @class */ (function () {
    function PizzaService(http) {
        this.http = http;
        this.pizzasUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "pizzas.json";
    }
    PizzaService.prototype.getPizzas = function () {
        return this.http.get(this.pizzasUrl);
    };
    PizzaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], PizzaService);
    return PizzaService;
}());



/***/ }),

/***/ "./src/app/pizza/store/actions/forms.actions.ts":
/*!******************************************************!*\
  !*** ./src/app/pizza/store/actions/forms.actions.ts ***!
  \******************************************************/
/*! exports provided: EFormsActions, UpdateForm, UpdateSteps, UpdateSummary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EFormsActions", function() { return EFormsActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateForm", function() { return UpdateForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSteps", function() { return UpdateSteps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSummary", function() { return UpdateSummary; });
var EFormsActions;
(function (EFormsActions) {
    EFormsActions["UpdateForm"] = "[Forms] Update Form";
    EFormsActions["UpdateSteps"] = "[Forms] Update Steps";
    EFormsActions["UpdateSummary"] = "[Forms] Update Summary";
})(EFormsActions || (EFormsActions = {}));
var UpdateForm = /** @class */ (function () {
    function UpdateForm(payload) {
        this.payload = payload;
        this.type = EFormsActions.UpdateForm;
    }
    return UpdateForm;
}());

var UpdateSteps = /** @class */ (function () {
    function UpdateSteps(payload) {
        this.payload = payload;
        this.type = EFormsActions.UpdateSteps;
    }
    return UpdateSteps;
}());

var UpdateSummary = /** @class */ (function () {
    function UpdateSummary(payload) {
        this.payload = payload;
        this.type = EFormsActions.UpdateSummary;
    }
    return UpdateSummary;
}());



/***/ }),

/***/ "./src/app/pizza/store/actions/pizza.actions.ts":
/*!******************************************************!*\
  !*** ./src/app/pizza/store/actions/pizza.actions.ts ***!
  \******************************************************/
/*! exports provided: EPizzaActions, GetPizzas, GetPizzasSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EPizzaActions", function() { return EPizzaActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPizzas", function() { return GetPizzas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPizzasSuccess", function() { return GetPizzasSuccess; });
var EPizzaActions;
(function (EPizzaActions) {
    EPizzaActions["GetPizzas"] = "[Pizza] Get Pizzas";
    EPizzaActions["GetPizzasSuccess"] = "[Pizza] Get Pizzas Success";
})(EPizzaActions || (EPizzaActions = {}));
var GetPizzas = /** @class */ (function () {
    function GetPizzas() {
        this.type = EPizzaActions.GetPizzas;
    }
    return GetPizzas;
}());

var GetPizzasSuccess = /** @class */ (function () {
    function GetPizzasSuccess(payload) {
        this.payload = payload;
        this.type = EPizzaActions.GetPizzasSuccess;
    }
    return GetPizzasSuccess;
}());



/***/ }),

/***/ "./src/app/pizza/store/effects/pizza.effects.ts":
/*!******************************************************!*\
  !*** ./src/app/pizza/store/effects/pizza.effects.ts ***!
  \******************************************************/
/*! exports provided: PizzaEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzaEffects", function() { return PizzaEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _services_pizza_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/pizza.service */ "./src/app/pizza/services/pizza.service.ts");
/* harmony import */ var _actions_pizza_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/pizza.actions */ "./src/app/pizza/store/actions/pizza.actions.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var PizzaEffects = /** @class */ (function () {
    function PizzaEffects(pizzaService, actions$) {
        var _this = this;
        this.pizzaService = pizzaService;
        this.actions$ = actions$;
        this.getPizzas$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_pizza_actions__WEBPACK_IMPORTED_MODULE_4__["EPizzaActions"].GetPizzas), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () { return _this.pizzaService.getPizzas(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (pizzaHttp) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions_pizza_actions__WEBPACK_IMPORTED_MODULE_4__["GetPizzasSuccess"](pizzaHttp.pizzas)); }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PizzaEffects.prototype, "getPizzas$", void 0);
    PizzaEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_pizza_service__WEBPACK_IMPORTED_MODULE_3__["PizzaService"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"]])
    ], PizzaEffects);
    return PizzaEffects;
}());



/***/ }),

/***/ "./src/app/pizza/store/reducers/app.reducers.ts":
/*!******************************************************!*\
  !*** ./src/app/pizza/store/reducers/app.reducers.ts ***!
  \******************************************************/
/*! exports provided: appReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducers", function() { return appReducers; });
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _pizza_reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pizza.reducers */ "./src/app/pizza/store/reducers/pizza.reducers.ts");
/* harmony import */ var _forms_reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forms.reducers */ "./src/app/pizza/store/reducers/forms.reducers.ts");



var appReducers = {
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_0__["routerReducer"],
    pizzas: _pizza_reducers__WEBPACK_IMPORTED_MODULE_1__["pizzaReducers"],
    forms: _forms_reducers__WEBPACK_IMPORTED_MODULE_2__["formsReducers"]
};


/***/ }),

/***/ "./src/app/pizza/store/reducers/forms.reducers.ts":
/*!********************************************************!*\
  !*** ./src/app/pizza/store/reducers/forms.reducers.ts ***!
  \********************************************************/
/*! exports provided: formsReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formsReducers", function() { return formsReducers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _state_forms_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/forms.state */ "./src/app/pizza/store/state/forms.state.ts");
/* harmony import */ var _actions_forms_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/forms.actions */ "./src/app/pizza/store/actions/forms.actions.ts");



var formsReducers = function (state, action) {
    if (state === void 0) { state = _state_forms_state__WEBPACK_IMPORTED_MODULE_1__["initialFormsState"]; }
    switch (action.type) {
        case _actions_forms_actions__WEBPACK_IMPORTED_MODULE_2__["EFormsActions"].UpdateForm:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { toppings: action.payload });
        case _actions_forms_actions__WEBPACK_IMPORTED_MODULE_2__["EFormsActions"].UpdateSteps:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { steps: action.payload });
        case _actions_forms_actions__WEBPACK_IMPORTED_MODULE_2__["EFormsActions"].UpdateSummary:
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { summary: action.payload });
        default:
            return state;
    }
};


/***/ }),

/***/ "./src/app/pizza/store/reducers/pizza.reducers.ts":
/*!********************************************************!*\
  !*** ./src/app/pizza/store/reducers/pizza.reducers.ts ***!
  \********************************************************/
/*! exports provided: pizzaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pizzaReducers", function() { return pizzaReducers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions_pizza_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../actions/pizza.actions */ "./src/app/pizza/store/actions/pizza.actions.ts");
/* harmony import */ var _state_pizza_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/pizza.state */ "./src/app/pizza/store/state/pizza.state.ts");



var pizzaReducers = function (state, action) {
    if (state === void 0) { state = _state_pizza_state__WEBPACK_IMPORTED_MODULE_2__["initialPizzaState"]; }
    switch (action.type) {
        case _actions_pizza_actions__WEBPACK_IMPORTED_MODULE_1__["EPizzaActions"].GetPizzasSuccess: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { pizzas: action.payload });
        }
        default:
            return state;
    }
};


/***/ }),

/***/ "./src/app/pizza/store/selectors/forms.selector.ts":
/*!*********************************************************!*\
  !*** ./src/app/pizza/store/selectors/forms.selector.ts ***!
  \*********************************************************/
/*! exports provided: selectFormsList, selectFormSteps, selectFormSummary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFormsList", function() { return selectFormsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFormSteps", function() { return selectFormSteps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectFormSummary", function() { return selectFormSummary; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var selectForms = function (state) { return state.forms; };
var selectFormsList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectForms, function (state) { return state.toppings; });
var selectFormSteps = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectForms, function (state) { return state.steps; });
var selectFormSummary = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectForms, function (state) { return state.summary; });


/***/ }),

/***/ "./src/app/pizza/store/state/forms.state.ts":
/*!**************************************************!*\
  !*** ./src/app/pizza/store/state/forms.state.ts ***!
  \**************************************************/
/*! exports provided: initialFormsState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialFormsState", function() { return initialFormsState; });
var initialFormsState = {
    toppings: [],
    steps: null,
    summary: 0
};


/***/ }),

/***/ "./src/app/pizza/store/state/pizza.state.ts":
/*!**************************************************!*\
  !*** ./src/app/pizza/store/state/pizza.state.ts ***!
  \**************************************************/
/*! exports provided: initialPizzaState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialPizzaState", function() { return initialPizzaState; });
var initialPizzaState = {
    pizzas: null,
    selectedPizza: null,
};


/***/ }),

/***/ "./src/app/pizza/validators/pizza.validator.ts":
/*!*****************************************************!*\
  !*** ./src/app/pizza/validators/pizza.validator.ts ***!
  \*****************************************************/
/*! exports provided: PizzaValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PizzaValidator", function() { return PizzaValidator; });
var PizzaValidator = /** @class */ (function () {
    function PizzaValidator() {
    }
    PizzaValidator.checkEmailsMatch = function (control) {
        var email = control.get('email');
        var confirm = control.get('confirm');
        if (!(email && confirm))
            return null;
        return email.value === confirm.value ? null : { nomatch: true };
    };
    return PizzaValidator;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false,
    apiUrl: 'http://localhost:4200/assets/data/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/travis/build/owlruslan/angular-pizza-ngrx-pwa/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map