webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { useHash: false })],
        declarations: [],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'ng-force-viz';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-root',
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")],
        template: "\n    <router-outlet></router-outlet>\n  "
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("../../../flex-layout/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__data_data_service__ = __webpack_require__("../../../../../src/app/data/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__data_data_interface__ = __webpack_require__("../../../../../src/app/data/data.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__selection_selection_component__ = __webpack_require__("../../../../../src/app/selection/selection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tree_chart_tree_chart_component__ = __webpack_require__("../../../../../src/app/tree-chart/tree-chart.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__selection_selection_component__["a" /* SelectionComponent */],
            __WEBPACK_IMPORTED_MODULE_10__tree_chart_tree_chart_component__["a" /* TreeChartComponent */]
        ],
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_6__app_routing_app_routing_module__["a" /* AppRoutingModule */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */]],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_8__data_data_interface__["a" /* IDataService */], useClass: __WEBPACK_IMPORTED_MODULE_7__data_data_service__["a" /* DataService */] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/data/data.interface.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IDataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IDataService = (function () {
    function IDataService() {
    }
    return IDataService;
}());
IDataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], IDataService);

//# sourceMappingURL=data.interface.js.map

/***/ }),

/***/ "../../../../../src/app/data/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataService = (function () {
    function DataService(http) {
        this.http = http;
        this.apiHost = './assets/data/constituents-financials.json';
        this.sectorColors = {
            Industrials: '#1f77b4',
            'Health Care': '#ff7f0e',
            'Information Technology': '#17becf',
            'Consumer Discretionary': '#d62728',
            Utilities: '#9467bd',
            Financials: '#8c564b',
            Materials: '#e377c2',
            'Consumer Staples': '#7f7f7f',
            'Real Estate': '#bcbd22',
            Energy: '#2ca02c',
            Telecommunications: '#ffff99',
            'Cash and Derivatives': '#0B3B17'
        };
    }
    DataService.prototype.getAll = function () {
        var _this = this;
        return this.http
            .get(this.apiHost)
            .map(function (response) {
            var resJson = response.json(); //todo: sort by symbol
            _this.allCompanies = resJson;
            return resJson;
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    DataService.prototype.getChartData = function () {
        var _this = this;
        return this.getAll().map(function (companies) {
            var nodes = [];
            var parentNodeLabel = 'S&P100';
            var uniqueSectors = new Set();
            for (var i in companies) {
                uniqueSectors.add(companies[i].Sector);
                nodes.push({
                    label: companies[i].Ticker,
                    name: companies[i].Name,
                    color: _this.sectorColors[companies[i].Sector],
                    parent: companies[i].Sector
                });
            }
            var sectorNodes = [];
            uniqueSectors.forEach(function (sector) {
                sectorNodes.push({
                    color: _this.sectorColors[sector],
                    label: sector,
                    name: sector,
                    parent: parentNodeLabel
                });
            });
            sectorNodes.push({
                color: '#000',
                label: parentNodeLabel,
                parent: null
            });
            return nodes.concat(sectorNodes);
        });
    };
    DataService.prototype.companyByTicker = function (ticker) {
        console.log(ticker);
        return this.allCompanies.filter(function (company) { return company.Ticker === ticker; })[0];
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_data_interface__ = __webpack_require__("../../../../../src/app/data/data.interface.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(ds) {
        this.ds = ds;
        this.appTitle = 'S&P 100 by Sector';
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ds.getChartData().subscribe(function (result) { return (_this.chartData = result); });
    };
    HomeComponent.prototype.onSelection = function (node) {
        this.selectedCompany = this.ds.companyByTicker(node.label);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-home',
        styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")],
        template: "\n    <div class=\"container\"\n      fxLayout=\"row\"\n      fxLayoutAlign=\"center\"\n      fxLayoutGap=\"20px\">\n      <h3 fxFlex=\"20%\">{{appTitle}}</h3>\n    </div>\n\n    <div class=\"container\"\n    fxLayout=\"column\"\n    fxLayoutAlign=\"center\">\n      \n    <app-tree-chart fxFlex *ngIf=\"chartData\" [data]=\"chartData\" (selectedNode)=\"onSelection($event)\">\n      </app-tree-chart>\n    </div>\n\n    <div class=\"container\"\n      fxLayout=\"row\"\n      fxLayoutAlign=\"center\"\n      fxLayoutGap=\"20px\">\n      <app-selection fxFlex [selctedCompany]=\"selectedCompany\">\n      </app-selection>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data_data_interface__["a" /* IDataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data_data_interface__["a" /* IDataService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/selection/selection.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/selection/selection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types_company__ = __webpack_require__("../../../../../src/app/types/company.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__types_company___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__types_company__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectionComponent = (function () {
    function SelectionComponent() {
    }
    SelectionComponent.prototype.ngOnInit = function () { };
    SelectionComponent.prototype.ngOnChanges = function () { };
    return SelectionComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = (typeof __WEBPACK_IMPORTED_MODULE_1__types_company__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__types_company__).Details) === "function" && _a || Object)
], SelectionComponent.prototype, "selctedCompany", void 0);
SelectionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-selection',
        styles: [__webpack_require__("../../../../../src/app/selection/selection.component.scss")],
        template: "\n  <div>\n    <nav class=\"level is-mobile\" *ngIf=\"selctedCompany\">\n      <div class=\"level-item has-text-centered\">\n        <div>\n          <p class=\"heading is-5\">Company</p>\n          <p class=\"title is-3\">{{ selctedCompany.Name }}</p>\n        </div>\n      </div>\n      <div class=\"level-item has-text-centered\">\n        <div>\n          <p class=\"heading is-5\">Symbol</p>\n          <p class=\"title is-3\">{{ selctedCompany.Ticker }}</p>\n        </div>\n      </div>\n      <div class=\"level-item has-text-centered\">\n        <div>\n          <p class=\"heading is-5\">Sector</p>\n          <p class=\"title is-3\">{{ selctedCompany.Sector }}</p>\n        </div>\n      </div>\n    </nav>\n  </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], SelectionComponent);

var _a;
//# sourceMappingURL=selection.component.js.map

/***/ }),

/***/ "../../../../../src/app/tree-chart/tree-chart.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".d3-chart {\n  width: 100%;\n  height: 750px;\n  overflow: auto; }\n\n.box {\n  padding: 0;\n  overflow: auto; }\n\n.node circle {\n  fill: #fff;\n  stroke: steelblue;\n  stroke-width: 3px; }\n\n.node text {\n  color: #4a4a4a;\n  font: 12px BlinkMacSystemFont, -apple-system, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", \"Helvetica\", \"Arial\", sans-serif; }\n\ntext.node--internal {\n  text-shadow: 0 1px 0 #fff, 0 -1px 0 #fff, 1px 0 0 #fff, -1px 0 0 #fff; }\n\n.link {\n  fill: none;\n  stroke: #ccc;\n  stroke-width: 2px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/tree-chart/tree-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3__ = __webpack_require__("../../../../d3/build/d3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_d3__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeChartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TreeChartComponent = (function () {
    function TreeChartComponent() {
        this.selectedNode = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.margin = { top: 20, bottom: 20, left: 20, right: 20 };
        this.duration = 750;
        this.i = 0;
    }
    TreeChartComponent.prototype.ngOnChanges = function () {
        if (this.data) {
            this.plotChart();
        }
    };
    TreeChartComponent.prototype.plotChart = function () {
        var element = this.chartContainer.nativeElement;
        var svgWidth = element.offsetWidth - this.margin.left - this.margin.right;
        var svgHeight = element.offsetHeight - this.margin.top - this.margin.bottom;
        var chartWidth = svgWidth - (this.margin.left + this.margin.right);
        var chartHeight = svgHeight - (this.margin.top + this.margin.bottom);
        this.svg = this.drawCanvas(element, svgWidth, svgHeight);
        this.tree = this.createTree(chartWidth, chartHeight);
        var root = this.transformData(this.data);
        //todo: root.sort()
        root.x0 = 0;
        root.y0 = 0;
        root.children.forEach(collapse);
        this.updateChart(root);
        function collapse(d) {
            if (d.children) {
                d._children = d.children;
                d._children.forEach(collapse);
                d.children = null;
            }
        }
    };
    TreeChartComponent.prototype.updateChart = function (source) {
        var _this = this;
        console.log(source);
        var tree = this.tree(source);
        var nodes = tree.descendants();
        var links = tree.descendants().slice(1);
        var click = function (d) {
            if (d.children) {
                d._children = d.children;
                d.children = null;
            }
            else {
                d.children = d._children;
                d._children = null;
            }
            _this.selectedNode.emit(d.data.data);
            _this.updateChart(source);
        };
        nodes.forEach(function (d) {
            d.y = d.depth * 400;
        });
        var node = this.svg
            .selectAll('g.node')
            .data(nodes, function (d) { return d.id || (d.id = ++_this.i); });
        var nodeEnter = node
            .enter()
            .append('g')
            .attr('class', 'node')
            .attr('transform', function (d) { return 'translate(' + source.y0 + ',' + source.x0 + ')'; })
            .on('click', click);
        // Add Circle for the nodes
        nodeEnter.append('circle').attr('class', 'node').attr('r', 1e-6);
        // Add labels for the nodes
        nodeEnter
            .append('text')
            .attr('dy', '.35em')
            .attr('x', function (d) { return (d.children || d._children ? -13 : 13); })
            .attr('text-anchor', function (d) { return (d.children || d._children ? 'end' : 'start'); })
            .classed('node--internal', function (d) { return (d.children || d._children ? true : false); })
            .text(function (d) { return d.data.data.name; });
        // UPDATE
        var nodeUpdate = nodeEnter.merge(node);
        // Transition to the proper position for the node
        nodeUpdate
            .transition()
            .duration(this.duration)
            .attr('transform', function (d) { return 'translate(' + d.y + ',' + d.x + ')'; });
        // Update the node attributes and style
        nodeUpdate
            .select('circle.node')
            .attr('r', 10)
            .style('stroke', function (d) { return d.data.data.color; })
            .style('fill', function (d) {
            return d._children || d.depth === 2 ? d.data.data.color : '#fff';
        })
            .attr('cursor', 'pointer');
        // Remove any exiting nodes
        var nodeExit = node
            .exit()
            .transition()
            .duration(this.duration)
            .attr('transform', function (d) { return 'translate(' + source.y + ',' + source.x + ')'; })
            .remove();
        // On exit reduce the node circles size to 0
        nodeExit.select('circle').attr('r', 1e-6);
        // On exit reduce the opacity of text labels
        nodeExit.select('text').style('fill-opacity', 1e-6);
        // Update the links
        var link = this.svg
            .selectAll('path.link')
            .data(links, function (d) {
            return d.id;
        });
        // Enter any new links at the parent's previous position.
        var linkEnter = link
            .enter()
            .insert('path', 'g')
            .attr('class', 'link')
            .attr('d', function (d) {
            var o = { x: source.x0, y: source.y0 };
            return diagonal(o, o);
        });
        // UPDATE
        var linkUpdate = linkEnter.merge(link);
        // Transition back to the parent element position
        linkUpdate.transition().duration(this.duration).attr('d', function (d) {
            return diagonal(d, d.parent);
        });
        // Remove any exiting links
        var linkExit = link
            .exit()
            .transition()
            .duration(this.duration)
            .attr('d', function (d) {
            var o = { x: source.x, y: source.y };
            return diagonal(o, o);
        })
            .remove();
        // Store the old positions for transition.
        nodes.forEach(function (d) {
            d.x0 = d.x;
            d.y0 = d.y;
        });
        // Creates a curved (diagonal) path from parent to the child nodes
        function diagonal(s, d) {
            var path = "M " + s.y + " " + s.x + "\n        C " + (s.y + d.y) / 2 + " " + s.x + ",\n          " + (s.y + d.y) / 2 + " " + d.x + ",\n          " + d.y + " " + d.x;
            return path;
        }
    };
    TreeChartComponent.prototype.transformData = function (data) {
        var flatData = __WEBPACK_IMPORTED_MODULE_1_d3__["stratify"]()
            .id(function (d) { return d.label; })
            .parentId(function (d) { return d.parent; })(data);
        return __WEBPACK_IMPORTED_MODULE_1_d3__["hierarchy"](flatData, function (d) { return d.children; });
    };
    TreeChartComponent.prototype.drawCanvas = function (element, svgWidth, svgHeight) {
        return __WEBPACK_IMPORTED_MODULE_1_d3__["select"](element)
            .append('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight)
            .append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
    };
    TreeChartComponent.prototype.createTree = function (w, h) {
        return __WEBPACK_IMPORTED_MODULE_1_d3__["tree"]()
            .size([h, w])
            .separation(function (a, b) {
            return a.parent === b.parent ? 1 : 1.2;
        });
    };
    return TreeChartComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('chart'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], TreeChartComponent.prototype, "chartContainer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], TreeChartComponent.prototype, "data", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _b || Object)
], TreeChartComponent.prototype, "selectedNode", void 0);
TreeChartComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* Component */])({
        selector: 'app-tree-chart',
        styles: [__webpack_require__("../../../../../src/app/tree-chart/tree-chart.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ViewEncapsulation */].None,
        template: "\n  <div class=\"box\">\n    <div class=\"d3-chart\" #chart></div>\n  </div>\n"
    }),
    __metadata("design:paramtypes", [])
], TreeChartComponent);

var _a, _b;
//# sourceMappingURL=tree-chart.component.js.map

/***/ }),

/***/ "../../../../../src/app/types/company.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=company.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map