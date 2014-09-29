define("app/Flow-Core", ["amber/boot", "amber_core/Web", "app/MiniMapless", "amber_core/Kernel-Objects"], function($boot){
var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;
smalltalk.addPackage('Flow-Core');
smalltalk.packages["Flow-Core"].transport = {"type":"amd","amdNamespace":"app"};

smalltalk.addClass('Controller', globals.Widget, ['controllers', 'model', 'view', 'parent', 'parentElement'], 'Flow-Core');
globals.Controller.comment="## This is an abstraction. \x0a\x0a*Concrete subclasses* are controllers with some degree of specialization. Here we concentrate in the commons and foundatinos for all of them.\x0a\x0aA typical controller might have:\x0a\x0a1. a model\x0a2. some (sub)controllers\x0a3. minimal common behavior\x0a";
smalltalk.addMethod(
smalltalk.method({
selector: "controllers",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@controllers"];
if(($receiver = $2) == null || $receiver.isNil){
$1=self._initializeControllers();
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"controllers",{},globals.Controller)})},
args: [],
source: "controllers\x0a\x09\x0a\x09^ controllers ifNil:[ self initializeControllers ]",
messageSends: ["ifNil:", "initializeControllers"],
referencedClasses: []
}),
globals.Controller);

smalltalk.addMethod(
smalltalk.method({
selector: "controllersAt:",
protocol: 'accessing',
fn: function (aKey){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._controllers())._at_ifAbsent_(aKey,(function(){
return smalltalk.withContext(function($ctx2) {
return self._error_("Controller not found: ".__comma(_st(aKey)._asString()));
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"controllersAt:",{aKey:aKey},globals.Controller)})},
args: ["aKey"],
source: "controllersAt: aKey \x0a\x0a\x09^ self controllers \x0a\x09\x09at: aKey \x0a\x09\x09ifAbsent:[ self error: 'Controller not found: ', aKey asString ]",
messageSends: ["at:ifAbsent:", "controllers", "error:", ",", "asString"],
referencedClasses: []
}),
globals.Controller);

smalltalk.addMethod(
smalltalk.method({
selector: "controllersAt:ifAbsent:",
protocol: 'accessing',
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._controllers())._at_ifAbsent_(aKey,aBlock);
return $1;
}, function($ctx1) {$ctx1.fill(self,"controllersAt:ifAbsent:",{aKey:aKey,aBlock:aBlock},globals.Controller)})},
args: ["aKey", "aBlock"],
source: "controllersAt: aKey ifAbsent: aBlock\x0a\x0a\x09^ self controllers \x0a\x09\x09at: aKey \x0a\x09\x09ifAbsent: aBlock",
messageSends: ["at:ifAbsent:", "controllers"],
referencedClasses: []
}),
globals.Controller);

smalltalk.addMethod(
smalltalk.method({
selector: "controllersAt:ifAbsentPut:",
protocol: 'accessing',
fn: function (aKey,aBlock){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._controllers())._at_ifAbsent_(aKey,(function(){
return smalltalk.withContext(function($ctx2) {
return self._controllersAt_put_(aKey,_st(aBlock)._value());
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"controllersAt:ifAbsentPut:",{aKey:aKey,aBlock:aBlock},globals.Controller)})},
args: ["aKey", "aBlock"],
source: "controllersAt: aKey ifAbsentPut: aBlock\x0a\x0a\x09^ self controllers \x0a\x09\x09at: aKey \x0a\x09\x09ifAbsent:[ self controllersAt: aKey put: aBlock value ] ",
messageSends: ["at:ifAbsent:", "controllers", "controllersAt:put:", "value"],
referencedClasses: []
}),
globals.Controller);

smalltalk.addMethod(
smalltalk.method({
selector: "controllersAt:put:",
protocol: 'accessing',
fn: function (aKey,aController){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._controllers())._at_put_(aKey,aController);
return $1;
}, function($ctx1) {$ctx1.fill(self,"controllersAt:put:",{aKey:aKey,aController:aController},globals.Controller)})},
args: ["aKey", "aController"],
source: "controllersAt: aKey put: aController\x0a\x0a\x09^ self controllers at: aKey put: aController",
messageSends: ["at:put:", "controllers"],
referencedClasses: []
}),
globals.Controller);

