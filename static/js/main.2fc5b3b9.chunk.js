(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{8:function(t,e,n){t.exports=n(9)},9:function(t,e,n){"use strict";n.r(e);var o=n(2),a=n(3),r=n(6),c=n(4),i=n(7),u=n(0),l=n.n(u),s=n(5),d=n.n(s),w=function(t){function e(t){var n;return Object(o.a)(this,e),(n=Object(r.a)(this,Object(c.a)(e).call(this,t))).state={lat:null},window.navigator.geolocation.getCurrentPosition(function(t){n.setState({lat:t.coords.latitude})},function(t){return console.log(t)}),n}return Object(i.a)(e,t),Object(a.a)(e,[{key:"render",value:function(){return l.a.createElement("div",null,"Latitude: ",this.state.lat," ")}}]),e}(l.a.Component);d.a.render(l.a.createElement(w,null),document.querySelector("#root"))}},[[8,1,2]]]);
//# sourceMappingURL=main.2fc5b3b9.chunk.js.map