"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9798],{5937:(t,e,s)=>{s.d(e,{Z:()=>a});var r=s(1257);const a={find:function(t){return r.Z.get("/settings/permissions/".concat(t))},get:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r.Z.get("/settings/permissions",{params:t})},save:function(t){return t.post("/api/settings/permissions/store")},delete:function(t){return r.Z.delete("/settings/permissions/".concat(t,"/delete"))},getUserPermissions:function(){},getRolePermissionsGroupWise:function(t){return r.Z.get("/settings/permissions/groupwise",{params:t})},assignPermissions:function(t){return r.Z.post("/settings/permissions/assign",t)}}},5714:(t,e,s)=>{s.d(e,{ZP:()=>x});var r=s(9669),a=s.n(r),n=Object.defineProperty,o=Object.prototype.hasOwnProperty,i=Object.getOwnPropertySymbols,l=Object.prototype.propertyIsEnumerable,c=(t,e,s)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,u=(t,e)=>{for(var s in e||(e={}))o.call(e,s)&&c(t,s,e[s]);if(i)for(var s of i(e))l.call(e,s)&&c(t,s,e[s]);return t};const d=t=>void 0===t,f=t=>Array.isArray(t),p=t=>t&&"number"==typeof t.size&&"string"==typeof t.type&&"function"==typeof t.slice,h=(t,e,s,r)=>((e=e||{}).indices=!d(e.indices)&&e.indices,e.nullsAsUndefineds=!d(e.nullsAsUndefineds)&&e.nullsAsUndefineds,e.booleansAsIntegers=!d(e.booleansAsIntegers)&&e.booleansAsIntegers,e.allowEmptyArrays=!d(e.allowEmptyArrays)&&e.allowEmptyArrays,s=s||new FormData,d(t)||(null===t?e.nullsAsUndefineds||s.append(r,""):(t=>"boolean"==typeof t)(t)?e.booleansAsIntegers?s.append(r,t?1:0):s.append(r,t):f(t)?t.length?t.forEach(((t,a)=>{const n=r+"["+(e.indices?a:"")+"]";h(t,e,s,n)})):e.allowEmptyArrays&&s.append(r+"[]",""):(t=>t instanceof Date)(t)?s.append(r,t.toISOString()):!(t=>t===Object(t))(t)||(t=>p(t)&&"string"==typeof t.name&&("object"==typeof t.lastModifiedDate||"number"==typeof t.lastModified))(t)||p(t)?s.append(r,t):Object.keys(t).forEach((a=>{const n=t[a];if(f(n))for(;a.length>2&&a.lastIndexOf("[]")===a.length-2;)a=a.substring(0,a.length-2);h(n,e,s,r?r+"["+a+"]":a)}))),s);var m={serialize:h};function g(t){if(null===t||"object"!=typeof t)return t;const e=Array.isArray(t)?[]:{};return Object.keys(t).forEach((s=>{e[s]=g(t[s])})),e}function y(t){return Array.isArray(t)?t:[t]}function v(t){return t instanceof File||t instanceof Blob||t instanceof FileList||"object"==typeof t&&null!==t&&void 0!==Object.values(t).find((t=>v(t)))}class b{constructor(){this.errors={},this.errors={}}set(t,e){"object"==typeof t?this.errors=t:this.set(u(u({},this.errors),{[t]:y(e)}))}all(){return this.errors}has(t){return Object.prototype.hasOwnProperty.call(this.errors,t)}hasAny(...t){return t.some((t=>this.has(t)))}any(){return Object.keys(this.errors).length>0}get(t){if(this.has(t))return this.getAll(t)[0]}getAll(t){return y(this.errors[t]||[])}only(...t){const e=[];return t.forEach((t=>{const s=this.get(t);s&&e.push(s)})),e}flatten(){return Object.values(this.errors).reduce(((t,e)=>t.concat(e)),[])}clear(t){const e={};t&&Object.keys(this.errors).forEach((s=>{s!==t&&(e[s]=this.errors[s])})),this.set(e)}}class w{constructor(t={}){this.originalData={},this.busy=!1,this.successful=!1,this.recentlySuccessful=!1,this.recentlySuccessfulTimeoutId=void 0,this.errors=new b,this.progress=void 0,this.update(t)}static make(t){return new this(t)}update(t){this.originalData=Object.assign({},this.originalData,g(t)),Object.assign(this,t)}fill(t={}){this.keys().forEach((e=>{this[e]=t[e]}))}data(){return this.keys().reduce(((t,e)=>u(u({},t),{[e]:this[e]})),{})}keys(){return Object.keys(this).filter((t=>!w.ignore.includes(t)))}startProcessing(){this.errors.clear(),this.busy=!0,this.successful=!1,this.progress=void 0,this.recentlySuccessful=!1,clearTimeout(this.recentlySuccessfulTimeoutId)}finishProcessing(){this.busy=!1,this.successful=!0,this.progress=void 0,this.recentlySuccessful=!0,this.recentlySuccessfulTimeoutId=setTimeout((()=>{this.recentlySuccessful=!1}),w.recentlySuccessfulTimeout)}clear(){this.errors.clear(),this.successful=!1,this.recentlySuccessful=!1,this.progress=void 0,clearTimeout(this.recentlySuccessfulTimeoutId)}reset(){Object.keys(this).filter((t=>!w.ignore.includes(t))).forEach((t=>{this[t]=g(this.originalData[t])}))}get(t,e={}){return this.submit("get",t,e)}post(t,e={}){return this.submit("post",t,e)}patch(t,e={}){return this.submit("patch",t,e)}put(t,e={}){return this.submit("put",t,e)}delete(t,e={}){return this.submit("delete",t,e)}submit(t,e,s={}){return this.startProcessing(),s=u({data:{},params:{},url:this.route(e),method:t,onUploadProgress:this.handleUploadProgress.bind(this)},s),"get"===t.toLowerCase()?s.params=u(u({},this.data()),s.params):(s.data=u(u({},this.data()),s.data),v(s.data)&&!s.transformRequest&&(s.transformRequest=[t=>m.serialize(t)])),new Promise(((t,e)=>{(w.axios||a()).request(s).then((e=>{this.finishProcessing(),t(e)})).catch((t=>{this.handleErrors(t),e(t)}))}))}handleErrors(t){this.busy=!1,this.progress=void 0,t.response&&this.errors.set(this.extractErrors(t.response))}extractErrors(t){return t.data&&"object"==typeof t.data?t.data.errors?u({},t.data.errors):t.data.message?{error:t.data.message}:u({},t.data):{error:w.errorMessage}}handleUploadProgress(t){this.progress={total:t.total,loaded:t.loaded,percentage:Math.round(100*t.loaded/t.total)}}route(t,e={}){let s=t;return Object.prototype.hasOwnProperty.call(w.routes,t)&&(s=decodeURI(w.routes[t])),"object"!=typeof e&&(e={id:e}),Object.keys(e).forEach((t=>{s=s.replace(`{${t}}`,e[t])})),s}onKeydown(t){const e=t.target;e.name&&this.errors.clear(e.name)}}w.routes={},w.errorMessage="Something went wrong. Please try again.",w.recentlySuccessfulTimeout=2e3,w.ignore=["busy","successful","errors","progress","originalData","recentlySuccessful","recentlySuccessfulTimeoutId"];const x=w},1183:(t,e,s)=>{s.d(e,{Z:()=>a});const r={props:{value:{type:Boolean,default:!1},outsideClose:{type:Boolean,default:!1},tag:{type:String,default:"div"}},methods:{checkOpen:function(t){this.value&&(this.$emit("input",!1),this.$emit("closed"))},outsideCloseAble:function(){console.log(this.outsideClose),this.outsideClose&&this.checkOpen()}}};const a=(0,s(1900).Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("transition",{attrs:{name:"overlay"}},[t.value?s("div",{staticClass:"z-50 absolute inset-0 bg-gray-900 bg-opacity-50 transition-opacity",attrs:{"aria-hidden":"true"}}):t._e()]),t._v(" "),s("transition",{attrs:{name:"slide-over"}},[t.value?s("div",{staticClass:"z-50 fixed inset-0 overflow-hidden"},[s("div",{staticClass:"absolute inset-0 overflow-hidden"},[t.value?s("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.outsideCloseAble,expression:"outsideCloseAble"}],staticClass:"fixed inset-y-0 right-0 pl-10 max-w-full flex"},[s("div",{staticClass:"relative w-screen max-w-xl"},[s("div",{staticClass:"absolute top-0 right-0 pt-4 pr-10 flex"},[s("button",{staticClass:"rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white",attrs:{type:"button"},on:{click:t.checkOpen}},[s("span",{staticClass:"sr-only"},[t._v("Close panel")]),t._v(" "),s("svg",{staticClass:"h-6 w-6",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"}})])])]),t._v(" "),s(t.tag,{tag:"component",staticClass:"h-full flex flex-col bg-white shadow-xl overflow-y-scroll dark:bg-gray-800",on:{submit:function(e){return e.preventDefault(),t.$emit("formSubmit",e)}}},[s("div",{staticClass:"py-4 px-4 sm:px-6 bg-indigo-600"},[t._t("header")],2),t._v(" "),s("div",{staticClass:"mt-6 relative flex-1 px-4 sm:px-6"},[t._t("body")],2),t._v(" "),s("div",{staticClass:"border-t dark:border-gray-600 py-4 px-4"},[t._t("footer")],2)])],1)]):t._e()])]):t._e()])],1)}),[],!1,null,null,null).exports},750:(t,e,s)=>{s.d(e,{Z:()=>a});const r={name:"StatsCardIcon",props:{paths:{type:Array,default:function(){return[]}},height:{type:Number,default:5}}};const a=(0,s(1900).Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("svg",{staticClass:"w-5",class:"h-"+t.height,attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[t._t("default",(function(){return[t._l(t.paths,(function(t,e){return[s("path",{key:e,attrs:{d:t}})]}))]}))],2)}),[],!1,null,null,null).exports},2126:(t,e,s)=>{s.d(e,{Z:()=>a});const r={name:"PageTitle",props:{title:{type:String,required:!0}}};const a=(0,s(1900).Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._t("default",(function(){return[s("h2",{staticClass:"mb-6 md:text-2xl lg:text-3xl font-bold text-gray-700 dark:text-gray-200 sm:text-xl text-2xl"},[t._v("\n      "+t._s(t.title)+"\n    ")])]}))],2)}),[],!1,null,null,null).exports},4075:(t,e,s)=>{s.d(e,{Z:()=>o});function r(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,r)}return s}function a(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}const n={props:{title:{type:String,default:"Table Title"},searchPlaceholder:{type:String,default:"Search Table"},searchAble:{type:Boolean,default:!0},headerRequired:{type:Boolean,default:!0},paginateAble:{type:Boolean,default:!0},meta:{type:Object,default:function(){return{length:10,search:"",sortBy:"id",sortDesc:!0,page:1,total:0}}}},computed:{currentPage:{get:function(){return this.meta.page},set:function(t){this.refresh("page",t)}},perPage:{get:function(){return parseInt(this.meta.length)},set:function(t){this.refresh("length",t)}}},methods:{handleSearch:function(t){this.refresh("search",t)},refresh:function(t,e){var s=this.getNewMeta(t,e);this.$emit("update:meta",s),this.$emit("refresh")},getNewMeta:function(t,e){var s=function(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?r(Object(s),!0).forEach((function(e){a(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}({},this.meta);return s[t]=e,s}}};const o=(0,s(1900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"bg-white dark:bg-gray-800 dark:border-gray-600 shadow-lg rounded-sm border border-gray-200"},[t.headerRequired?s("header",{staticClass:"px-5 py-4"},[s("div",{staticClass:"flex flex-wrap"},[s("div",{staticClass:"w-full sm:w-1/2 md:text-left text-center"},[s("h2",{staticClass:"font-semibold text-gray-800 dark:text-gray-200"},[t._v("\n            "+t._s(t.title)+" "),s("span",{staticClass:"text-gray-400 font-semibold"},[t._v(t._s(t.meta.total)+" items")])])]),t._v(" "),t.searchAble?s("div",{staticClass:"w-full sm:w-1/2"},[s("SearchBox",{attrs:{placeholder:t.searchPlaceholder},on:{input:t.handleSearch}})],1):t._e()])]):t._e(),t._v(" "),s("div",{staticClass:"overflow-y-auto rounded-lg ring-1 ring-black ring-opacity-5"},[t._t("table")],2)]),t._v(" "),t.paginateAble?s("div",{staticClass:"mt-4 flex flex-row justify-between items-center"},[s("div",[s("select",{directives:[{name:"model",rawName:"v-model",value:t.perPage,expression:"perPage"}],staticClass:"block focus:shadow-outline-primary border-primary-300 w-full pl-3 pr-10 py-1 transition duration-100 ease-in-out border rounded shadow-sm focus:ring-2 focus:ring-primary-500 focus:outline-none focus:ring-opacity-50 disabled:opacity-50 disabled:cursor-not-allowed dark:focus:shadow-outline-gray dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.perPage=e.target.multiple?s:s[0]}}},[s("option",{domProps:{value:10}},[t._v("\n          10\n        ")]),t._v(" "),s("option",{domProps:{value:15}},[t._v("\n          15\n        ")]),t._v(" "),s("option",{domProps:{value:20}},[t._v("\n          20\n        ")]),t._v(" "),s("option",{domProps:{value:500}},[t._v("\n          All\n        ")])])]),t._v(" "),s("div",{staticClass:"text-sm text-gray-500 text-center sm:text-left"},[s("t-pagination",{attrs:{"total-items":t.meta.total,"per-page":t.perPage,limit:t.meta.length},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)]):t._e()])}),[],!1,null,null,null).exports},8148:(t,e,s)=>{s.d(e,{Z:()=>a});const r={name:"TheTable",components:{StatsCardIcon:s(750).Z},props:{headers:{type:Array,required:!0},data:{type:Array,required:!0},noLocalSort:{type:Boolean,default:!1},sortBy:{type:String,default:""},sortDesc:{type:Boolean,default:!0},hasSelectable:{type:Boolean,default:!1},selectedRows:{type:Array,default:function(){return[]}},selectionKey:{type:String,default:"id"},selectCompleteRow:{type:Boolean,default:!1}},data:function(){return{iconPathDown:["M12 13.172l4.95-4.95 1.414 1.414L12 16 5.636 9.636 7.05 8.222z"],iconPathUp:["M12 10.828l-4.95 4.95-1.414-1.414L12 8l6.364 6.364-1.414 1.414z"]}},computed:{isAllSelected:{get:function(){return this.selected.length===this.data.length},set:function(t){this.selected=t?this.selectCompleteRow?this.data:this.data.map((function(t){return t.id})):[]}},selected:{get:function(){return this.selectedRows},set:function(t){this.$emit("update:selected-rows",t)}},tableData:{get:function(){return this.data},set:function(t){this.$emit("update:data",t)}}},methods:{order:function(t){var e=!this.sortDesc;this.$emit("update:sort-desc",e),this.$emit("update:sort-by",t),this.$emit("sorting"),this.noLocalSort&&this.doLocalSort(t)},doLocalSort:function(t){var e=this,s=!this.sortDesc;this.tableData.sort((function(r,a){var n=e.$getPropByString(r,t).toLowerCase(),o=e.$getPropByString(a,t).toLowerCase();return s?n>o?-1:n<o?1:0:n<o?-1:n>o?1:0}))}}};const a=(0,s(1900).Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.headers?s("div",[s("t-table",{attrs:{headers:t.headers,data:t.tableData},scopedSlots:t._u([{key:"thead",fn:function(e){return[s("thead",{class:e.theadClass},[s("tr",{class:e.trClass},[t.hasSelectable?s("th",{staticClass:"px-2 first:pl-5  w-1"},[s("t-checkbox",{model:{value:t.isAllSelected,callback:function(e){t.isAllSelected=e},expression:"isAllSelected"}})],1):t._e(),t._v(" "),t._l(e.data,(function(r,a){return s("th",{key:a,class:e.thClass+" "+(r.extraClasses||"")+" "+(r.thExtraClasses||"")},[t._t("th_"+r.key),t._v(" "),s("span",{class:{"flex justify-start items-center":r.sortable}},[s("span",{staticClass:"mr-2"},[t._v("\n                "+t._s(r.label)+"\n              ")]),t._v(" "),r.sortable?s("span",{staticClass:"flex flex-col"},[s("button",{on:{click:function(e){return t.order(r.key)}}},[s("stats-card-icon",{attrs:{height:3,paths:t.iconPathUp}})],1),t._v(" "),s("button",{on:{click:function(e){return t.order(r.key)}}},[s("stats-card-icon",{attrs:{height:3,paths:t.iconPathDown}})],1)]):t._e()])],2)}))],2)])]}},{key:"row",fn:function(e){return[s("tr",{class:e.trClass},[t.hasSelectable?s("td",{staticClass:"px-2 first:pl-5 w-1"},[s("t-checkbox",{attrs:{value:t.selectCompleteRow?e.row:e.row[t.selectionKey]},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1):t._e(),t._v(" "),t._l(t.headers,(function(r,a){return s("td",{key:a,class:e.tdClass+" "+(r.extraClasses||"")+" "+(r.tdExtraClasses||"")},[t._t(r.key,(function(){return[t._v("\n            "+t._s(t.$getPropByString(e.row,r.key))+"\n          ")]}),{row:e.row,item:e.row[r.key.split(".")[0]]})],2)}))],2)]}}],null,!0)})],1):t._e()}),[],!1,null,null,null).exports},9798:(t,e,s)=>{s.r(e),s.d(e,{default:()=>h});var r=s(7757),a=s.n(r),n=s(2126),o=s(8148),i=s(4075),l=s(5714),c=s(1183),u=s(5937);function d(t,e,s,r,a,n,o){try{var i=t[n](o),l=i.value}catch(t){return void s(t)}i.done?e(l):Promise.resolve(l).then(r,a)}function f(t){return function(){var e=this,s=arguments;return new Promise((function(r,a){var n=t.apply(e,s);function o(t){d(n,r,a,o,i,"next",t)}function i(t){d(n,r,a,o,i,"throw",t)}o(void 0)}))}}const p={components:{PageTitle:n.Z,TheTable:o.Z,DataTable:i.Z,SlideOutPanel:c.Z},data:function(){return{tableData:{length:10,search:"",sortBy:"display_name",sortDesc:!0,page:1},group:["General","Dashboard","Settings","Profile"],headers:[{key:"selectable",label:"",sortable:!1,extraClasses:"w-1"},{key:"display_name",label:"Role",sortable:!0,tdExtraClasses:"font-medium"},{key:"description",label:"Description",sortable:!0,tdExtraClasses:"font-medium"},{key:"group",label:"group",sortable:!0,tdExtraClasses:"font-medium"},{key:"actions",label:"Actions",sortable:!1,extraClasses:"text-center"}],form:new l.ZP({name:"",display_name:"",description:"",addForm:!1,group:"General"}),selectedRows:[],isSelectAll:!1,data:null}},mounted:function(){this.getData()},methods:{selectAll:function(){this.isSelectAll?this.selectedRows=this.data.data.map((function(t){return t.id})):this.selectedRows=[]},getData:function(){var t=this;return f(a().mark((function e(){var s,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get(t.tableData);case 2:s=e.sent,r=s.data,t.data=r;case 5:case"end":return e.stop()}}),e)})))()},handleSubmit:function(){var t=this;return f(a().mark((function e(){var s,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.save(t.form);case 2:s=e.sent,r=s.data,t.form.reset(),t.$notify({group:"success",title:"Success",text:r.message},2e3),t.getData();case 7:case"end":return e.stop()}}),e)})))()},deleteRecord:function(t){var e=this;this.$dialog.confirm({okButtonText:"Yes, Delete",cancelButtonText:"Cancel",title:"Delete Permission",text:"Are you sure you want to delete this permission?",icon:"warning"}).then(function(){var s=f(a().mark((function s(r){var n,o;return a().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(!r.isOk){s.next=7;break}return s.next=3,u.Z.delete(t.id);case 3:n=s.sent,o=n.data,e.$notify({group:"success",title:"Success",text:o.message},2e3),e.getData();case 7:case"end":return s.stop()}}),s)})));return function(t){return s.apply(this,arguments)}}())},editRecord:function(t){var e=t.id,s=t.name,r=t.display_name,a=t.description,n=t.group;this.form.id=e,this.form.name=s,this.form.display_name=r,this.form.description=a,this.form.group=n,this.form.addForm=!0}}};const h=(0,s(1900).Z)(p,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container px-6 mx-auto py-8 text-gray-600"},[s("div",{staticClass:"flex flex-wrap"},[s("div",{staticClass:"w-full sm:w-1/2 text-center sm:text-left"},[s("PageTitle",{attrs:{title:"Manage Permissions"}})],1),t._v(" "),s("div",{staticClass:"w-full sm:w-1/2 flex justify-center sm:justify-end items-center mb-3"},[t.selectedRows.length>0?s("div",{staticClass:"flex items-center"},[s("span",{staticClass:"mr-2"},[t._v(t._s(t.selectedRows.length)+" items selected")]),t._v(" "),s("t-button",{staticClass:"flex justify-between mr-2",attrs:{variant:"danger"}},[s("span",{staticClass:"px-4 "},[t._v("Archive")])])],1):t._e(),t._v(" "),s("t-button",{staticClass:"flex justify-between mr-2",attrs:{variant:"primary"},on:{click:function(e){t.form.addForm=!t.form.addForm}}},[s("IconBase",{staticClass:"w-4 h-4",attrs:{viewBox:"0 0 16 16",paths:["M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z"]}}),t._v(" "),s("span",{staticClass:"px-4 "},[t._v("Add Permission")])],1)],1)]),t._v(" "),t.data?s("DataTable",{attrs:{title:"All Permissions","search-placeholder":"Search Permissions",search:t.tableData.search,"per-page":t.tableData.length,"current-page":t.tableData.page,pagination:t.data.meta},on:{"update:search":[function(e){return t.$set(t.tableData,"search",e)},function(e){return t.getData()}],"update:perPage":function(e){return t.$set(t.tableData,"length",e)},"update:per-page":[function(e){return t.$set(t.tableData,"length",e)},function(e){return t.getData()}],"update:currentPage":function(e){return t.$set(t.tableData,"page",e)},"update:current-page":[function(e){return t.$set(t.tableData,"page",e)},function(e){return t.getData()}]}},[s("template",{slot:"table"},[s("TheTable",{staticClass:"w-full",attrs:{headers:t.headers,data:t.data.data,"no-local-sort":"","sort-by":t.tableData.sortBy,"sort-desc":t.tableData.sortDesc},on:{"update:sortBy":function(e){return t.$set(t.tableData,"sortBy",e)},"update:sort-by":function(e){return t.$set(t.tableData,"sortBy",e)},"update:sortDesc":function(e){return t.$set(t.tableData,"sortDesc",e)},"update:sort-desc":function(e){return t.$set(t.tableData,"sortDesc",e)},sorting:t.getData},scopedSlots:t._u([{key:"selectable",fn:function(e){var r=e.row;return[s("t-checkbox",{attrs:{value:r.id},model:{value:t.selectedRows,callback:function(e){t.selectedRows=e},expression:"selectedRows"}})]}},{key:"actions",fn:function(e){var r=e.row;return[s("t-dropdown",{attrs:{variant:"table",text:"Action",blureable:""},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.hide;return s("div",{staticClass:"py-1 rounded-md shadow-xs"},[s("t-button",{attrs:{variant:"dropdown"},on:{click:function(e){a(),t.editRecord(r)}}},[s("IconBase",{staticClass:"w-3 h-3 mr-2",attrs:{paths:["M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"]}}),t._v(" "),s("span",[t._v("Edit")])],1),t._v(" "),s("t-button",{attrs:{variant:"dropdown"},on:{click:function(e){a(),t.deleteRecord(r)}}},[s("IconBase",{staticClass:"w-3 h-3 mr-2",attrs:{paths:["M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"]}}),t._v(" "),s("span",[t._v("Delete")])],1)],1)}}],null,!0)})]}}],null,!1,4284198360)},[s("template",{slot:"th_selectable"},[s("t-checkbox",{on:{change:function(e){return t.selectAll()}},model:{value:t.isSelectAll,callback:function(e){t.isSelectAll=e},expression:"isSelectAll"}})],1)],2)],1)],2):t._e(),t._v(" "),s("slide-out-panel",{attrs:{"outside-close":!0,tag:"form"},on:{closed:function(e){return t.form.reset()},formSubmit:t.handleSubmit},model:{value:t.form.addForm,callback:function(e){t.$set(t.form,"addForm",e)},expression:"form.addForm"}},[s("template",{slot:"header"},[s("div",{},[s("h2",{staticClass:" text-white font-semibold"},[t._v("\n          "+t._s(t.form.id?"Edit Permission":"Add Permission")+"\n        ")])])]),t._v(" "),s("template",{slot:"body"},[s("fieldset",{staticClass:"w-full mb-2"},[s("label",{staticClass:"block text-sm font-medium mb-1",attrs:{for:"display_name"}},[t._v("Display Name")]),t._v(" "),s("t-input",{attrs:{type:"display_name",name:"display_name",variant:{danger:t.form.errors.has("display_name")}},on:{input:function(e){t.form.name=t.form.display_name.replace(/\s\s+/g," ").toLowerCase().split(" ").join("-").trim()}},model:{value:t.form.display_name,callback:function(e){t.$set(t.form,"display_name",e)},expression:"form.display_name"}}),t._v(" "),s("has-error",{attrs:{errors:t.form.errors,field:"display_name"}})],1),t._v(" "),s("fieldset",{staticClass:"w-full mb-2"},[s("label",{staticClass:"block text-sm font-medium mb-1",attrs:{for:"name"}},[t._v("Name")]),t._v(" "),s("t-input",{attrs:{readonly:"",type:"text",name:"name",variant:{danger:t.form.errors.has("name")}},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),s("has-error",{attrs:{errors:t.form.errors,field:"name"}})],1),t._v(" "),s("fieldset",{staticClass:"w-full mb-2"},[s("label",{staticClass:"block text-sm font-medium mb-1",attrs:{for:"description"}},[t._v("Description")]),t._v(" "),s("t-textarea",{attrs:{type:"description",name:"description",variant:{danger:t.form.errors.has("description")}},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}}),t._v(" "),s("has-error",{attrs:{errors:t.form.errors,field:"description"}})],1),t._v(" "),s("fieldset",{staticClass:"w-full mb-2"},[s("label",{staticClass:"block text-sm font-medium mb-1",attrs:{for:"group"}},[t._v("Group")]),t._v(" "),s("t-select",{attrs:{options:t.group,name:"group",variant:{danger:t.form.errors.has("group")}},model:{value:t.form.group,callback:function(e){t.$set(t.form,"group",e)},expression:"form.group"}}),t._v(" "),s("has-error",{attrs:{errors:t.form.errors,field:"group"}})],1)]),t._v(" "),s("template",{slot:"footer"},[s("div",{staticClass:"flex justify-end items-end space-x-2 px-4"},[s("t-button",{attrs:{variant:"default"},on:{click:function(e){t.form.addForm=!t.form.addForm}}},[t._v("\n          Cancel\n        ")]),t._v(" "),s("t-button",{attrs:{loading:t.form.busy,variant:"primary"}},[t._v("\n          Submit\n        ")])],1)])],2)],1)}),[],!1,null,null,null).exports}}]);