smalltalk.addMethod(
smalltalk.method({
selector: "hasView",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self["@view"])._notNil();
return $1;
}, function($ctx1) {$ctx1.fill(self,"hasView",{},globals.Controller)})},
args: [],
source: "hasView\x0a\x09\x22Answers true if this controller has a view\x22\x0a\x09\x0a\x09^ view notNil\x0a\x09\x0a\x09",
messageSends: ["notNil"],
referencedClasses: []
}),
globals.Controller);

smalltalk.addMethod(
smalltalk.method({
selector: "initializeControllers",
protocol: 'initialization',
fn: function (){
var self=this;
function $Dictionary(){return globals.Dictionary||(typeof Dictionary=="undefined"?nil:Dictionary)}
return smalltalk.withContext(function($ctx1) { 
var $1;
self["@controllers"]=_st($Dictionary())._new();
$1=self["@controllers"];
return $1;
}, function($ctx1) {$ctx1.fill(self,"initializeControllers",{},globals.Controller)})},
args: [],
source: "initializeControllers\x0a\x09\x0a\x09^ controllers := Dictionary new",
messageSends: ["new"],
referencedClasses: ["Dictionary"]
}),
globals.Controller);

smalltalk.addMethod(
smalltalk.method({
selector: "isRendered",
protocol: 'testing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(_st(self._view())._children())._length()).__gt((0));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isRendered",{},globals.Controller)})},
args: [],
source: "isRendered\x0a\x09\x22Answers true if this controller is rendered.\x22\x0a\x09\x0a\x09^ self view children length > 0\x0a\x09\x0a\x09",
messageSends: [">", "length", "children", "view"],
referencedClasses: []
}),
globals.Controller);

smalltalk.addMethod(
smalltalk.method({
selector: "model",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@model"];
return $1;
},
args: [],
source: "model\x0a\x09\x0a\x09^ model",
messageSends: [],
referencedClasses: []
}),
globals.Controller);

smalltalk.addMethod(
smalltalk.method({
selector: "model:",
protocol: 'accessing',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._onBeforeModel();
self["@model"]=aModel;
self._onAfterModel();
return self}, function($ctx1) {$ctx1.fill(self,"model:",{aModel:aModel},globals.Controller)})},
args: ["aModel"],
source: "model: aModel\x0a\x0a\x09self onBeforeModel.\x0a\x09\x0a\x09model := aModel.\x0a\x09\x0a\x09self onAfterModel",
messageSends: ["onBeforeModel", "onAfterModel"],
referencedClasses: []
}),
globals.Controller);

smalltalk.addMethod(
smalltalk.method({
selector: "onAfterModel",
protocol: 'reactions',
fn: function (){
var self=this;
return self},
args: [],
source: "onAfterModel\x0a\x09\x22The model of this controller just have been set.\x22\x0a",
messageSends: [],
referencedClasses: []
}),
globals.Controller);

smalltalk.addMethod(
smalltalk.method({
selector: "onBeforeModel",
protocol: 'reactions',
fn: function (){
var self=this;
return self},
args: [],
source: "onBeforeModel\x0a\x09\x22The model of this controller is about to be set.\x22",
messageSends: [],
referencedClasses: []
}),
globals.Controller);

smalltalk.addMethod(
smalltalk.method({
selector: "parent",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@parent"];
return $1;
},
args: [],
source: "parent\x0a\x09\x22Answers the parent controller of this controller.\x22\x0a\x0a\x09^ parent ",
messageSends: [],
referencedClasses: []
}),
globals.Controller);

smalltalk.addMethod(
smalltalk.method({
selector: "parent:",
protocol: 'accessing',
fn: function (aParentControllerOrNil){
var self=this;
self["@parent"]=aParentControllerOrNil;
return self},
args: ["aParentControllerOrNil"],
source: "parent: aParentControllerOrNil\x0a\x0a\x09parent := aParentControllerOrNil",
messageSends: [],
referencedClasses: []
}),
globals.Controller);

smalltalk.addMethod(
smalltalk.method({
selector: "parentElement",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@parentElement"];
return $1;
},
args: [],
source: "parentElement\x0a\x0a\x09^ parentElement",
messageSends: [],
referencedClasses: []
}),
globals.Controller);

