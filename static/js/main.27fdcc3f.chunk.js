(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{241:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),o=n(15),r=n.n(o),c=(n(97),n(18)),i=n(19),s=n(21),u=n(20),h=n(22),d=n(31),m=n.n(d),f=n(39),p=n.n(f),v=n(41),b=n.n(v),E=n(40),j=n.n(E),O=n(29),g=n.n(O),k=n(32),w=n.n(k),x=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={title:n.props.title,text:n.props.text,id:n.props.id},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(p.a,null,l.a.createElement(j.a,null,l.a.createElement(w.a,{color:"textSecondary",gutterBottom:!0},this.state.title),l.a.createElement(w.a,{color:"black",variant:"h5"},this.state.text)),l.a.createElement(b.a,null,l.a.createElement(g.a,{size:"small",onClick:function(){return e.props.onDelete(e.state.id)}},"Delete")))}}]),t}(a.Component),y=n(88),C=n(89),D=n.n(C),A=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(l)))).state={text:"",title:""},n.handleChange=function(e){return function(t){n.setState(Object(y.a)({},e,t.target.value))}},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(p.a,null,l.a.createElement(j.a,null,l.a.createElement("form",{noValidate:!0,autoComplete:"off"},l.a.createElement(D.a,{id:"new-note",label:"Note",value:this.state.text,onChange:this.handleChange("text"),margin:"normal",variant:"filled"}))),l.a.createElement(b.a,null,l.a.createElement(g.a,{size:"small",onClick:function(){return e.props.onClick({text:e.state.text})}},"Add"),l.a.createElement(g.a,{size:"small",onClick:this.props.onDelete},"Delete All")))}}]),t}(a.Component),S=n(90),z=n.n(S),B=n(91),N=n.n(B),J=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(z.a,{position:"static",color:"default"},l.a.createElement(N.a,null,l.a.createElement(w.a,{variant:"h6",color:"inherit"},"Notes"))))}}]),t}(a.Component),W=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleDelete=function(e){n.setState({notes:n.state.notes.filter(function(t){return t.id!==e})})},n.handleDeleteAll=function(){n.setState({notes:[]})},n.handleAdd=function(e){var t=0;0!==n.state.notes.length&&(t=n.state.notes[n.state.notes.length-1].id);var a={id:++t,text:e.text,title:"Note ".concat(t)},l=n.state.notes;l.push(a),n.setState({notes:l}),console.log(n.state)},n.state={notes:[]},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(m.a,null,l.a.createElement("div",null,l.a.createElement(J,null),l.a.createElement(A,{onClick:this.handleAdd,onDelete:this.handleDeleteAll})),l.a.createElement("div",null,this.state.notes.map(function(t){return console.log(e.state),l.a.createElement(x,{id:t.id,key:t.id,text:t.text,title:t.title,onDelete:e.handleDelete})})))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},92:function(e,t,n){e.exports=n(241)},97:function(e,t,n){}},[[92,1,2]]]);
//# sourceMappingURL=main.27fdcc3f.chunk.js.map