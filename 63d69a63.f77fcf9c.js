(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{105:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),b=u(r),d=n,m=b["".concat(i,".").concat(d)]||b[d]||s[d]||a;return r?o.a.createElement(m,c(c({ref:t},l),{},{components:r})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},78:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(6),a=(r(0),r(105)),i={id:"installation",title:"Installation",slug:"/"},c={unversionedId:"installation",id:"version-7.1.x/installation",isDocsHomePage:!1,title:"Installation",description:"1.  Choose how to deploy:",source:"@site/versioned_docs/version-7.1.x/installation.md",slug:"/",permalink:"/oauth2-proxy/docs/",editUrl:"https://github.com/oauth2-proxy/oauth2-proxy/edit/master/docs/versioned_docs/version-7.1.x/installation.md",version:"7.1.x",sidebar:"version-7.1.x/docs",next:{title:"Behaviour",permalink:"/oauth2-proxy/docs/behaviour"}},p=[],l={rightToc:p};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Choose how to deploy:"),Object(a.b)("p",{parentName:"li"},"a. Download ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/oauth2-proxy/oauth2-proxy/releases"}),"Prebuilt Binary")," (current release is ",Object(a.b)("inlineCode",{parentName:"p"},"v7.1.0"),")"),Object(a.b)("p",{parentName:"li"},"b. Build with ",Object(a.b)("inlineCode",{parentName:"p"},"$ go get github.com/oauth2-proxy/oauth2-proxy/v7")," which will put the binary in ",Object(a.b)("inlineCode",{parentName:"p"},"$GOPATH/bin")),Object(a.b)("p",{parentName:"li"},"c. Using the prebuilt docker image ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://quay.io/oauth2-proxy/oauth2-proxy"}),"quay.io/oauth2-proxy/oauth2-proxy")," (AMD64, ARMv6 and ARM64 tags available)"))),Object(a.b)("p",null,"Prebuilt binaries can be validated by extracting the file and verifying it against the ",Object(a.b)("inlineCode",{parentName:"p"},"sha256sum.txt")," checksum file provided for each release starting with version ",Object(a.b)("inlineCode",{parentName:"p"},"v3.0.0"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"$ sha256sum -c sha256sum.txt 2>&1 | grep OK\noauth2-proxy-x.y.z.linux-amd64: OK\n")),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/oauth2-proxy/docs/configuration/oauth_provider"}),"Select a Provider and Register an OAuth Application with a Provider")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/oauth2-proxy/docs/configuration/overview"}),"Configure OAuth2 Proxy using config file, command line options, or environment variables")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/oauth2-proxy/docs/configuration/tls"}),"Configure SSL or Deploy behind a SSL endpoint")," (example provided for Nginx)")))}u.isMDXComponent=!0}}]);