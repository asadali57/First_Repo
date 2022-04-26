"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4330],{6254:(t,e,a)=>{a.d(e,{Z:()=>s});const r={name:"StatsCard",components:{StatsCardIcon:a(750).Z},props:{label:{type:String,default:"Label Text"},counter:{type:String,default:"64833"},color:{type:String,default:"orange"},iconPaths:{type:Array,default:function(){return["M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"]}}},data:function(){return{variants:{blue:"text-blue-500 bg-blue-100 dark:text-blue-100 dark:bg-blue-500",orange:"text-orange-500 bg-orange-100 dark:text-orange-100 dark:bg-orange-500",teal:"text-teal-500 bg-teal-100 dark:text-teal-100 dark:bg-teal-500",green:"text-green-500 bg-green-100 dark:text-green-100 dark:bg-green-500"}}},computed:{getColorClasses:function(){return this.variants[this.color]}}};const s=(0,a(1900).Z)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"flex items-center p-4 bg-white rounded-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800"},[a("div",{staticClass:"p-3 mr-4 rounded-full",class:"text-"+t.color+"-500 bg-"+t.color+"-100 dark:text-"+t.color+"-100 dark:bg-"+t.color+"-500"},[t._t("icon",(function(){return[a("StatsCardIcon",{attrs:{paths:t.iconPaths}})]}))],2),t._v(" "),a("div",[a("p",{staticClass:"mb-2 text-sm font-medium text-gray-600 dark:text-gray-400"},[t._v("\n      "+t._s(t.label)+"\n    ")]),t._v(" "),a("p",{staticClass:"text-lg font-semibold text-gray-700 dark:text-gray-200"},[t._v("\n      "+t._s(t.counter)+"\n    ")])])])}),[],!1,null,null,null).exports},750:(t,e,a)=>{a.d(e,{Z:()=>s});const r={name:"StatsCardIcon",props:{paths:{type:Array,default:function(){return[]}},height:{type:Number,default:5}}};const s=(0,a(1900).Z)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",{staticClass:"w-5",class:"h-"+t.height,attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[t._t("default",(function(){return[t._l(t.paths,(function(t,e){return[a("path",{key:e,attrs:{d:t}})]}))]}))],2)}),[],!1,null,null,null).exports},3256:(t,e,a)=>{a.d(e,{Z:()=>s});const r={name:"CTA",props:{text:{type:String,default:"Star this project on GitHub"},textRight:{type:String,default:"View more"},to:{type:String,default:""},href:{type:String,default:null}}};const s=(0,a(1900).Z)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-link",{staticClass:"flex items-center justify-between p-4 mb-8 text-sm font-semibold text-purple-100 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:ring-purple",attrs:{href:t.href?t.href:"#",to:t.to}},[a("div",{staticClass:"flex items-center"},[a("svg",{staticClass:"w-5 h-5 mr-2",attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[a("path",{attrs:{d:"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"}})]),t._v(" "),a("span",[t._v(t._s(t.text))])]),t._v(" "),a("span",[t._v(t._s(t.textRight)+"→")])])}),[],!1,null,null,null).exports},2126:(t,e,a)=>{a.d(e,{Z:()=>s});const r={name:"PageTitle",props:{title:{type:String,required:!0}}};const s=(0,a(1900).Z)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._t("default",(function(){return[a("h2",{staticClass:"mb-6 md:text-2xl lg:text-3xl font-bold text-gray-700 dark:text-gray-200 sm:text-xl text-2xl"},[t._v("\n      "+t._s(t.title)+"\n    ")])]}))],2)}),[],!1,null,null,null).exports},4330:(t,e,a)=>{a.r(e),a.d(e,{default:()=>i});var r=a(2126),s=a(3256),l=a(6254);const n={components:{PageTitle:r.Z,CTA:s.Z,StatsCard:l.Z},middleware:"auth",data:function(){return{}},metaInfo:function(){return{title:this.$t("home")}},methods:{handleSorting:function(){console.log(this.sortBy,this.sortDesc)}}};const i=(0,a(1900).Z)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container px-6 mx-auto py-8 text-gray-600"},[a("PageTitle",{attrs:{title:"Dashboard"}}),t._v(" "),a("CTA"),t._v(" "),a("div",{staticClass:"grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4"},[a("StatsCard",{attrs:{label:"Total clients",counter:"6389"}}),t._v(" "),a("StatsCard",{attrs:{"icon-paths":["M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"],label:"Account balance",counter:"$ 46,760.89",color:"green"}}),t._v(" "),a("StatsCard",{attrs:{"icon-paths":["M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"],label:"New sales",counter:"376",color:"blue"}}),t._v(" "),a("StatsCard",{attrs:{"icon-paths":["M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"],label:"Pending contacts",counter:"35",color:"teal"}})],1),t._v(" "),a("h2",{staticClass:"my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200"},[t._v("\n    Charts\n  ")]),t._v(" "),t._m(0)],1)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grid gap-6 mb-8 md:grid-cols-2"},[a("div",{staticClass:"min-w-0 p-4 bg-white rounded-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800"},[a("h4",{staticClass:"mb-4 font-semibold text-gray-800 dark:text-gray-300"},[t._v("\n        Revenue\n      ")]),t._v(" "),a("canvas",{attrs:{id:"pie"}}),t._v(" "),a("div",{staticClass:"flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400"},[a("div",{staticClass:"flex items-center"},[a("span",{staticClass:"inline-block w-3 h-3 mr-1 bg-blue-500 rounded-full"}),t._v(" "),a("span",[t._v("Shirts")])]),t._v(" "),a("div",{staticClass:"flex items-center"},[a("span",{staticClass:"inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full"}),t._v(" "),a("span",[t._v("Shoes")])]),t._v(" "),a("div",{staticClass:"flex items-center"},[a("span",{staticClass:"inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"}),t._v(" "),a("span",[t._v("Bags")])])])]),t._v(" "),a("div",{staticClass:"min-w-0 p-4 bg-white rounded-lg ring-1 ring-black ring-opacity-5 dark:bg-gray-800"},[a("h4",{staticClass:"mb-4 font-semibold text-gray-800 dark:text-gray-300"},[t._v("\n        Traffic\n      ")]),t._v(" "),a("canvas",{attrs:{id:"line"}}),t._v(" "),a("div",{staticClass:"flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400"},[a("div",{staticClass:"flex items-center"},[a("span",{staticClass:"inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full"}),t._v(" "),a("span",[t._v("Organic")])]),t._v(" "),a("div",{staticClass:"flex items-center"},[a("span",{staticClass:"inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"}),t._v(" "),a("span",[t._v("Paid")])])])])])}],!1,null,null,null).exports}}]);