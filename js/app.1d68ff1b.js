(function(e){function t(t){for(var r,o,i=t[0],s=t[1],u=t[2],l=0,h=[];l<i.length;l++)o=i[l],a[o]&&h.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(h.length)h.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={3:0},a={3:0},c=[];function i(e){return s.p+"js/"+({0:"vendors~group-routes",1:"group-routes"}[e]||e)+"."+{0:"8763ad02",1:"330625fb"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={1:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({0:"vendors~group-routes",1:"group-routes"}[e]||e)+"."+e+"."+{0:"31d6cfe0",1:"ba564148"}[e]+".css",o=s.p+r,a=document.getElementsByTagName("link"),c=0;c<a.length;c++){var i=a[c],u=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(u===r||u===o))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){i=l[c],u=i.getAttribute("data-href");if(u===r||u===o)return t()}var h=document.createElement("link");h.rel="stylesheet",h.type="text/css",h.onload=t,h.onerror=function(t){var r=t&&t.target&&t.target.src||o,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.request=r,n(a)},h.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(h)}).then(function(){o[e]=0}));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise(function(t,n){r=a[e]=[t,n]});t.push(r[2]=c);var u=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var h=setTimeout(function(){f({type:"timeout",target:l})},12e4);function f(t){l.onerror=l.onload=null,clearTimeout(h);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,c=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");c.type=r,c.request=o,n[1](c)}a[e]=void 0}}l.onerror=l.onload=f,u.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},s.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var h=0;h<u.length;h++)t(u[h]);var f=l;c.push([5,2]),n()})({5:function(e,t,n){e.exports=n("Vtdi")},JIzu:function(e,t,n){},Q0Q9:function(e,t,n){"use strict";var r=n("JIzu"),o=n.n(r);o.a},Rkpx:function(e,t,n){},Vtdi:function(e,t,n){"use strict";n.r(t);n("VRzm");var r=n("oCYn"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:{standalone:e.standalone},attrs:{id:"app"}},[n("router-view",{staticClass:"content"})],1)},a=[],c=n("yT7P"),i=n("L2JU"),s={name:"App",computed:Object(c["a"])({},Object(i["d"])(["standalone"])),mounted:function(){var e=this,t=document.body;this.standalone?t.classList.add("standalone"):t.classList.add("default"),setTimeout(function(){window.scrollTo(0,1)},1e3),navigator.share&&navigator.share({title:"Web Fundamentals",text:"Check out Web Fundamentals — it rocks!",url:"https://developers.google.com/web"}).then(function(){return console.log("Successful share")}).catch(function(e){return console.log("Error sharing",e)}),window.addEventListener("online",function(){console.log("online"),e.$store.dispatch("online",navigator.onLine)}),window.addEventListener("offline",function(){console.log("offline"),e.$store.dispatch("online",navigator.onLine)})}},u=s,l=(n("Q0Q9"),n("KHd+")),h=Object(l["a"])(u,o,a,!1,null,"25e4658a",null),f=h.exports,p=n("vDqi"),d=n.n(p),m=(n("ls82"),n("MECJ")),g=n("xmWZ"),v=n("qpph"),E=function(){function e(){Object(g["a"])(this,e)}return Object(v["a"])(e,null,[{key:"all",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return console.log("fetch absences",e),d.a.get(this.endpoint,{params:e})}},{key:"get",value:function(e){return d.a.get("".concat(this.endpoint,"/").concat(e))}},{key:"save",value:function(e){return console.log("POST",e),d.a.post(this.endpoint,e)}},{key:"update",value:function(e,t){return d.a.put("".concat(this.endpoint,"/").concat(e),t)}},{key:"delete",value:function(e){return d.a.delete("".concat(this.endpoint,"/").concat(e))}},{key:"endpoint",get:function(){return"".concat("https://ve0ytkrvvc.execute-api.eu-central-1.amazonaws.com/development","/absences")}}]),e}(),w=function(){function e(){Object(g["a"])(this,e)}return Object(v["a"])(e,null,[{key:"all",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return d.a.get(this.endpoint,{params:e})}},{key:"get",value:function(e){return d.a.get("".concat(this.endpoint,"/").concat(e))}},{key:"save",value:function(e){return console.log("POST",e),d.a.post(this.endpoint,e)}},{key:"update",value:function(e,t){return d.a.put("".concat(this.endpoint,"/").concat(e),t)}},{key:"delete",value:function(e){return console.log("*** Delete",e),d.a.delete("".concat(this.endpoint,"/").concat(e.timestamp))}},{key:"endpoint",get:function(){return"".concat("https://ve0ytkrvvc.execute-api.eu-central-1.amazonaws.com/development","/records")}}]),e}(),S=function(){function e(){Object(g["a"])(this,e)}return Object(v["a"])(e,null,[{key:"get",value:function(e){return console.log("*** GET /balance","".concat(this.endpoint,"/").concat(e)),d.a.get("".concat(this.endpoint,"/").concat(e))}},{key:"endpoint",get:function(){return"".concat("https://ve0ytkrvvc.execute-api.eu-central-1.amazonaws.com/development","/balance")}}]),e}(),T={online:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:r=t.commit,r("SET_ONLINE",n);case 2:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),navigate:function(e,t){var n=e.commit;n("SET_PAGE",t)},setMessage:function(e,t){var n=e.commit;n("SET_MESSAGE",t)},setDateAndFetch:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,n){var r,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,t.state,o=t.dispatch,t.getters,console.log("**** setDateAndFetch",n),e.next=4,o("fetchMonthRecords",n.getMonth()+1);case 4:r("SET_SELECTED_DAY",n);case 5:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),setCurrentDate:function(e,t){var n=e.commit;n("SET_SELECTED_DAY",t)},setLoading:function(e){var t=e.commit;t("SET_LOADING",!0)},resetLoading:function(e){var t=e.commit;setTimeout(function(){t("SET_LOADING",!1)},500)},fetchBalance:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t){var n,r,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,r=t.getters,console.log("*** fetchBalance"),e.next=4,S.get(r.currentUserId).catch(function(e){e.response.status&&n("SET_MESSAGE",e.message)});case 4:o=e.sent,console.log("*** Action - fetchBalance - response",o.data),n("SET_BALANCE",o.data);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),fetchMonthRecords:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,n){var r,o,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(r=t.commit,o=t.getters,console.log("**** fetchMonthRecords",n),n===o.currentMonthNumber){e.next=12;break}return console.log("Fetch records for month:",n,o.currentMonthNumber),r("SET_FETCHING",!0),e.next=7,w.all({month:n||o.currentMonthNumber}).catch(function(e){e.response.status&&r("SET_MESSAGE",e.message)});case 7:a=e.sent,r("SET_RECORDS",a.data),r("SET_FETCHING",!1),e.next=13;break;case 12:console.log("Records for month:",n,"aleady cached!");case 13:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),fetchRecords:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t){var n,r,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,r=t.getters,n("SET_FETCHING",!0),e.next=4,w.all({week:r.currentWeekNumber}).catch(function(e){e.response.status&&n("SET_MESSAGE",e.message)});case 4:o=e.sent,n("SET_RECORDS",o.data),n("SET_FETCHING",!1);case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),updateRecord:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,n){var r,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,r("SET_LOADING",!0),e.next=4,w.save(n).catch(function(e){e.response.status&&r("SET_MESSAGE",e.message)});case 4:o=e.sent,r("ADD_RECORD",o.data);case 6:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),saveRecord:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,n){var r,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,r("SET_LOADING",!0),e.next=4,w.save(n).catch(function(e){e.response.status&&r("SET_MESSAGE",e.message)});case 4:o=e.sent,r("ADD_RECORD",o.data),r("SET_LOADING",!1);case 7:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),deleteRecord:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,r("SET_LOADING",!0),e.next=4,w.delete(n).catch(function(e){e.response.status&&r("SET_MESSAGE",e.message)});case 4:r("DELETE_RECORD",n),r("SET_LOADING",!1),console.log("removed");case 7:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),fetchMonthAbsences:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,n){var r,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,r("SET_FETCHING",!0),e.next=4,E.all({month:n}).catch(function(e){e.response.status&&r("SET_MESSAGE",e.message)});case 4:o=e.sent,r("SET_ABSENCES",o.data),r("SET_FETCHING",!1);case 7:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}(),saveAbsence:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,n,r){var o,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return o=t.commit,a=t.dispatch,o("SET_LOADING",!0),e.next=4,E.save(n,r).catch(function(e){e.response.status&&o("SET_MESSAGE",e.message)});case 4:return e.next=6,a("fetchMonthRecords");case 6:o("SET_LOADING",!1),setTimeout(Object(m["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a("fetchBalance");case 2:case"end":return e.stop()}},e,this)})),2e3);case 8:case"end":return e.stop()}},e,this)}));return function(t,n,r){return e.apply(this,arguments)}}(),deleteAbsence:function(){var e=Object(m["a"])(regeneratorRuntime.mark(function e(t,n){var r,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,o=t.dispatch,r("SET_LOADING",!0),e.next=4,w.delete(n).catch(function(e){e.response.status&&r("SET_MESSAGE",e.message)});case 4:return e.next=6,o("fetchMonthRecords");case 6:r("SET_LOADING",!1),setTimeout(Object(m["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o("fetchBalance");case 2:case"end":return e.stop()}},e,this)})),2e3);case 8:case"end":return e.stop()}},e,this)}));return function(t,n){return e.apply(this,arguments)}}()},D=(n("rGqo"),{SET_ONLINE:function(e,t){e.online=t},SET_MESSAGE:function(e,t){e.message=t,setTimeout(function(){e.message=null},1e4)},SET_LOADING:function(e,t){t?e.loading=t:setTimeout(function(){e.loading=t},500)},SET_FETCHING:function(e,t){t?e.fetching=t:setTimeout(function(){e.fetching=t},500)},SET_PAGE:function(e,t){r["a"].set(e,"page",t)},SET_SELECTED_DAY:function(e,t){r["a"].set(e,"currentDate",t)},SET_BALANCE:function(e,t){r["a"].set(e,"balance",t)},SET_RECORDS:function(e,t){var n={};t.forEach(function(e){return n[e.date]=e}),e.records=n,console.log(e.records)},ADD_RECORD:function(e,t){console.log("ADD_RECORD"),r["a"].set(e.records,t.date,t)},DELETE_RECORD:function(e,t){console.log("DELETE_RECORD"),r["a"].delete(e.records,t.date)},SET_ABSENCES:function(e,t){var n={};t.forEach(function(e){return n[e.date]=e}),e.absences=n},ADD_ABSENCE:function(e,t){console.log("ADD_ABSENCE"),r["a"].set(e.records,t.date,t)}}),_=(n("Zz4T"),n("gfz1")),b=n.n(_),k={currentUserId:function(e){return e.profile.sub},currentFomatedDate:function(e){return e.currentDate.toDateString()},currentWeekNumber:function(e){return b()(new Date(e.currentDate))},currentMonthNumber:function(e){return new Date(e.currentDate).getMonth()+1},currentRecord:function(e){return e.records[e.currentDate.toDateString()]}},y=n("wqGF");r["a"].use(i["a"]);var A=new i["a"].Store({state:{page:"page-2",online:navigator.onLine,standalone:window.navigator.standalone||window.matchMedia("(display-mode: standalone)").matches,fetching:!1,loading:!1,currentDate:Object(y["b"])(),absences:{},records:{},balance:{total:0,vacation:0,sickness:0},debug:!1,message:null,profile:JSON.parse(localStorage.getItem("profile")),baseUri:"https://ve0ytkrvvc.execute-api.eu-central-1.amazonaws.com/development"},actions:T,mutations:D,getters:k}),O=A,R=(n("f3/d"),n("jE9Z"));r["a"].use(R["a"]);var x=function(e){return function(t){return Promise.all([n.e(0),n.e(1)]).then(function(){return t(n("GwNf")("./".concat(e)))}.bind(null,n)).catch(n.oe)}},I=new R["a"]({mode:"history",linkActiveClass:"active",routes:[{path:"/",name:"Index",component:x("Index"),meta:{requiresAuth:!0},props:{page:"page-2"}},{path:"/report",name:"Time",component:x("Index"),props:{page:"page-1"}},{path:"/time",name:"Time",component:x("Index"),props:{page:"page-2"}},{path:"/absence",name:"Time",component:x("Index"),props:{page:"page-3"}},{path:"/login",name:"Login",component:x("Auth"),props:function(e){return{message:e.query.message,action:"login"}}},{path:"/logout",name:"Logout",component:x("Auth"),props:{action:"logout"}},{path:"/callback",name:"Callback",component:x("Callback")},{path:"/settings",name:"Settings",component:x("Settings")},{path:"/playground",name:"Playground",component:x("Playground")}]});I.beforeEach(function(e,t,n){console.log("beforeEach - navigate from",t.name,t.fullPath,"to",e.name,e.fullPath),e.meta.requiresAuth&&(P.isAuthenticated()?(console.log("Authenticated"),n()):(console.log("Not authenticated"),n({path:"/login"}))),e.matched.length?n():n({path:"/"})});var N=I,C=(n("Rkpx"),n("91GP"),n("W86A")),G=n.n(C),j={domain:"work-life-balance.eu.auth0.com",clientID:"Uwn1T7EyBw83RQ5FEVRzHoc0E6MB1UaT",responseType:"token id_token",audience:"https://work-life-balance.eu.auth0.com/api/v2/",scope:"openid email profile",redirectUri:"".concat(window.location.origin,"/callback")},L=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};Object(g["a"])(this,e),this.config=Object.assign(j,t.config||{}),this.router=N,this.store=t.store||window.localStorage,this.auth=new G.a.WebAuth(this.config)}return Object(v["a"])(e,[{key:"login",value:function(e,t){var n=this;this.auth.client.login({realm:"Username-Password-Authentication",username:e,password:t},function(e,t){e?n.router.push({path:"login",query:{message:JSON.stringify(e)}}):(n._setSession(t),n.router.push("/"))})}},{key:"signup",value:function(){this.auth.authorize({})}},{key:"handleCallback",value:function(e){var t=this;arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.href;console.log("*** handleCallback"),this.auth.parseHash(e,function(n,r){console.log("Hash",e),console.log("Hash",n),console.log("Hash",r),n?t.router.push({path:"login",query:{message:JSON.stringify(n)}}):(t._setSession(r),t.router.push("/"))})}},{key:"renewToken",value:function(){return this._checkSession()}},{key:"isAuthenticated",value:function(){var e=this.store.getItem("expires_at");return!!((new Date).getTime()<parseInt(e))}},{key:"getProfile",value:function(){return this.isAuthenticated()?this.store.getItem("profile"):this._checkSession()}},{key:"logout",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.store.removeItem("access_token"),this.store.removeItem("id_token"),this.store.removeItem("expires_at"),this.store.removeItem("profile"),this.auth.logout({returnTo:e.returnTo||window.location.href})}},{key:"_checkSession",value:function(){var e=this;this.auth.checkSession({},function(t,n){t?alert("Error",t):e._setSession(n)})}},{key:"_setSession",value:function(e){var t=this;this.store.setItem("access_token",e.accessToken),this.store.setItem("id_token",e.idToken),this.store.setItem("expires_at",1e3*e.expiresIn+Date.now()),this.auth.client.userInfo(e.accessToken,function(e,n){t.store.setItem("profile",JSON.stringify(n))})}}]),e}(),M=new L({router:N});window.AuthService=M;var P=t["default"]=M;d.a.interceptors.request.use(function(e){return e.headers={Authorization:localStorage.access_token},e},function(e){return Promise.reject(e)}),Object.defineProperty(r["a"].prototype,"$http",{value:d.a}),r["a"].config.productionTip="true"===Object({VUE_APP_BASE_URI:"https://ve0ytkrvvc.execute-api.eu-central-1.amazonaws.com/development",VUE_APP_DEBUG:"true",VUE_APP_PRODUCTION_TIP:"false",NODE_ENV:"production",BASE_URL:"/"}).VUE_PRODUCTION_TIP,new r["a"]({store:O,router:N,render:function(e){return e(f)}}).$mount("#app")},wqGF:function(e,t,n){"use strict";n.d(t,"c",function(){return k}),n.d(t,"k",function(){return y}),n.d(t,"l",function(){return A}),n.d(t,"j",function(){return O}),n.d(t,"g",function(){return R}),n.d(t,"d",function(){return x}),n.d(t,"i",function(){return I}),n.d(t,"h",function(){return N}),n.d(t,"f",function(){return C}),n.d(t,"b",function(){return G}),n.d(t,"a",function(){return L}),n.d(t,"e",function(){return M});n("KKXr"),n("VRzm");var r=n("HMbd"),o=n.n(r),a=n("cPJV"),c=n.n(a),i=n("tMf1"),s=n.n(i),u=n("QXXb"),l=n.n(u),h=n("xMJQ"),f=n.n(h),p=n("lCuP"),d=n.n(p),m=n("1vin"),g=n.n(m),v=n("OBTA"),E=n.n(v),w=n("x84W"),S=n.n(w),T=n("mthE"),D=n.n(T),_=n("J4N1"),b=n.n(_);function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return new Date(e.toUTCString())}function y(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=new Date(e).getTime(),n=new Date(e.getFullYear(),0,1);return Math.ceil((t-n+1)/6048e5)}function A(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(new Date).getFullYear(),n=new Date(t,0,1+7*(e-1)),r=n;return n.getDay()<=4?r.setDate(n.getDate()-n.getDay()+1):r.setDate(n.getDate()+8-n.getDay()),r}function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return f()(s()(e),l()(e)).map(function(e){return o()(e,1)})}function R(e){var t=E()(new Date,e-1);return f()(d()(t),g()(t))}function x(e){return e>=8&&e<=9}function I(e){if(e){var t=e.split(":");return parseFloat(parseInt(t[0],10)+"."+parseInt(t[1]/6*10,10))}}function N(e,t){return e&&t?new Date("".concat(c()(e,"YYYY/MM/DD")," ").concat(t)):new Date}function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return D()(e)}function G(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return C(e)?(console.warn("Return start of the week",S()(e,{weekStartsOn:1})),S()(e,{weekStartsOn:1})):e}function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=6e4*t,r=new Date(Math.round(e.getTime()/n)*n);return r}function L(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"HH:mm";return c()(j(e,5),t)}function M(e){return b.a.holidayCheck(new Date(e.toDateString()),"BY")}}});
//# sourceMappingURL=app.1d68ff1b.js.map