webpackJsonp([1,4],{

/***/ 132:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 132;


/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(146);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__channel_service__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(channelService) {
        this.channelService = channelService;
        this.channelList = [];
        this.filter = 'All';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.channelService.channelsChanged
            .subscribe(function (channels) {
            _this.channelList = channels;
        });
        this.channelService.initChannels();
        // this.channelList = this.channelService.getChannels();
    };
    AppComponent.prototype.updateFilter = function (filter) {
        this.filter = filter;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(207),
        styles: [__webpack_require__(201)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__channel_service__["a" /* ChannelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__channel_service__["a" /* ChannelService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 141:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__channel_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__channel_list_channel_list_component__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__channel_channel_component__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__filter_pipe__ = __webpack_require__(145);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_7__channel_list_channel_list_component__["a" /* ChannelListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__channel_channel_component__["a" /* ChannelComponent */],
            __WEBPACK_IMPORTED_MODULE_9__filter_pipe__["a" /* FilterPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_0__channel_service__["a" /* ChannelService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChannelListComponent = (function () {
    function ChannelListComponent() {
    }
    ChannelListComponent.prototype.ngOnInit = function () {
    };
    return ChannelListComponent;
}());
ChannelListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-channel-list',
        template: __webpack_require__(208),
        styles: [__webpack_require__(202)]
    }),
    __metadata("design:paramtypes", [])
], ChannelListComponent);

//# sourceMappingURL=channel-list.component.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__channel_model__ = __webpack_require__(85);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChannelComponent = (function () {
    function ChannelComponent() {
    }
    ChannelComponent.prototype.ngOnInit = function () {
    };
    return ChannelComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__channel_model__["a" /* Channel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__channel_model__["a" /* Channel */]) === "function" && _a || Object)
], ChannelComponent.prototype, "channel", void 0);
ChannelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-channel',
        template: __webpack_require__(209),
        styles: [__webpack_require__(203)]
    }),
    __metadata("design:paramtypes", [])
], ChannelComponent);

