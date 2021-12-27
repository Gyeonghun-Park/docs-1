"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5207],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(n),c=a,h=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},54622:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return m}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],l={},p="Gumdrop",s={unversionedId:"airdrops/create-gumdrop",id:"airdrops/create-gumdrop",title:"Gumdrop",description:"Gumdrop is a new feature from the metaplex community. It is currently in BETA so use at your own risk.",source:"@site/docs/airdrops/create-gumdrop.md",sourceDirName:"airdrops",slug:"/airdrops/create-gumdrop",permalink:"/airdrops/create-gumdrop",editUrl:"https://github.com/metaplex/docs/tree/main/docs/airdrops/create-gumdrop.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"3. Update Fair Launch",permalink:"/fair-launch/update-fair-launch"},next:{title:"Getting started",permalink:"/sdk/js/getting-started"}},d=[{value:"Motivation",id:"motivation",children:[],level:2},{value:"Setup",id:"setup",children:[],level:2},{value:"Drop Types",id:"drop-types",children:[{value:"Token Airdrop",id:"token-airdrop",children:[],level:3},{value:"NFT Candy Machine Pre-sale",id:"nft-candy-machine-pre-sale",children:[],level:3},{value:"Edition Prints",id:"edition-prints",children:[],level:3}],level:2},{value:"Distribution Method",id:"distribution-method",children:[],level:2},{value:"Whitelist",id:"whitelist",children:[],level:2},{value:"Closing a Gumdrop",id:"closing-a-gumdrop",children:[],level:2},{value:"Deploy Custom Gumdrop Site",id:"deploy-custom-gumdrop-site",children:[],level:2}],u={toc:d};function m(e){var t=e.components,l=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"gumdrop"},"Gumdrop"),(0,i.kt)("p",null,"Gumdrop is a new feature from the metaplex community. It is currently in BETA so use at your own risk."),(0,i.kt)("p",null,"The Gumdrop program leverages the Solana blockchain and merkle trees to\nfacilitate airdrops to a large number of whitelisted users at a low cost to\ncreators."),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"Various ecosystem projects desire to ensure early followers and supporters gain\naccess to project assets whether they be tokens, NFTs, or others.\nSimultaneously, capitalization of these assets should not incur undue costs or\noperational overhead to the creators. There are several ways to achieve such a\nsetup and Gumdrop offers one that integrates with existing Solana and Metaplex\necosystem programs."),(0,i.kt)("p",null,"Gumdrop solves this efficient-airdrop issue by utilizing a space-efficient hash\nstructure (the merkle tree) such that an on-chain program can validate whether\nthe user is part of a whitelist. This uses a pull-based paradigm to shift the\nburden from creators, sending airdrops or pre-minting NFTs, to recipients, that\ncan choose to claim their portion or leave it for general adoption."),(0,i.kt)("p",null,"The approach, originally pioneered for token airdrops by\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Uniswap/merkle-distributor"},"Uniswap")," and ported to Solana\nby ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/saber-hq/merkle-distributor"},"Saber"),", is extended to\nallow pre-minting a Candy Machine or printing editions of a master copy.\nMoreover, Gumdrop allows creators to directly send whitelisted users a drop\nreclamation link by building the tree with off-chain handles (e.g email,\ndiscord, etc) and allowing the user to redeem into any wallet."),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("p",null,"Gumdrop creators can use either the Gumdrop CLI or the ",(0,i.kt)("a",{parentName:"p",href:"https://lwus.github.io/metaplex"},"web\nUI"),". Additional options are available through\nthe CLI. To execute the Gumdrop CLI or deploy a local version of the web UI,\nplease follow the same ",(0,i.kt)("a",{parentName:"p",href:"/candy-machine-v1/introduction#prerequisites"},"prerequisite steps of Candy Machine\ncreation"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The CLI can be found in the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/metaplex-foundation/metaplex/"},"Metaplex\nrepo")," at\n",(0,i.kt)("inlineCode",{parentName:"li"},"js/packages/cli/src/gumdrop-cli.ts")," and will also be run with ",(0,i.kt)("inlineCode",{parentName:"li"},"ts-node"),"."),(0,i.kt)("li",{parentName:"ul"},"The web interface can be run locally from the Metaplex\nrepo at ",(0,i.kt)("inlineCode",{parentName:"li"},"js/packages/gumdrop")," with ",(0,i.kt)("inlineCode",{parentName:"li"},"yarn start"),".\n(You can also use an ",(0,i.kt)("a",{parentName:"li",href:"https://lwus.github.io/metaplex"},"example deployment"),", but this site may not exist for long.)")),(0,i.kt)("p",null,"To create a drop, you must specify the ",(0,i.kt)("a",{parentName:"p",href:"#drop-types"},"drop type"),", the\n",(0,i.kt)("a",{parentName:"p",href:"#distribution-method"},"distribution method"),", and the\n",(0,i.kt)("a",{parentName:"p",href:"#whitelist"},"whitelist"),". When creating the drop, a throwaway ",(0,i.kt)("inlineCode",{parentName:"p"},"Keypair")," will be\ngenerated that holds authority over the on-chain Gumdrop state. This can be\nused to later ",(0,i.kt)("a",{parentName:"p",href:"#closing-a-gumdrop"},"close the gumdrop"),", so make sure to save it!"),(0,i.kt)("h2",{id:"drop-types"},"Drop Types"),(0,i.kt)("p",null,"There are multiple drop types supported by the gumdrop program. Each utilizes\nthe same underlying mechanism of building a merkle tree from a whitelist and\nusing some kind of off-chain distribution method to notify recipients."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#gumdrop"},"Gumdrop"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#motivation"},"Motivation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#setup"},"Setup")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#drop-types"},"Drop Types"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#token-airdrop"},"Token Airdrop")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#nft-candy-machine-pre-sale"},"NFT Candy Machine Pre-sale")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#edition-prints"},"Edition Prints")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#distribution-method"},"Distribution Method")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#whitelist"},"Whitelist")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#closing-a-gumdrop"},"Closing a Gumdrop")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#deploy-custom-gumdrop-site"},"Deploy Custom Gumdrop Site"))))),(0,i.kt)("p",null,"The sections below give examples and explanations for CLI usage of the command\nline flags. A full list of options can be viewed with"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ts-node src/gumdrop-cli.ts help create\n")),(0,i.kt)("h3",{id:"token-airdrop"},"Token Airdrop"),(0,i.kt)("p",null,"All a token airdrop requires is approval to move the relevant tokens from the\nGumdrop creators' token account. The Gumdrop state will be approved as a\n",(0,i.kt)("a",{parentName:"p",href:"https://spl.solana.com/token#authority-delegation"},"delegate")," for the sum of\ntokens specified."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ts-node src/gumdrop-cli.ts create \\\n--claim-integration transfer \\\n--transfer-mint So11111111111111111111111111111111111111112\n")),(0,i.kt)("h3",{id:"nft-candy-machine-pre-sale"},"NFT Candy Machine Pre-sale"),(0,i.kt)("p",null,"The workflow for a Candy Machine pre-sale through the Gumdrop program is as\nfollows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a Candy Machine with at least as many assets as are to be distributed\nthrough the Gumdrop. ",(0,i.kt)("a",{parentName:"li",href:"./candy-machine-v1/introduction"},"See instructions to create a Candy\nMachine here")),(0,i.kt)("li",{parentName:"ol"},"Set the Candy Machine start date to after the pre-sale ends (i.e when the\nmint should be open to all participants) or leave it None (so only\nwhitelisted participants may ever mint)."),(0,i.kt)("li",{parentName:"ol"},"Create the Gumdrop with the whitelist."),(0,i.kt)("li",{parentName:"ol"},"Transfer authority to the Gumdrop state which allows the Gumdrop program to\nmint for whitelisted participants on behalf of the creator ",(0,i.kt)("em",{parentName:"li"},"before")," the\ngo-live date.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ts-node src/gumdrop-cli.ts create \\\n--claim-integration candy \\\n--candy-config 47X2tVJ15rLnyDY2vUpYJzUQNYUBZcdFVd94D6zAtnkc\n--candy-uuid 47X2tV\n")),(0,i.kt)("p",null,"The Gumdrop CLI and web interface will handle steps 3 and 4. The Candy Config\nand Candy UUID uniquely identify a Candy Machine and are specified on creation.\nWith the Metaplex ",(0,i.kt)("inlineCode",{parentName:"p"},"candy-machine-cli.ts"),", you can find the values used in the\ndirectory ",(0,i.kt)("inlineCode",{parentName:"p"},".cache/{ENV}-temp"),"."),(0,i.kt)("p",null,"Closing the Gumdrop will reclaim the Candy Machine authority."),(0,i.kt)("h3",{id:"edition-prints"},"Edition Prints"),(0,i.kt)("p",null,"Similarly, the Gumdrop will act as a proxy for the owner of the master edition\nand allow minting of limited editions. Ownership of the master edition will be\ntransferred to the Gumdrop state for the duration of the Gumdrop!"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ts-node src/gumdrop-cli.ts create \\\n--claim-integration edition \\\n--edition-mint 7Hy3FqSQYiXyg4fyobZnSJhMvAqMmraBLaTq9QSFF9ip\n")),(0,i.kt)("p",null,"Closing the Gumdrop will reclaim the master edition."),(0,i.kt)("h2",{id:"distribution-method"},"Distribution Method"),(0,i.kt)("p",null,"The distribution method is used to notify recipients that they have received a\nGumdrop. Currently, the Gumdrop frontends support email, SMS, and discord\nnotifications."),(0,i.kt)("p",null,"For email and SMS,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ ts-node src/gumdrop-cli.ts create \\\n--distribution-method aws-email|aws-sms \\\n--aws-access-key-id "$AWS_ACCESS_KEY_ID" \\\n--aws-secret-access-key "$AWS_SECRET_ACCESS_KEY"\n')),(0,i.kt)("p",null,"For Discord,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ ts-node src/gumdrop-cli.ts create \\\n--distribution-method discord \\\n--discord-token "$DISCORD_TOKEN"\n')),(0,i.kt)("p",null,"With each of these methods, creators can also choose to enable OTP verification\nwith the ",(0,i.kt)("inlineCode",{parentName:"p"},"--otp-auth")," flag. Enable and disable with ",(0,i.kt)("inlineCode",{parentName:"p"},"--otp-auth enable")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"--otp-auth disable")," respectively. In case OTP verification is configured, the\nsame distribution method will be used to verify the OTP."),(0,i.kt)("p",null,"Alternatively, creators can also choose to build the Gumdrop from public keys\nwhich allows the only the owner of said public key to claim the Gumdrop.  In\nthis case, the full list of URLs is expected to be uploaded by the creator\nsomewhere."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ts-node src/gumdrop-cli.ts create \\\n--distribution-method wallets\n")),(0,i.kt)("h2",{id:"whitelist"},"Whitelist"),(0,i.kt)("p",null,"The whitelist is used to specify the recipients of the Gumdrop. Both frontends\nexpect the whitelist to be a JSON list of recipients, each with a ",(0,i.kt)("inlineCode",{parentName:"p"},"handle"),"\nidentifying the user, an ",(0,i.kt)("inlineCode",{parentName:"p"},"amount")," which determines the number of tokens, mints,\nor prints that can be claimed, and in the case of ",(0,i.kt)("a",{parentName:"p",href:"#edition-p%5Brints"},"edition\nprints"),", an ",(0,i.kt)("inlineCode",{parentName:"p"},"edition")," number."),(0,i.kt)("p",null,"More concretely, the frontends expect the list format to be"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[\n  {\n    "handle": "<DISTRIBUTION-METHOD-SPECIFIC-HANDLE>",\n    "amount": <GUMDROP-CLAIM-ALLOWANCE>,\n    ["edition": <EDITION-NUMBER>]\n  },\n  ...\n]\n')),(0,i.kt)("p",null,"The distribution method handles are as follows:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Format"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Email"),(0,i.kt)("td",{parentName:"tr",align:null},"local-part@domain"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"mailto:john.smith@example.com"},"john.smith@example.com"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SMS"),(0,i.kt)("td",{parentName:"tr",align:null},"E.164"),(0,i.kt)("td",{parentName:"tr",align:null},"+18005550100")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Discord"),(0,i.kt)("td",{parentName:"tr",align:null},"User ID"),(0,i.kt)("td",{parentName:"tr",align:null},"898959704573759608")))),(0,i.kt)("p",null,"At the moment, Discord handles are the hardest to programmatically create. One\noption is to query for members in a Discord Guild and filter for the relevant\nusers by display-name there."),(0,i.kt)("p",null,"NB: The frontends do some verification that the Gumdrop being created is\nsufficient to satisfy all the recipients specified. However, these checks are\nall dependent on the good behavior of the creator! For example, if the creator,\nafter creating a token-Gumdrop, moves all the tokens out of their wallet,\nrecipients will fail to claim their allocation."),(0,i.kt)("h2",{id:"closing-a-gumdrop"},"Closing a Gumdrop"),(0,i.kt)("p",null,"When the gumdrop is finished, the candy machine authority or the master\nedition can be reclaimed by closing the gumdrop. Currently, the small portion\nof rent used to store the Gumdrop state is also redeemed but please do not rely\non this behavior!"),(0,i.kt)("p",null,"The command to close it is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ts-node gumdrop-cli.ts close -e devnet --base <keypair that was created on gumdrop create> --keypair <your initial keypair>\n")),(0,i.kt)("p",null,"NB: somewhat obviously, recipients will no longer be able to redeem the Gumdrop\nafter it is closed."),(0,i.kt)("h2",{id:"deploy-custom-gumdrop-site"},"Deploy Custom Gumdrop Site"),(0,i.kt)("p",null,"This method applies to ",(0,i.kt)("em",{parentName:"p"},"only")," ",(0,i.kt)("a",{parentName:"p",href:"https://vercel.com/"},"Vercel"),".  In the ",(0,i.kt)("inlineCode",{parentName:"p"},"gumdrop")," directory, remove ",(0,i.kt)("inlineCode",{parentName:"p"},"homepage")," key-value entirely.  Connect your github to Vercel and create a new project.  In the project setup, make sure these settings are set."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Build and Development Settings",src:n(16198).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Root Directory Settings",src:n(77373).Z})))}m.isMDXComponent=!0},16198:function(e,t,n){t.Z=n.p+"assets/images/build-and-development-settings-2597c2c766f2726dd2ec60c60639b657.png"},77373:function(e,t,n){t.Z=n.p+"assets/images/root-directory-f31ab0344a0a2e9363fe8ecdec067a8d.png"}}]);