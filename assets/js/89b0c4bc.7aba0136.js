(self.webpackChunk=self.webpackChunk||[]).push([[6159],{3905:(e,r,t)=>{"use strict";t.d(r,{Zo:()=>u,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),f=o,y=d["".concat(l,".").concat(f)]||d[f]||s[f]||a;return t?n.createElement(y,p(p({ref:r},u),{},{components:t})):n.createElement(y,p({ref:r},u))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=t[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5920:(e,r,t)=>{"use strict";t.r(r),t.d(r,{frontMatter:()=>p,metadata:()=>i,toc:()=>l,default:()=>u});var n=t(4034),o=t(9973),a=(t(7294),t(3905)),p={},i={type:"mdx",permalink:"/docs/plugins/sandbox/setup",source:"@site/src/embedded-pages/docs/plugins/sandbox/setup.mdx"},l=[{value:"Android",id:"android",children:[]}],c={toc:l};function u(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"To use the sandbox plugin, you need to add the plugin to your Flipper client instance. Currently the plugin is only supported on Android."),(0,a.kt)("h2",{id:"android"},"Android"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import com.facebook.flipper.plugins.sandbox.SandboxFlipperPlugin;\nimport com.facebook.flipper.plugins.sandbox.SandboxFlipperPluginStrategy;\n\nfinal SandboxFlipperPluginStrategy strategy = getStrategy(); // Your strategy goes here\nclient.addPlugin(new SandboxFlipperPlugin(strategy));\n")))}u.isMDXComponent=!0}}]);