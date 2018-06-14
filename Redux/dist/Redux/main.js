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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/actions/store.ts":
/*!**********************************!*\
  !*** ./src/app/actions/store.ts ***!
  \**********************************/
/*! exports provided: ActionTypes, addTodo, removeTodo, toggleTodo, setCurrentFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionTypes", function() { return ActionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTodo", function() { return addTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTodo", function() { return removeTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleTodo", function() { return toggleTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentFilter", function() { return setCurrentFilter; });
//import { Action } from "rxjs/internal/scheduler/Action";
//import { TodoListComponent } from "../todo-list.component";
//ActionTypes
var ActionTypes = {
    ADD_TODO: 'ADD_TODO',
    TOGGLE_TODO: 'TOGGLE_TODO',
    REMOVE_TODO: 'REMOVE_TODO',
    SET_CURRENT_FILTER: 'SET_CURRENT_FILTER',
};
//Action Creators
var addTodo = function (text) {
    return {
        type: ActionTypes.ADD_TODO,
        text: text
    };
};
var removeTodo = function (id) {
    return {
        type: ActionTypes.REMOVE_TODO,
        id: id
    };
};
var toggleTodo = function (id) {
    return {
        type: ActionTypes.TOGGLE_TODO,
        id: id
    };
};
var setCurrentFilter = function (filter) {
    return {
        type: ActionTypes.SET_CURRENT_FILTER,
        filter: filter
    };
};


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Todo List</h1>\n<div>\n  <input #todo>\n  <button (click)=\"addTodo(todo.value);todo.value = '';\">Add todo</button>\n</div>\n<todo-list></todo-list>\n<filter-list></filter-list>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/constants */ "./src/app/constants/constants.ts");
/* harmony import */ var _actions_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions/store */ "./src/app/actions/store.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var AppComponent = /** @class */ (function () {
    function AppComponent(store) {
        this.store = store;
    }
    AppComponent.prototype.addTodo = function (value) {
        this.store.dispatch(Object(_actions_store__WEBPACK_IMPORTED_MODULE_2__["addTodo"])(value));
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_constants_constants__WEBPACK_IMPORTED_MODULE_1__["APP_STORE"])),
        __metadata("design:paramtypes", [Object])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/constants */ "./src/app/constants/constants.ts");
/* harmony import */ var _todo_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-list.component */ "./src/app/todo-list.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _reducers_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reducers/store */ "./src/app/reducers/store.ts");
/* harmony import */ var _filter_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filter-list.component */ "./src/app/filter-list.component.ts");
/* harmony import */ var _visible_todos_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./visible-todos.pipe */ "./src/app/visible-todos.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










//add enhancer for dev tools
var enhancer = window['devToolsExtension'] ? window['devToolsExtension']()(redux__WEBPACK_IMPORTED_MODULE_3__["createStore"]) : redux__WEBPACK_IMPORTED_MODULE_3__["createStore"];
var appStore = enhancer(_reducers_store__WEBPACK_IMPORTED_MODULE_7__["default"]);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _todo_list_component__WEBPACK_IMPORTED_MODULE_5__["TodoListComponent"], _filter_list_component__WEBPACK_IMPORTED_MODULE_8__["FilterListComponent"], _visible_todos_pipe__WEBPACK_IMPORTED_MODULE_9__["VisibleTodosPipe"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            providers: [
                { provide: _constants_constants__WEBPACK_IMPORTED_MODULE_4__["APP_STORE"], useValue: appStore }
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/constants/constants.ts":
/*!****************************************!*\
  !*** ./src/app/constants/constants.ts ***!
  \****************************************/
/*! exports provided: APP_STORE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_STORE", function() { return APP_STORE; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var APP_STORE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('AppStore');


/***/ }),

/***/ "./src/app/filter-list.component.ts":
/*!******************************************!*\
  !*** ./src/app/filter-list.component.ts ***!
  \******************************************/
/*! exports provided: FilterListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterListComponent", function() { return FilterListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/constants */ "./src/app/constants/constants.ts");
/* harmony import */ var _actions_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions/store */ "./src/app/actions/store.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var FilterListComponent = /** @class */ (function () {
    function FilterListComponent(store) {
        var _this = this;
        this.store = store;
        this.filters = [{ display: 'All', value: 'SHOW_ALL', active: false }, { display: 'Active', value: 'SHOW_ACTIVE', active: false }, { display: 'Completed', value: 'SHOW_COMPLETED', active: false }];
        //subscribe
        this.unsubscribe = this.store.subscribe(function () {
            return _this.activateFilter(_this.store.getState().currentFilter);
        });
    }
    FilterListComponent.prototype.ngOnInit = function () {
        //set initial state
        this.activateFilter('SHOW_ALL');
    };
    FilterListComponent.prototype.ngOnDestroy = function () {
        //remove change listener
        this.unsubscribe();
    };
    // Helper methods
    FilterListComponent.prototype.applyFilter = function (filter) {
        this.store.dispatch(Object(_actions_store__WEBPACK_IMPORTED_MODULE_2__["setCurrentFilter"])(filter.value));
    };
    FilterListComponent.prototype.activateFilter = function (selectedFilter) {
        this.filters.forEach(function (filter) { return filter.active = filter.value === selectedFilter; });
    };
    FilterListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'filter-list',
            template: "<p>Show: \n      <a *ngFor=\"let filter of filters\" href=\"#\"\n         (click)=\"applyFilter(filter)\"\n         [ngClass]=\"{'active': filter.active, 'inactive': !filter.active}\">\n         {{filter.display}}\n      </a>\n    </p>",
            styles: ["\n    .active { text-decoration: default; }\n    .inactive {  text-decoration: none; }\n  "]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_constants_constants__WEBPACK_IMPORTED_MODULE_1__["APP_STORE"])),
        __metadata("design:paramtypes", [Object])
    ], FilterListComponent);
    return FilterListComponent;
}());