smalltalk.addMethod(
smalltalk.method({
selector: "parentElement:",
protocol: 'accessing',
fn: function (aHtmlElement){
var self=this;
self["@parentElement"]=aHtmlElement;
return self},
args: ["aHtmlElement"],
source: "parentElement: aHtmlElement\x0a\x0a\x09parentElement := aHtmlElement",
messageSends: [],
referencedClasses: []
}),
globals.Controller);

smalltalk.addMethod(
smalltalk.method({
selector: "remove",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._view())._remove();
return self}, function($ctx1) {$ctx1.fill(self,"remove",{},globals.Controller)})},
args: [],
source: "remove\x0a\x09\x0a\x09self view remove.\x0a\x09",
messageSends: ["remove", "view"],
referencedClasses: []
}),
globals.Controller);

smalltalk.addMethod(
smalltalk.method({
selector: "removeControllerAt:",
protocol: 'actions',
fn: function (aKey){
var self=this;
var controller;
return smalltalk.withContext(function($ctx1) { 
var $1,$receiver;
controller=self._controllersAt_ifAbsent_(aKey,(function(){
return nil;
}));
$1=controller;
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
_st(controller)._remove();
};
_st(self._controllers())._removeKey_ifAbsent_(aKey,(function(){
return nil;
}));
return self}, function($ctx1) {$ctx1.fill(self,"removeControllerAt:",{aKey:aKey,controller:controller},globals.Controller)})},
args: ["aKey"],
source: "removeControllerAt: aKey \x0a\x0a\x09| controller |\x0a\x09\x0a\x09controller := self controllersAt: aKey ifAbsent:[ nil ].\x0a\x09\x0a\x09controller ifNotNil:[\x0a\x09\x09controller remove ].\x0a\x09\x09\x0a\x09self controllers removeKey: aKey ifAbsent: [ nil ]",
messageSends: ["controllersAt:ifAbsent:", "ifNotNil:", "remove", "removeKey:ifAbsent:", "controllers"],
referencedClasses: []
}),
globals.Controller);

smalltalk.addMethod(
smalltalk.method({
selector: "render",
protocol: 'actions',
fn: function (){
var self=this;
function $HTMLCanvas(){return globals.HTMLCanvas||(typeof HTMLCanvas=="undefined"?nil:HTMLCanvas)}
return smalltalk.withContext(function($ctx1) { 
var $1,$receiver;
$1=self._view();
$ctx1.sendIdx["view"]=1;
if(($receiver = $1) == null || $receiver.isNil){
$1;
} else {
_st(self._view())._empty();
};
self._renderOn_(_st($HTMLCanvas())._onJQuery_(self._parentElement()));
return self}, function($ctx1) {$ctx1.fill(self,"render",{},globals.Controller)})},
args: [],
source: "render\x0a\x09\x0a\x09self view ifNotNil:[\x0a\x09\x09self view empty ].\x0a\x09\x0a\x09self renderOn: (HTMLCanvas onJQuery: self parentElement)",
messageSends: ["ifNotNil:", "view", "empty", "renderOn:", "onJQuery:", "parentElement"],
referencedClasses: ["HTMLCanvas"]
}),
globals.Controller);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'actions',
fn: function (html){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self["@view"]=_st(_st(html)._h1_(_st(self._class())._name()))._asJQuery();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},globals.Controller)})},
args: ["html"],
source: "renderOn: html\x0a\x09\x22This is a silly default only useful to dev because provides quick feedback ans sets the view.\x0a\x09Subclasses do interesting thigns intead\x22\x0a\x09\x0a\x09view := (html h1: self class name) asJQuery",
messageSends: ["asJQuery", "h1:", "name", "class"],
referencedClasses: []
}),
globals.Controller);

smalltalk.addMethod(
smalltalk.method({
selector: "view",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@view"];
return $1;
},
args: [],
source: "view\x0a\x09\x22Answers the DOM element who is the root of this controller's view\x22\x0a\x09^ view ",
messageSends: [],
referencedClasses: []
}),
globals.Controller);

smalltalk.addMethod(
smalltalk.method({
selector: "view:",
protocol: 'accessing',
fn: function (aHtmlElement){
var self=this;
self["@view"]=aHtmlElement;
return self},
args: ["aHtmlElement"],
source: "view: aHtmlElement\x0a\x0a\x09view := aHtmlElement",
messageSends: [],
referencedClasses: []
}),
globals.Controller);


