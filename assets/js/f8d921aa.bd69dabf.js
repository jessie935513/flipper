(self.webpackChunk=self.webpackChunk||[]).push([[4572,2255],{3905:(e,t,i)=>{"use strict";i.d(t,{Zo:()=>u,kt:()=>h});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(i),h=n,y=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return i?r.createElement(y,a(a({ref:t},u),{},{components:i})):r.createElement(y,a({ref:t},u))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<o;c++)a[c]=i[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},9616:(e,t,i)=>{"use strict";i.r(t),i.d(t,{frontMatter:()=>s,metadata:()=>l,toc:()=>c,default:()=>p});var r=i(4034),n=i(9973),o=(i(7294),i(3905)),a=i(4996),s={},l={type:"mdx",permalink:"/docs/plugins/inspector/overview",source:"@site/src/embedded-pages/docs/plugins/inspector/overview.mdx"},c=[{value:"Quick edits",id:"quick-edits",children:[]},{value:"Target mode",id:"target-mode",children:[]},{value:"Accessibility mode (Android-only)",id:"accessibility-mode-android-only",children:[{value:"Talkback",id:"talkback",children:[]}]}],u={toc:c};function p(e){var t=e.components,i=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Layout Inspector in Flipper is useful for a ton of different debugging scenarios. First of all, you can inspect what views the hierarchy is made up of as well as what properties each view has. This is incredibly useful when debugging issues with your product."),(0,o.kt)("p",null,"The Layout tab supports ",(0,o.kt)("a",{parentName:"p",href:"https://fblitho.com"},"Litho")," and ",(0,o.kt)("a",{parentName:"p",href:"https://componentkit.org"},"ComponentKit")," components as well. We integrate with these frameworks to present components in the hierarchy just as if they were native views. We show you all the layout properties, props, and state of the components. The layout inspector is further extensible to support other UI frameworks."),(0,o.kt)("p",null,"If you hover over a view or component in Flipper we will highlight the corresponding item in your app. This is perfect for debugging the bounds of your views and making sure you have the correct visual padding."),(0,o.kt)("img",{alt:"Layout plugin",src:(0,a.Z)("img/layout.png")}),(0,o.kt)("h2",{id:"quick-edits"},"Quick edits"),(0,o.kt)("p",null,"The Layout Inspector not only allows you to view the hierarchy and inspect each item's properties, but it also allows you to edit things such as layout attributes, background colors, props, and state. Most things actually. This allows you to quickly tweak paddings, margins, and colors until you are happy with them, all without re-compiling. This can save you many hours implementing a new design."),(0,o.kt)("h2",{id:"target-mode"},"Target mode"),(0,o.kt)("p",null,"Enable target mode by clicking on the crosshairs icon. Now, you can touch any view on the device and Layout Inspector will jump to the correct position within your layout hierarchy."),(0,o.kt)("p",null,"Tip: Target mode also works with Talkback running."),(0,o.kt)("h2",{id:"accessibility-mode-android-only"},"Accessibility mode (Android-only)"),(0,o.kt)("p",null,"Enable accessibility mode by clicking on the accessibility icon. This shows the accessibility view hierarchy next to the normal hierarchy. In the hierarchy, the currently accessibility-focused view is highlighted in green and any accessibility-focusable elements have a green icon next to their name. The hierarchy's context menu also allows you to focus accessibility services on certain elements. When selecting an element in one hierarchy, the corresponding element in the other will also be highlighted. The hierarchies expand and collapse in sync, and searching through the main hierarchy works in accessibility mode as well."),(0,o.kt)("p",null,"When accessibility mode is enabled, the sidebar will show special properties that are used by accessibility services to determine their functionality. This includes things like content-description, clickable, focusable, and long-clickable among others."),(0,o.kt)("h3",{id:"talkback"},"Talkback"),(0,o.kt)("p",null,"The accessibility mode sidebar also includes a panel with properties derived specifically to show Talkback's interpretation of a view (with logic ported over from Google's Talkback source). While generally accurate, this is not guaranteed to be accurate for all situations. It is always better to turn Talkback on for verification."))}p.isMDXComponent=!0},3919:(e,t,i)=>{"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function n(e){return void 0!==e&&!r(e)}i.d(t,{b:()=>r,Z:()=>n})},4996:(e,t,i)=>{"use strict";i.d(t,{C:()=>o,Z:()=>a});var r=i(2263),n=i(3919);function o(){var e=(0,r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,i=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,i,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,s=void 0!==a&&a,l=o.absolute,c=void 0!==l&&l;if(!i)return i;if(i.startsWith("#"))return i;if((0,n.b)(i))return i;if(s)return t+i;var u=i.startsWith(t)?i:t+i.replace(/^\//,"");return c?e+u:u}(o,i,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},4416:(e,t,i)=>{"use strict";i.r(t),i.d(t,{frontMatter:()=>s,metadata:()=>l,toc:()=>c,default:()=>p});var r=i(4034),n=i(9973),o=(i(7294),i(3905)),a=i(9616),s={id:"inspector",title:"Layout Plugin",sidebar_label:"Layout",custom_edit_url:"https://github.com/facebook/flipper/blob/master/desktop/plugins/public/layout/docs/overview.mdx"},l={unversionedId:"features/plugins/inspector",id:"features/plugins/inspector",isDocsHomePage:!1,title:"Layout Plugin",description:"\u2192 See setup instructions for the Layout plugin",source:"@site/../docs/features/plugins/inspector.mdx",sourceDirName:"features/plugins",slug:"/features/plugins/inspector",permalink:"/docs/features/plugins/inspector",editUrl:"https://github.com/facebook/flipper/blob/master/desktop/plugins/public/layout/docs/overview.mdx",version:"current",sidebar_label:"Layout",frontMatter:{id:"inspector",title:"Layout Plugin",sidebar_label:"Layout",custom_edit_url:"https://github.com/facebook/flipper/blob/master/desktop/plugins/public/layout/docs/overview.mdx"},sidebar:"features",previous:{title:"Images Plugin",permalink:"/docs/features/plugins/fresco"},next:{title:"LeakCanary Plugin",permalink:"/docs/features/plugins/leak-canary"}},c=[],u={toc:c};function p(e){var t=e.components,i=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u2192 ",(0,o.kt)("a",{parentName:"p",href:"/docs/setup/plugins/inspector"},"See setup instructions for the Layout plugin")),(0,o.kt)(a.default,{mdxType:"Article"}))}p.isMDXComponent=!0}}]);