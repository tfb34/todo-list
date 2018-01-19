!function(t){function e(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var o={};e.m=t,e.c=o,e.d=function(t,o,n){e.o(t,o)||Object.defineProperty(t,o,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var o=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(o,"a",o),o},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=7)}([function(t,e,o){"use strict";function n(t,e,o,n){this._task=t,this._dueDate=e,this._priority=o,this._completion=n}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;var r=o(1),i=function(t){return t&&t.__esModule?t:{default:t}}(r);n.prototype.getTask=function(){return this._task},n.prototype.getDueDate=function(){return this._dueDate},n.prototype.getPriority=function(){return this._priority},n.prototype.getCompletionStatus=function(){return this._completion},n.prototype.changeTask=function(t){this._task=t},n.prototype.changePriority=function(t){this._priority=t,(0,i.default)()},n.prototype.changeDueDate=function(t){this._dueDate=t,(0,i.default)()},n.prototype.changeCompletionStatus=function(){this._completion?this._completion=!1:this._completion=!0,(0,i.default)()}},function(t,e,o){"use strict";function n(){console.log("saveData..."),localStorage.setItem("projects",JSON.stringify(i.default))}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;var r=o(4),i=function(t){return t&&t.__esModule?t:{default:t}}(r)},function(t,e,o){"use strict";function n(t){this._name=t,this._todos=[]}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;var r=o(0);!function(t){t&&t.__esModule}(r);n.prototype.getName=function(){return this._name},n.prototype.getTodos=function(){return this._todos},n.prototype.changeName=function(t){this._name=t},n.prototype.addTodo=function(t){this._todos.push(t)}},function(t,e,o){"use strict";function n(t){console.log("hideShow called");var e=document.getElementById(t);console.log("before:  "+e.style.display),"none"!==e.style.display&&e.style.display?e.style.display="none":("projectForm"===t&&r(),e.style.display="block"),console.log(e.style.display)}function r(){var t=document.getElementById("projectForm");t[0].textLength>0&&(t[0].value="")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n},function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var r=o(2),i=n(r),l=o(0),u=n(l);t.exports=function(){function t(t){r.push(t)}function e(t){return r.filter(function(e){return e.getName()===t})[0]}function o(){return r[r.length-1]}function n(){for(console.log("initialize called...");r.length>0;)r.pop();var t=JSON.parse(localStorage.getItem("projects"));console.log(t);for(var e=0;e<t.list.length;e++){console.log(e);var o=t.list[e]._name,n=new i.default(o);console.log(n),r.push(n);var l=t.list[e]._todos;console.log(l),console.log(l.length);for(var a=0;a<l.length;a++){var d=l[a],c=new u.default(d._task,d._dueDate,d._priority,d._completion);n.addTodo(c)}}}var r=[new i.default("Shopping"),new i.default("Work"),new i.default("Errands"),new i.default("Books to Read"),new i.default("Movies to Watch")];return{list:r,add:t,get:e,last:o,initialize:n}}()},function(t,e,o){"use strict";function n(){document.getElementById("AddTaskButton").setAttribute("onclick","showTaskForm()")}function r(){var t=document.getElementsByTagName("body")[0],e=document.getElementById("taskForm");t.removeChild(e),n()}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},function(t,e,o){"use strict";var n=o(10),r=function(t){return t&&t.__esModule?t:{default:t}}(n);t.exports=function(){function t(t,d){console.log("generateTodoElement called...");var c=document.createElement("li");c.setAttribute("class","clearfix todo"),c.setAttribute("id","todo"+t);var s=e(t),p=o(),m=n(t),f=i(t);s.appendChild(f),u(f,d);var g=l(t,d);p.appendChild(g);var h=r.default.createTodoMenuButton();m.appendChild(h);var v=r.default.createTodoMenu(t);c.appendChild(s),c.appendChild(p),c.appendChild(m),c.appendChild(v),document.getElementById("list").appendChild(c),a(g,t,d)}function e(t){var e=document.createElement("div");return e.setAttribute("class","statusWrapper"),e.setAttribute("id","statusWrapper"+t),e.setAttribute("onclick","toggleCompletion(this.id)"),e}function o(){var t=document.createElement("div");return t.setAttribute("class","taskWrapper"),t}function n(t){var e=document.createElement("div");e.setAttribute("class","todoMenuWrapper");var o="todoMenu"+t,n="hideShow('"+o+"')";return e.setAttribute("onclick",n),e}function i(t){var e=document.createElement("div");return e.setAttribute("class","taskStatus"),e.setAttribute("id","status"+t),e}function l(t,e){var o=document.createElement("p"),n="task"+t;return o.setAttribute("id",n),o.innerHTML=e.getTask(),o}function u(t,e){var o=t.classList,n=e.getPriority();"priority 1"===n?o.add("p1Color"):"priority 2"===n?o.add("p2Color"):"priority 3"===n?o.add("p3Color"):o.add("p4Color"),console.log(o)}function a(t,e,o){console.log("_editTodoStatus.."),console.log(o.getCompletionStatus());var n=document.getElementById("todo"+e);o.getCompletionStatus()?(n.style.backgroundColor="rgb(226, 224, 224,0.5)",t.style.textDecorationLine="line-through"):(t.style.textDecorationLine="none",n.style.backgroundColor="white"),console.log(o.getCompletionStatus())}return{renderTodoElement:t}}()},function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t){console.log("toggleComplete..."),console.log(t);var e=c(t),o=g.default.get(document.getElementById("project").innerHTML);console.log(o),console.log(e);var n=o.getTodos()[e];console.log(n),console.log(n.getCompletionStatus());var r=document.getElementById("task"+e),i=document.getElementById("todo"+e);n.getCompletionStatus()?(i.style.backgroundColor="white",r.style.textDecorationLine="none"):(r.style.textDecorationLine="line-through",i.style.backgroundColor="rgb(226, 224, 224,0.5)"),n.changeCompletionStatus(),console.log(n.getCompletionStatus())}function i(t){d(4,t)}function l(t){d(3,t)}function u(t){d(2,t)}function a(t){d(1,t)}function d(t,e){console.log("changePriority");var o=document.getElementById("project").innerHTML,n=g.default.get(o),r=c(e);console.log("line52");var i=n.getTodos()[r];i.changePriority("priority "+t),console.log(i);var l=document.getElementById("status"+r);console.log(l);var u="taskStatus p"+t+"Color";console.log(u),l.className=u,(0,E.default)("todoMenu"+r)}function c(t){return console.log("getIndex"),parseInt(t.match(/(\d[\d\.]*)/g))}function s(){var t=document.getElementById("project").innerHTML;console.log(t);var e=window.confirm("Are you sure you want to delete project "+t+"?");console.log(e),e&&g.default.remove(t),(0,E.default)("settings")}var p=o(0),m=(n(p),o(2)),f=(n(m),o(4)),g=n(f),h=o(8),v=n(h),y=o(5),b=n(y),A=o(9),C=n(A),_=o(3),E=n(_),T=o(11),w=n(T),k=o(12),j=n(k),M=o(13),P=n(M),B=o(1),I=n(B);localStorage.getItem("projects")?(console.log("localStorage found"),g.default.initialize()):(0,I.default)(),document.onreadystatechange=function(){"complete"===document.readyState&&(0,P.default)()},window.removeTaskForm=b.default,window.showTaskForm=v.default,window.handleNewTodo=w.default,window.projects=g.default,window.hideShow=E.default,window.renderPage=C.default,window.newProjectHandler=j.default,window.changeToPriority4=i,window.changeToPriority3=l,window.changeToPriority2=u,window.changeToPriority1=a,window.toggleCompletion=r,window.deleteProject=s},function(t,e,o){"use strict";function n(){i(r()),l()}function r(){console.log("creating form");var t=document.createElement("form");t.setAttribute("name","taskForm"),t.setAttribute("id","taskForm");var e=document.createElement("input");e.setAttribute("name","task"),e.setAttribute("type","text"),e.setAttribute("placeholder","Practice guitar for 30mins"),e.setAttribute("class","formTextInput"),e.setAttribute("maxlength","100");var o=document.createElement("select");o.id="selectPriority",o.setAttribute("name","selectPriority");for(var n=0;n<u.length;n++){var r=document.createElement("option");r.setAttribute("value",u[n]),r.text=u[n],o.appendChild(r)}var i=document.createElement("input");i.setAttribute("type","button"),i.id="submitTaskButton",i.setAttribute("value","Add Task"),i.setAttribute("onclick","handleNewTodo()"),i.setAttribute("class","formButton");var l=document.createElement("a");return l.setAttribute("href","#"),l.innerHTML="Cancel",l.setAttribute("onclick","removeTaskForm()"),l.setAttribute("class","cancelButton"),t.appendChild(e),t.appendChild(i),t.appendChild(l),t.appendChild(o),t}function i(t){console.log("showing Form"),document.getElementsByTagName("body")[0].appendChild(t)}function l(){document.getElementById("AddTaskButton").setAttribute("onclick","")}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n;var u=["priority 4","priority 3","priority 2","priority 1"]},function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t){console.log("You clicked on "+t),(0,a.default)("menu");var e=document.getElementById("project");e.innerHTML!==t&&(i(),e.innerHTML=t,l(t))}function i(){for(var t=document.getElementById("list");t.firstChild;)t.removeChild(t.firstChild);document.getElementById("date").innerHTML=""}function l(t){console.log("displayTodos called...");for(var e=projects.get(t),o=e.getTodos(),n=0;n<o.length;n++)c.default.renderTodoElement(n,o[n])}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var u=o(3),a=n(u),d=o(6),c=n(d)},function(t,e,o){"use strict";t.exports=function(){function t(){var t=document.createElement("div");t.setAttribute("class","todoMenuButton");var e=document.createElement("div"),o=document.createElement("div"),n=document.createElement("div");return t.appendChild(e),t.appendChild(o),t.appendChild(n),t}function e(t){console.log("createTodoMenu");var e="todoMenu"+t,n=document.createElement("div");n.setAttribute("class","todoMenu"),n.setAttribute("id",e),console.log("line 38");var r=o(t);return console.log(n),n.appendChild(r),console.log(n),n}function o(t){var e="todoMenu"+t,o=document.createElement("div");o.setAttribute("class","priorityOptions");var n=document.createElement("p");n.innerHTML="Priority";var r=document.createElement("div");r.setAttribute("class","wrapper");var i=document.createElement("div");i.setAttribute("class","priorityOption p4Color"),i.setAttribute("id",e),i.setAttribute("onclick","changeToPriority4(this.id)");var l=document.createElement("div");l.setAttribute("class","priorityOption p3Color"),l.setAttribute("id",e),l.setAttribute("onclick","changeToPriority3(this.id)");var u=document.createElement("div");u.setAttribute("class","priorityOption p2Color"),u.setAttribute("id",e),u.setAttribute("onclick","changeToPriority2(this.id)");var a=document.createElement("div");return a.setAttribute("class","priorityOption p1Color"),a.setAttribute("id",e),a.setAttribute("onclick","changeToPriority1(this.id)"),r.appendChild(i),r.appendChild(l),r.appendChild(u),r.appendChild(a),o.appendChild(n),o.appendChild(r),console.log(o),o}return{createTodoMenuButton:t,createTodoMenu:e}}()},function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(){if(!i())return void console.log("not valid");l(),(0,g.default)(),(0,d.default)()}function i(){var t=!1;return document.forms.taskForm.task.value&&(t=!0),t}function l(){console.log("createNewTodo");var t=document.forms.taskForm.task.value,e=document.forms.taskForm.selectPriority,o=e.options[e.selectedIndex].text,n=new Date;console.log(n.toDateString());var r=new s.default(t,n.toDateString(),o,!1);console.log(r);var i=projects.get(document.getElementById("project").innerHTML);console.log("line39"),i.addTodo(r),console.log("line41"),u(r)}function u(t){console.log("generateTodoElement");var e=projects.get(document.getElementById("project").innerHTML),o=e.getTodos().length-1;m.default.renderTodoElement(o,t)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var a=o(5),d=n(a),c=o(0),s=n(c),p=o(6),m=n(p),f=o(1),g=n(f)},function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(){var t=document.getElementById("projectForm");if(i(t)){var e=new c.default(t[0].value);projects.add(e),(0,p.default)(),l(),(0,a.default)(t.id)}}function i(t){var e=!0,o=projects.get(t[0].value),n=t[0].textLength;return(o||n<=0)&&(e=!1),e}function l(){var t=document.getElementById("projectList"),e=document.createElement("li");e.setAttribute("id",projects.last().getName()),e.setAttribute("onclick","renderPage(this.id)");var o=document.createElement("p");o.innerHTML=projects.last().getName(),e.appendChild(o),t.appendChild(e)}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r;var u=o(3),a=n(u),d=o(2),c=n(d),s=o(1),p=n(s)},function(t,e,o){"use strict";function n(){var t=document.getElementById("menu"),e=r(),o=i(),n=l();t.appendChild(e),t.appendChild(n),t.appendChild(o),document.getElementById("projectForm").style.display="none",t.style.display="none"}function r(){var t=document.createElement("ul");t.setAttribute("id","projectList");for(var e=0;e<projects.list.length;e++){var o=document.createElement("li");o.setAttribute("id",projects.list[e].getName()),o.setAttribute("onclick","renderPage(this.id)");var n=document.createElement("p");n.innerHTML=projects.list[e].getName(),o.appendChild(n),t.appendChild(o)}return t}function i(){var t=document.createElement("span"),e=document.createElement("span"),o=document.createElement("a");return t.setAttribute("id","AddProject"),t.setAttribute("onclick","hideShow('projectForm')"),e.innerHTML="+",o.innerHTML="Add Project",o.setAttribute("href","#"),t.appendChild(e),t.appendChild(o),t}function l(){var t=document.createElement("form");t.setAttribute("id","projectForm");var e=document.createElement("input");e.setAttribute("type","text"),e.setAttribute("name","projectName"),e.setAttribute("id","projectTextBox"),e.setAttribute("maxlength","30"),e.setAttribute("class","formTextInput");var o=document.createElement("input");o.setAttribute("type","button"),o.setAttribute("id","AddProjectButton"),o.setAttribute("value","Add Project"),o.setAttribute("onclick","newProjectHandler()"),o.setAttribute("class","formButton");var n=document.createElement("a");return n.setAttribute("href","#"),n.innerHTML="Cancel",n.setAttribute("onclick","hideShow('projectForm')"),n.setAttribute("class","cancelButton"),t.appendChild(e),t.appendChild(o),t.appendChild(n),t}Object.defineProperty(e,"__esModule",{value:!0}),e.default=n}]);