var _a;
//# sourceMappingURL=channel.component.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__channel_service__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(channelService) {
        this.channelService = channelService;
        this.invalidUser = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.addUser = function (usernameInput) {
        var _this = this;
        this.channelService.checkUser(usernameInput.value)
            .subscribe(function (result) {
            if (result) {
                _this.channelService.getChannel(usernameInput.value)
                    .subscribe(function (channel) {
                    if (channel) {
                        _this.channelService.addChannel(channel);
                        _this.invalidUser = false;
                        usernameInput.value = '';
                    }
                });
            }
            else {
                _this.invalidUser = true;
                usernameInput.value = '';
            }
        }, function (result) {
            console.log('something bad happened.');
        });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_3" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__(210),
        styles: [__webpack_require__(204)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__channel_service__["a" /* ChannelService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__channel_service__["a" /* ChannelService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, filterString, propName) {
        if (value.length === 0 || filterString === '' || filterString === 'All') {
            return value;
        }
        var resultArray = [];
        for (var _i = 0, value_1 = value; _i < value_1.length; _i++) {
            var item = value_1[_i];
            if (item[propName] === filterString) {
                resultArray.push(item);
            }
        }
        return resultArray;
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'filter'
    })
], FilterPipe);

//# sourceMappingURL=filter.pipe.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 201:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, ".nav-tabs li {\n    cursor: pointer;\n}\n.nav-tabs a {\n    color: white;\n}\n\n.nav-tabs a:hover {\n    color: black;\n}\n\n.nav-tabs li.active a {\n    color: black;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 202:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 203:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, "img {\n    width: 100px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, "#helpBlock {\n    color: #d9534f;\n}\nh1 {\n    color: white;\n}\n\n.lead {\n    color: white;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 207:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-xs-4\">\n      <app-dashboard></app-dashboard>\n    </div>\n    <div class=\"col-xs-1\"></div>\n    <div class=\"col-xs-7\">\n      <div class=\"row\">\n        <ul class=\"nav nav-tabs\">\n          <li role=\"presentation\" [class.active]=\"filter == 'All'\"><a (click)=\"updateFilter('All');\">All</a></li>\n          <li role=\"presentation\" [class.active]=\"filter == 'Online'\"><a (click)=\"updateFilter('Online');\">Online</a></li>\n          <li role=\"presentation\" [class.active]=\"filter == 'Offline'\"><a (click)=\"updateFilter('Offline');\">Offline</a></li>\n        </ul>\n        <!--<div class=\"dropdown\">\n          <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n            Filter\n            <span class=\"caret\"></span>\n          </button>\n          <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n            <li><a href=\"#\" (click)=\"updateFilter('All');\">All</a></li>\n            <li><a href=\"#\" (click)=\"updateFilter('Online');\">Online</a></li>\n            <li><a href=\"#\" (click)=\"updateFilter('Offline');\">Offline</a></li>\n          </ul>\n        </div>\n      </div>-->\n      <div class=\"row\">\n        <div class=\"list-group\">\n          <app-channel \n            *ngFor=\"let channel of channelList | filter:filter:'onlineStatus'\" \n            [channel]=\"channel\">\n          </app-channel>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 208:
/***/ (function(module, exports) {

module.exports = "<p>\n  channel-list works!\n</p>\n"

/***/ }),

/***/ 209:
/***/ (function(module, exports) {

module.exports = "<a [href]=\"channel.link\" class=\"list-group-item\" target=\"_blank\">\n  <div class=\"media\">\n    <div class=\"media-left\">\n      <a [href]=\"channel.link\" target=\"_blank\">\n        <img class=\"media-object\" [src]=\"channel.imagePath\" [alt]=\"'logo of' + channel.name\" *ngIf=\"channel.onlineStatus === 'Online'; else noImage\">\n        <ng-template #noImage>\n          <img class=\"media-object\" src=\"./assets/person-thumb.jpg\" alt=\"no logo available\">\n        </ng-template>\n      </a>\n    </div>\n    <div class=\"media-body\">\n      <a [href]=\"channel.link\" target=\"_blank\">\n        <h4 class=\"media-heading\">{{ channel.name }}</h4>\n      </a>\n      <h6 class=\"label label-success\" *ngIf=\"channel.onlineStatus === 'Online'\">Online</h6>\n      <h6 class=\"label label-default\" *ngIf=\"channel.onlineStatus === 'Offline'\">Offline</h6>\n      <p *ngIf=\"channel.onlineStatus === 'Online'\">{{ channel.description }}</p>\n    </div>\n  </div>\n</a>"

/***/ }),

/***/ 210:
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <h1>TwitchTv Directory</h1>\n    <p class=\"lead\">A FCC Assignment</p>\n    <hr>\n    <form  class=\"form-inline\">\n      <input type=\"text\" placeholder=\"Username\" id=\"username\" class=\"form-control\" #usernameInput>\n      <button \n        class=\"btn btn-primary\" \n        (click)=\"addUser(usernameInput)\">Add User</button>\n      <span id=\"helpBlock\" class=\"help-block\" *ngIf=\"invalidUser\">That user name does not exist.  Try again.</span>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 487:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(133);


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__channel_channel_model__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ChannelService = (function () {
    function ChannelService(http) {
        this.http = http;
        this.channels = [];
        this.channelNames = [
            'ESL_SC2',
            'OgamingSC2',
            'cretetion',
            'freecodecamp',
            'storbeck',
            'habathcx',
            'RobotCaleb',
            'noobs2ninjas',
            'xqcow'
        ];
        this.channelsChanged = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
    }
    ChannelService.prototype.initChannels = function () {
        var _this = this;
        for (var i = 0, n = this.channelNames.length; i < n; i++) {
            this.getChannel(this.channelNames[i])
                .subscribe(function (channel) {
                _this.addChannel(channel);
            }, function (error) { return console.log(error); });
        }
    };
    ChannelService.prototype.getChannel = function (name) {
        return this.http.get('https://wind-bow.glitch.me/twitch-api/streams/' + name)
            .map(function (response) {
            var data = response.json();
            if (data) {
                var channel = new __WEBPACK_IMPORTED_MODULE_0__channel_channel_model__["a" /* Channel */](name, '', 'Offline', '', 'https://www.twitch.tv/' + name);
                if (data.stream) {
                    channel.description = data.stream.channel.status;
                    channel.imagePath = data.stream.preview.small;
                    channel.onlineStatus = 'Online';
                }
                return channel;
            }
            else {
                return null;
            }
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw('Something went wrong');
        });
    };
    ChannelService.prototype.getChannels = function () {
        return this.channels.slice();
    };
    ChannelService.prototype.addChannel = function (channel) {
        var index = this.channels.push(channel);
        this.channelsChanged.next(this.channels.slice());
        return index;
    };
    ChannelService.prototype.checkUser = function (name) {
        return this.http.get('https://wind-bow.glitch.me/twitch-api/users/' + name)
            .map(function (response) {
            var data = response.json();
            if (data.error) {
                return false;
            }
            else {
                return true;
            }
        })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(error); });
    };
    return ChannelService;
}());
ChannelService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ChannelService);

var _a;
//# sourceMappingURL=channel.service.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Channel; });
var Channel = (function () {
    function Channel(name, imagePath, onlineStatus, description, link) {
        this.name = name;
        this.imagePath = imagePath;
        this.onlineStatus = onlineStatus;
        this.description = description;
        this.link = link;
    }
    return Channel;
}());

//# sourceMappingURL=channel.model.js.map

/***/ })

},[487]);
//# sourceMappingURL=main.bundle.js.map