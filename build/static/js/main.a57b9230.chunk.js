(window.webpackJsonpalghijudge=window.webpackJsonpalghijudge||[]).push([[0],{16:function(e,t,a){e.exports=a(34)},21:function(e,t,a){},22:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(9),c=a.n(s),l=(a(21),a(10)),r=a(11),i=a(14),m=a(12),d=a(15),u=(a(22),a(13)),b=a.n(u),p=(a(31),a(33),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).onChange=function(t){e.setState({code:t})},e.submitCode=function(){e.setState({buttonDisabled:!0}),fetch("https://alghijudgeapi.herokuapp.com/submitcode",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({problemName:e.state.problemName,code:e.state.code})}).then((function(e){return e.json()})).then((function(t){if("failed"===t)e.setState({buttonDisabled:!1}),alert("Submit Failed");else{var a=[];t.forEach((function(){return a.push(!1)})),e.setState({buttonDisabled:!1,data:t,showIO:a})}}))},e.toggleIO=function(t){var a=Array.from(e.state.showIO);a[t]^=!0,e.setState({showIO:a})},e.getIOResult=function(){var t=0;return e.state.data.map((function(a){var n=++t;return o.a.createElement("div",{key:n,className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("h3",{className:"text-center"},"Test Case ",n))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},"AC"===a.isAccepted?o.a.createElement("h4",null,"Status: ",o.a.createElement("span",{style:{color:"#a3ffa3"}},"AC")):o.a.createElement("h4",null,"Status: ",o.a.createElement("span",{style:{color:"#fa7979"}},a.isAccepted)),e.state.showIO[n]?o.a.createElement("button",{type:"button",className:"btn btn-dark show-btn w-100",onClick:function(){return e.toggleIO(n)}},"Hide Input/Output"):o.a.createElement("button",{type:"button",className:"btn btn-dark show-btn w-100",onClick:function(){return e.toggleIO(n)}},"Show Input/Output"))),e.state.showIO[n]?o.a.createElement("div",{className:"row pt-2"},o.a.createElement("div",{className:"col-lg-4"},"Input:",o.a.createElement("div",{className:"card card-body"},a.input)),o.a.createElement("div",{className:"col-lg-4"},"Expected Output:",o.a.createElement("div",{className:"card card-body"},a.expectedOutput)),o.a.createElement("div",{className:"col-lg-4"},"Program Output:",o.a.createElement("div",{className:"card card-body"},a.programOutput.stdout))):o.a.createElement("span",null))}))},e.state={problemName:"TP-2 SDA 2019",code:"",buttonDisabled:!1,data:[],showIO:[]},e}return Object(d.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("h2",{className:"title"},"AlghiJudge"),o.a.createElement("div",{className:"problem-name"},o.a.createElement("div",{className:"dropdown"},o.a.createElement("button",{className:"btn dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},this.state.problemName),o.a.createElement("div",{className:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},o.a.createElement("button",{className:"dropdown-item",onClick:function(){return e.setState({problemName:"TP-1 SDA 2019"})}},"TP-1 SDA 2019"),o.a.createElement("button",{className:"dropdown-item",onClick:function(){return e.setState({problemName:"TP-2 SDA 2019"})}},"TP-2 SDA 2019")))),o.a.createElement("div",{className:"text-editor"},o.a.createElement(b.a,{showPrintMargin:!1,mode:"java",theme:"dracula",onChange:this.onChange,fontSize:16,width:"100%",name:"text-editor",editorProps:{$blockScrolling:!0},value:this.state.code})),o.a.createElement("div",{className:"row bottom"},o.a.createElement("div",{className:"col-md-6 text-left"},o.a.createElement("a",{className:"tc-link",href:"https://github.com/darklordace/alghijudge-api/tree/master/static"},"Test Cases")),o.a.createElement("div",{className:"col-md-6 text-right"},this.state.buttonDisabled?o.a.createElement("button",{type:"button",className:"btn btn-dark submit-btn",disabled:!0},"Loading..."):o.a.createElement("button",{type:"button",className:"btn btn-dark submit-btn",onClick:this.submitCode},"Submit"))),o.a.createElement("div",{className:"hasil"},this.state.data===[]?o.a.createElement("span",null):this.getIOResult()))))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[16,1,2]]]);
//# sourceMappingURL=main.a57b9230.chunk.js.map