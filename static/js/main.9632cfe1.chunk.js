(this.webpackJsonpbase=this.webpackJsonpbase||[]).push([[0],{107:function(e,t,s){},111:function(e,t,s){},112:function(e,t,s){"use strict";s.r(t);var c=s(0),n=s(28),a=s.n(n),r=s(36),l=s.n(r),o=s(17),i=s(63),u=s(8),j=s(15),b=s(13),d=s(149),h=s(33),m=s.n(h),O=s(1),v=function(e){var t=e.searchTerm,s=e.setSearchTerm,n=(e.disableSubmit,e.setDisableSubmit),a=e.queryGoogleAPIBook,r=Object(c.useRef)(),l=Object(b.g)();return Object(O.jsxs)("div",{className:"nav",children:[Object(O.jsx)("div",{className:"nav-item",children:Object(O.jsx)(j.b,{to:"/",children:"Google Book Finder"})}),Object(O.jsx)("div",{className:"nav-item",children:Object(O.jsx)(j.b,{to:"/bestseller",children:"New York Best Seller"})}),Object(O.jsx)("div",{className:"nav-item",children:Object(O.jsx)(j.b,{to:"/results",children:"Results"})}),Object(O.jsx)("div",{className:"nav-item",children:Object(O.jsx)(j.b,{to:"/favourite",children:"Favourite"})}),Object(O.jsx)("form",{children:Object(O.jsxs)("div",{className:"nav-search",children:[Object(O.jsx)("input",{style:{borderRadius:"10px"},type:"text",placeholder:"search",ref:r,onChange:function(){var e=r.current.value;s(e),n(!e)}}),Object(O.jsxs)(j.b,{to:"/results",children:[" ",Object(O.jsx)(d.a,{size:"small",sx:{width:"1em"},variant:"outlined",color:"error",startIcon:Object(O.jsx)(m.a,{}),type:"submit",onClick:function(e){""!==t&&(e.preventDefault(),l("/results"),a())}})," "]})]})})]})},x=function(e){return Object(O.jsx)(O.Fragment,{children:Object(O.jsx)("div",{className:"footer",children:Object(O.jsx)("h1",{children:"\xa9 2021"})})})},f=Object(c.createContext)();s(107);function p(e){return Object(O.jsx)("div",{className:"overlay",children:Object(O.jsx)("div",{className:"spinner",children:e.children})})}var g,k=s(42),I=s.n(k),N=s(51),S=s.n(N),y=s(41),R=s.n(y),C=function(e){var t=Object(c.useContext)(f),s=(t.searchTerm,t.setSearchTerm,t.searchBestResults),n=(t.setSearchBestResults,t.isOpen,t.setIsOpen,t.fav),a=t.dispatchFav,r=t.queryAPIBookBest,l=Object(c.useState)(!1),o=Object(u.a)(l,2),i=o[0],b=o[1];Object(c.useEffect)((function(){setTimeout(b,800,!0)}),[s]),console.log("best-results: ",s),Object(c.useEffect)((function(){return r(),function(){console.log("clean up")}}),[]);var h=s.map((function(e,t){return Object(O.jsxs)("div",{className:"bestseller",children:[Object(O.jsx)("img",{className:"bestbook-img",src:void 0===e?"https://cdn.browshot.com/static/images/not-found.png":e.book_image,alt:""}),Object(O.jsxs)("div",{className:"best-book",children:[Object(O.jsx)("h3",{children:e.title}),Object(O.jsxs)("div",{className:"best-over",children:["  ",e.description]}),Object(O.jsxs)("div",{className:"button-container",children:[Object(O.jsxs)("a",{target:"_blank",href:e.amazon_product_url,children:[Object(O.jsx)(d.a,{variant:"contained",color:"info",size:"small",startIcon:Object(O.jsx)(R.a,{}),children:"Link"})," "]}),n.some((function(t){return t.id===e.rank}))?Object(O.jsx)(d.a,{variant:"contained",size:"small",color:"error",startIcon:Object(O.jsx)(I.a,{}),onClick:function(){a({type:"REMOVEFROMFAV",payload:e.rank})},children:"DEL"}):Object(O.jsx)(d.a,{variant:"contained",size:"small",color:"success",startIcon:Object(O.jsx)(S.a,{}),onClick:function(){a({type:"ADDTOFAV",payload:{book_image:e.book_image,title:e.title,description:e.description,link:e.amazon_product_url,author:e.author,id:e.rank,rank:e.rank,publisher:e.publisher}})},children:"FAV"}),Object(O.jsx)(j.b,{to:"/bestseller/"+e.title,children:Object(O.jsx)(d.a,{variant:"contained",size:"small",color:"inherit",style:{marginLeft:"0.3em"},children:"INFO"})})]})]})]},t)}));return Object(O.jsxs)("div",{className:"bestseller-overall",children:[Object(O.jsx)("h1",{children:"New York Best Seller"}),!i&&Object(O.jsx)(p,{children:"Loading Best Seller..."}),Object(O.jsx)("div",{className:"bestseller-image",children:h})]})},A=s(148),w=s(151),B=function(e){var t=e.handleChange,s=e.handleSubmit,n=Object(c.useContext)(f),a=(n.countRef,n.resultsCount),r=n.setResultsCount;return console.log("resultsCount",a),Object(O.jsx)("div",{className:"search",children:Object(O.jsx)(w.a,{component:"form",sx:{width:500,maxWidth:"100%",margin:"0 auto"},autoComplete:"off",children:Object(O.jsxs)("div",{children:[Object(O.jsx)(A.a,{variant:"filled",style:{backgroundColor:"white"},fullWidth:!0,label:"Title",id:"fullWidth",type:"text",placeholder:"Enter by title",onChange:t}),Object(O.jsxs)(j.b,{to:"/results",children:[" ",Object(O.jsx)(d.a,{variant:"contained",color:"error",startIcon:Object(O.jsx)(m.a,{}),type:"submit",onClick:s,children:"Search"})," "]}),Object(O.jsx)("div",{className:"select",children:Object(O.jsxs)("select",{name:"dropdown-categories",id:"dropdown-categories",onChange:function(e){return r(e.target.value)},children:[Object(O.jsx)("option",{value:"10",children:"Mini"}),Object(O.jsx)("option",{value:"40",children:"Large"})]})})]})})})},T=function(e){var t=e.buttons,s=e.filterTitle;return Object(O.jsx)("div",{children:t.map((function(e,t){return Object(O.jsx)(d.a,{variant:"outlined",size:"small",color:"inherit",type:"button",onClick:function(){return s(e)},children:e},t)}))})},P=function(){var e=Object(c.useContext)(f),t=(e.searchTerm,e.searchResults),s=(e.setSearchResults,e.fav),n=e.dispatchFav,a=e.filterTitle,r=e.buttons;console.log("searchResults: ",t);var l="https://cdn.browshot.com/static/images/not-found.png",o=Object(c.useState)(!1),i=Object(u.a)(o,2),b=i[0],h=i[1];Object(c.useEffect)((function(){setTimeout(h,800,!0)}),[t]);var m=t.map((function(e,t){return Object(O.jsxs)("div",{className:"results",children:[Object(O.jsx)("img",{className:"book-img",src:void 0===e.volumeInfo.imageLinks?l:e.volumeInfo.imageLinks.thumbnail,alt:""}),Object(O.jsxs)("div",{className:"results-book",children:[Object(O.jsx)("h3",{children:e.volumeInfo?e.volumeInfo.title:""}),Object(O.jsxs)("div",{className:"results-over",children:["  ",e.volumeInfo?e.volumeInfo.description:"","  "]}),Object(O.jsxs)("div",{className:"button-container",children:[Object(O.jsxs)("a",{target:"_blank",href:e.volumeInfo.canonicalVolumeLink,children:[Object(O.jsx)(d.a,{variant:"contained",color:"info",size:"small",startIcon:Object(O.jsx)(R.a,{}),children:"Link"})," "]}),s.some((function(t){return t.id===e.id}))?Object(O.jsx)(d.a,{variant:"contained",size:"small",color:"error",startIcon:Object(O.jsx)(I.a,{}),onClick:function(){n({type:"REMOVEFROMFAV",payload:e.id})},children:"DEL"}):Object(O.jsx)(d.a,{variant:"contained",size:"small",color:"success",startIcon:Object(O.jsx)(S.a,{}),onClick:function(){n({type:"ADDTOFAV",payload:{book_image:void 0===e.volumeInfo.imageLinks?l:e.volumeInfo.imageLinks.thumbnail,title:e.volumeInfo?e.volumeInfo.title:"",description:e.volumeInfo?e.volumeInfo.description:"",link:e.volumeInfo.canonicalVolumeLink,author:e.volumeInfo.authors?e.volumeInfo.authors[0]:"",id:e.id,rank:e.volumeInfo?e.volumeInfo.averageRating:"",publisher:e.volumeInfo?e.volumeInfo.publisher:""}})},children:"Fav"}),Object(O.jsxs)(j.b,{to:"/results/"+e.id,children:[Object(O.jsx)(d.a,{variant:"contained",size:"small",color:"inherit",style:{marginLeft:"0.3em"},children:"INFO"}),"  "]})]})]})]},t)}));return Object(O.jsxs)("div",{className:"results-overall",children:[Object(O.jsx)("h1",{children:"Results "}),!b&&Object(O.jsx)(p,{children:"Loading Results..."}),Object(O.jsx)(T,{filterTitle:a,buttons:r}),Object(O.jsx)("div",{className:"results-image",children:m.length<1?Object(O.jsx)("h1",{className:"results-empty",children:"Results is Empty!"}):m})]})},F=function(e){var t=Object(c.useState)(!1),s=Object(u.a)(t,2),n=s[0],a=s[1],r=e.handleSubmitOthers,l=e.authorSearchRef;return Object(O.jsxs)("div",{className:"collapsible",children:[Object(O.jsx)(d.a,{className:"toggle",style:{backgroundColor:"white"},onClick:function(){return a(!n)},children:"Search by Author"}),Object(O.jsxs)("div",{className:n?"content show":"content",children:[Object(O.jsx)("input",{className:"author",type:"text",placeholder:"Enter by Author",ref:l}),Object(O.jsx)("div",{children:Object(O.jsxs)(j.b,{to:"/results",children:[" ",Object(O.jsx)(d.a,{variant:"contained",color:"primary",startIcon:Object(O.jsx)(m.a,{}),type:"submit",onClick:r,children:"Author"})," "]})})]})]})},z=function(){var e=Object(b.g)(),t=Object(c.useContext)(f),s=t.searchTerm,n=t.setSearchTerm,a=t.searchResults,r=(t.setSearchResults,t.disableSubmit),l=(t.setDisableSubmit,t.queryGoogleAPIBook),o=t.queryGoogleAPIBookOthers,i=Object(c.useState)(!0),j=Object(u.a)(i,2),d=j[0],h=j[1],m=Object(c.useRef)(),v=function(t){t.preventDefault(),console.log("handleSubmitOthers: clicked"),h(!1),e("/results");var s=m.current.value.replace(/ /g,"+");o(s)};return Object(O.jsx)("div",{className:"search-box",children:d?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(B,{searchTerm:s,setSearchTerm:n,handleSubmit:function(t){if(""!==s){t.preventDefault(),console.log("handleSubmit: clicked");var c=t.target.value;n(c),h(!1),e("/results"),l()}},handleChange:function(e){var t=e.target.value;console.log("handleChange: ",t),n(t)},disableSubmit:r,handleSubmitOthers:v,authorSearchRef:m}),Object(O.jsx)(F,{handleSubmitOthers:v,authorSearchRef:m})]}):Object(O.jsx)(P,{searchTerm:s,searchResults:a})})},E=s(86),q=s(35),D=s(23).a.div(g||(g=Object(q.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 250px;\n  width: 100%;\n  backgroundColor: linear-gradient(\n    90deg,\n    rgba(128, 117, 117, 0.726) 0%,\n    rgb(73, 73, 80) 100%\n  );\n  color: #fff;\n  margin: 0 15px;\n  font-size: 4em;\n"]))),L=[{width:1,itemsToShow:1},{width:550,itemsToShow:2},{width:768,itemsToShow:3},{width:1200,itemsToShow:4}],_=function(e){var t=Object(c.useContext)(f),s=t.searchBestResults,n=(t.setSearchBestResults,t.queryAPIBookBest);return console.log("xxxxx",s),Object(c.useEffect)((function(){n()}),[]),Object(O.jsxs)("div",{className:"home-overall",children:[Object(O.jsx)("h1",{className:"home-h1",children:"Find Your Book"}),Object(O.jsx)(z,{}),Object(O.jsxs)("div",{className:"carousel",children:[Object(O.jsx)("h2",{children:"Best Seller"}),Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(E.a,{breakPoints:L,children:s.map((function(e,t){return Object(O.jsx)(D,{children:Object(O.jsx)("img",{style:{width:"1.6em"},src:e.book_image,alt:""},t)},t)}))})})]})]})},V=function(){return Object(O.jsx)("div",{className:"about-overall",children:Object(O.jsx)("h1",{children:"About"})})},G=function(){var e=Object(c.useContext)(f),t=e.fav,s=e.dispatchFav,n=t.map((function(e,t){return Object(O.jsxs)("div",{className:"favourite",children:[Object(O.jsx)("img",{className:"favbook-img",src:void 0===e?"":e.book_image,alt:""}),Object(O.jsxs)("div",{className:"fav-book",children:[Object(O.jsx)("h3",{children:e.title}),Object(O.jsxs)("div",{className:"fav-over",children:[" ",e.description]}),Object(O.jsxs)("div",{className:"button-container",children:[Object(O.jsxs)("a",{target:"_blank",href:e.link,children:[Object(O.jsx)(d.a,{variant:"contained",color:"info",size:"small",startIcon:Object(O.jsx)(R.a,{}),children:"Link"})," "]}),Object(O.jsx)(d.a,{variant:"contained",size:"small",color:"error",startIcon:Object(O.jsx)(I.a,{}),onClick:function(){s({type:"REMOVEFROMFAV",payload:e.id})},children:"Del"}),Object(O.jsx)(j.b,{to:"/favourite/"+e.title,children:Object(O.jsx)(d.a,{variant:"contained",size:"small",color:"inherit",style:{marginLeft:"0.3em"},children:"Info"})})]})]})]},t)}));return console.log("lllll",t.length),Object(O.jsxs)("div",{className:"favourite-overall",children:[Object(O.jsx)("h1",{children:"Favourite"}),Object(O.jsx)("div",{className:"favourite-image",children:n.length<1?Object(O.jsx)("h1",{className:"fav-empty",children:"Favourite is Empty!"}):n})]})},M=function(e,t){switch(t.type){case"ADDTOFAV":return[t.payload].concat(Object(o.a)(e));case"REMOVEFROMFAV":return e.filter((function(e,s){return e.id!==t.payload}));default:return e}},W=s(43),Y=s.n(W),J=function(){var e=Object(c.useContext)(f).searchBestResults,t=Object(b.h)().detail;console.log("dddd",t),console.log("sssss",e);var s=e.filter((function(e){return e.title===t}));return console.log("detaillll",s[0].title),Object(O.jsx)("div",{className:"details",children:Object(O.jsxs)("div",{className:"details-container",children:[Object(O.jsxs)("div",{className:"details-img-book",children:[Object(O.jsx)("img",{className:"details-img",src:void 0===s[0]?"":s[0].book_image,alt:""}),Object(O.jsxs)("div",{className:"details-book",children:[Object(O.jsx)("h2",{className:"details-title",children:s[0].title}),Object(O.jsxs)("h3",{className:"details-author",children:["Author: ",s[0].author]}),Object(O.jsxs)("h3",{className:"details-publisher",children:["Publisher: ",s[0].publisher]}),Object(O.jsxs)("h3",{className:"details-publisher",children:["Rating: ",s[0].rank]}),Object(O.jsxs)("a",{target:"_blank",href:s[0].amazon_product_url,children:[Object(O.jsx)(d.a,{variant:"contained",color:"info",size:"small",startIcon:Object(O.jsx)(Y.a,{}),children:"Purchase"})," "]})]})]}),Object(O.jsxs)("div",{className:"details-description",children:["Sypnosis: ",Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:s[0].description})]})]})})},U=function(){var e=Object(c.useContext)(f).searchResults,t=Object(b.h)().detail;console.log("detailresults",t),console.log("searchresultsfromdetailresults",e);var s=e.filter((function(e){return e.id===t}));return console.log("detailllllresults",s[0]),Object(O.jsx)("div",{className:"details",children:Object(O.jsxs)("div",{className:"details-container",children:[Object(O.jsxs)("div",{className:"details-img-book",children:[Object(O.jsx)("img",{className:"details-img",src:void 0===s[0].volumeInfo.imageLinks?"":s[0].volumeInfo.imageLinks.thumbnail,alt:""}),Object(O.jsxs)("div",{className:"details-book",children:[Object(O.jsxs)("h2",{children:[s[0].volumeInfo.title," "]}),Object(O.jsxs)("h3",{children:["Author: ",s[0].volumeInfo.authors?s[0].volumeInfo.authors[0]:""]}),Object(O.jsxs)("h3",{children:["Publisher: ",s[0].volumeInfo?s[0].volumeInfo.publisher:""]}),Object(O.jsxs)("h3",{children:["Rank: ",s[0].volumeInfo?s[0].volumeInfo.averageRating:""]}),Object(O.jsxs)("a",{target:"_blank",href:s[0].volumeInfo.canonicalVolumeLink,children:[Object(O.jsx)(d.a,{variant:"contained",color:"info",size:"small",startIcon:Object(O.jsx)(Y.a,{}),children:"Purchase"})," "]})]})]}),Object(O.jsxs)("div",{className:"details-description",children:["Sypnosis: ",Object(O.jsx)("br",{}),Object(O.jsxs)("p",{children:[" ",s[0].volumeInfo?s[0].volumeInfo.description:""," "]})]})]})})},Q=function(){var e=Object(c.useContext)(f).fav,t=Object(b.h)().detail;console.log("detailparamsfav",t),console.log("fav",e);var s=e.filter((function(e){return e.title===t}));return console.log("detailllllresults",s[0]),Object(O.jsx)("div",{className:"details",children:Object(O.jsxs)("div",{className:"details-container",children:[Object(O.jsxs)("div",{className:"details-img-book",children:[Object(O.jsx)("img",{className:"details-img",src:void 0===s[0]?"":s[0].book_image,alt:""}),Object(O.jsxs)("div",{className:"details-book",children:[Object(O.jsx)("h2",{children:s[0].title}),Object(O.jsxs)("h3",{children:["Author: ",s[0].author]}),Object(O.jsxs)("h3",{children:["Publisher: ",s[0].publisher]}),Object(O.jsxs)("h3",{children:["Rank: ",s[0].rank]}),Object(O.jsxs)("a",{target:"_blank",href:s[0].link,children:[Object(O.jsx)(d.a,{variant:"contained",color:"info",size:"small",startIcon:Object(O.jsx)(Y.a,{}),children:"Purchase"})," "]})]})]}),Object(O.jsxs)("div",{className:"details-description",children:["Sypnosis: ",Object(O.jsx)("br",{}),Object(O.jsxs)("p",{children:[" ",s[0]?s[0].description:""," "]})]})]})})},Z=function(e){var t=e.searchTerm,s=e.setSearchTerm,n=e.searchResults,a=e.setSearchResults,r=e.disableSubmit,l=e.setDisableSubmit,o=e.queryGoogleAPIBook,i=e.queryAPIBookBest,j=e.countRef,d=e.resultsCount,h=e.setResultsCount,m=e.queryGoogleAPIBookOthers,v=e.buttons,x=e.filterTitle,p=e.searchBestResults,g=e.setSearchBestResults,k=Object(c.useState)(!1),I=Object(u.a)(k,2),N=I[0],S=I[1],y=Object(c.useReducer)(M,[],(function(){var e=localStorage.getItem("book-finder-app-favourites");return e?JSON.parse(e):[]})),R=Object(u.a)(y,2),A=R[0],w=R[1];return Object(c.useEffect)((function(){localStorage.setItem("book-finder-app-favourites",JSON.stringify(A))}),[A]),Object(O.jsx)("div",{className:"main",children:Object(O.jsx)(f.Provider,{value:{searchTerm:t,setSearchTerm:s,searchResults:n,setSearchResults:a,searchBestResults:p,setSearchBestResults:g,isOpen:N,setIsOpen:S,fav:A,dispatchFav:w,disableSubmit:r,setDisableSubmit:l,queryGoogleAPIBook:o,queryAPIBookBest:i,countRef:j,resultsCount:d,setResultsCount:h,queryGoogleAPIBookOthers:m,buttons:v,filterTitle:x},children:Object(O.jsxs)(b.d,{children:[Object(O.jsx)(b.b,{path:"/",element:Object(O.jsx)(_,{})}),Object(O.jsx)(b.b,{path:"/bestseller",element:Object(O.jsx)(C,{})}),Object(O.jsx)(b.b,{path:"/favourite",element:Object(O.jsx)(G,{})}),Object(O.jsx)(b.b,{path:"/about",element:Object(O.jsx)(V,{})}),Object(O.jsx)(b.b,{path:"/results",element:Object(O.jsx)(P,{})}),Object(O.jsx)(b.b,{path:"/bestseller/:detail",element:Object(O.jsx)(J,{})}),Object(O.jsx)(b.b,{path:"/results/:detail",element:Object(O.jsx)(U,{})}),Object(O.jsx)(b.b,{path:"/favourite/:detail",element:Object(O.jsx)(Q,{})}),Object(O.jsx)(b.b,{path:"*",element:Object(O.jsx)(b.a,{to:"/"})})]})})})};function H(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),s=t[0],n=t[1],a=Object(c.useState)([]),r=Object(u.a)(a,2),j=r[0],b=r[1],d=Object(c.useState)([]),h=Object(u.a)(d,2),m=h[0],f=h[1],p=Object(c.useState)(!0),g=Object(u.a)(p,2),k=g[0],I=g[1],N=Object(c.useState)(10),S=Object(u.a)(N,2),y=S[0],R=S[1],C=Object(c.useState)([]),A=Object(u.a)(C,2),w=A[0],B=A[1],T=Object(c.useState)([]),P=Object(u.a)(T,2),F=P[0],z=P[1];console.log("searchResults",m),console.log("buttons",F),Object(c.useEffect)((function(){return function(){console.log("cleanup app")}}),[s]);var E=Object(c.useRef)(),q=function(){var e=Object(i.a)(l.a.mark((function e(){var t,c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("triggered button"),e.prev=1,"AIzaSyDeqdtT7Yzm3EyJeWrqZfVoWcITn2Mohj8",e.next=5,fetch("https://www.googleapis.com/books/v1/volumes?q=".concat(s,"&maxResults=").concat(y));case 5:return t=e.sent,e.next=8,t.json();case 8:c=e.sent,b(c.items),f(c.items),n=["All"].concat(Object(o.a)(new Set(c.items.map((function(e){return e.volumeInfo.categories?e.volumeInfo.categories[0]:"No category"}))))),z(n),console.log("allcategories",n),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(1),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(i.a)(l.a.mark((function e(){var t,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"shSl6iPGIgUC7v5kkRnkPY2NbtpruQU8",e.next=4,fetch("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=".concat("shSl6iPGIgUC7v5kkRnkPY2NbtpruQU8"));case 4:return t=e.sent,e.next=7,t.json();case 7:s=e.sent,B(s.results.books),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),L=function(){var e=Object(i.a)(l.a.mark((function e(t){var s,c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"AIzaSyDeqdtT7Yzm3EyJeWrqZfVoWcITn2Mohj8",e.next=4,fetch("https://www.googleapis.com/books/v1/volumes?q=inauthor:".concat(t,"&maxResults=").concat(y));case 4:return s=e.sent,e.next=7,s.json();case 7:c=e.sent,b(c.items),f(c.items),n=["All"].concat(Object(o.a)(new Set(c.items.map((function(e){return e.volumeInfo.categories?e.volumeInfo.categories[0]:"No category"}))))),z(n),console.log("allcategories",n),console.log(c.items),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0);case 19:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(v,{searchTerm:s,setSearchTerm:n,disableSubmit:k,setDisableSubmit:I,queryGoogleAPIBook:q,setSearchResults:f}),Object(O.jsx)(Z,{searchTerm:s,setSearchTerm:n,searchResults:m,setSearchResults:f,disableSubmit:k,setDisableSubmit:I,queryGoogleAPIBook:q,queryAPIBookBest:D,countRef:E,resultsCount:y,setResultsCount:R,searchBestResults:w,setSearchBestResults:B,queryGoogleAPIBookOthers:L,buttons:F,filterTitle:function(e){if("All"===e)return console.log("all",m),void f(j);var t=j.filter((function(t){return t.volumeInfo.categories?t.volumeInfo.categories[0]===e:void 0}));console.log("filtered",m),f(t)}}),Object(O.jsx)(x,{})]})}s(111);var K=document.getElementById("root");a.a.render(Object(O.jsx)(j.a,{children:Object(O.jsx)(H,{})}),K)}},[[112,1,2]]]);
//# sourceMappingURL=main.9632cfe1.chunk.js.map