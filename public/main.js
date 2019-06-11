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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<nav>\n  <a routerLink=\"/quiz\" routerLinkActive=\"active\">Quiz</a>\n  <a routerLink=\"/scores\" routerLinkActive=\"active\">Scores</a>\n</nav>\n\n <router-outlet></router-outlet>\n\n"

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
        this.title = 'trivia';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quiz/quiz.component */ "./src/app/quiz/quiz.component.ts");
/* harmony import */ var _results_results_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./results/results.component */ "./src/app/results/results.component.ts");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quiz.service */ "./src/app/quiz.service.ts");
/* harmony import */ var _scores_scores_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scores/scores.component */ "./src/app/scores/scores.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");











var appRoutes = [
    { path: "", redirectTo: "/quiz", pathMatch: "full" },
    { path: "quiz", component: _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_6__["QuizComponent"] },
    { path: "results", component: _results_results_component__WEBPACK_IMPORTED_MODULE_7__["ResultsComponent"] },
    { path: "scores", component: _scores_scores_component__WEBPACK_IMPORTED_MODULE_9__["ScoresComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _quiz_quiz_component__WEBPACK_IMPORTED_MODULE_6__["QuizComponent"], _results_results_component__WEBPACK_IMPORTED_MODULE_7__["ResultsComponent"],
                _scores_scores_component__WEBPACK_IMPORTED_MODULE_9__["ScoresComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [_quiz_service__WEBPACK_IMPORTED_MODULE_8__["QuizService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/quiz.service.ts":
/*!*********************************!*\
  !*** ./src/app/quiz.service.ts ***!
  \*********************************/
/*! exports provided: QuizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizService", function() { return QuizService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var QuizService = /** @class */ (function () {
    function QuizService(http) {
        this.http = http;
    }
    QuizService.prototype.getQuestions = function () {
        return this.http.get("/api/questions", { responseType: "json" });
    };
    QuizService.prototype.setUserQuestions = function (userquestions) {
        this.questions = userquestions;
    };
    QuizService.prototype.getUserQuestions = function () {
        return this.questions;
    };
    QuizService.prototype.getScores = function () {
        return this.http.get("/api/scores", { responseType: "json" });
    };
    //trying to figure out how to get the username/score of the current user, so I can make that available in the service
    QuizService.prototype.getCurrentUserScore = function () {
        return this.http.get("/api/scores", { responseType: "json" });
    };
    QuizService.prototype.submitScore = function (userscore) {
        return this.http
            .post("/api/scores", userscore, { responseType: "json" });
    };
    QuizService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], QuizService);
    return QuizService;
}());



/***/ }),

/***/ "./src/app/quiz/quiz.component.css":
/*!*****************************************!*\
  !*** ./src/app/quiz/quiz.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wrapper {\n  display: flex;\n  justify-content: center;\n}\n\n.grid {\n  display: grid;\n  max-width: 800px;\n  grid-template-columns: 1fr;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtFQUNoQiwwQkFBMEI7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9xdWl6L3F1aXouY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG59Il19 */"

/***/ }),

