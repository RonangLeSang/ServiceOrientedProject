/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/main-back-end/src/main-back-end.controller.ts":
/*!************************************************************!*\
  !*** ./apps/main-back-end/src/main-back-end.controller.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MainBackEndController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const main_back_end_service_1 = __webpack_require__(/*! ./main-back-end.service */ "./apps/main-back-end/src/main-back-end.service.ts");
let MainBackEndController = class MainBackEndController {
    constructor(mainBackEndService) {
        this.mainBackEndService = mainBackEndService;
    }
    getHello() {
        return this.mainBackEndService.getHello();
    }
};
exports.MainBackEndController = MainBackEndController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], MainBackEndController.prototype, "getHello", null);
exports.MainBackEndController = MainBackEndController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof main_back_end_service_1.MainBackEndService !== "undefined" && main_back_end_service_1.MainBackEndService) === "function" ? _a : Object])
], MainBackEndController);


/***/ }),

/***/ "./apps/main-back-end/src/main-back-end.module.ts":
/*!********************************************************!*\
  !*** ./apps/main-back-end/src/main-back-end.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MainBackEndModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const main_back_end_controller_1 = __webpack_require__(/*! ./main-back-end.controller */ "./apps/main-back-end/src/main-back-end.controller.ts");
const main_back_end_service_1 = __webpack_require__(/*! ./main-back-end.service */ "./apps/main-back-end/src/main-back-end.service.ts");
let MainBackEndModule = class MainBackEndModule {
};
exports.MainBackEndModule = MainBackEndModule;
exports.MainBackEndModule = MainBackEndModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [main_back_end_controller_1.MainBackEndController],
        providers: [main_back_end_service_1.MainBackEndService],
    })
], MainBackEndModule);


/***/ }),

/***/ "./apps/main-back-end/src/main-back-end.service.ts":
/*!*********************************************************!*\
  !*** ./apps/main-back-end/src/main-back-end.service.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MainBackEndService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let MainBackEndService = class MainBackEndService {
    getHello() {
        return 'Hello World!';
    }
};
exports.MainBackEndService = MainBackEndService;
exports.MainBackEndService = MainBackEndService = __decorate([
    (0, common_1.Injectable)()
], MainBackEndService);


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!****************************************!*\
  !*** ./apps/main-back-end/src/main.ts ***!
  \****************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const main_back_end_module_1 = __webpack_require__(/*! ./main-back-end.module */ "./apps/main-back-end/src/main-back-end.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(main_back_end_module_1.MainBackEndModule);
    await app.listen(process.env.port ?? 3000);
}
bootstrap();

})();

/******/ })()
;