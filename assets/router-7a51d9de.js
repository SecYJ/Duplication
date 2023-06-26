import{j as e,r as t}from"./jsx-runtime-00d1b5d3.js";const E="modulepreload",f=function(u){return"/"+u},d={},r=function(_,c,h){if(!c||c.length===0)return _();const m=document.getElementsByTagName("link");return Promise.all(c.map(n=>{if(n=f(n),n in d)return;d[n]=!0;const i=n.endsWith(".css"),p=i?'[rel="stylesheet"]':"";if(!!h)for(let s=m.length-1;s>=0;s--){const l=m[s];if(l.href===n&&(!i||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${p}`))return;const o=document.createElement("link");if(o.rel=i?"stylesheet":E,i||(o.as="script",o.crossOrigin=""),o.href=n,document.head.appendChild(o),i)return new Promise((s,l)=>{o.addEventListener("load",s),o.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>_())},v="/assets/loading-11bc95e1.svg",a=()=>e("div",{className:"grid min-h-screen place-items-center",children:e("img",{src:v,alt:"Loading"})}),y=t.lazy(()=>r(()=>import("./Layout-ca66bfd9.js"),["assets/Layout-ca66bfd9.js","assets/jsx-runtime-00d1b5d3.js","assets/QueryClientProvider-d549d0a2.js","assets/index.esm-a48567f3.js","assets/index-0e2cc855.js","assets/index-aefd983d.js","assets/CartCtx-6851d5f1.js","assets/auth0-react.esm-124f799c.js","assets/useMediaQuery-ba868550.js","assets/motion-7a035700.js","assets/MenuCtx-9b9f3d8b.js"])),L=t.lazy(()=>r(()=>import("./Home-8e5f0707.js"),["assets/Home-8e5f0707.js","assets/jsx-runtime-00d1b5d3.js","assets/QueryClientProvider-d549d0a2.js","assets/index.esm-a48567f3.js","assets/SectionContainer-0317890c.js","assets/useFoodMenu-de313611.js","assets/CarouselSlider-59ec2bfb.js","assets/index-aefd983d.js","assets/CarouselSlider-d4f9ed15.css","assets/motion-7a035700.js"])),g=t.lazy(()=>r(()=>import("./About-709ba84a.js"),["assets/About-709ba84a.js","assets/jsx-runtime-00d1b5d3.js","assets/SectionContainer-0317890c.js","assets/motion-7a035700.js"])),k=t.lazy(()=>r(()=>import("./Checkout-b76d323c.js"),["assets/Checkout-b76d323c.js","assets/jsx-runtime-00d1b5d3.js","assets/index-236efc1e.js","assets/auth0-react.esm-124f799c.js","assets/CartCtx-6851d5f1.js","assets/CarouselSlider-59ec2bfb.js","assets/index-aefd983d.js","assets/CarouselSlider-d4f9ed15.css","assets/MenuCtx-9b9f3d8b.js","assets/SectionContainer-0317890c.js","assets/Checkout-8603f1e9.css"])),R=t.lazy(()=>r(()=>import("./Menu-175e57b7.js"),["assets/Menu-175e57b7.js","assets/jsx-runtime-00d1b5d3.js","assets/MenuCtx-9b9f3d8b.js","assets/CartCtx-6851d5f1.js","assets/index.esm-a48567f3.js","assets/useMediaQuery-ba868550.js","assets/Button-3887cb91.js","assets/useFoodMenu-de313611.js","assets/QueryClientProvider-d549d0a2.js","assets/SectionContainer-0317890c.js","assets/motion-7a035700.js"])),P=t.lazy(()=>r(()=>import("./NotFound-9d7a34ae.js"),["assets/NotFound-9d7a34ae.js","assets/jsx-runtime-00d1b5d3.js","assets/SectionContainer-0317890c.js","assets/index-aefd983d.js"])),S=t.lazy(()=>r(()=>import("./PrivateRoute-11945fc1.js"),["assets/PrivateRoute-11945fc1.js","assets/jsx-runtime-00d1b5d3.js","assets/auth0-react.esm-124f799c.js","assets/index-aefd983d.js"])),A=t.lazy(()=>r(()=>import("./Cart-a8e3ae15.js"),["assets/Cart-a8e3ae15.js","assets/jsx-runtime-00d1b5d3.js","assets/index-0e2cc855.js","assets/index-aefd983d.js","assets/auth0-react.esm-124f799c.js","assets/CartCtx-6851d5f1.js","assets/Button-3887cb91.js","assets/index.esm-a48567f3.js","assets/motion-7a035700.js","assets/SectionContainer-0317890c.js"])),b=[{path:"/",element:e(y,{}),children:[{index:!0,element:e(t.Suspense,{fallback:e(a,{}),children:e(L,{})})},{path:"about",element:e(t.Suspense,{fallback:e(a,{}),children:e(g,{})})},{path:"menu",element:e(t.Suspense,{fallback:e(a,{}),children:e(R,{})})},{path:"checkout",element:e(t.Suspense,{fallback:e(a,{}),children:e(S,{children:e(k,{})})})},{path:"cart",element:e(t.Suspense,{fallback:e(a,{}),children:e(A,{})})},{path:"*",element:e(P,{})}]}],z={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.4}};export{a as L,z as a,b as r};