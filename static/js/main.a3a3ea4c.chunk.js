(window.webpackJsonp25_todo_app=window.webpackJsonp25_todo_app||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(7),l=a.n(r),c=(a(14),a(8)),o=a(1),s=a(2),u=a(4),d=a(3),m=a(5),p=(a(15),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"form"},i.a.createElement("div",null,"Dodaj task"),i.a.createElement("hr",null))}}]),t}(n.Component)),h=function(e){var t=e.task,a=t.id,n=t.text,r=t.date;t.important,t.active,t.finishDate;return i.a.createElement("div",null,i.a.createElement("p",null,i.a.createElement("strong",null,n)," - do ",i.a.createElement("span",null,r," "),i.a.createElement("button",{onClick:function(){return e.change(a)}},"Zosta\u0142o zrobione"),i.a.createElement("button",{onClick:function(){return e.delete(a)}},"X")))},f=function(e){var t=e.tasks.map(function(t){return i.a.createElement(h,{key:t.id,task:t,delete:e.delete,change:e.change})});return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"active"},i.a.createElement("h3",null,"Zadania do zrobienia (",t.length,")"),t),i.a.createElement("hr",null),i.a.createElement("div",{className:"done"},i.a.createElement("h4",null,"Zadania zrobione (0)")),i.a.createElement("hr",null))},k=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={tasks:[{id:0,text:"zagra\u0107 wreszcie w Wied\u017amina 3",date:"2018-02-15",important:!0,active:!0,finishDate:null},{id:1,text:"zrobi\u0107 dobry uczynek",date:"2020-11-12",important:!1,active:!0,finishDate:null},{id:2,text:"pomalowa\u0107 dom po sylwestrze",date:"2019-09-11",important:!1,active:!0,finishDate:null},{id:3,text:"schudn\u0105\u0107 30 kilogram\xf3w",date:"2019-05-20",important:!0,active:!0,finishDate:null},{id:4,text:"sprzeda\u0107 butelki po piwie (20 skrzynek)",date:"2020-11-12",important:!1,active:!0,finishDate:null},{id:5,text:"jeszcze raz pomalowa\u0107 dom",date:"2019-09-11",important:!1,active:!0,finishDate:null},{id:6,text:"fryzjer!!!",date:"2019-05-20",important:!0,active:!0,finishDate:null},{id:7,text:"nie odbiera\u0107 poleconego od komornika",date:"2020-09-11",important:!1,active:!0,finishDate:null},{id:8,text:"kupi\u0107 2 butelki litrowe",date:"2019-09-11",important:!1,active:!0,finishDate:null}]},a.deleteTask=function(e){var t=Object(c.a)(a.state.tasks),n=t.findIndex(function(t){return t.id===e});t.splice(n,1),a.setState({tasks:t})},a.changeTaskStatus=function(e){var t=Array.from(a.state.tasks);t.forEach(function(t){t.id===e&&(t.active=!1,t.finishDate=(new Date).getTime())}),a.setState({tasks:t})},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"ToDo - app"),i.a.createElement(p,null),i.a.createElement(f,{tasks:this.state.tasks,delete:this.deleteTask,change:this.changeTaskStatus}))}}]),t}(n.Component);l.a.render(i.a.createElement(k,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.a3a3ea4c.chunk.js.map