/***/ }),

/***/ "./src/app/reducers/store.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/store.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/store */ "./src/app/actions/store.ts");

var initialState = {
    todos: [],
    currentFilter: 'SHOW_ALL'
};
var rootReducer = function (state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_store__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].ADD_TODO:
            var nextId = getNextId(state.todos);
            return {
                todos: state.todos.concat({
                    id: nextId,
                    text: action.text,
                    completed: false
                }),
                currentFilter: state.currentFilter
            };
        case _actions_store__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].REMOVE_TODO:
            return {
                todos: state.todos.filter(function (todo) { return todo.id != action.id; }),
                currentFilter: state.currentFilter
            };
        case _actions_store__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].TOGGLE_TODO:
            return {
                todos: toggleTodo(state.todos, action.id),
                currentFilter: state.currentFilter
            };
        case _actions_store__WEBPACK_IMPORTED_MODULE_0__["ActionTypes"].SET_CURRENT_FILTER:
        default:
            return state;
    }
};
function toggleTodo(todos, id) {
    //map returns new array
    return todos.map(function (todo) {
        //skip other items
        if (todo.id !== id)
            return todo;
        //toggle
        return {
            id: todo.id,
            text: todo.text,
            completed: !todo.completed
        };
    });
}
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);
//helper functions
function getNextId(todos) {
    var maxId = todos.reduce(function (prev, todo) { return prev > todo.id ? prev : todo.id; }, 0);
    return maxId + 1;
}


/***/ }),

/***/ "./src/app/todo-list.component.ts":
/*!****************************************!*\
  !*** ./src/app/todo-list.component.ts ***!
  \****************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/constants */ "./src/app/constants/constants.ts");
/* harmony import */ var _actions_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions/store */ "./src/app/actions/store.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var TodoListComponent = /** @class */ (function () {
    function TodoListComponent(store) {
        var _this = this;
        this.store = store;
        this.unsubscribe = this.store.subscribe(function () {
            var state = _this.store.getState();
            _this.currentFilter = state.currentFilter;
            _this.todos = state.todos;
        });
    }
    TodoListComponent.prototype.onTodoClick = function (id) {
        this.store.dispatch(Object(_actions_store__WEBPACK_IMPORTED_MODULE_2__["toggleTodo"])(id));
    };
    TodoListComponent.prototype.removeTodo = function (id) {
        this.store.dispatch(Object(_actions_store__WEBPACK_IMPORTED_MODULE_2__["removeTodo"])(id));
    };
    TodoListComponent.prototype.ngOnDestroy = function () {
        //remove listener
        this.unsubscribe();
    };
    TodoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'todo-list',
            template: "\n    <ul>\n      <li *ngFor=\"let todo of todos | visibleTodos:currentFilter\"\n          (click)=\"onTodoClick(todo.id)\"\n          [class.strike]=\"todo.completed\">\n        {{todo.text}}\n        <button (click)=\"removeTodo(todo.id)\">delete</button>\n      </li> \n    </ul>\n  ",
            styles: [
                ".strike {text-decoration: line-through}"
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_constants_constants__WEBPACK_IMPORTED_MODULE_1__["APP_STORE"])),
        __metadata("design:paramtypes", [Object])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "./src/app/visible-todos.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/visible-todos.pipe.ts ***!
  \***************************************/
/*! exports provided: VisibleTodosPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisibleTodosPipe", function() { return VisibleTodosPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var VisibleTodosPipe = /** @class */ (function () {
    function VisibleTodosPipe() {
    }
    VisibleTodosPipe.prototype.transform = function (todos, filter) {
        switch (filter) {
            case 'SHOW_ACTIVE':
                return todos.filter(function (t) { return !t.completed; });
            case 'SHOW_COMPLETED':
                return todos.filter(function (t) { return t.completed; });
            case 'SHOW_ALL':
            default:
                return todos;
        }
    };
    VisibleTodosPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'visibleTodos'
        })
    ], VisibleTodosPipe);
    return VisibleTodosPipe;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Git\ExploringAngular\Redux\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map