(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[3],{49:function(e,t,c){e.exports={container:"HighlightedQuote_container__3LmWa","dlt-btn":"HighlightedQuote_dlt-btn__2WxKp",shake:"HighlightedQuote_shake__2jX3D",quote:"HighlightedQuote_quote__28Nge"}},50:function(e,t,c){e.exports={item:"CommentItem_item__3r6R5"}},51:function(e,t,c){e.exports={comments:"CommentsList_comments__ifFE9"}},52:function(e,t,c){e.exports={comments:"Comments_comments__ESDwy"}},53:function(e,t,c){e.exports={form:"NewCommentForm_form__2z-3l",loading:"NewCommentForm_loading__27lgc",control:"NewCommentForm_control__12weG",actions:"NewCommentForm_actions__1DDDb"}},56:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c(2),o=c(8),a=c(15),r=c(14),i=c(23),m=c(49),j=c.n(m),d=c(0),l=function(e){var t=Object(s.h)(),c=Object(a.a)(r.c),o=c.sendRequest,m=c.status,l=c.error;return Object(n.useEffect)((function(){l||"completed"!==m||t.push("/quotes")}),[m,l,t]),Object(d.jsxs)("section",{className:j.a.container,children:[l&&Object(d.jsx)(i.a,{status:"error",title:"ERROR",message:"Failed to delete"}),Object(d.jsxs)("figure",{className:j.a.quote,children:[Object(d.jsxs)("p",{children:["' ",e.text," '"]}),Object(d.jsxs)("figcaption",{children:["~ ",e.author]})]}),Object(d.jsx)("i",{className:"fa-solid fa-trash-can ".concat(j.a["dlt-btn"]),onClick:function(){o(e.id)}})]})},u=c(25),b=c(11),O=c(16),x=c(50),h=c.n(x),f=function(e){return Object(d.jsx)("li",{className:h.a.item,children:Object(d.jsx)("p",{children:e.text})})},_=c(51),p=c.n(_),g=function(e){return Object(d.jsx)("ul",{className:p.a.comments,children:e.comments.map((function(e){return Object(d.jsx)(f,{text:e.text},e.id)}))})},N=c(52),v=c.n(N),C=c(53),R=c.n(C),q=function(e){var t=Object(n.useRef)(),c=Object(a.a)(r.a),s=c.sendRequest,o=c.status,m=c.error,j=e.onAddedComment,l=e.quoteId;Object(n.useEffect)((function(){"completed"!==o||m||j()}),[o,m,j]);var u=function(e){e.preventDefault();var c=t.current.value;""!==c.trim()&&s({commentData:{text:c},quoteId:l})};return Object(d.jsxs)("form",{className:R.a.form,onSubmit:u,children:["pending"===o&&Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(O.a,{})}),Object(d.jsxs)("div",{className:R.a.control,onSubmit:u,children:[Object(d.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(d.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(d.jsx)("div",{className:R.a.actions,children:Object(d.jsx)("button",{className:"btn",children:"Add Comment"})}),m&&Object(d.jsx)(i.a,{status:"error",title:"ERROR",message:"Failed to comment"})]})},F=function(){var e,t=Object(n.useState)(!1),c=Object(b.a)(t,2),o=c[0],m=c[1],j=Object(s.j)().quoteId,l=Object(a.a)(r.d,!0),u=l.sendRequest,x=l.status,h=l.data,f=l.error;Object(n.useEffect)((function(){u(j)}),[j,u]),"pending"===x&&(e=Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(O.a,{})})),"completed"===x&&h&&h.length>0&&(e=Object(d.jsx)(g,{comments:h})),"completed"!==x||h&&0!==h.length||(e=Object(d.jsx)("p",{children:"No comments yet"})),f&&(e=Object(d.jsx)("p",{children:"Unable to load comments!"}));var _=Object(n.useCallback)((function(){u(j),m(!1)}),[u,j]);return Object(d.jsxs)("section",{className:v.a.comments,children:[Object(d.jsx)("h2",{children:"User Comments"}),!o&&Object(d.jsx)("button",{className:"btn",onClick:function(){m(!0)},children:"Add a Comment"}),o&&Object(d.jsx)(q,{quoteId:j,onAddedComment:_}),e,f&&Object(d.jsx)(i.a,{status:"error",title:"ERROR",message:"Failed to load comments"})]})};t.default=function(){var e=Object(s.j)(),t=Object(s.k)(),c=Object(a.a)(r.f,!0),i=c.sendRequest,m=c.status,j=c.data,b=c.error,x=e.quoteId;return Object(n.useEffect)((function(){i(x)}),[i,x]),"pending"===m?Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(O.a,{})}):b?Object(d.jsx)("div",{className:"centered focused",children:b}):j.text?Object(d.jsxs)(n.Fragment,{children:[Object(d.jsx)(l,{id:j.id,text:j.text,author:j.author}),Object(d.jsx)(s.c,{path:"".concat(t.path),exact:!0,children:Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(o.b,{to:"".concat(t.url,"/comment"),className:"btn--flat",children:"Load Comments"})})}),Object(d.jsx)(s.c,{path:"".concat(t.path,"/comment"),children:Object(d.jsx)(F,{})})]}):Object(d.jsx)(u.a,{})}}}]);
//# sourceMappingURL=3.811f06a8.chunk.js.map