(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{162:function(t,n,e){"use strict";e(163)("link",(function(t){return function(n){return t(this,"a","href",n)}}))},163:function(t,n,e){var r=e(6),o=e(9),l=e(22),c=/"/g,h=function(t,n,e,r){var o=String(l(t)),h="<"+n;return""!==e&&(h+=" "+e+'="'+String(r).replace(c,"&quot;")+'"'),h+">"+o+"</"+n+">"};t.exports=function(t,n){var e={};e[t]=n(h),r(r.P+r.F*o((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3})),"String",e)}},169:function(t,n,e){"use strict";e.r(n);e(162);var r={props:{link:{type:String,required:!1}},render:function(t){return null==this.link?t("p",this.$slots.default):t("a",{attrs:{href:this.link}},this.$slots.default)},mounted:function(){console.log(this.link)}},o=e(14),l={components:{ChangeTag:Object(o.a)(r,void 0,void 0,!1,null,"038992c2",null).exports}},c=Object(o.a)(l,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("h1",[this._v("Страница")]),n("ChangeTag",[this._v("Текст")]),n("ChangeTag",{attrs:{link:"https://google.com"}},[this._v("Ссылка")])],1)}),[],!1,null,null,null);n.default=c.exports}}]);