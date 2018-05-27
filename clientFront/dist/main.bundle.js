webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/add-client/add-client.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-client/add-client.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1> Add New Client </h1>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <form (ngSubmit)=\"addNewClientInfo()\" #ClientForm = \"ngForm\">\n          <div class=\"form-group\">\n            <label for=\"name\"> Name </label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"client.Name\" name=\"Name\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\"> Phone </label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"client.Phone\" name=\"Phone\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\"> Email </label>\n            <input type=\"email\" class=\"form-control\" [(ngModel)]=\"client.Email\" name=\"Email\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\"> Company </label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"client.Company\" name=\"Company\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\"> ZipCode </label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"client.Zip\" name=\"Zip\" required>\n          </div>\n          <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!ClientForm.form.valid\"> Save </button> \n          </div>\n        </form>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/add-client/add-client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddClientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client_service__ = __webpack_require__("./src/app/client.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddClientComponent = /** @class */ (function () {
    function AddClientComponent(clientService, router) {
        this.clientService = clientService;
        this.router = router;
        this.client = {};
    }
    AddClientComponent.prototype.ngOnInit = function () {
    };
    AddClientComponent.prototype.addNewClientInfo = function () {
        var _this = this;
        this.clientService.AddNewClientInfo(this.client)
            .then(function (result) {
            var id = result['_id'];
            _this.router.navigate(['/ClientDetail', id]);
        }, function (err) {
            console.log(err);
        });
    };
    AddClientComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-client',
            template: __webpack_require__("./src/app/add-client/add-client.component.html"),
            styles: [__webpack_require__("./src/app/add-client/add-client.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__client_service__["a" /* ClientService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AddClientComponent);
    return AddClientComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__clientdetail_clientdetail_component__ = __webpack_require__("./src/app/clientdetail/clientdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__client_edit_client_edit_component__ = __webpack_require__("./src/app/client-edit/client-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__add_client_add_client_component__ = __webpack_require__("./src/app/add-client/add-client.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: 'HomeClients', pathMatch: 'full' },
    { path: 'HomeClients', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'ClientDetail/:id', component: __WEBPACK_IMPORTED_MODULE_4__clientdetail_clientdetail_component__["a" /* ClientdetailComponent */] },
    { path: 'ClientEdit/:id', component: __WEBPACK_IMPORTED_MODULE_5__client_edit_client_edit_component__["a" /* ClientEditComponent */] },
    { path: 'addClient', component: __WEBPACK_IMPORTED_MODULE_6__add_client_add_client_component__["a" /* AddClientComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_1__angular_common__["d" /* HashLocationStrategy */]
                }]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".page-header{\r\n    margin-top: 0%;\r\n    margin: auto;\r\n    width: 30%;\r\n    padding: 20px;\r\n}\r\nfooter {   \r\n    margin:auto;\r\n    width: 30%;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-header\"> {{ title }} </h1>\n\n<router-outlet></router-outlet>\n\n\n<footer>\n  <p> Web Crawler with RestAPIT Comp. in 2018 May </p>\n  <p>  By Parvez </p>\n</footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Web Crawler with RestAPI';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__client_service__ = __webpack_require__("./src/app/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__clientdetail_clientdetail_component__ = __webpack_require__("./src/app/clientdetail/clientdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__client_edit_client_edit_component__ = __webpack_require__("./src/app/client-edit/client-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__add_client_add_client_component__ = __webpack_require__("./src/app/add-client/add-client.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__clientdetail_clientdetail_component__["a" /* ClientdetailComponent */],
                __WEBPACK_IMPORTED_MODULE_9__client_edit_client_edit_component__["a" /* ClientEditComponent */],
                __WEBPACK_IMPORTED_MODULE_10__add_client_add_client_component__["a" /* AddClientComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__client_service__["a" /* ClientService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/client-edit/client-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client-edit/client-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1> Edit {{ client.Name }} ClientInfo</h1>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <form (ngSubmit)=\"updateClientDetails(client._id)\" #ClientForm = \"ngForm\">\n          <div class=\"form-group\">\n            <label for=\"name\"> Name </label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"client.Name\" name=\"Name\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\"> Phone </label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"client.Phone\" name=\"Phone\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\"> Email </label>\n            <input type=\"email\" class=\"form-control\" [(ngModel)]=\"client.Email\" name=\"Email\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\"> Company </label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"client.Company\" name=\"Company\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\"> ZipCode </label>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"client.Zip\" name=\"Zip\" required>\n          </div>\n          <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!ClientForm.form.valid\"> Update </button> \n          </div>\n        </form>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/client-edit/client-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client_service__ = __webpack_require__("./src/app/client.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientEditComponent = /** @class */ (function () {
    function ClientEditComponent(clientService, router, route) {
        this.clientService = clientService;
        this.router = router;
        this.route = route;
        this.client = {};
    }
    ClientEditComponent.prototype.ngOnInit = function () {
        this.getClientDetailOne(this.route.snapshot.params['id']);
    };
    ClientEditComponent.prototype.getClientDetailOne = function (id) {
        var _this = this;
        this.clientService.getClientById(id)
            .then(function (res) {
            _this.client = res;
            console.log(_this.client);
        }, function (err) {
            console.log(err);
        });
    };
    ClientEditComponent.prototype.updateClientDetails = function (id) {
        var _this = this;
        this.clientService.updateExistingClientInfo(id, this.client)
            .then(function (result) {
            var id = result['_id'];
            _this.router.navigate(['/ClientDetail/', id]);
        }, function (err) {
            console.log(err);
        });
    };
    ClientEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-client-edit',
            template: __webpack_require__("./src/app/client-edit/client-edit.component.html"),
            styles: [__webpack_require__("./src/app/client-edit/client-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__client_service__["a" /* ClientService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ClientEditComponent);
    return ClientEditComponent;
}());



/***/ }),

/***/ "./src/app/client.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientService = /** @class */ (function () {
    function ClientService(http) {
        this.http = http;
    }
    ClientService.prototype.getAllClients = function () {
        var _this = this;
        console.log("Getting All the Books from server ! ");
        return new Promise(function (resolve, reject) {
            _this.http.get('/clients')
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ClientService.prototype.getClientById = function (id) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get('/clients/' + id)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ClientService.prototype.AddNewClientInfo = function (data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.post('/clients', data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ClientService.prototype.updateExistingClientInfo = function (id, data) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put('/clients/' + id, data)
                .map(function (res) { return res.json(); })
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ClientService.prototype.deleteExistingClient = function (id) {
        var _this = this;
        console.log(id + " first");
        return new Promise(function (resolve, reject) {
            _this.http.delete('/clients/' + id)
                .subscribe(function (res) {
                resolve(res);
            }, function (err) {
                reject(err);
            });
        });
    };
    ClientService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/clientdetail/clientdetail.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/clientdetail/clientdetail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1> {{ client.Name }}</h1>\n    <table>\n      <tr>\n        <td> Name : </td>\n        <td> {{ client.Name }}</td>\n      </tr>\n      <tr>\n        <td> Phone : </td>\n        <td> {{ client.Phone }}</td>\n      </tr>\n      <tr>\n        <td> Email : </td>\n        <td> {{ client.Email }} </td>\n      </tr>\n      <tr>\n        <td> Company : </td>\n        <td> {{ client.Company}} </td>\n      </tr>\n      <tr>\n        <td> ZipCode:  </td>\n        <td> {{ client.Zip }}</td>\n      </tr>\n    </table>\n  <div class=\"row\">\n      <div class=\"col-md-12\">\n        <button><a [routerLink]=\"['/ClientEdit',client._id]\" class=\"btn btn-success\"> Edit </a> </button>\n        <button class=\"btn btn-danger\" (click)=\"deleteClientInfo(client._id)\"> Delete </button>\n      </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/clientdetail/clientdetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientdetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__client_service__ = __webpack_require__("./src/app/client.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientdetailComponent = /** @class */ (function () {
    function ClientdetailComponent(clientService, route, router) {
        this.clientService = clientService;
        this.route = route;
        this.router = router;
        this.client = {};
    }
    ClientdetailComponent.prototype.ngOnInit = function () {
        this.getClientDetail(this.route.snapshot.params['id']);
    };
    ClientdetailComponent.prototype.getClientDetail = function (id) {
        var _this = this;
        console.log(id);
        this.clientService.getClientById(id)
            .then(function (res) {
            _this.client = res;
            console.log(_this.client);
        }, function (err) {
            console.log(err);
        });
    };
    ClientdetailComponent.prototype.deleteClientInfo = function (id) {
        var _this = this;
        console.log(id);
        this.clientService.deleteExistingClient(id)
            .then(function (res) {
            _this.router.navigate(['/HomeClients']);
        }, function (err) {
            console.log(err);
        });
    };
    ClientdetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-clientdetail',
            template: __webpack_require__("./src/app/clientdetail/clientdetail.component.html"),
            styles: [__webpack_require__("./src/app/clientdetail/clientdetail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__client_service__["a" /* ClientService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ClientdetailComponent);
    return ClientdetailComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "\r\ntable, tr, th,td{\r\n    border: 1px solid black;\r\n    border-collapse: collapse;\r\n    padding: 8px;\r\n    margin:auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1> Every Client Information on this Page </h1>\n<button>\n<a [routerLink]=\"['/addClient']\" class=\"btn btn-success\"> Add New Client </a> \n</button>\n<table class=\"table table-bordered\">\n  <thead>\n    <tr>\n      <th> Name </th>\n      <th> Phone </th>\n      <th> Email </th>\n      <th> Company </th>\n      <th> Zip Code </th>\n      <th> Details </th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let client of clients\">\n      <td> {{ client.Name }} </td>\n      <td> {{ client.Phone }} </td>\n      <td> {{ client.Email }} </td>\n      <td> {{ client.Company }} </td>\n      <td> {{ client.Zip }} </td>\n      <td>\n          <a [routerLink]=\"['/ClientDetail/',client._id]\"  class=\"btn btn-success\"> Click for Details </a>\n      </td>\n    </tr>\n  </tbody>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client_service__ = __webpack_require__("./src/app/client.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(clientService) {
        this.clientService = clientService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getClientList();
        console.log("ngOnInit()");
    };
    HomeComponent.prototype.getClientList = function () {
        var _this = this;
        console.log(' Client Side call to getClientList() ');
        this.clientService.getAllClients()
            .then(function (res) {
            _this.clients = res;
            console.log(_this.clients);
        }, function (err) {
            console.log(err);
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__client_service__["a" /* ClientService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map