(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{466:function(e,n,t){e.exports=t(12)(141)},468:function(e,n,t){e.exports=t(12)(1)},469:function(e,n,t){e.exports=t(12)(50)},480:function(e,n,t){"use strict";t.r(n);var o=t(132),c=t.n(o),a=t(133),r=t.n(a),u=t(134),l=t.n(u),i=t(135),s=t.n(i),d=t(136),p=t.n(d),f=t(14),h=t.n(f),g=t(137),m=t(467),w=t.n(m),k=t(466),v=Object(k.createSelector)(function(e){return e.get("secondPage")},function(e){return{list:e.get("list")}}),C=t(16),E=function(e){function n(e){r()(this,n);var t=s()(this,(n.__proto__||c()(n)).call(this,e));return t.handleAdd=function(){t.props.add()},t.handleCut=function(){t.props.cut()},t.state={},t}return p()(n,e),l()(n,[{key:"render",value:function(){var e=this.props.list;return console.log(e),h.a.createElement("div",null,h.a.createElement(w.a,null,h.a.createElement("title",null,"second Page")),h.a.createElement("a",{onClick:this.handleAdd},"SecondPage"),h.a.createElement("a",{onClick:this.handleCut},"SecondPage"))}}]),n}(f.Component);n.default=Object(g.connect)(v,{add:C.d.request,cut:C.e.request})(E)}}]);