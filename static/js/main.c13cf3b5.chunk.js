(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(6),s=a.n(o),r=a(3),l=a.n(r),i=a(4),u=a(1),m=(a(13),a(14),a(2)),p=a.n(m),d=(a(17),c.a.memo((function(e){var t=e.posts,a=e.onSelectPostDetail,n=e.selectedPost,o=e.onSelectPostTitle;return c.a.createElement("div",{className:"PostsList"},c.a.createElement("h2",null,"Posts:"),c.a.createElement("ul",{className:"PostsList__list"},t.map((function(e){return c.a.createElement("li",{key:e.id,className:"PostsList__item"},c.a.createElement("div",null,c.a.createElement("b",null,"[User #".concat(e.userId,"] :")),e.title),c.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(t){"Close"!==t.target.textContent?(a(e.id),o(e.title)):a(null)}},n===e.id?"Close":"Open"))}))))})));d.propTypes=p.a.shape({posts:p.a.arrayOf({id:p.a.number.isRequired,userId:p.a.number.isRequired,title:p.a.string.isRequired,body:p.a.string.isRequired}).isRequired,onSelectPostDetail:p.a.func.isRequired,onSelectPostTitle:p.a.func.isRequired,selectedPost:p.a.number.isRequired}).isRequired;var f=function(e,t){return fetch("".concat("https://mate-api.herokuapp.com").concat(e)).then((function(e){if(!e.ok)throw new Error("Error notification");return e.json()}))},E=function(e){return f("/comments").then((function(e){return e.data})).then((function(t){return t.filter((function(t){return t.postId===e}))}))},b=(a(18),function(e){var t=e.postId,a=e.updateComments,o=Object(n.useState)(""),s=Object(u.a)(o,2),r=s[0],m=s[1],p=Object(n.useState)(""),d=Object(u.a)(p,2),f=d[0],b=d[1],h=Object(n.useState)(""),v=Object(u.a)(h,2),_=v[0],N=v[1],O=function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(t);case 2:n=e.sent,a(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),P=function(){var e;e={postId:t,name:r,email:f,body:_},fetch("".concat("https://mate-api.herokuapp.com","/comments"),{method:"POST",headers:{"Context-type":"application/json;charset=UTF-8"},body:JSON.stringify(e)}),m(""),b(""),N(""),O(t)};return c.a.createElement("form",{className:"NewCommentForm",onSubmit:function(e){e.preventDefault(),P()}},c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:r,onChange:function(e){m(e.target.value)}})),c.a.createElement("div",{className:"form-field"},c.a.createElement("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:f,onChange:function(e){b(e.target.value)}})),c.a.createElement("div",{className:"form-field"},c.a.createElement("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:_,onChange:function(e){N(e.target.value)}})),c.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))}),h=(a(19),function(){return c.a.createElement("div",{className:"Loader"},c.a.createElement("div",{className:"Loader__content"}))}),v=(a(20),c.a.memo((function(e){var t=e.selectedPost,a=e.comments,o=e.updateComments,s=e.postTitle,r=Object(n.useState)(!1),l=Object(u.a)(r,2),i=l[0],m=l[1],p=function(e){var t;t=e,fetch("".concat("https://mate-api.herokuapp.com","/comments/").concat(t),{method:"DELETE"}),o(a.filter((function(t){return t.id!==e})))};return c.a.createElement("div",{className:"PostDetails"},c.a.createElement("h2",null,"Post details:"),c.a.createElement("section",{className:"PostDetails__post"},c.a.createElement("p",null,s)),a.length>0?c.a.createElement(c.a.Fragment,null,c.a.createElement("section",{className:"PostDetails__comments"},c.a.createElement("button",{type:"button",className:"button",onClick:function(e){e.target.textContent.includes("Hide")?m(!1):m(!0)}},i?"Hide":"Show"," ","".concat(a.length," comments")),i&&c.a.createElement("ul",{className:"PostDetails__list"},a.map((function(e){return c.a.createElement("li",{className:"PostDetails__list-item",key:e.id},c.a.createElement("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){p(e.id)}},"X"),c.a.createElement("p",null,e.body))})))),c.a.createElement("section",null,c.a.createElement("div",{className:"PostDetails__form-wrapper"},c.a.createElement(b,{postId:t,updateComments:o})))):c.a.createElement(h,null))}))),_=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],o=t[1],s=Object(n.useState)(""),r=Object(u.a)(s,2),m=r[0],p=r[1],b=Object(n.useState)([]),h=Object(u.a)(b,2),_=h[0],N=h[1],O=Object(n.useState)([]),P=Object(u.a)(O,2),y=P[0],j=P[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f("".concat("/posts")).then((function(e){return e.data}));case 2:t=e.sent,N(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[_]),Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(a);case 2:t=e.sent,j(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[y]);var C=Object(n.useCallback)(j,[]);return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App__header"},c.a.createElement("label",null,"Select a user: \xa0",c.a.createElement("select",{className:"App__user-selector"},c.a.createElement("option",{value:"0"},"All users"),c.a.createElement("option",{value:"1"},"Leanne Graham"),c.a.createElement("option",{value:"2"},"Ervin Howell"),c.a.createElement("option",{value:"3"},"Clementine Bauch"),c.a.createElement("option",{value:"4"},"Patricia Lebsack"),c.a.createElement("option",{value:"5"},"Chelsey Dietrich"),c.a.createElement("option",{value:"6"},"Mrs. Dennis Schulist"),c.a.createElement("option",{value:"7"},"Kurtis Weissnat"),c.a.createElement("option",{value:"8"},"Nicholas Runolfsdottir V"),c.a.createElement("option",{value:"9"},"Glenna Reichert"),c.a.createElement("option",{value:"10"},"Leanne Graham")))),c.a.createElement("main",{className:"App__main"},c.a.createElement("div",{className:"App__sidebar"},c.a.createElement(d,{posts:_,onSelectPostDetail:function(e){o(e)},onSelectPostTitle:function(e){p(e)},selectedPost:a})),a&&c.a.createElement("div",{className:"App__content"},c.a.createElement(v,{selectedPost:a,comments:y,updateComments:C,postTitle:m}))))};s.a.render(c.a.createElement(_,null),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.c13cf3b5.chunk.js.map