smalltalk.addMethod(
smalltalk.method({
selector: "for:",
protocol: 'actions',
fn: function (aModel){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._for_on_appendingTo_(aModel,nil,nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"for:",{aModel:aModel},globals.Controller.klass)})},
args: ["aModel"],
source: "for: aModel \x0a\x09\x22Answers a new instance of this controller dedicated to aModel,\x0a\x09with no parent and meant to be appended to the default html element,\x0a\x09expected to be <div id=#content></div>.\x22\x0a\x09\x0a\x09^ self for: aModel on: nil appendingTo: nil",
messageSends: ["for:on:appendingTo:"],
referencedClasses: []
}),
globals.Controller.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "for:on:",
protocol: 'actions',
fn: function (aModel,aParentControllerOrNil){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self._for_on_appendingTo_(aModel,aParentControllerOrNil,nil);
return $1;
}, function($ctx1) {$ctx1.fill(self,"for:on:",{aModel:aModel,aParentControllerOrNil:aParentControllerOrNil},globals.Controller.klass)})},
args: ["aModel", "aParentControllerOrNil"],
source: "for: aModel on: aParentControllerOrNil\x0a\x09\x22Answers a new instance of this controller dedicated to aModel,\x0a\x09child of aParentControllerOrNil and meant to be appended to \x0a\x09the default html element, expected to be <div id=#content></div>.\x22\x0a\x09\x0a\x09^ self for: aModel on: aParentControllerOrNil appendingTo: nil",
messageSends: ["for:on:appendingTo:"],
referencedClasses: []
}),
globals.Controller.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "for:on:appendingTo:",
protocol: 'actions',
fn: function (aModel,aParentControllerOrNil,aHtmlElement){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._model_(aModel);
_st($2)._parent_(aParentControllerOrNil);
_st($2)._parentElement_(aHtmlElement);
$3=_st($2)._yourself();
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"for:on:appendingTo:",{aModel:aModel,aParentControllerOrNil:aParentControllerOrNil,aHtmlElement:aHtmlElement},globals.Controller.klass)})},
args: ["aModel", "aParentControllerOrNil", "aHtmlElement"],
source: "for: aModel on: aParentControllerOrNil appendingTo: aHtmlElement\x0a\x09\x22Answers a new instance of this controller dedicated to aModel,\x0a\x09child of aParentControllerOrNil and meant to be appended to aHtmlElement.\x22\x0a\x09\x0a\x09^ self new\x0a\x09\x09model: aModel;\x0a\x09\x09parent: aParentControllerOrNil;\x0a\x09\x09parentElement: aHtmlElement;\x0a\x09\x09yourself\x0a\x09",
messageSends: ["model:", "new", "parent:", "parentElement:", "yourself"],
referencedClasses: []
}),
globals.Controller.klass);


smalltalk.addClass('RouteableController', globals.Controller, [], 'Flow-Core');
globals.RouteableController.comment="## This is an abstraction. \x0a\x0a*Concrete subclasses know* if they are valid for a given URI so the app can be routed to them.\x0a\x0aA typical web app might have:\x0a1. home\x0a2. sign up\x0a3. sign in\x0a4. many other app-specific controllers";
smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
($ctx1.supercall = true, globals.RouteableController.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
self["@parentElement"]="#content"._asJQuery();
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.RouteableController)})},
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x09\x0a\x09\x22The convention for routeable controllers is \x0a\x09to have only one element with id='content' in index.html \x0a\x09and all the rest of the app goes from that controller\x22\x0a\x09parentElement := '#content' asJQuery",
messageSends: ["initialize", "asJQuery"],
referencedClasses: []
}),
globals.RouteableController);


