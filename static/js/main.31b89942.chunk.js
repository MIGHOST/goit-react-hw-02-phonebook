(this.webpackJsonpfirst=this.webpackJsonpfirst||[]).push([[0],{1:function(t,e,n){t.exports={form:"ContactForm_form__3m9yr",label:"ContactForm_label__2HOBo",input:"ContactForm_input__uV0xC"}},10:function(t,e,n){t.exports={container:"Contacts_container__32kKz",text:"Contacts_text__edO-H",btn:"Contacts_btn__3lXvq"}},11:function(t,e,n){t.exports={button:"Button_button__1ecjb",disabled:"Button_disabled__3xm_b Button_button__1ecjb",active:"Button_active__w84uI Button_button__1ecjb"}},12:function(t,e,n){t.exports={label:"ContactFilter_label__1dY-1",input:"ContactFilter_input__1rsvx"}},17:function(t,e,n){t.exports=n(31)},22:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(14),l=n.n(r),o=(n(22),n(16)),i=n(3),u=n(5),s=n(6),m=n(8),b=n(7),d=n(9),h=n(4),f=n(1),_=n.n(f),p=n(11),C=n.n(p),v=function(t){var e=t.title,n=t.disabled?C.a.disabled:C.a.active;return c.a.createElement("button",{type:"submit",className:n},e)},g=function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(m.a)(this,(t=Object(b.a)(e)).call.apply(t,[this].concat(c)))).state={name:"",number:""},n.handleNameChange=function(t){var e=t.target,a=e.name,c=e.value;n.setState(Object(h.a)({},a,c))},n.handleSubmit=function(t){t.preventDefault(),n.props.onHandleSubmit(Object(i.a)({},n.state)),n.reset()},n.reset=function(){n.setState({name:"",number:""})},n}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return c.a.createElement("form",{onSubmit:this.handleSubmit,className:_.a.form},c.a.createElement("label",{htmlFor:this.id,className:_.a.label},"Name",c.a.createElement("input",{type:"text",value:e,name:"name",onChange:this.handleNameChange,id:this.id,className:_.a.input})),c.a.createElement("label",{htmlFor:this.id,className:_.a.label},"Number",c.a.createElement("input",{type:"text",value:n,name:"number",onChange:this.handleNameChange,id:this.id,className:_.a.input})),e.length>=1&&n.length>=1?c.a.createElement(v,{title:"Add contact",disabled:!1}):c.a.createElement(v,{title:"Add contact",disabled:!0}))}}]),e}(a.Component),E=n(15),j=n.n(E),O=n(10),y=n.n(O),N=function(t){var e=t.name,n=t.number,a=t.onDeleteContact;return c.a.createElement("div",{className:y.a.container},c.a.createElement("p",{className:y.a.text},e,": ",n),c.a.createElement("button",{type:"button",onClick:a,className:y.a.btn},"Delete"))},x=function(t){var e=t.items,n=t.onDeleteContact;return e.length>0&&c.a.createElement("ul",null,e.map((function(t){return c.a.createElement("li",{key:t.id},c.a.createElement(N,Object.assign({},t,{onDeleteContact:function(){return n(t.id)}})))})))},F=n(12),S=n.n(F),k=function(t){var e=t.value,n=t.onChangeFilter;return c.a.createElement("label",{className:S.a.label},"Find contact by name",c.a.createElement("input",{type:"text",className:S.a.input,value:e,onChange:n}))},w=function(t,e){return t.find((function(t){return t.name===e.name}))},B=function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))},D=function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(m.a)(this,(t=Object(b.a)(e)).call.apply(t,[this].concat(c)))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},n.changeFilter=function(t){n.setState({filter:t.target.value})},n.addContact=function(t){var e=n.state.contacts,a=j.a.generate(),c=Object(i.a)({id:a},t),r=n.state.contacts;w(e,t)?alert("".concat(t.name," is already in contacts!")):t.name.length>1&&t.number.length>1?n.setState((function(t){return{contacts:[].concat(Object(o.a)(r),[c])}})):t.name.length<=1?alert("Contact name is too small!"):t.number.length<=1&&alert("Contact number is too small!")},n.deleteContact=function(t){n.setState((function(e){return{contacts:e.contacts.filter((function(e){return e.id!==t}))}}))},n}return Object(d.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=B(e,n);return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Phonebook"),c.a.createElement(g,{onHandleSubmit:this.addContact}),c.a.createElement("h2",null,"Contacts"),c.a.createElement(k,{value:n,onChangeFilter:this.changeFilter}),e.length>=1&&c.a.createElement(x,{items:a,onDeleteContact:this.deleteContact}))}}]),e}(a.Component);l.a.render(c.a.createElement(D,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.31b89942.chunk.js.map