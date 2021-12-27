"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1509],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),m=s,h=u["".concat(o,".").concat(m)]||u[m]||d[m]||r;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,i=new Array(r);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:s,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},23715:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var n=a(83117),s=a(80102),r=(a(67294),a(3905)),i=["components"],l={sidebar_label:"2. Validate NFT Assets"},o="Validate NFT Assets",c={unversionedId:"candy-machine-v1/validate-assets",id:"candy-machine-v1/validate-assets",title:"Validate NFT Assets",description:"The Candy Machine v1 is being deprecated on January 5th, 2022. Creating a new Candy Machine v1 will be disabled. Please use the Candy Machine v2 instead.",source:"@site/docs/candy-machine-v1/03-validate-assets.md",sourceDirName:"candy-machine-v1",slug:"/candy-machine-v1/validate-assets",permalink:"/candy-machine-v1/validate-assets",editUrl:"https://github.com/metaplex/docs/tree/main/docs/candy-machine-v1/03-validate-assets.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"2. Validate NFT Assets"},sidebar:"sidebar",previous:{title:"1. Prepare NFT Assets",permalink:"/candy-machine-v1/prepare-assets"},next:{title:"3. Upload NFT Assets",permalink:"/candy-machine-v1/upload-assets"}},p=[{value:"Developer Tooling Required",id:"developer-tooling-required",children:[{value:"1. Check the number of assets (json and image files).",id:"1-check-the-number-of-assets-json-and-image-files",children:[],level:3},{value:"2. \u0421heck image and properties.files values",id:"2-\u0441heck-image-and-propertiesfiles-values",children:[],level:3},{value:"3. Check name values",id:"3-check-name-values",children:[],level:3},{value:"4. Check symbol values",id:"4-check-symbol-values",children:[],level:3},{value:"5. Check properties.creators",id:"5-check-propertiescreators",children:[],level:3},{value:"6. Check seller_fee_basis_points",id:"6-check-seller_fee_basis_points",children:[],level:3}],level:2}],d={toc:p};function u(e){var t=e.components,a=(0,s.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"validate-nft-assets"},"Validate NFT Assets"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The Candy Machine v1 is being deprecated on January 5th, 2022. Creating a new Candy Machine v1 will be disabled. Please use the ",(0,r.kt)("a",{parentName:"p",href:"../candy-machine-v2/introduction"},"Candy Machine v2")," instead."))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Don't skip this section. A lot of bugs happen because of invalid data."))),(0,r.kt)("h2",{id:"developer-tooling-required"},"Developer Tooling Required"),(0,r.kt)("p",null,"Ensure you have recent versions of ",(0,r.kt)("inlineCode",{parentName:"p"},"jq")," installed:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://stedolan.github.io/jq/download/"},(0,r.kt)("inlineCode",{parentName:"a"},"jq")," Installation"))),(0,r.kt)("h3",{id:"1-check-the-number-of-assets-json-and-image-files"},"1. Check the number of assets (json and image files)."),(0,r.kt)("p",null,"Get a count of the total number of asset files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ find assets -type f  | wc -l\n")),(0,r.kt)("p",null,"Get a count of the metadata files"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ find assets -type f -name '*.json' | wc -l\n")),(0,r.kt)("p",null,"Get a count of the image files"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ find assets -type f -name '*.png' | wc -l\n")),(0,r.kt)("p",null,"For example, if you have 10 images, you will see this result after running the above commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ find assets -type f  | wc -l\n20\n\n$ find assets -type f -name '*.json' | wc -l\n10\n\n$ find assets -type f -name '*.png' | wc -l\n10\n")),(0,r.kt)("h3",{id:"2-\u0441heck-image-and-propertiesfiles-values"},"2. \u0421heck image and properties.files values"),(0,r.kt)("p",null,"Make sure your json and file name agree:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"0.json should refer to 0.png in the .image and .files props"),(0,r.kt)("li",{parentName:"ul"},"1.json should refer to 1.png in the .image and .files props"),(0,r.kt)("li",{parentName:"ul"},"..."),(0,r.kt)("li",{parentName:"ul"},"n.json should refer to n.png in the .image and .files props")),(0,r.kt)("h3",{id:"3-check-name-values"},"3. Check name values"),(0,r.kt)("p",null,"This command lists then sorts all of your name values. For most projects, you're just paging through and confirming. The pattern looks like you'd expect it to."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ find assets -type f -name '*.json' |  xargs jq -r '.name' | sort | less\n")),(0,r.kt)("h3",{id:"4-check-symbol-values"},"4. Check symbol values"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ find assets -type f -name '*.json' |  xargs jq -r '.symbol' | sort | uniq -c\n")),(0,r.kt)("h3",{id:"5-check-propertiescreators"},"5. Check properties.creators"),(0,r.kt)("p",null,"This command flattens, then counts the unique properties.creators values in your metadata. For most projects, you should see a consistent count across all parties (address-","[1..3]",")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ find assets -type f -name '*.json' | xargs jq '.properties.creators' | jq -c '.[] | [.address,.share]' | sort | uniq -c\n10 [\"<address-1>\",60]\n")),(0,r.kt)("p",null,"This command extends the prior command by extracting the shares & summing them up. You should expect this to output 100."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ find assets -type f -name '*.json' | xargs jq '.properties.creators' | jq -c '.[] | [.address,.share]' | sort | uniq | jq '.[1]' | jq -s 'add'\n100\n")),(0,r.kt)("h3",{id:"6-check-seller_fee_basis_points"},"6. Check seller_fee_basis_points"),(0,r.kt)("p",null,"This command extracts unique seller_fee_basis_points, then sorts and counts them. For most projects you should see a consistent count across all metadata."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ find assets -type f -name '*.json' | xargs jq '.seller_fee_basis_points' | sort | uniq -c\n10 420\n")))}u.isMDXComponent=!0}}]);