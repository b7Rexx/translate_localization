!function(l){function n(n){for(var e,t,i=n[0],r=n[1],a=n[2],o=0,s=[];o<i.length;o++)t=i[o],Object.prototype.hasOwnProperty.call(d,t)&&d[t]&&s.push(d[t][0]),d[t]=0;for(e in r)Object.prototype.hasOwnProperty.call(r,e)&&(l[e]=r[e]);for(p&&p(n);s.length;)s.shift()();return u.push.apply(u,a||[]),c()}function c(){for(var n,e=0;e<u.length;e++){for(var t=u[e],i=!0,r=1;r<t.length;r++){var a=t[r];0!==d[a]&&(i=!1)}i&&(u.splice(e--,1),n=o(o.s=t[0]))}return n}var t={},d={0:0},u=[];function o(n){if(t[n])return t[n].exports;var e=t[n]={i:n,l:!1,exports:{}};return l[n].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=l,o.c=t,o.d=function(n,e,t){o.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)o.d(t,i,function(n){return e[n]}.bind(null,i));return t},o.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(e,"a",e),e},o.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},o.p="/";var e=window.webpackJsonp=window.webpackJsonp||[],i=e.push.bind(e);e.push=n,e=e.slice();for(var r=0;r<e.length;r++)n(e[r]);var p=i;u.push([71,1]),c()}({134:function(n,e,t){"use strict";t.r(e);var i=t(19),r=t.n(i),a=t(70),o=t(64),s=t.n(o),l=(t(75),{selector:"root",template:'\n    <div class="root">\n      <ui-view></ui-view>\n    </div>\n  '}),c=t(7),d=t.n(c),u={selector:"test",template:'<div class="btn-group">\n  <label class="btn btn-primary" ng-model="radioModel" btn-radio="\'Left\'">Left</label>\n  <label class="btn btn-primary" ng-model="radioModel" btn-radio="\'Middle\'">Middle</label>\n  <label class="btn btn-primary" ng-model="radioModel" btn-radio="\'Right\'">Right</label>\n</div>',controller:p},p=function n(){d()(this,n)},f=t(65),h=t.n(f),v=t(12),g=t.n(v),m={selector:"home",template:'<div class="container">\n <div class="text-center p-2">\n   <h3>Translate Localized Json</h3>\n </div>\n <div class="content">\n   <div ng-show="$ctrl.loader" class="loading"></div>\n   <div ng-hide="$ctrl.loader">\n   <div class="row justify-content-center">\n  <div class="col-sm-6">\n    <span>Ignore string starting with</span>\n    <input type="text" class=" col-sm-4 form-control d-inline" ng-value="$ctrl.ignoreString" \n    onchange="angular.element(this).scope().changeIgnoreStringHandler(this)" />\n  </div>\n</div>\n     <div class="row justify-content-center mt-2 mb-4">\n       <div class="col-sm-6 col-md-2">\n         <label for="input-file">English Json File</label>\n         <div class="mt-1 single-line-word d-inline">\n           <span class="text-green" ng-show="$ctrl.englishList.length > 0">\n             <i class="fa fa-check"></i> {{$ctrl.englishList.length}}\n           </span>\n           <span class="text-danger" ng-show="$ctrl.englishList.length === 0">\n             <i class="fa fa-asterisk"></i>\n           </span>\n         </div>\n\n       </div>\n       <div class="col-sm-6 col-md-3 mb-2">\n         <input type="file" id="input-file" class="form-control"\n           onchange="angular.element(this).scope().englishFileChangeHandler(this)" />\n       </div>\n      <div class="col-md-2"></div> \n       <div class="col-sm-6 col-md-2">\n         <label for="output-file">Japanese Json File</label>\n         <div class="mt-1 single-line-word d-inline">\n           <span class="text-green" ng-show="$ctrl.japaneseList.length > 0">\n             <i class="fa fa-check"></i> {{$ctrl.japaneseList.length}}\n           </span>\n         </div>\n       </div>\n       <div class="col-sm-6 col-md-3 mb-2">\n         <input type="file" id="output-file" class="form-control"\n           onchange="angular.element(this).scope().japaneseFileChangeHandler(this)" />\n       </div>\n     </div>\n     <div class="row">\n       <div class="col-sm-12">\n         <translate-list normalized-list="$ctrl.englishList"></translate-list>\n         <div class="text-center">\n           <button class="btn btn-outline-primary" ng-disabled="$ctrl.downloadBtn" ng-click="$ctrl.downloadFile()">\n             <i class="fa fa-download"> Download Japanese Json File </i>\n           </button>\n         </div>\n       </div>\n     </div>\n   </div>\n </div>\n</div>',controller:function(){function l(t,n,e,i,r,a){var o=this;d()(this,l);var s=this;this.$filter=n,this.jsonService=e,this.fileService=i,this.swalService=r,this.IGNORE_STRING=a||"",this.ignoreString=a||"",t.englishFileChangeHandler=function(n){o.loader=!0,t.$apply(),o.fileService.fileReader(n,s.IGNORE_STRING).then(function(n){s.englishList=n,s.downloadBtn=!1,s.updateJapanese(),t.$apply()}).catch(function(){o.loader=!1,t.$apply()})},t.japaneseFileChangeHandler=function(n){o.loader=!0,t.$apply(),o.fileService.fileReader(n,s.IGNORE_STRING).then(function(n){s.japaneseList=n,s.updateJapanese(),t.$apply()}).catch(function(){o.loader=!1,t.$apply()})},t.changeIgnoreStringHandler=function(e){s.swalService.confirm("Are you sure ?","This will reset your progress!").then(function(n){n.value?(s.IGNORE_STRING=e.value,s.englishList=[],s.japaneseList=[],o.downloadBtn=!0):s.ignoreString=s.IGNORE_STRING,t.$apply()})}}return l.$inject=["$scope","$filter","jsonService","fileService","swalService","IGNORE_STRING"],g()(l,[{key:"$onInit",value:function(){this.downloadBtn=!0,this.loader=!1,this.englishList=[],this.japaneseList=[]}},{key:"updateJapanese",value:function(){var t=this.japaneseList.filter(function(n){return n.change});this.englishList.filter(function(e){if(e.change){var n=t.find(function(n){return n.nestedKey===e.nestedKey});n&&(e.output=n.value)}}),this.englishList=this.$filter("orderBy")(this.englishList,"output"),this.loader=!1}},{key:"downloadFile",value:function(){var n=this.jsonService.revertNormalizeJson(this.englishList,this.IGNORE_STRING);this.fileService.download(h()(n),"output.json","txt")}}]),l}()},b={selector:"translateList",bindings:{normalizedList:"<"},template:'<div class="translate-list">\n<table class="table table-responsive table-hover">\n  <thead>\n    <tr>\n      <th class="text-center" width="5%">SN</th>\n      <th width="45%">English</th>\n      <th width="40%">Japanese</th>\n      <th class="text-center" width="10%">Status</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="(index,item) in (filteredItems = ($ctrl.normalizedList | changeStatus))">\n      <td width="5%" class="text-center">{{index+1}}</td>\n      <td width="45%">{{item.value}}</td>\n      <td width="40%"><input ng-model="item.output" class="table-input form-control"/></td>\n      <td width="10%" class="text-center">\n      <i class="fa fa-check-circle text-success" ng-if="item.output"></i>\n      <i class="fa fa-times-circle text-warning" ng-if="!item.output"></i>\n      </td>\n    </tr>\n    <tr ng-show="filteredItems.length === 0">\n      <td colspan="2">No item available for translation !! upload english json file !!</td>\n    </tr>\n  </tbody>\n</table>\n</div>',controller:function n(){d()(this,n)}},A="changeStatus",y=function(){return function(n){return n.filter(function(n){return n.change&&n.value})}},w=t(66),C=t.n(w),x=t(45),B=t.n(x),S=t(67),k=t.n(S),G={selector:"jsonService",service:function(){function n(){d()(this,n)}return g()(n,[{key:"decodeBase64toJson",value:function(n){return/^[\],:{}\s]*$/.test(n.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))?{status:!0,data:JSON.parse(n)}:{status:!1,data:{}}}},{key:"noramlizeJson",value:function(n,e){var u=1<arguments.length&&void 0!==e?e:"",p=0,t=[];return function a(o,s){var l=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"";var c=3<arguments.length&&void 0!==arguments[3]?arguments[3]:[];var d=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0;k()(o).map(function(n){var e=o[n],t="".concat(l,"[").concat(n,"]"),i={id:p,type:B()(e),change:!0,key:n,value:e,nestedKey:t,node:d,nodeKey:l,output:"",children:[]};if(c.push(p),"object"===B()(e)){var r=[];a(e,s,t,r,d+1),i.change=!1,i.value=void 0,i.children=r}else"string"==typeof e&&e.startsWith(u)&&(i.change=!1);s.push(i),++p})}(n,t),t}},{key:"revertNormalizeJson",value:function(n,e){for(var o=1<arguments.length&&void 0!==e?e:"",t=n.map(function(n){return n.node}),i=Math.max.apply(Math,C()(t)),s=[],r=function(e){s[e]=n.filter(function(n){return e===n.node})},a=0;a<=i;a++)r(a);var l={};return function t(){var i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0;var r=1<arguments.length?arguments[1]:void 0;var a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"";s[i].map(function(n){if(a===n.nodeKey){"string"===n.type?n.value.startsWith(o)?r[n.key]=n.value||"":r[n.key]=n.output||"":"object"===n.type&&(r[n.key]={},t(i+1,r[n.key],n.nestedKey));var e=s[i].indexOf(n);s[i]=s[i].slice(0,e).concat(s[i].slice(e+1,s[i].length))}})}(0,l),l}}]),n}()},j=t(68),I=t.n(j),$=t(69),R=t.n($),L={selector:"fileService",service:function(){function e(n){d()(this,e),this.jsonService=n}return e.$inject=["jsonService"],g()(e,[{key:"download",value:function(n,e,t){var i=new Blob([n],{type:t});if(window.navigator.msSaveOrOpenBlob)window.navigator.msSaveOrOpenBlob(i,e);else{var r=document.createElement("a"),a=URL.createObjectURL(i);r.href=a,r.download=e,document.body.appendChild(r),r.click(),setTimeout(function(){document.body.removeChild(r),window.URL.revokeObjectURL(a)},0)}}},{key:"fileReader",value:function(e,n){var o=1<arguments.length&&void 0!==n?n:"",s=this;return new R.a(function(r,a){var n=new FileReader;n.onload=function(n){var e=s.jsonService.decodeBase64toJson(n.target.result),t=e.status,i=e.data;t?r(I()([],s.jsonService.noramlizeJson(i,o))):a("Json parse failed")},n.readAsText(e.files[0])})}}]),e}()},O={selector:"swalService",service:function(){function e(n){d()(this,e),this.Swal=n}return e.$inject=["Swal"],g()(e,[{key:"confirm",value:function(n,e){return this.Swal.fire({title:n,text:e,icon:"warning",showCancelButton:!0})}}]),e}()};r.a.module("root",[a.a]).value("IGNORE_STRING","@:").constant("Swal",s.a).component(l.selector,l).component(m.selector,m).component(u.selector,u).component(b.selector,b).service(G.selector,G.service).service(L.selector,L.service).service(O.selector,O.service).filter(A,y).config(["$stateProvider","$locationProvider","$urlRouterProvider",function(n,e,t){n.state(u.selector,{url:"/".concat(u.selector),component:u.selector}).state(m.selector,{url:"/",component:m.selector}),e.hashPrefix(""),e.html5Mode(!0),t.otherwise("/")}])},71:function(n,e,t){n.exports=t(134)},75:function(n,e,t){var i=t(76);"string"==typeof i&&(i=[[n.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(78)(i,r);i.locals&&(n.exports=i.locals)},76:function(n,e,t){(n.exports=t(77)(!0)).push([n.i,"*{margin:0;padding:0}:root{--text-primary--: #2ECC71;--bg-primary--: #f0fcf5;--bg-secondary--: #102B7B}body{background:var(--bg-secondary--)}h1,h2,h3,h4{color:var(--text-primary--)}.translate-list table tbody{width:100%;display:block;max-height:450px;overflow-y:auto}.translate-list table thead,.translate-list table tbody tr{display:table;width:100%;table-layout:fixed}.translate-list td{padding:0.35rem}.table-input{border:none}.loading{margin:100px auto 100px;border:16px solid #f3f3f3;border-radius:50%;border-top:16px solid var(--text-primary--);width:120px;height:120px;-webkit-animation:spin 2s linear infinite;animation:spin 2s linear infinite}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.content{background:var(--bg-primary--);padding:10px 10px 30px;border-radius:10px;box-shadow:0 0 10px #f0f0f3}.text-green{color:var(--text-primary--)}.single-line-word{white-space:nowrap;overflow:hidden}.form-control{border:none}\n","",{version:3,sources:["/home/travis/build/b7Rexx/translate_localization/src/app/src/app/root.component.scss"],names:[],mappings:"AAAA,EACI,SACA,SAAU,CACb,MAGG,0BACA,wBACA,yBAAiB,CACpB,KAGG,gCAAiC,CACpC,YAMG,2BAA4B,CAC/B,4BAGG,WACA,cACA,iBACA,eAAgB,CACnB,2DAIG,cACA,WACA,kBAAmB,CACtB,mBAGG,eAAgB,CACnB,aAGG,WAAY,CACf,SAGG,wBACA,0BACA,kBACA,4CACA,YACA,aACA,0CACA,iCAAkC,CACrC,wBAGG,GACI,8BAA+B,CAEnC,KACI,gCAAiC,CAAA,CAIzC,gBACI,GACI,sBAAuB,CAE3B,KACI,wBAAyB,CAAA,CAIjC,SACI,+BACA,uBACA,mBACA,2BACJ,CAAC,YAGG,2BAA4B,CAC/B,kBAGG,mBACA,eAAgB,CACnB,cAGG,WAAY,CACf",file:"root.component.scss",sourcesContent:["* {\n    margin: 0;\n    padding: 0;\n}\n\n:root {\n    --text-primary--: #2ECC71;\n    --bg-primary--: #f0fcf5;\n    --bg-secondary--: #102B7B;\n}\n\nbody {\n    background: var(--bg-secondary--);\n}\n\nh1,\nh2,\nh3,\nh4 {\n    color: var(--text-primary--);\n}\n\n.translate-list table tbody {\n    width: 100%;\n    display: block;\n    max-height: 450px;\n    overflow-y: auto;\n}\n\n.translate-list table thead,\n.translate-list table tbody tr {\n    display: table;\n    width: 100%;\n    table-layout: fixed;\n}\n\n.translate-list td {\n    padding: 0.35rem;\n}\n\n.table-input {\n    border: none;\n}\n\n.loading {\n    margin: 100px auto 100px;\n    border: 16px solid #f3f3f3;\n    border-radius: 50%;\n    border-top: 16px solid var(--text-primary--);\n    width: 120px;\n    height: 120px;\n    -webkit-animation: spin 2s linear infinite;\n    animation: spin 2s linear infinite;\n}\n\n@-webkit-keyframes spin {\n    0% {\n        -webkit-transform: rotate(0deg);\n    }\n    100% {\n        -webkit-transform: rotate(360deg);\n    }\n}\n\n@keyframes spin {\n    0% {\n        transform: rotate(0deg);\n    }\n    100% {\n        transform: rotate(360deg);\n    }\n}\n\n.content {\n    background: var(--bg-primary--);\n    padding: 10px 10px 30px;\n    border-radius: 10px;\n    box-shadow: 0 0 10px #f0f0f3\n}\n\n.text-green {\n    color: var(--text-primary--);\n}\n\n.single-line-word {\n    white-space: nowrap;\n    overflow: hidden;\n}\n\n.form-control {\n    border: none;\n}"],sourceRoot:""}])}});
//# sourceMappingURL=app.bundle-da6b78513de2cdafa853-0.map