/***/ "./src/app/quiz/quiz.component.html":
/*!******************************************!*\
  !*** ./src/app/quiz/quiz.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n<div class=\"grid\">\n<h2>quiz</h2>\n<form  \n#startForm=\"ngForm\" action=\"\">\n  <label for=\"\">Enter Your Name:</label>\n  <input type=\"text\" name=\"name\" ngModel/> <span>{{ name }}</span>\n  <button (click)=\"startQuiz(startForm.form)\">Start Quiz</button>\n</form>\n\n<form \n *ngIf=\"quizStarted\"\n#quizForm=\"ngForm\" (ngSubmit)=\"submitQuiz()\">\n  <div *ngFor=\"let question of questions; index as i\">\n    <p>{{ question.question_name }}</p>\n    <label for=\"\">{{ question.choice_1 }}</label>\n    <input\n      type=\"radio\"\n      name=\"{{ i }}\"\n      (change)=\"checkCorrect(question.choice_1, question.answer)\"\n      value=\"{{ question.choice_1 }}\"\n    />\n    <label for=\"\">{{ question.choice_2 }}</label>\n    <input\n      type=\"radio\"\n      name=\"{{ i }}\"\n      (change)=\"checkCorrect(question.choice_2, question.answer)\"\n      value=\"{{ question.choice_2 }}\"\n    />\n    <label for=\"\">{{ question.choice_3 }}</label>\n    <input\n      type=\"radio\"\n      name=\"{{ i }}\"\n      (change)=\"checkCorrect(question.choice_3, question.answer)\"\n      value=\"{{ question.choice_3 }}\"\n    />\n    <label for=\"\">{{ question.choice_4 }}</label>\n    <input\n      type=\"radio\"\n      name=\"{{ i }}\"\n      (change)=\"checkCorrect(question.choice_4, question.answer)\"\n      value=\"{{ question.choice_4 }}\"\n    />\n  </div>\n\n  <button>Submit your quiz</button>\n</form>\n</div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/quiz/quiz.component.ts":
/*!****************************************!*\
  !*** ./src/app/quiz/quiz.component.ts ***!
  \****************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quiz.service */ "./src/app/quiz.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var QuizComponent = /** @class */ (function () {
    function QuizComponent(quizService, router) {
        var _this = this;
        this.quizService = quizService;
        this.router = router;
        this.answerTally = 0;
        this.quizService.getQuestions().subscribe(function (response) {
            _this.questions = response;
        });
    }
    QuizComponent.prototype.ngOnInit = function () { };
    QuizComponent.prototype.startQuiz = function (form) {
        this.username = form.value.name;
        this.quizStarted = !this.quizStarted;
    };
    QuizComponent.prototype.submitQuiz = function () {
        var _this = this;
        this.quizService
            .submitScore({
            username: this.username,
            score: this.answerTally
        })
            .subscribe(function (response) {
            _this.userscore = response;
            _this.router.navigate(["results"]);
        });
        this.quizService.setUserQuestions(this.questions);
    };
    QuizComponent.prototype.checkCorrect = function (choice, answer) {
        if (choice === answer) {
            this.answerTally++;
            //mitch sets it is
        }
    };
    QuizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "quiz",
            template: __webpack_require__(/*! ./quiz.component.html */ "./src/app/quiz/quiz.component.html"),
            providers: [_quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"]],
            styles: [__webpack_require__(/*! ./quiz.component.css */ "./src/app/quiz/quiz.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "./src/app/results/results.component.css":
/*!***********************************************!*\
  !*** ./src/app/results/results.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc3VsdHMvcmVzdWx0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/results/results.component.html":
/*!************************************************!*\
  !*** ./src/app/results/results.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1>Results</h1>\n\n<div>\n<h2>Your Score</h2>\n\n\n</div>\n\n<section>\n<h2>Correct Answers</h2>\n\n<div *ngFor=\"let question of questions\">\n<p> {{  question.question_name }} </p>\n<p> {{ question.choice_1 }} </p>\n<p> {{ question.choice_2 }} </p>\n<p> {{ question.choice_3 }} </p>\n<p> {{ question.choice_4 }} </p>\n<p>CORRECT ANSWER: {{ question.answer }} </p>\n\n</div>\n\n</section>\n\n<a routerLink=\"/scores\" routerLinkActive=\"active\">Compare Scores</a>"

/***/ }),

/***/ "./src/app/results/results.component.ts":
/*!**********************************************!*\
  !*** ./src/app/results/results.component.ts ***!
  \**********************************************/
/*! exports provided: ResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsComponent", function() { return ResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quiz.service */ "./src/app/quiz.service.ts");



var ResultsComponent = /** @class */ (function () {
    function ResultsComponent(quizService) {
        // this.quizService.getQuestions().subscribe(response => {
        //   this.questions = response;
        // });
        var _this = this;
        this.quizService = quizService;
        this.quizService.getCurrentUserScore().subscribe(function (response) {
            _this.currentuser = response;
        });
    }
    ResultsComponent.prototype.ngOnInit = function () {
        this.questions = this.quizService.getUserQuestions();
        console.log(this.questions);
    };
    ResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-results',
            template: __webpack_require__(/*! ./results.component.html */ "./src/app/results/results.component.html"),
            styles: [__webpack_require__(/*! ./results.component.css */ "./src/app/results/results.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"]])
    ], ResultsComponent);
    return ResultsComponent;
}());



/***/ }),

/***/ "./src/app/scores/scores.component.css":
/*!*********************************************!*\
  !*** ./src/app/scores/scores.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Njb3Jlcy9zY29yZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/scores/scores.component.html":
/*!**********************************************!*\
  !*** ./src/app/scores/scores.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Scores</h1>\n\n<div *ngFor=\"let score of scores\">\n\n  <p> {{ score.username }} </p>\n  <p> {{ score.score }} </p>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/scores/scores.component.ts":
/*!********************************************!*\
  !*** ./src/app/scores/scores.component.ts ***!
  \********************************************/
/*! exports provided: ScoresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoresComponent", function() { return ScoresComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quiz_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../quiz.service */ "./src/app/quiz.service.ts");



var ScoresComponent = /** @class */ (function () {
    function ScoresComponent(quizService) {
        var _this = this;
        this.quizService = quizService;
        this.quizService.getScores().subscribe(function (response) {
            _this.scores = response;
        });
    }
    ScoresComponent.prototype.ngOnInit = function () {
    };
    ScoresComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scores',
            template: __webpack_require__(/*! ./scores.component.html */ "./src/app/scores/scores.component.html"),
            styles: [__webpack_require__(/*! ./scores.component.css */ "./src/app/scores/scores.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_quiz_service__WEBPACK_IMPORTED_MODULE_2__["QuizService"]])
    ], ScoresComponent);
    return ScoresComponent;
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
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/home/Grandcircus/Projects/trivia/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map