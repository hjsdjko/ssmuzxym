(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/register/register"],{"1bc0":function(e,n,t){"use strict";(function(e){t("bd8d");r(t("66fd"));var n=r(t("a1f1"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},9117:function(e,n,t){},a1f1:function(e,n,t){"use strict";t.r(n);var r=t("f40d"),u=t("a853");for(var a in u)"default"!==a&&function(e){t.d(n,e,(function(){return u[e]}))}(a);t("b732");var i,o=t("f0c5"),s=Object(o["a"])(u["default"],r["b"],r["c"],!1,null,"783c5098",null,!1,r["a"],i);n["default"]=s.exports},a853:function(e,n,t){"use strict";t.r(n);var r=t("bde4"),u=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);n["default"]=u.a},b732:function(e,n,t){"use strict";var r=t("9117"),u=t.n(r);u.a},bde4:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=u(t("a34a"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,r,u,a,i){try{var o=e[a](i),s=o.value}catch(l){return void t(l)}o.done?n(s):Promise.resolve(s).then(r,u)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(r,u){var i=e.apply(n,t);function o(e){a(i,r,u,o,s,"next",e)}function s(e){a(i,r,u,o,s,"throw",e)}o(void 0)}))}}var o={data:function(){return{yonghuxingbieOptions:[],yonghuxingbieIndex:0,ruleForm:{},tableName:""}},onLoad:function(){var n=this;return i(r.default.mark((function t(){var u;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:[],u=e.getStorageSync("loginTable"),n.tableName=u,"yonghu"==n.tableName&&(n.yonghuxingbieOptions="男,女".split(","),n.ruleForm.xingbie=n.yonghuxingbieOptions[0]),n.styleChange();case 5:case"end":return t.stop()}}),t)})))()},methods:{yonghuxingbieChange:function(e){this.yonghuxingbieIndex=e.target.value,this.ruleForm.xingbie=this.yonghuxingbieOptions[this.yonghuxingbieIndex]},styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},register:function(){var e=this;return i(r.default.mark((function n(){return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.zhanghao||"yonghu"!=e.tableName){n.next=3;break}return e.$utils.msg("账号不能为空"),n.abrupt("return");case 3:if(e.ruleForm.mima||"yonghu"!=e.tableName){n.next=6;break}return e.$utils.msg("密码不能为空"),n.abrupt("return");case 6:if(e.ruleForm.xingming||"yonghu"!=e.tableName){n.next=9;break}return e.$utils.msg("姓名不能为空"),n.abrupt("return");case 9:if(e.ruleForm.nianling||"yonghu"!=e.tableName){n.next=12;break}return e.$utils.msg("年龄不能为空"),n.abrupt("return");case 12:if("yonghu"!=e.tableName||!e.ruleForm.nianling||e.$validate.isIntNumer(e.ruleForm.nianling)){n.next=15;break}return e.$utils.msg("年龄应输入整数"),n.abrupt("return");case 15:if(e.ruleForm.shouji||"yonghu"!=e.tableName){n.next=18;break}return e.$utils.msg("手机不能为空"),n.abrupt("return");case 18:if("yonghu"!=e.tableName||!e.ruleForm.shouji||e.$validate.isMobile(e.ruleForm.shouji)){n.next=21;break}return e.$utils.msg("手机应输入手机格式"),n.abrupt("return");case 21:if("yonghu"!=e.tableName||!e.ruleForm.money||e.$validate.isNumber(e.ruleForm.money)){n.next=24;break}return e.$utils.msg("余额应输入数字"),n.abrupt("return");case 24:return n.next=26,e.$api.register("".concat(e.tableName),e.ruleForm);case 26:e.$utils.msgBack("注册成功");case 28:case"end":return n.stop()}}),n)})))()}}};n.default=o}).call(this,t("543d")["default"])},f40d:function(e,n,t){"use strict";var r;t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return r}));var u=function(){var e=this,n=e.$createElement;e._self._c},a=[]}},[["1bc0","common/runtime","common/vendor"]]]);