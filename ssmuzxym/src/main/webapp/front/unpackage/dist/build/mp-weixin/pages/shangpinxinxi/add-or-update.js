(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shangpinxinxi/add-or-update"],{"07c4":function(e,n,t){},"1b3a":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(t("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,r,i,a,u){try{var o=e[a](u),c=o.value}catch(s){return void t(s)}o.done?n(c):Promise.resolve(c).then(r,i)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(r,i){var u=e.apply(n,t);function o(e){a(u,r,i,o,c,"next",e)}function c(e){a(u,r,i,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("7924"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{ruleForm:{shangpinmingcheng:"",shangpinfenlei:"",guige:"",xiaoliang:"",tupian:"",shangpinjieshao:"",price:""},shangpinfenleiOptions:[],shangpinfenleiIndex:0,user:{},ro:{shangpinmingcheng:!1,shangpinfenlei:!1,guige:!1,xiaoliang:!1,tupian:!1,shangpinjieshao:!1,clicktime:!1,clicknum:!1,price:!1}}},components:{wPicker:o},computed:{},onLoad:function(n){var t=this;return u(r.default.mark((function i(){var a,u,o,c;return r.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=e.getStorageSync("nowTable"),i.next=3,t.$api.session(a);case 3:return u=i.sent,t.user=u.data,i.next=7,t.$api.option("shangpinfenlei","shangpinfenlei",{});case 7:if(u=i.sent,t.shangpinfenleiOptions=u.data,t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){i.next=17;break}return t.ruleForm.id=n.id,i.next=15,t.$api.info("shangpinxinxi",t.ruleForm.id);case 15:u=i.sent,t.ruleForm=u.data;case 17:if(!n.cross){i.next=60;break}o=e.getStorageSync("crossObj"),i.t0=r.default.keys(o);case 20:if((i.t1=i.t0()).done){i.next=60;break}if(c=i.t1.value,"shangpinmingcheng"!=c){i.next=26;break}return t.ruleForm.shangpinmingcheng=o[c],t.ro.shangpinmingcheng=!0,i.abrupt("continue",20);case 26:if("shangpinfenlei"!=c){i.next=30;break}return t.ruleForm.shangpinfenlei=o[c],t.ro.shangpinfenlei=!0,i.abrupt("continue",20);case 30:if("guige"!=c){i.next=34;break}return t.ruleForm.guige=o[c],t.ro.guige=!0,i.abrupt("continue",20);case 34:if("xiaoliang"!=c){i.next=38;break}return t.ruleForm.xiaoliang=o[c],t.ro.xiaoliang=!0,i.abrupt("continue",20);case 38:if("tupian"!=c){i.next=42;break}return t.ruleForm.tupian=o[c],t.ro.tupian=!0,i.abrupt("continue",20);case 42:if("shangpinjieshao"!=c){i.next=46;break}return t.ruleForm.shangpinjieshao=o[c],t.ro.shangpinjieshao=!0,i.abrupt("continue",20);case 46:if("clicktime"!=c){i.next=50;break}return t.ruleForm.clicktime=o[c],t.ro.clicktime=!0,i.abrupt("continue",20);case 50:if("clicknum"!=c){i.next=54;break}return t.ruleForm.clicknum=o[c],t.ro.clicknum=!0,i.abrupt("continue",20);case 54:if("price"!=c){i.next=58;break}return t.ruleForm.price=o[c],t.ro.price=!0,i.abrupt("continue",20);case 58:i.next=20;break;case 60:t.styleChange();case 61:case"end":return i.stop()}}),i)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},clicktimeConfirm:function(e){console.log(e),this.ruleForm.clicktime=e.result,this.$forceUpdate()},shangpinfenleiChange:function(e){this.shangpinfenleiIndex=e.target.value,this.ruleForm.shangpinfenlei=this.shangpinfenleiOptions[this.shangpinfenleiIndex]},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return u(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e.ruleForm.xiaoliang||e.$validate.isIntNumer(e.ruleForm.xiaoliang)){n.next=3;break}return e.$utils.msg("销量应输入整数"),n.abrupt("return");case 3:if(!e.ruleForm.clicknum||e.$validate.isIntNumer(e.ruleForm.clicknum)){n.next=6;break}return e.$utils.msg("点击次数应输入整数"),n.abrupt("return");case 6:if(e.ruleForm.price){n.next=9;break}return e.$utils.msg("价格不能为空"),n.abrupt("return");case 9:if(!e.ruleForm.price||e.$validate.isNumber(e.ruleForm.price)){n.next=12;break}return e.$utils.msg("价格应输入数字"),n.abrupt("return");case 12:if(!e.ruleForm.id){n.next=17;break}return n.next=15,e.$api.update("shangpinxinxi",e.ruleForm);case 15:n.next=19;break;case 17:return n.next=19,e.$api.add("shangpinxinxi",e.ruleForm);case 19:e.$utils.msgBack("提交成功");case 20:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,i=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(t,"-").concat(r,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,t("543d")["default"])},"6ad7":function(e,n,t){"use strict";(function(e){t("bd8d");r(t("66fd"));var n=r(t("7196"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},7196:function(e,n,t){"use strict";t.r(n);var r=t("81f8"),i=t("d714");for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);t("be9a");var u,o=t("f0c5"),c=Object(o["a"])(i["default"],r["b"],r["c"],!1,null,"12458f48",null,!1,r["a"],u);n["default"]=c.exports},"81f8":function(e,n,t){"use strict";t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"7924"))}},i=function(){var e=this,n=e.$createElement;e._self._c},a=[]},be9a:function(e,n,t){"use strict";var r=t("07c4"),i=t.n(r);i.a},d714:function(e,n,t){"use strict";t.r(n);var r=t("1b3a"),i=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=i.a}},[["6ad7","common/runtime","common/vendor"]]]);