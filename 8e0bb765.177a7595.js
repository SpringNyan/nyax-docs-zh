(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(2),c=n(9),r=(n(0),n(159)),o={id:"effects",title:"Effects"},i={id:"concepts/effects",isDocsHomePage:!1,title:"Effects",description:"\u901a\u8fc7\u5728 Model \u4e2d\u5b9a\u4e49 effects\uff0c\u6211\u4eec\u80fd\u591f\u8ba2\u9605 action \u4ece\u800c\u6267\u884c\u526f\u4f5c\u7528\u3002\u5176\u540c\u65f6\u88ab\u7528\u6765\u751f\u6210 Container \u4e2d\u7684 action \u52a9\u624b\u3002",source:"@site/docs\\concepts\\effects.md",permalink:"/nyax-docs-0.5.x/docs/concepts/effects",sidebar:"someSidebar",previous:{title:"Reducers",permalink:"/nyax-docs-0.5.x/docs/concepts/reducers"},next:{title:"Epics",permalink:"/nyax-docs-0.5.x/docs/concepts/epics"}},s=[{value:"\u57fa\u672c",id:"\u57fa\u672c",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u901a\u8fc7\u5728 Model \u4e2d\u5b9a\u4e49 effects\uff0c\u6211\u4eec\u80fd\u591f\u8ba2\u9605 action \u4ece\u800c\u6267\u884c\u526f\u4f5c\u7528\u3002\u5176\u540c\u65f6\u88ab\u7528\u6765\u751f\u6210 Container \u4e2d\u7684 action \u52a9\u624b\u3002"),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"effect \u548c ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/reduxjs/redux-thunk"}),"Redux Thunk")," \u4f5c\u7528\u7c7b\u4f3c\u3002\u4f46 effect \u662f\u7531\u6807\u51c6 action \u8fdb\u884c\u89e6\u53d1\u7684\u3002"))),Object(r.b)("h2",{id:"\u57fa\u672c"},"\u57fa\u672c"),Object(r.b)("p",null,"effect \u63a5\u53d7\u4e00\u4e2a payload \u53c2\u6570\uff0c\u5176\u4ee3\u8868\u5bf9\u5e94 action \u7684 payload\u3002payload \u7684\u7c7b\u578b\u9700\u8981\u88ab\u663e\u5f0f\u5b9a\u4e49\u3002"),Object(r.b)("p",null,"effect \u662f\u4e00\u4e2a async \u51fd\u6570\uff0c\u4f60\u53ef\u4ee5\u5728\u5176\u4e2d\u6267\u884c\u526f\u4f5c\u7528\uff0c\u4f8b\u5982\u5206\u53d1 action\uff0c\u8c03\u7528 API \u7b49\u7b49\u3002"),Object(r.b)("p",null,"effect \u53ef\u4ee5\u6709\u8fd4\u56de\u503c\u3002\u5f53\u4f7f\u7528 action \u52a9\u624b\u5206\u53d1 action \u65f6\uff0c\u4f1a\u8fd4\u56de\u4e00\u4e2a Promise\uff0c\u5176\u503c\u4e3a effect \u7684\u8fd4\u56de\u503c\u3002"),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"\u5982\u679c reducer \u548c effect \u88ab\u540c\u65f6\u5b9a\u4e49\uff0c\u5728\u5206\u53d1 action \u65f6 reducer \u4f1a\u88ab\u540c\u6b65\u6267\u884c\uff0c\u7136\u540e\u6267\u884c effect\u3002"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'const Model = createModel(\n  class extends ModelBase {\n    // ...\n\n    public effects() {\n      return {\n        fetchName: async () => {\n          const name = await this.dependencies.api.fetchName(); // assume result is "Nyax"\n          await this.actions.setName.dispatch(name);\n          return name;\n        },\n      };\n    }\n  }\n);\n\nconst container = getContainer(Model);\nawait container.actions.fetchName.dispatch({}); // "Nyax"\ncontainer.state.name; // "Nyax"\n')))}l.isMDXComponent=!0},159:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),c=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=c.a.createContext({}),l=function(e){var t=c.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},f=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,m=d["".concat(o,".").concat(f)]||d[f]||b[f]||r;return n?c.a.createElement(m,i(i({ref:t},p),{},{components:n})):c.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);