(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){e.exports={Page:"Pages_Page__27g_4",previousPage:"Pages_previousPage__aIl6A",nextPage:"Pages_nextPage__ayuQq",Button:"Pages_Button__nIGPu",NextButton:"Pages_NextButton__3TWxl",PreviousButton:"Pages_PreviousButton__NlqTr"}},19:function(e,t,n){e.exports={Table:"Table_Table__x3Kcd",Nav:"Table_Nav__vh66R"}},25:function(e,t,n){e.exports={Layout:"Layout_Layout__33Dw3"}},26:function(e,t,n){e.exports={Container:"Main_Container__32zgG"}},27:function(e,t,n){e.exports={Loader:"Spinner_Loader__13KrJ",load7:"Spinner_load7__12VNp"}},28:function(e,t,n){e.exports={DetailVeiw:"DetailVeiw_DetailVeiw__10zne"}},32:function(e,t,n){e.exports=n(45)},37:function(e,t,n){},38:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(24),c=n.n(s),l=(n(37),n(38),n(25)),i=n.n(l),o=function(e){return r.a.createElement("div",{className:i.a.Layout},e.children)},u=n(29),m=n(11),d=n(14),p=n.n(d),g=n(2),f=n(17),h=n(16),b=n(6),E=n(7),v=n(9),_=n(8),y=n(10),P=n(13),O=n.n(P),j=function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(v.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).state={pages:[],lastPageNo:10,currentPage:1,previousButtondDisable:!1,nextButtondDisable:!1,style:{}},n.PreviousPage=function(){n.setState(Object(g.a)({},n.state,{currentPage:n.state.currentPage-1})),n.props.paginate(n.state.currentPage-1)},n.NextPage=function(){n.setState(Object(g.a)({},n.state,{currentPage:n.state.currentPage+1})),n.props.paginate(n.state.currentPage+1)},n.PreviousTenPages=function(){n.setState(Object(g.a)({},n.state,{lastPageNo:n.state.lastPageNo-10,currentPage:n.state.lastPageNo})),n.props.paginate(n.state.currentPage)},n.NextTenPages=function(){n.setState(Object(g.a)({},n.state,{lastPageNo:n.state.lastPageNo+10,currentPage:n.state.lastPageNo})),n.props.paginate(n.state.currentPage)},n.setCurrentPage=function(e){n.setState(Object(g.a)({},n.state,{currentPage:e})),n.props.paginate(e)},n}return Object(y.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){for(var e=this,t=Object(h.a)(this.state.pages),n=0;n<Math.ceil(this.props.allPages.length/5);n++)t.push(n+1);var a=this.state.lastPageNo,s=this.state.lastPageNo-10,c=t.slice(s,a),l=0===s,i=a===t.length,o=!(this.state.currentPage<c[9]),u=!(this.state.currentPage>c[0]),m={cursor:"pointer",margin:"20px auto",padding:"10px",borderRadius:"50%",width:"50px",height:"50px",backgroundColor:"blanchedalmond",color:"lightseagreen",border:"2px solid lightseagreen",fontWeight:"bolder",fontSize:"20px"};return r.a.createElement("div",{className:O.a.Page},r.a.createElement("button",{className:O.a.PreviousButton,onClick:this.PreviousTenPages,disabled:l},"Previous"),r.a.createElement("button",{className:O.a.previousPage,onClick:this.PreviousPage,disabled:u},"<"),c.map((function(t){return r.a.createElement("button",{id:t,key:t,className:O.a.Button,onClick:function(){return e.setCurrentPage(t)},style:t===e.state.currentPage?m:{height:"50px"}},t)})),r.a.createElement("button",{className:O.a.nextPage,onClick:this.NextPage,disabled:o},">"),r.a.createElement("button",{className:O.a.NextButton,onClick:this.NextTenPages,disabled:i},"Next"))}}]),t}(a.Component),k=function(e){return r.a.createElement("tr",{onClick:e.clicked,key:e.obj.id},r.a.createElement("td",null,e.obj.first_name),r.a.createElement("td",null,e.obj.last_name),r.a.createElement("td",null,e.obj.company_name),r.a.createElement("td",null,e.obj.city),r.a.createElement("td",null,e.obj.state),r.a.createElement("td",null,e.obj.zip),r.a.createElement("td",null,e.obj.email),r.a.createElement("td",null,e.obj.web),r.a.createElement("td",null,e.obj.age))},C=n(19),w=n.n(C),x=function(e){function t(e){var n;return Object(b.a)(this,t),(n=Object(v.a)(this,Object(_.a)(t).call(this,e))).setpage=function(e){return n.setState({pageno:e})},n.handleRow=function(e){n.props.history.push("/users/"+e)},n.updateChange=function(e){n.setState({searchValue:e.target.value})},n.state={List:[],filteredList:[],searchedList:[],searchValue:"",pageno:1,error:null},n}return Object(y.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=null,n=this.props.error;if(!this.props.error){var a=this.props.usersLists;a=this.props.usersLists.filter((function(t){return t.first_name.toLowerCase().includes(e.state.searchValue.toLowerCase())}));var s=5*this.state.pageno,c=s-5;n=a.slice(c,s).map((function(t){return r.a.createElement(k,{clicked:function(){return e.handleRow(t.id)},key:t.id,obj:t})})),t=r.a.createElement(j,{paginate:this.setpage,currentPage:this.state.pageno,allPages:this.props.usersLists})}return r.a.createElement("div",{className:w.a.Table},r.a.createElement("div",{className:w.a.Nav},r.a.createElement("input",{placeholder:"search by first name",onChange:function(t){return e.updateChange(t)}})),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"First Name",r.a.createElement("div",null,r.a.createElement("button",{id:"first_name",onClick:function(t){return e.props.ascendingOrder(t)}},"v"),r.a.createElement("button",{id:"first_name",onClick:function(t){return e.props.dscendingOrder(t)}},"v"))),r.a.createElement("th",null,"last Name",r.a.createElement("div",null,r.a.createElement("button",{id:"last_name",onClick:function(t){return e.props.ascendingOrder(t)}},"v"),r.a.createElement("button",{id:"last_name",onClick:function(t){return e.props.dscendingOrder(t)}},"v"))),r.a.createElement("th",null,"Company",r.a.createElement("div",null,r.a.createElement("button",{id:"company_name",onClick:function(t){return e.props.ascendingOrder(t)}},"v"),r.a.createElement("button",{id:"company_name",onClick:function(t){return e.props.dscendingOrder(t)}},"v"))),r.a.createElement("th",null,"City",r.a.createElement("div",null,r.a.createElement("button",{id:"city",onClick:function(t){return e.props.ascendingOrder(t)}},"v"),r.a.createElement("button",{id:"city",onClick:function(t){return e.props.dscendingOrder(t)}},"v"))),r.a.createElement("th",null,"State",r.a.createElement("div",null,r.a.createElement("button",{id:"state",onClick:function(t){return e.props.ascendingOrder(t)}},"v"),r.a.createElement("button",{id:"state",onClick:function(t){return e.props.dscendingOrder(t)}},"v"))),r.a.createElement("th",null,"zip",r.a.createElement("div",null,r.a.createElement("button",{id:"zip",onClick:function(t){return e.props.ascendingOrder(t)}},"v"),r.a.createElement("button",{id:"zip",onClick:function(t){return e.props.dscendingOrder(t)}},"v"))),r.a.createElement("th",null,"Email",r.a.createElement("div",null,r.a.createElement("button",{id:"email",onClick:function(t){return e.props.ascendingOrder(t)}},"v"),r.a.createElement("button",{id:"email",onClick:function(t){return e.props.dscendingOrder(t)}},"v"))),r.a.createElement("th",null,"Web",r.a.createElement("div",null,r.a.createElement("button",{id:"web",onClick:function(t){return e.props.ascendingOrder(t)}},"v"),r.a.createElement("button",{id:"web",onClick:function(t){return e.props.dscendingOrder(t)}},"v"))),r.a.createElement("th",null,"Age",r.a.createElement("div",null,r.a.createElement("button",{id:"age",onClick:function(t){return e.props.ascendingOrder(t)}},"v"),r.a.createElement("button",{id:"age",onClick:function(t){return e.props.dscendingOrder(t)}},"v"))))),r.a.createElement("tbody",null,n)),t)}}]),t}(a.Component),S=n(26),N=n.n(S),U=n(27),z=n.n(U),L=function(e){return r.a.createElement("div",{className:z.a.Loader},"loading....")},B=function(e){function t(){var e;return Object(b.a)(this,t),(e=Object(v.a)(this,Object(_.a)(t).call(this))).ascendingOrder=function(t){console.log("parent ascending"),console.log(t.target.id);var n=Object(h.a)(e.state.Users);switch(t.target.id){case"first_name":return n.sort((function(e,t){return e.first_name>t.first_name?1:e.first_name<t.first_name?-1:0})),e.setState({Users:n});case"last_name":return n.sort((function(e,t){return e.last_name>t.last_name?1:e.last_name<t.last_name?-1:0})),e.setState({Users:n});case"company_name":return n.sort((function(e,t){return e.company_name>t.company_name?1:e.company_name<t.company_name?-1:0})),e.setState({Users:n});case"city":return n.sort((function(e,t){return e.city>t.city?1:e.city<t.city?-1:0})),e.setState({Users:n});case"state":return n.sort((function(e,t){return e.state>t.state?1:e.state<t.state?-1:0})),e.setState({Users:n});case"zip":return n.sort((function(e,t){return e.zip>t.zip?1:e.zip<t.zip?-1:0})),e.setState({Users:n});case"email":return n.sort((function(e,t){return e.email>t.email?1:e.email<t.email?-1:0})),e.setState({Users:n});case"web":case"age":return n.sort((function(e,t){return e.age-t.age})),console.log(n),e.setState({Users:n})}},e.dscendingOrder=function(t){console.log("parent ascending"),console.log(t.target.id);var n=Object(h.a)(e.state.Users);switch(t.target.id){case"first_name":return n.sort((function(e,t){return e.first_name<t.first_name?1:e.first_name>t.first_name?-1:0})),e.setState({Users:n});case"last_name":return n.sort((function(e,t){return e.last_name<t.last_name?1:e.last_name>t.last_name?-1:0})),e.setState({Users:n});case"company_name":return n.sort((function(e,t){return e.company_name<t.company_name?1:e.company_name>t.company_name?-1:0})),e.setState({Users:n});case"city":return n.sort((function(e,t){return e.city<t.city?1:e.city>t.city?-1:0})),e.setState({Users:n});case"state":return n.sort((function(e,t){return e.state<t.state?1:e.state>t.state?-1:0})),e.setState({Users:n});case"zip":return n.sort((function(e,t){return e.zip<t.zip?1:e.zip>t.zip?-1:0})),e.setState({Users:n});case"email":return n.sort((function(e,t){return e.email<t.email?1:e.email>t.email?-1:0})),e.setState({Users:n});case"web":return n.sort((function(e,t){return e.web<t.web?1:e.web>t.web?-1:0})),e.setState({Users:n});case"age":return n.sort((function(e,t){return t.age-e.age})),console.log(n),e.setState({Users:n})}},e.state={Users:[],loading:!1,error:null},e}return Object(y.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this;(function(){var t=Object(f.a)(p.a.mark((function t(){var n,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState(Object(g.a)({},e.state,{loading:!0})),t.prev=1,t.next=4,fetch("https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json");case 4:return a=t.sent,t.next=7,a.json();case 7:n=t.sent,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),e.setState(Object(g.a)({},e.state,{loading:!1,error:t.t0}));case 13:e.setState(Object(g.a)({},e.state,{Users:n,loading:!1}));case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(){return t.apply(this,arguments)}})()()}},{key:"render",value:function(){var e=this.state.error?r.a.createElement("h1",{style:{textAlign:"center"}},"Some thing went wrong!!!"):null,t=r.a.createElement("div",{className:N.a.container},r.a.createElement(x,Object.assign({usersLists:this.state.Users},this.props,{ascendingOrder:this.ascendingOrder,dscendingOrder:this.dscendingOrder,error:e})));return this.state.loading?r.a.createElement(L,null):t}}]),t}(a.Component),T=n(28),D=n.n(T),V=function(e){function t(){var e,n;Object(b.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(v.a)(this,(e=Object(_.a)(t)).call.apply(e,[this].concat(r)))).state={Users:[],user:[],loading:!1,error:null},n.goToPreviousPage=function(){n.props.history.push("/")},n}return Object(y.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this;(function(){var t=Object(f.a)(p.a.mark((function t(){var n,a;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState(Object(g.a)({},e.state,{loading:!0})),t.prev=1,t.next=4,fetch("https://datapeace-storage.s3-us-west-2.amazonaws.com/dummy_data/users.json");case 4:return a=t.sent,t.next=7,a.json();case 7:n=t.sent,t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),e.setState(Object(g.a)({},e.state,{loading:!1,error:t.t0}));case 13:e.setState(Object(g.a)({},e.state,{loading:!1,Users:n}));case 14:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(){return t.apply(this,arguments)}})()()}},{key:"render",value:function(){var e=this,t=r.a.createElement("div",null,r.a.createElement("h1",null,"Something Went Wrong!!!"));if(!this.state.error){var n=this.props.match.params.userid;t=this.state.Users.filter((function(e){return String(e.id)===String(n)})).map((function(t){return r.a.createElement("div",{className:D.a.DetailVeiw,key:t.id},r.a.createElement("div",null,r.a.createElement("button",{onClick:e.goToPreviousPage},"Go back")),r.a.createElement("table",null,r.a.createElement("caption",null,t.first_name+" "+t.last_name),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"Company"),r.a.createElement("td",null,t.company_name)),r.a.createElement("tr",null,r.a.createElement("td",null,"City"),r.a.createElement("td",null,t.city)),r.a.createElement("tr",null,r.a.createElement("td",null,"State"),r.a.createElement("td",null,t.state)),r.a.createElement("tr",null,r.a.createElement("td",null,"Zip"),r.a.createElement("td",null,t.zip)),r.a.createElement("tr",null,r.a.createElement("td",null,"Email"),r.a.createElement("td",null,t.email)),r.a.createElement("tr",null,r.a.createElement("td",null,"Age"),r.a.createElement("td",null,t.age)))))}))}return this.state.loading?r.a.createElement(L,null):t}}]),t}(a.Component);var A=function(){return r.a.createElement(u.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(o,null,r.a.createElement(m.a,{path:"/",exact:!0,component:B}),r.a.createElement(m.a,{path:"/users/:userid",exact:!0,component:V}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.b5a8a23e.chunk.js.map