smalltalk.addMethod(
smalltalk.method({
selector: "isAbstract",
protocol: 'testing',
fn: function (){
var self=this;
function $RouteableController(){return globals.RouteableController||(typeof RouteableController=="undefined"?nil:RouteableController)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self.__eq($RouteableController());
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},globals.RouteableController.klass)})},
args: [],
source: "isAbstract\x0a\x09\x22Answers true if the receiver is abstract.\x22\x0a\x09\x0a\x09^ self = RouteableController",
messageSends: ["="],
referencedClasses: ["RouteableController"]
}),
globals.RouteableController.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isValidFor:",
protocol: 'testing',
fn: function (anURI){
var self=this;
return false;
},
args: ["anURI"],
source: "isValidFor: anURI\x0a\x09\x22Answers true if this controller is the right route for anURI\x22\x0a\x09\x0a\x09\x22the default policy is reject\x22\x0a\x09^ false",
messageSends: [],
referencedClasses: []
}),
globals.RouteableController.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "keyword",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $4,$3,$6,$5,$2,$1;
$4=self._name();
$ctx1.sendIdx["name"]=1;
$3=_st($4)._reversed();
$6="Controller"._size();
$ctx1.sendIdx["size"]=1;
$5=_st($6).__plus((1));
$2=_st($3)._copyFrom_to_($5,_st(self._name())._size());
$1=_st($2)._reversed();
$ctx1.sendIdx["reversed"]=1;
return $1;
}, function($ctx1) {$ctx1.fill(self,"keyword",{},globals.RouteableController.klass)})},
args: [],
source: "keyword\x0a\x09\x22Answers the name of the class in lowercase without \x0a\x09the 'Controller' sufix so it can, for example, be used for friendly URI.\x0a\x09Subclasses are expected to follow the naming convention *Controller like\x0a\x09ThisNameController, ThatOtherNameController, AnyNameController, etc\x22\x0a\x0a\x09^ (self name reversed copyFrom: 'Controller' size + 1 to: self name size) reversed ",
messageSends: ["reversed", "copyFrom:to:", "name", "+", "size"],
referencedClasses: []
}),
globals.RouteableController.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "routeFor:",
protocol: 'actions',
fn: function (anURI){
var self=this;
function $NotFoundController(){return globals.NotFoundController||(typeof NotFoundController=="undefined"?nil:NotFoundController)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._allSubclasses())._detect_ifNone_((function(each){
return smalltalk.withContext(function($ctx2) {
return _st(each)._isValidFor_(anURI);
}, function($ctx2) {$ctx2.fillBlock({each:each},$ctx1,1)})}),(function(){
return $NotFoundController();
}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"routeFor:",{anURI:anURI},globals.RouteableController.klass)})},
args: ["anURI"],
source: "routeFor: anURI\x0a\x09\x22Answers the subclass that is a good fit to route anURI.\x22\x0a\x09\x0a\x09^ self allSubclasses\x0a\x09\x09detect:[ :each | each isValidFor: anURI ]\x0a\x09\x09ifNone:[ NotFoundController ]",
messageSends: ["detect:ifNone:", "allSubclasses", "isValidFor:"],
referencedClasses: ["NotFoundController"]
}),
globals.RouteableController.klass);


smalltalk.addClass('FlowAppController', globals.RouteableController, ['session'], 'Flow-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "console",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=console;
return $1;
},
args: [],
source: "console\x0a\x0a\x09^ console",
messageSends: [],
referencedClasses: []
}),
globals.FlowAppController);

smalltalk.addMethod(
smalltalk.method({
selector: "hideLoader",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st("#loader"._asJQuery())._hide();
return self}, function($ctx1) {$ctx1.fill(self,"hideLoader",{},globals.FlowAppController)})},
args: [],
source: "hideLoader\x0a\x09\x22Hides the loader bar/spinner\x22\x0a\x09\x0a\x09'#loader' asJQuery hide.",
messageSends: ["hide", "asJQuery"],
referencedClasses: []
}),
globals.FlowAppController);

smalltalk.addMethod(
smalltalk.method({
selector: "onOpen",
protocol: 'reactions',
fn: function (){
var self=this;
function $Router(){return globals.Router||(typeof Router=="undefined"?nil:Router)}
return smalltalk.withContext(function($ctx1) { 
self._hideLoader();
self._render();
_st(_st(window)._document())._title_(_st(self._class())._name());
_st($Router())._observeHash();
_st(self._session())._open();
_st(window)._at_put_("app",self);
return self}, function($ctx1) {$ctx1.fill(self,"onOpen",{},globals.FlowAppController)})},
args: [],
source: "onOpen\x0a\x09\x22All is loaded.\x22\x0a\x0a\x09self hideLoader.\x0a\x0a\x09self render.\x0a\x09\x0a\x09window document title: self class name.\x0a\x09\x0a\x09Router observeHash.\x0a\x09\x0a\x09self session open.\x0a\x09\x0a\x09\x22Handy reference\x22\x0a\x09window at: 'app' put: self\x09",
messageSends: ["hideLoader", "render", "title:", "document", "name", "class", "observeHash", "open", "session", "at:put:"],
referencedClasses: ["Router"]
}),
globals.FlowAppController);

