(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{10:function(e,t,a){e.exports={card:"Card_card__3MKhb",grid:"Card_grid__3qjAA",btn:"Card_btn__1icHr",done:"Card_done__1-s6X",active:"Card_active__2XdAX",textDone:"Card_textDone__6XGo6",options:"Card_options__2zSzB",icon:"Card_icon__38c_C",input:"Card_input__1HGG_"}},31:function(e,t,a){e.exports=a.p+"static/media/logo.dd6c8133.png"},34:function(e,t,a){e.exports=a(66)},39:function(e,t,a){},4:function(e,t,a){e.exports={red:"Colors_red__2umzL",green:"Colors_green__26MeA",blue:"Colors_blue__3RJOr",dark:"Colors_dark__1UBtV",default:"Colors_default__1OxFX",redB:"Colors_redB__3E4Kk",greenB:"Colors_greenB__VAT1Q",blueB:"Colors_blueB__1Wfjx",darkB:"Colors_darkB__31ZA4",defaultB:"Colors_defaultB__XvoLG"}},5:function(e,t,a){e.exports={wrapper:"Home_wrapper__21I8r",AnimationName:"Home_AnimationName__129wy",form:"Home_form__2PVZc",colorsSection:"Home_colorsSection__1qhpQ",colors:"Home_colors__Wn3v2",color:"Home_color__SxRST",colorActive:"Home_colorActive__TtI0C",input:"Home_input__g22eg",buttonSection:"Home_buttonSection__3IyhQ",button:"Home_button__2bu16"}},6:function(e,t,a){e.exports={list:"List_list__3Y7K_",background:"List_background__38Tqr",logoArea:"List_logoArea__1n3X6",logo:"List_logo___Q7N5",header:"List_header__1dY2M",titleSection:"List_titleSection__2ygVl",headerTitle:"List_headerTitle__1KaA3",title:"List_title__2nKQA",titleButton:"List_titleButton__2bwLa",copySection:"List_copySection__3tSQk",copyLink:"List_copyLink__2y28D",inputWrapper:"List_inputWrapper__haad0",input:"List_input__1a24L",addButton:"List_addButton__2tGz8"}},66:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(28),r=a.n(o),i=(a(39),a(14)),l=a(1),s=a(3),u=a(6),d=a.n(u),m=a(10),_=a.n(m),f=a(29),p=a.n(f).a.create({baseURL:"https://todo-list-4b27a.firebaseio.com/",withCredentials:!1}),b={fetchList:function(e){return p.get("storage/".concat(e,".json")).then((function(e){return e.data}))},addTask:function(e,t){return p.post("storage/".concat(e,"/items.json"),{text:t,done:!1}).then((function(e){return e.data}))},createList:function(e,t){return p.post("storage.json",JSON.stringify({name:e,color:t,items:[]})).then((function(e){return e.data}))},editTask:function(e,t,a){return p.patch("storage/".concat(e,"/items/").concat(t,".json"),{text:a.text,done:a.done}).then((function(e){return e.data}))},deleteTask:function(e,t){return p.delete("storage/".concat(e,"/items/").concat(t,".json")).then((function(e){return e.data}))},renameList:function(e,t){return p.patch("storage/".concat(e,".json"),{name:t}).then((function(e){return e.data}))}};window.API=b;var v=function(e){return c.a.createElement("div",{className:_.a.options},c.a.createElement("div",{className:_.a.icon+" "+e.colorF,onClick:e.editMode?e.saveFun:e.editFun},c.a.createElement("i",{className:e.editMode?"fas fa-check":"fas fa-pen"})," ",e.editMode?"Save":"Edit"),c.a.createElement("div",{className:_.a.icon+" "+e.colorF,onClick:e.deleteFun},c.a.createElement("i",{className:"fas fa-trash"})," Delete"))},E=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),o=a[0],r=a[1],i=Object(n.useState)(!1),l=Object(s.a)(i,2),u=l[0],d=l[1],m=Object(n.useState)(e.text),f=Object(s.a)(m,2),p=f[0],E=f[1],k=function(){b.editTask(e.list,e.id,{text:e.text,done:!e.done}).then((function(t){e.update(e.list)}))},h=function(){b.editTask(e.list,e.id,{text:p,done:e.done}).then((function(t){d(!1),e.update(e.list)}))};return c.a.createElement("div",{className:"".concat(_.a.card," ").concat(e.done?_.a.done:_.a.active)},c.a.createElement("div",{className:_.a.grid},c.a.createElement("div",{className:_.a.btn+" "+e.colorF}," ",e.done?c.a.createElement("i",{className:"fas fa-check-circle",onClick:k}):c.a.createElement("i",{className:"far fa-circle",onClick:k})),c.a.createElement("div",{className:e.done?_.a.textDone:_.a.textActive},u?c.a.createElement("input",{className:_.a.input,autoFocus:!0,value:p,onChange:function(e){E(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),h())}}):e.text),c.a.createElement("div",{className:_.a.btn+" "+e.colorF},c.a.createElement("i",{className:o?"fas fa-chevron-circle-up":"fas fa-chevron-circle-down",onClick:function(){return r(!o)}}))),o&&c.a.createElement(v,{colorF:e.colorF,hideFun:function(){r(!1)},markFun:k,deleteFun:function(){b.deleteTask(e.list,e.id).then((function(t){e.update(e.list)}))},editMode:u,editFun:function(){return d(!0)},saveFun:h}))},k=a(30),h=a(4),N=a.n(h),g=a(31),C=a.n(g),j=function(e){var t=Object(n.useState)(!1),a=Object(s.a)(t,2),o=a[0],r=a[1],i=Object(n.useState)(!1),l=Object(s.a)(i,2),u=l[0],m=l[1],_=Object(n.useState)(e.title),f=Object(s.a)(_,2),p=f[0],v=f[1];Object(n.useEffect)((function(){v(e.title)}),[e.title]);var E=function(){b.renameList(e.listId,""===p?e.title:p).then((function(t){m(!1),e.update(e.listId)}))};return c.a.createElement("div",{className:d.a.header},c.a.createElement("div",{className:d.a.titleSection},c.a.createElement("div",{className:d.a.headerTitle},u?c.a.createElement("input",{autoFocus:!0,onSubmit:E,placeholder:"New title...",onChange:function(e){v(e.target.value)},value:p}):c.a.createElement("div",{className:d.a.title},e.title||"")),c.a.createElement("div",{className:d.a.titleButton},c.a.createElement("i",{className:u?"fas fa-check":"fas fa-pen",onClick:u?E:function(){return m(!0)}}))),c.a.createElement("div",{className:d.a.copySection},c.a.createElement(k.CopyToClipboard,{text:window.location.href,onCopy:function(){return r(!0)}},c.a.createElement("div",{className:d.a.copyLink},c.a.createElement("i",{className:"fas fa-link"}),!u&&c.a.createElement("span",null,o?"Copied!":"Copy link")))))},O=function(e){var t=Object(n.useState)(""),a=Object(s.a)(t,2),o=a[0],r=a[1],i=function(){e.addTask(o),r(""),document.querySelector("#input").focus()};return c.a.createElement("div",{className:d.a.inputWrapper,id:"addCard"},c.a.createElement("input",{id:"input",placeholder:"New task...",className:d.a.input,value:o,onChange:function(e){r(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),i())}}),c.a.createElement("div",{className:d.a.addButton+" "+e.color,onClick:i},c.a.createElement("i",{className:"fas fa-plus-circle"})))},S=function(){var e=Object(l.f)().id,t=Object(n.useState)({}),a=Object(s.a)(t,2),o=a[0],r=a[1],u=Object(n.useState)(""),m=Object(s.a)(u,2),_=m[0],f=m[1],p=Object(n.useState)(N.a.default),v=Object(s.a)(p,2),k=v[0],h=v[1],g=Object(n.useState)(N.a.defaultB),S=Object(s.a)(g,2),B=S[0],L=S[1];Object(n.useEffect)((function(){x(e)}),[e]);var x=function(e){b.fetchList(e).then((function(e){switch(r(e.items),f(e.name),e.color){case"red":L(N.a.redB),h(N.a.red);break;case"blue":L(N.a.blueB),h(N.a.blue);break;case"green":L(N.a.greenB),h(N.a.green);break;case"dark":L(N.a.darkB),h(N.a.dark);break;default:L(N.a.defaultB),h(N.a.default)}}))},y=o?Object.entries(o).map((function(t){var a=Object(s.a)(t,2),n=a[0],o=a[1];if(o.done)return c.a.createElement(E,{colorF:k,done:o.done,text:o.text,key:n,id:n,list:e,update:x})})):null,w=o?Object.entries(o).map((function(t){var a=Object(s.a)(t,2),n=a[0],o=a[1];if(!o.done)return c.a.createElement(E,{colorF:k,done:o.done,text:o.text,key:n,id:n,list:e,update:x})})):null;return c.a.createElement("div",{className:"".concat(d.a.background," ").concat(B)},c.a.createElement("div",{className:d.a.logoArea},c.a.createElement(i.b,{to:"/"},c.a.createElement("img",{className:d.a.logo,alt:"logo",src:C.a}))),c.a.createElement(j,{title:_,listId:e,update:x}),c.a.createElement("div",{className:d.a.list},y,w,c.a.createElement(O,{addTask:function(t){b.addTask(e,t).then((function(t){t.name&&x(e),document.querySelector("#addCard").scrollIntoView({behavior:"auto"})}))},color:k})))},B=a(5),L=a.n(B),x=function(){var e=Object(n.useState)("red"),t=Object(s.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(""),i=Object(s.a)(r,2),u=i[0],d=i[1],m=Object(n.useState)(""),_=Object(s.a)(m,2),f=_[0],p=_[1],v=function(){b.createList(""!==u?u:"New list",a).then((function(e){p("/"+e.name)}))};return""!==f?c.a.createElement(l.a,{to:f}):c.a.createElement("div",{className:L.a.wrapper},c.a.createElement("div",{className:L.a.form},c.a.createElement("div",{className:L.a.input},c.a.createElement("input",{autoFocus:!0,onKeyPress:function(e){"Enter"===e.key&&(e.preventDefault(),v())},placeholder:"New List...",value:u,onChange:function(e){return d(e.target.value)}})),c.a.createElement("div",{className:L.a.colorsSection},c.a.createElement("div",{className:L.a.colors},c.a.createElement("div",{className:("red"===a?L.a.colorActive:L.a.color)+" "+N.a.redB,onClick:function(){return o("red")}}),c.a.createElement("div",{className:("green"===a?L.a.colorActive:L.a.color)+" "+N.a.greenB,onClick:function(){return o("green")}}),c.a.createElement("div",{className:("blue"===a?L.a.colorActive:L.a.color)+" "+N.a.blueB,onClick:function(){return o("blue")}}),c.a.createElement("div",{className:("dark"===a?L.a.colorActive:L.a.color)+" "+N.a.darkB,onClick:function(){return o("dark")}}))),c.a.createElement("div",{className:L.a.buttonSection},c.a.createElement("div",{className:L.a.button,onClick:v},"Create List"))))},y=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(i.a,null,c.a.createElement(l.b,{exact:!0,path:"/",component:x}),c.a.createElement(l.b,{exact:!0,path:"/:id",component:S})))};a(65),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.6fb7555c.chunk.js.map