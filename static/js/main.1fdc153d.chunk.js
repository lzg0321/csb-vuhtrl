(this["webpackJsonpreact-eth-metamask-signatures"]=this["webpackJsonpreact-eth-metamask-signatures"]||[]).push([[0],{75:function(e,t){},83:function(e,t){},86:function(e,t){},87:function(e,t){},88:function(e,t){},89:function(e,t){},90:function(e,t){},91:function(e,t){},92:function(e,t,s){"use strict";s.r(t);var r=s(15),n=s(45),a=s.n(n),c=s(17),i=s(24),o=s(3),u=s(22),l=s(23),d=s(6);function j(e){var t=e.message;return t?Object(d.jsx)("div",{className:"alert alert-error",children:Object(d.jsxs)("div",{className:"flex-1",children:[Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",className:"w-6 h-6 mx-2 stroke-current",children:Object(d.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"})}),Object(d.jsx)("label",{children:t})]})}):null}var m=function(){var e=Object(u.a)(Object(o.a)().mark((function e(t){var s,r,n,a,c,i;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=t.setError,r=t.message,e.prev=1,console.log({message:r}),window.ethereum){e.next=5;break}throw new Error("No crypto wallet found. Please install it.");case 5:return e.next=7,window.ethereum.send("eth_requestAccounts");case 7:return n=new l.a.providers.Web3Provider(window.ethereum),a=n.getSigner(),e.next=11,a.getAddress();case 11:return c=e.sent,e.next=14,window.ethereum.request({method:"eth_sign",params:[c,l.a.utils.keccak256(l.a.utils.formatBytes32String(r))]});case 14:return i=e.sent,e.abrupt("return",{message:r,signature:i,address:c});case 18:e.prev=18,e.t0=e.catch(1),s(e.t0.message);case 21:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(t){return e.apply(this,arguments)}}();function b(){var e=Object(r.useRef)(),t=Object(r.useState)([]),s=Object(i.a)(t,2),n=s[0],a=s[1],l=Object(r.useState)(),b=Object(i.a)(l,2),x=b[0],h=b[1],f=function(){var e=Object(u.a)(Object(o.a)().mark((function e(t){var s,r;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s=new FormData(t.target),h(),e.next=5,m({setError:h,message:s.get("message")});case 5:(r=e.sent)&&a([].concat(Object(c.a)(n),[r]));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(d.jsx)("form",{className:"m-4",onSubmit:f,children:Object(d.jsxs)("div",{className:"credit-card w-full shadow-lg mx-auto rounded-xl bg-white",children:[Object(d.jsxs)("main",{className:"mt-4 p-4",children:[Object(d.jsx)("h1",{className:"text-xl font-semibold text-gray-700 text-center",children:"Sign messages"}),Object(d.jsx)("div",{className:"",children:Object(d.jsx)("div",{className:"my-3",children:Object(d.jsx)("textarea",{required:!0,type:"text",name:"message",className:"textarea w-full h-24 textarea-bordered focus:ring focus:outline-none",placeholder:"Message"})})})]}),Object(d.jsxs)("footer",{className:"p-4",children:[Object(d.jsx)("button",{type:"submit",className:"btn btn-primary submit-button focus:ring focus:outline-none w-full",children:"Sign message"}),Object(d.jsx)(j,{message:x})]}),n.map((function(t,s){return Object(d.jsx)("div",{className:"p-2",children:Object(d.jsxs)("div",{className:"my-3",children:[Object(d.jsxs)("p",{children:["Message ",s+1,": ",t.message]}),Object(d.jsxs)("p",{children:["Signer: ",t.address]}),Object(d.jsx)("textarea",{type:"text",readOnly:!0,ref:e,className:"textarea w-full h-24 textarea-bordered focus:ring focus:outline-none",placeholder:"Generated signature",value:t.signature})]})},t)}))]})})}function x(){return Object(d.jsx)("div",{className:"flex flex-wrap",children:Object(d.jsx)("div",{className:"w-full lg:w-1/2",children:Object(d.jsx)(b,{})})})}var h=document.getElementById("root");a.a.render(Object(d.jsx)(r.StrictMode,{children:Object(d.jsx)(x,{})}),h)}},[[92,1,2]]]);
//# sourceMappingURL=main.1fdc153d.chunk.js.map