smalltalk.addMethod(
smalltalk.method({
selector: "session",
protocol: 'accessing',
fn: function (){
var self=this;
function $Session(){return globals.Session||(typeof Session=="undefined"?nil:Session)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@session"];
if(($receiver = $2) == null || $receiver.isNil){
self["@session"]=_st($Session())._new();
$1=self["@session"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"session",{},globals.FlowAppController)})},
args: [],
source: "session\x0a\x0a\x09^ session ifNil:[ session := Session new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["Session"]
}),
globals.FlowAppController);


smalltalk.addMethod(
smalltalk.method({
selector: "isAbstract",
protocol: 'testing',
fn: function (){
var self=this;
function $FlowAppController(){return globals.FlowAppController||(typeof FlowAppController=="undefined"?nil:FlowAppController)}
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=self.__eq($FlowAppController());
return $1;
}, function($ctx1) {$ctx1.fill(self,"isAbstract",{},globals.FlowAppController.klass)})},
args: [],
source: "isAbstract\x0a\x09\x22Answers true if the receiver is abstract.\x22\x0a\x09\x0a\x09^ self = FlowAppController",
messageSends: ["="],
referencedClasses: ["FlowAppController"]
}),
globals.FlowAppController.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "isValidFor:",
protocol: 'testing',
fn: function (anURI){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(self._isAbstract())._not())._and_((function(){
return smalltalk.withContext(function($ctx2) {
return _st(anURI)._isEmpty();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
return $1;
}, function($ctx1) {$ctx1.fill(self,"isValidFor:",{anURI:anURI},globals.FlowAppController.klass)})},
args: ["anURI"],
source: "isValidFor: anURI\x0a\x09\x22Answers true if this controller is the right route for anURI\x22\x0a\x09\x0a\x09^ self isAbstract not and:[\x0a\x09anURI isEmpty ]",
messageSends: ["and:", "not", "isAbstract", "isEmpty"],
referencedClasses: []
}),
globals.FlowAppController.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._for_on_appendingTo_(nil,nil,"#content"._asJQuery()))._onOpen();
return $1;
}, function($ctx1) {$ctx1.fill(self,"open",{},globals.FlowAppController.klass)})},
args: [],
source: "open\x0a\x09\x22The foundation is ready, time to start this app!\x22\x0a\x0a\x09^ (self for: nil on: nil appendingTo: '#content' asJQuery) onOpen",
messageSends: ["onOpen", "for:on:appendingTo:", "asJQuery"],
referencedClasses: []
}),
globals.FlowAppController.klass);


smalltalk.addClass('NotFoundController', globals.RouteableController, [], 'Flow-Core');


smalltalk.addClass('Model', globals.Mapless, [], 'Flow-Core');


smalltalk.addClass('User', globals.Model, [], 'Flow-Core');


smalltalk.addClass('Router', globals.Object, [], 'Flow-Core');
globals.Router.comment="This router observes changes in the URI and reacts accordingly.\x0a\x0aThe strategy is to ignore what should be rote where in advance by collaborating intensively with controllers that understands #isValidFor: \x0aThat way this router will flexibly route thigs with a pontentially complex URI";

