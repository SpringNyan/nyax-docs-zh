(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{144:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return s}));var a=t(2),o=t(9),c=(t(0),t(159)),r={id:"model",title:"Model"},l={id:"concepts/model",isDocsHomePage:!1,title:"Model",description:"\u4f7f\u7528 Model \u53ef\u4ee5\u5c06\u4e00\u4e2a\u590d\u6742\u7684\u5e94\u7528\u5206\u5272\u6210\u8bb8\u591a\u8f83\u5c0f\u7684\u6a21\u5757\u3002\u6bcf\u4e2a Model \u90fd\u62e5\u6709\u81ea\u5df1\u7684 defaultArgs\uff0cinitialState\uff0cselectors\uff0creducers\uff0ceffects \u548c epics\u3002",source:"@site/docs\\concepts\\model.md",permalink:"/nyax-docs-0.5.x/docs/concepts/model",sidebar:"someSidebar",previous:{title:"\u57fa\u672c\u6982\u5ff5",permalink:"/nyax-docs-0.5.x/docs/concepts/basic-concepts"},next:{title:"Container",permalink:"/nyax-docs-0.5.x/docs/concepts/container"}},i=[{value:"Dynamic Model",id:"dynamic-model",children:[]},{value:"Lazy Model",id:"lazy-model",children:[]},{value:"\u5408\u5e76 Model",id:"\u5408\u5e76-model",children:[]},{value:"\u5408\u5e76 Sub Model",id:"\u5408\u5e76-sub-model",children:[]},{value:"\u91cd\u5199 Model \u5b9a\u4e49",id:"\u91cd\u5199-model-\u5b9a\u4e49",children:[]}],d={rightToc:i};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u4f7f\u7528 Model \u53ef\u4ee5\u5c06\u4e00\u4e2a\u590d\u6742\u7684\u5e94\u7528\u5206\u5272\u6210\u8bb8\u591a\u8f83\u5c0f\u7684\u6a21\u5757\u3002\u6bcf\u4e2a Model \u90fd\u62e5\u6709\u81ea\u5df1\u7684 defaultArgs\uff0cinitialState\uff0cselectors\uff0creducers\uff0ceffects \u548c epics\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"const Model = createModel(\n  class extends ModelBase {\n    // ...\n  }\n);\n")),Object(c.b)("p",null,"\u5f53\u521b\u5efa\u5e94\u7528\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"registerModels")," \u6ce8\u518c\u8fd9\u4e9b Model\u3002"),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u540c\u4e00 Model \u53ea\u80fd\u88ab\u6ce8\u518c\u4e00\u6b21\u3002"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"const { registerModels } = createNyax(/* options */);\nregisterModels({\n  app: AppModel,\n  user: UserModel,\n  entity: {\n    foo: EntityFooModel,\n    bar: EntityBarModel,\n  },\n});\n")),Object(c.b)("h2",{id:"dynamic-model"},"Dynamic Model"),Object(c.b)("p",null,"\u9ed8\u8ba4\u7684 Model \u662f\u9759\u6001\u7684\uff0c\u5728\u6ce8\u518c Model \u7684\u65f6\u5019\u4f1a\u81ea\u52a8\u6ce8\u518c\u5176\u552f\u4e00 Container\u3002\u5f53\u6211\u4eec\u9700\u8981\u6ce8\u518c\u540c\u4e00\u4e2a Model \u7684\u591a\u4e2a\u76f8\u4e92\u72ec\u7acb\u7684 Container \u65f6\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06 Model \u914d\u7f6e\u4e3a Dynamic Model\u3002"),Object(c.b)("p",null,"\u5f53 Model \u4e3a Dynamic Model \u65f6\uff0c\u6211\u4eec\u5728\u83b7\u53d6 Container \u65f6\u9700\u8981\u989d\u5916\u63d0\u4f9b ",Object(c.b)("inlineCode",{parentName:"p"},"containerKey")," \u4f5c\u4e3a\u6807\u8bc6\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b Dynamic Model \u5bf9\u5e94\u7684 Container \u9700\u8981\u663e\u5f0f\u6ce8\u518c\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'const Model = createModel(\n  class extends ModelBase {\n    // ...\n  },\n  {\n    isDynamic: true, // Model is dynamic\n  }\n);\n\nconst container = getContainer(Model, "someContainerKey");\ncontainer.register(); // container needs to be registered explicitly\n')),Object(c.b)("h2",{id:"lazy-model"},"Lazy Model"),Object(c.b)("p",null,"\u9ed8\u8ba4\u7684 Model \u662f\u975e\u60f0\u6027\u7684\u3002\u8fd9\u610f\u5473\u7740\u5bf9\u4e8e Static Model \u4f1a\u7acb\u5373\u6ce8\u518c\u5176\u552f\u4e00\u7684 Container\uff1b\u5bf9\u4e8e Dynamic Model \u5219\u4f1a\u8981\u6c42\u663e\u5f0f\u6ce8\u518c\u5176\u6bcf\u4e00\u4e2a Container\u3002\u5982\u679c\u6211\u4eec\u5e0c\u671b Model \u5bf9\u5e94\u7684 Container \u80fd\u591f\u6309\u9700\u6ce8\u518c\uff0c\u5219\u53ef\u4ee5\u914d\u7f6e Model \u4e3a Lazy Model\u3002"),Object(c.b)("p",null,"\u5f53 Model \u4e3a Lazy Model \u65f6\uff0cStatic Model \u5bf9\u5e94\u7684 Container \u4e0d\u4f1a\u7acb\u5373\u6ce8\u518c\uff0c\u6240\u6709\u7684\u672a\u6ce8\u518c Container \u5728\u5206\u53d1 action \u65f6\u4f1a\u81ea\u52a8\u8fdb\u884c\u6ce8\u518c\u3002"),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Container \u81ea\u52a8\u6ce8\u518c\u65f6\u4f1a\u4f7f\u7528\u9ed8\u8ba4\u53c2\u6570\u3002\u8bf7\u786e\u4fdd\u5bf9\u5e94 Model \u7684 defaultArgs \u4e2d\u4e0d\u5305\u542b\u5fc5\u8981\u53c2\u6570\uff0c\u5426\u5219\u4f1a\u629b\u51fa\u9519\u8bef\u3002"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'const Model = createModel(\n  class extends ModelBase {\n    // ...\n  },\n  {\n    isDynamic: true,\n    isLazy: true, // Model is lazy\n  }\n);\n\nconst container = getContainer(Model, "someContainerKey");\ncontainer.actions.someAction.dispatch({}); // container will be registered automatically\n')),Object(c.b)("h2",{id:"\u5408\u5e76-model"},"\u5408\u5e76 Model"),Object(c.b)("p",null,"\u591a\u4e2a Model \u53ef\u4ee5\u88ab\u5408\u5e76\u6210\u4e00\u4e2a\u65b0\u7684 Model\uff0c\u6bcf\u4e2a Model \u7684\u5b9a\u4e49\u4f1a\u88ab\u9012\u5f52\u5730\u5408\u5e76\u3002"),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(c.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"\u591a\u4e2a Model \u4e0d\u5141\u8bb8\u5bf9\u76f8\u540c\u7684 key \u8fdb\u884c\u91cd\u590d\u5b9a\u4e49\u3002"))),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'const AModel = createModel(\n  class extends ModelBase {\n    public initialState() {\n      return {\n        a: "A",\n      };\n    }\n  }\n);\n\nconst BModel = createModel(\n  class extends ModelBase {\n    public initialState() {\n      return {\n        b: "B",\n      };\n    }\n  }\n);\n\nconst Model = mergeModels(AModel, BModel);\nconst container = getContainer(Model);\ncontainer.state.a; // "A"\ncontainer.state.b; // "B"\n')),Object(c.b)("h2",{id:"\u5408\u5e76-sub-model"},"\u5408\u5e76 Sub Model"),Object(c.b)("p",null,"\u591a\u4e2a Model \u53ef\u4ee5\u4f5c\u4e3a Sub Model \u88ab\u5408\u5e76\u4e3a\u4e00\u4e2a\u65b0\u7684 Model\uff0c\u6bcf\u4e2a Model \u7684\u5b9a\u4e49\u4f1a\u88ab\u653e\u5230\u76f8\u5e94\u7684 namespace \u4e0b\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'const AModel = createModel(\n  class extends ModelBase {\n    public initialState() {\n      return {\n        name: "A",\n        x: "X",\n      };\n    }\n  }\n);\n\nconst BModel = createModel(\n  class extends ModelBase {\n    public initialState() {\n      return {\n        name: "B",\n        y: "Y",\n      };\n    }\n  }\n);\n\nconst Model = mergeSubModels({\n  a: AModel,\n  b: BModel,\n});\nconst container = getContainer(Model);\ncontainer.state.a.name; // "A"\ncontainer.state.b.name; // "B"\ncontainer.state.a.x; // "X"\ncontainer.state.b.y; // "Y"\n')),Object(c.b)("h2",{id:"\u91cd\u5199-model-\u5b9a\u4e49"},"\u91cd\u5199 Model \u5b9a\u4e49"),Object(c.b)("p",null,"\u53ef\u4ee5\u5728\u65b0\u7684 Model \u4e2d\u91cd\u5199\u88ab\u7ee7\u627f\u7684 Model \u7684\u5b9a\u4e49\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),'const BaseModel = createModel(\n  class extends ModelBase {\n    public effects() {\n      return {\n        someEffect: async () => {\n          console.log("Base");\n        },\n      };\n    }\n  }\n);\n\nconst Model = createModel(\n  class extends BaseModel {\n    public effects() {\n      return {\n        ...super.effects(),\n\n        someEffect: async () => {\n          console.log("B");\n        },\n      };\n    }\n  }\n);\n')))}s.isMDXComponent=!0},159:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return u}));var a=t(0),o=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=o.a.createContext({}),s=function(e){var n=o.a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=s(e.components);return o.a.createElement(d.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,r=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),b=s(t),m=a,u=b["".concat(r,".").concat(m)]||b[m]||p[m]||c;return t?o.a.createElement(u,l(l({ref:n},d),{},{components:t})):o.a.createElement(u,l({ref:n},d))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,r=new Array(c);r[0]=m;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var d=2;d<c;d++)r[d]=t[d];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);