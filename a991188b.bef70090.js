(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{105:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),p=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(n),h=r,b=l["".concat(a,".").concat(h)]||l[h]||d[h]||i;return n?o.a.createElement(b,c(c({ref:t},u),{},{components:n})):o.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},88:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),o=n(6),i=(n(0),n(105)),a={id:"endpoints",title:"Endpoints"},c={unversionedId:"features/endpoints",id:"version-6.1.x/features/endpoints",isDocsHomePage:!1,title:"Endpoints",description:"OAuth2 Proxy responds directly to the following endpoints. All other endpoints will be proxied upstream when authenticated. The /oauth2 prefix can be changed with the --proxy-prefix config variable.",source:"@site/versioned_docs/version-6.1.x/features/endpoints.md",slug:"/features/endpoints",permalink:"/oauth2-proxy/docs/6.1.x/features/endpoints",editUrl:"https://github.com/oauth2-proxy/oauth2-proxy/edit/master/docs/versioned_docs/version-6.1.x/features/endpoints.md",version:"6.1.x",sidebar:"version-6.1.x/docs",previous:{title:"TLS Configuration",permalink:"/oauth2-proxy/docs/6.1.x/configuration/tls"},next:{title:"Request Signatures",permalink:"/oauth2-proxy/docs/6.1.x/features/request_signatures"}},s=[{value:"Sign out",id:"sign-out",children:[]}],u={rightToc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"OAuth2 Proxy responds directly to the following endpoints. All other endpoints will be proxied upstream when authenticated. The ",Object(i.b)("inlineCode",{parentName:"p"},"/oauth2")," prefix can be changed with the ",Object(i.b)("inlineCode",{parentName:"p"},"--proxy-prefix")," config variable."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"/robots.txt - returns a 200 OK response that disallows all User-agents from all paths; see ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://www.robotstxt.org/"}),"robotstxt.org")," for more info"),Object(i.b)("li",{parentName:"ul"},"/ping - returns a 200 OK response, which is intended for use with health checks"),Object(i.b)("li",{parentName:"ul"},"/oauth2/sign_in - the login page, which also doubles as a sign out page (it clears cookies)"),Object(i.b)("li",{parentName:"ul"},"/oauth2/sign_out - this URL is used to clear the session cookie"),Object(i.b)("li",{parentName:"ul"},"/oauth2/start - a URL that will redirect to start the OAuth cycle"),Object(i.b)("li",{parentName:"ul"},"/oauth2/callback - the URL used at the end of the OAuth cycle. The oauth app will be configured with this as the callback url."),Object(i.b)("li",{parentName:"ul"},"/oauth2/userinfo - the URL is used to return user's email from the session in JSON format."),Object(i.b)("li",{parentName:"ul"},"/oauth2/auth - only returns a 202 Accepted response or a 401 Unauthorized response; for use with the ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/oauth2-proxy/docs/6.1.x/configuration/overview#configuring-for-use-with-the-nginx-auth_request-directive"}),"Nginx ",Object(i.b)("inlineCode",{parentName:"a"},"auth_request")," directive"))),Object(i.b)("h3",{id:"sign-out"},"Sign out"),Object(i.b)("p",null,"To sign the user out, redirect them to ",Object(i.b)("inlineCode",{parentName:"p"},"/oauth2/sign_out"),". This endpoint only removes oauth2-proxy's own cookies, i.e. the user is still logged in with the authentication provider and may automatically re-login when accessing the application again. You will also need to redirect the user to the authentication provider's sign out page afterwards using the ",Object(i.b)("inlineCode",{parentName:"p"},"rd")," query parameter, i.e. redirect the user to something like (notice the url-encoding!):"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"/oauth2/sign_out?rd=https%3A%2F%2Fmy-oidc-provider.example.com%2Fsign_out_page\n")),Object(i.b)("p",null,"Alternatively, include the redirect URL in the ",Object(i.b)("inlineCode",{parentName:"p"},"X-Auth-Request-Redirect")," header:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"GET /oauth2/sign_out HTTP/1.1\nX-Auth-Request-Redirect: https://my-oidc-provider/sign_out_page\n...\n")),Object(i.b)("p",null,'(The "sign_out_page" should be the ',Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://openid.net/specs/openid-connect-session-1_0.html#rfc.section.2.1"}),Object(i.b)("inlineCode",{parentName:"a"},"end_session_endpoint"))," from ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://openid.net/specs/openid-connect-discovery-1_0.html#ProviderConfig"}),"the metadata")," if your OIDC provider supports Session Management and Discovery.)"),Object(i.b)("p",null,"BEWARE that the domain you want to redirect to (",Object(i.b)("inlineCode",{parentName:"p"},"my-oidc-provider.example.com")," in the example) must be added to the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"../configuration/overview"}),Object(i.b)("inlineCode",{parentName:"a"},"--whitelist-domain"))," configuration option otherwise the redirect will be ignored."))}p.isMDXComponent=!0}}]);