(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{NnCg:function(n,t,e){"use strict";e.r(t),e.d(t,"pageQuery",(function(){return d}));var a=e("q1tI"),r=e.n(a),i=e("9Dj+"),o=e("H8eV"),l=e("qhaX"),s=function(n){var t=n.edges;return r.a.createElement("ul",null,Object(l.a)(t))},c=r.a.memo((function(n){var t=n.data.allMarkdownRemark.edges;return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:n.pageContext.tag,description:n.pageContext.tag}),r.a.createElement(s,{edges:t}))}));t.default=c;var d="659898178"},qhaX:function(n,t,e){"use strict";e.d(t,"a",(function(){return g}));var a=e("MUpH"),r=e("q1tI"),i=e.n(r),o=e("Wbzz"),l=e("vOnD"),s=e("NsEo"),c=e("/MKj"),d=e("wD49");function p(){var n=Object(a.a)(["\n  width: 100%;\n  height: 230px;\n  border-radius: 5px;\n  background: white;\n  position: relative;\n  display: flex;\n  align-items: flex-end;\n  transition: 0.4s ease-out;\n  &:hover {\n    transform: translateY(20px);\n    &:before {\n      opacity: 1;\n    }\n    .bg-bar {\n      border-radius: 5px;\n      height: 100%;\n    }\n    .info {\n      transition: 0.4s ease-out;\n      p:nth-last-child(1) {\n        visibility : visible;\n      }\n      transform: translateY(-1rem);\n    }\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    position: absolute;\n    top: 0;\n    left: 0;\n    border-radius: 5px;\n    transition: 1s;\n  }\n\n  .bg-bar {\n    position: absolute;\n    border-radius: 0 0 5px 5px;\n    width: 100%;\n    height: 120px;\n    background: rgba(0, 0, 0, 0.3);\n    transition: 0.5s;\n  }\n\n  .info {\n    position: relative;\n    z-index: 3;\n    color: white;\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n    transform: translateY(4.5rem);\n    transition: 0.5s;\n    h1 {\n      margin: 0px;\n    }\n\n    p {\n      letter-spacing: 1px;\n      font-size: 15px;\n    }\n\n    p:nth-last-child(1) {\n      padding-top: 10px;\n      height:5rem;\n      visibility : hidden;\n    }\n  }\n"]);return p=function(){return n},n}var u=l.a.div(p());function m(n){var t=n.to,e=n.src,a=n.title,r=n.date,l=n.tags,s=n.description,c=n.onClick;return i.a.createElement(o.Link,{to:t,style:{textDecoration:"none"},onClick:c},i.a.createElement(u,null,i.a.createElement("img",{src:e}),i.a.createElement("div",{className:"bg-bar"}),i.a.createElement("div",{className:"info"},i.a.createElement("h1",null,a),i.a.createElement("p",null,l.map((function(n){return"#"+n})).join(" ")),i.a.createElement("p",null,r),i.a.createElement("p",null,s))))}function g(n){var t=Object(c.b)();return n.map((function(n){var e=n.node;return i.a.createElement("li",{style:{listStyleType:"none",marginBottom:"30px"},key:e.id},i.a.createElement(m,{to:"/"+Object(s.a)(e.frontmatter.title),src:e.frontmatter.thumb.childImageSharp.fluid.src,title:e.frontmatter.title,date:e.frontmatter.date,tags:e.frontmatter.tags,description:e.excerpt,onClick:function(){t(d.a.toggleAnimation(!0))}}))}))}}}]);
//# sourceMappingURL=component---src-templates-tags-tsx-e9e5faac583df4ef9097.js.map