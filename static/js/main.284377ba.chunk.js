(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{102:function(e,t,a){},107:function(e,t,a){},151:function(e,t,a){},153:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(17),l=a.n(i),o=(a(102),a(39)),s=a(18),c=a(66),m=a(20),u={weather:null,loading:!0,error:{}},p=Object(s.c)({weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case"GET_WEATHER_DATA":return Object(m.a)({},e,{weather:n,loading:!1});case"CLEAR_WEATHER_DATA":return Object(m.a)({},e,{weather:null});case"WEATHER_DATA_ERROR":return Object(m.a)({},e,{error:n,loading:!1,weather:null});default:return e}}}),d=[c.a],h=Object(s.d)(p,{},s.a.apply(void 0,d)),v=(a(107),a(45)),f=a.n(v),g=a(67),E=a(68),T=a.n(E).a.create({headers:{"Content-Type":"application/json"}}),y=a(69),b=a.n(y),x=a(27),O=a.n(x),w=a(16),j=a(75),D=a(28),A=a.n(D),F=a(175),C=a(178),W=a(155),S=a(177),k=a(40),R=Object(n.createContext)(null),_=function(e){var t=e.children,a={unit:"fahrenheit",index:0};var i=Object(n.useReducer)((function(e,t){switch(t.type){case"SET_UNIT":return Object(m.a)({},e,{unit:t.payload});case"SET_INDEX":return Object(m.a)({},e,{index:t.payload});default:throw new Error}}),a),l=Object(k.a)(i,2),o=l[0],s=l[1],c={application:o,setUnit:function(e){return s({type:"SET_UNIT",payload:e})},setIndex:function(e){return s({type:"SET_INDEX",payload:e})}};return r.a.createElement(R.Provider,{value:c},t)},L=function(){return Object(n.useContext)(R)},N=Object(F.a)({root:{marginTop:16,textAlign:"center"},title:{fontSize:24,margin:0},smallTitle:{fontSize:16},description:{fontSize:16,fontWeight:"bold"},smallDescription:{fontSize:12},dayOfWeek:{fontSize:16},smallDayOfWeek:{fontSize:12}}),K=function(e){var t,a=e.small,n=e.date,i=e.avgTempKelvin,l=e.avgTempFahrenheit,o=e.avgTempCelsius,s=Object(j.a)(e,["small","date","avgTempKelvin","avgTempFahrenheit","avgTempCelsius"]),c=N(),m=L().application,u=(t={},Object(w.a)(t,"kelvin",i),Object(w.a)(t,"fahrenheit",l),Object(w.a)(t,"celsius",o),t);return r.a.createElement(S.a,Object.assign({className:c.root,elevation:3},s),r.a.createElement(C.a,null,r.a.createElement(W.a,{className:a?c.smallTitle:c.title,gutterBottom:!0,"data-testid":"date"},O()(n).format("MMM DD, YYYY")),r.a.createElement(W.a,{className:a?c.smallDayOfWeek:c.dayOfWeek,gutterBottom:!0,"data-testid":"day"},O()(n).format("dddd")),r.a.createElement(W.a,{component:"p",color:"secondary",className:a?c.smallDescription:c.description,"data-testid":"unit"},u[m.unit]," ",A()(m.unit))))};K.defaultProps={small:!1};var I=K,z=a(183),Y=a(19),H=a(64),M=a(186),B=a(179);a(149),a(150),a(151);Y.a.use([H.a]);var P=function(e){var t=e.children,a=L().setIndex;return r.a.createElement(M.a,{watchOverflow:!0,navigation:!0,spaceBetween:5,slidesPerView:1,onSlideChange:function(e){return a(e.activeIndex)}},r.a.Children.map(t,(function(e){return r.a.createElement(B.a,null,e)})))},U=a(6),G=a.n(U),q=a(73),J=a.n(q),X=function(e){var t,a=e.daysData,n=L().application,i=(t={},Object(w.a)(t,"kelvin",a[n.index].tempListKelvin),Object(w.a)(t,"fahrenheit",a[n.index].tempListFahrenheit),Object(w.a)(t,"celsius",a[n.index].tempListCelsius),t),l={options:{theme:{mode:"dark"},xaxis:{categories:["00-03","03-06","06-09","09-12","12-15","15-18","18-21","21-24"],title:{text:"Daily 3 Hour Segments"},labels:{style:{fontSize:"10px"}}},yaxis:{title:{text:A()(n.unit)},decimalsInFloat:0},colors:["#1976d2"],plotOptions:{bar:{columnWidth:"25%",endingShape:"rounded"}},dataLabels:{enabled:!1},grid:{yaxis:{lines:{show:!1}}}},series:[{name:A()(n.unit),data:i[n.unit]}]};return r.a.createElement(J.a,{options:l.options,series:l.series,type:"bar"})};X.defaultProps={daysData:G.a.arrayOf(G.a.shape({tempListKelvin:G.a.arrayOf(G.a.number),tempListFahrenheit:G.a.arrayOf(G.a.number),tempListCelsius:G.a.arrayOf(G.a.number)})).isRequired};var V=X,$=a(187),Q=a(188),Z=a(180),ee=a(185),te=function(){var e=L(),t=e.application,a=e.setUnit,i=Object(n.useState)(t.unit),l=Object(k.a)(i,2),o=l[0],s=l[1];return r.a.createElement($.a,{component:"fieldset"},r.a.createElement(Q.a,{row:!0,"aria-label":"temperature",name:"temperature",value:o,onChange:function(e){s(e.target.value),a(e.target.value)},"data-testid":"radioGroup"},r.a.createElement(Z.a,{value:"fahrenheit",control:r.a.createElement(ee.a,null),label:"Fahrenheit","data-testid":"fahrenheit"}),r.a.createElement(Z.a,{value:"celsius",control:r.a.createElement(ee.a,null),label:"Celsius","data-testid":"celsius"}),r.a.createElement(Z.a,{value:"kelvin",control:r.a.createElement(ee.a,null),label:"Kelvin","data-testid":"kelvin"})))},ae=a(181),ne=function(e){var t=e.daysData,a=L().application,n=a.index-1,i=a.index+1;return r.a.createElement(ae.a,{container:!0,spacing:1},r.a.createElement(ae.a,{item:!0,xs:6},n>=0&&r.a.createElement(I,{small:!0,date:t[n].date,avgTempKelvin:t[n].avgTempKelvin,avgTempFahrenheit:t[n].avgTempFahrenheit,avgTempCelsius:t[n].avgTempCelsius,"data-testid":"yesterday"})),r.a.createElement(ae.a,{item:!0,xs:6},i<t.length&&r.a.createElement(I,{small:!0,date:t[i].date,avgTempKelvin:t[i].avgTempKelvin,avgTempFahrenheit:t[i].avgTempFahrenheit,avgTempCelsius:t[i].avgTempCelsius,"data-testid":"tomorrow"})))},re=a(182),ie=Object(F.a)({root:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},text:{textAlign:"center",fontSize:24,fontWeight:"bold",marginLeft:16}}),le=function(){var e=ie();return r.a.createElement(W.a,{component:"div",className:e.root},r.a.createElement(re.a,{color:"secondary"}),r.a.createElement(W.a,{"data-testid":"loadingText",component:"div",className:e.text},"Loading..."))},oe=Object(F.a)({title:{fontSize:30,textAlign:"center",fontWeight:"bold",marginBottom:16,marginTop:16},controls:{marginTop:16,textAlign:"center"},pos:{marginTop:16}}),se=Object(o.b)((function(e){return{weather:e.weather}}),{getWeatherData:function(){return function(){var e=Object(g.a)(f.a.mark((function e(t){var a,n,r,i,l,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CLEAR_WEATHER_DATA"}),e.prev=1,e.next=4,T.get("http://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40");case 4:a=e.sent,n=a.data,r=n.city,i=n.list,l=b()(i,8),o=l.map((function(e){var t=O.a.unix(e[0].dt).format("YYYY-MM-DD"),a=e.map((function(e){return parseFloat(e.main.temp)})),n=a.map((function(e){return parseFloat((1.8*(e-273.15)+32).toFixed(2))})),r=n.map((function(e){return parseFloat((5/9*(e-32)).toFixed(2))})),i=parseFloat(e.reduce((function(e,t){return(e+t.main.temp)/2}),0).toFixed(2)),l=parseFloat((1.8*(i-273.15)+32).toFixed(2));return{date:t,avgTempKelvin:i,avgTempFahrenheit:l,avgTempCelsius:parseFloat((5/9*(l-32)).toFixed(2)),tempListKelvin:a,tempListFahrenheit:n,tempListCelsius:r}})),t({type:"GET_WEATHER_DATA",payload:{city:r,daysData:o}}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("err: ",e.t0),t({type:"WEATHER_DATA_ERROR",payload:{msg:e.t0.response.statusText,status:e.t0.response.status}});case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.getWeatherData,a=e.weather,i=a.weather,l=a.loading,o=oe();return Object(n.useEffect)((function(){t()}),[t]),l?r.a.createElement(le,null):r.a.createElement(z.a,{maxWidth:"sm"},r.a.createElement(W.a,{component:"div",className:o.title},i.city.name),r.a.createElement(W.a,{component:"div",className:o.controls},r.a.createElement(te,null)),r.a.createElement(W.a,{component:"div",className:o.pos},r.a.createElement(P,null,i.daysData.map((function(e){var t=e.date,a=e.avgTempKelvin,n=e.avgTempFahrenheit,i=e.avgTempCelsius;return r.a.createElement(I,{key:t,date:t,avgTempKelvin:a,avgTempFahrenheit:n,avgTempCelsius:i})}))),r.a.createElement(ne,{daysData:i.daysData})),r.a.createElement(W.a,{component:"div",className:o.pos},r.a.createElement(V,{daysData:i.daysData})))})),ce=a(74),me=a(184),ue=Object(ce.a)({palette:{type:"dark"}}),pe=function(){return r.a.createElement(o.a,{store:h},r.a.createElement(_,null,r.a.createElement(me.a,{theme:ue},r.a.createElement(se,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(pe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},97:function(e,t,a){e.exports=a(153)}},[[97,1,2]]]);
//# sourceMappingURL=main.284377ba.chunk.js.map