smalltalk.addMethod(
smalltalk.method({
selector: "observeHash",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(window)._onhashchange_((function(){
return smalltalk.withContext(function($ctx2) {
return self._onHashChanged();
$ctx2.sendIdx["onHashChanged"]=1;
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
self._onHashChanged();
return self}, function($ctx1) {$ctx1.fill(self,"observeHash",{},globals.Router.klass)})},
args: [],
source: "observeHash\x0a\x0a\x09window onhashchange:[ self onHashChanged ].\x0a\x09self onHashChanged",
messageSends: ["onhashchange:", "onHashChanged"],
referencedClasses: []
}),
globals.Router.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "onHashChanged",
protocol: 'reactions',
fn: function (){
var self=this;
var controller;
function $RouteableController(){return globals.RouteableController||(typeof RouteableController=="undefined"?nil:RouteableController)}
return smalltalk.withContext(function($ctx1) { 
self._trigger_("aboutToRoute");
$ctx1.sendIdx["trigger:"]=1;
controller=_st(_st($RouteableController())._routeFor_(self._route()))._new();
_st(window)._at_put_("current",controller);
_st(controller)._render();
self._trigger_("afterRouting");
return self}, function($ctx1) {$ctx1.fill(self,"onHashChanged",{controller:controller},globals.Router.klass)})},
args: [],
source: "onHashChanged\x0a\x09\x0a\x09| controller |\x0a\x09self trigger: 'aboutToRoute'.\x0a\x09\x0a\x09controller := (RouteableController routeFor: self route) new.\x0a\x09window at: #current put: controller.\x0a\x09controller render.\x0a\x09\x0a\x09self trigger: 'afterRouting'\x0a\x09",
messageSends: ["trigger:", "new", "routeFor:", "route", "at:put:", "render"],
referencedClasses: ["RouteableController"]
}),
globals.Router.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "route",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(self._uri())._replace_with_("^#/","");
return $1;
}, function($ctx1) {$ctx1.fill(self,"route",{},globals.Router.klass)})},
args: [],
source: "route\x0a\x09\x22Answers the current route.\x22\x0a\x09\x0a\x09^ self uri replace: '^#/' with: ''",
messageSends: ["replace:with:", "uri"],
referencedClasses: []
}),
globals.Router.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "uri",
protocol: 'accessing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1;
$1=_st(_st(window)._location())._hash();
return $1;
}, function($ctx1) {$ctx1.fill(self,"uri",{},globals.Router.klass)})},
args: [],
source: "uri\x0a\x0a\x09^ window location hash",
messageSends: ["hash", "location"],
referencedClasses: []
}),
globals.Router.klass);


smalltalk.addClass('Session', globals.Object, ['id', 'user', 'social', 'api'], 'Flow-Core');
smalltalk.addMethod(
smalltalk.method({
selector: "api",
protocol: 'accessing',
fn: function (){
var self=this;
function $APIClient(){return globals.APIClient||(typeof APIClient=="undefined"?nil:APIClient)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1,$receiver;
$2=self["@api"];
if(($receiver = $2) == null || $receiver.isNil){
self["@api"]=_st($APIClient())._new();
$1=self["@api"];
} else {
$1=$2;
};
return $1;
}, function($ctx1) {$ctx1.fill(self,"api",{},globals.Session)})},
args: [],
source: "api\x0a\x0a\x09^ api ifNil:[ api := APIClient new ]",
messageSends: ["ifNil:", "new"],
referencedClasses: ["APIClient"]
}),
globals.Session);

smalltalk.addMethod(
smalltalk.method({
selector: "asJSONString",
protocol: 'accessing',
fn: function (){
var self=this;
function $HasedCollection(){return globals.HasedCollection||(typeof HasedCollection=="undefined"?nil:HasedCollection)}
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$4,$5,$1;
$2=_st($HasedCollection())._new();
$3=$2;
$4=self._id();
$ctx1.sendIdx["id"]=1;
_st($3)._at_put_("id",$4);
$ctx1.sendIdx["at:put:"]=1;
_st($2)._at_put_("userId",_st(self._user())._id());
$5=_st($2)._asJSONString();
$1=$5;
return $1;
}, function($ctx1) {$ctx1.fill(self,"asJSONString",{},globals.Session)})},
args: [],
source: "asJSONString\x0a\x0a\x09^ HasedCollection new\x0a\x09\x09at: 'id' put: self id;\x0a\x09\x09at: 'userId' put: self user id;\x0a\x09\x09asJSONString",
messageSends: ["at:put:", "new", "id", "user", "asJSONString"],
referencedClasses: ["HasedCollection"]
}),
globals.Session);

smalltalk.addMethod(
smalltalk.method({
selector: "open",
protocol: 'actions',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
_st(self._api())._connect();
return self}, function($ctx1) {$ctx1.fill(self,"open",{},globals.Session)})},
args: [],
source: "open\x0a\x0a\x09self api connect",
messageSends: ["connect", "api"],
referencedClasses: []
}),
globals.Session);


});
