const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./header-BnyccABQ.js","./react-vH6PgIPB.js","./main-25U81Vkg.js"])))=>i.map(i=>d[i]);
import{r as h,j as f}from"./react-vH6PgIPB.js";import{c as E}from"./react-dom-9Y_fV-1x.js";import"./scheduler-CzFDRTuY.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const v="modulepreload",_=function(d,s){return new URL(d,s).href},p={},y=function(s,i,c){let e=Promise.resolve();if(i&&i.length>0){const t=document.getElementsByTagName("link"),r=document.querySelector("meta[property=csp-nonce]"),m=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));e=Promise.all(i.map(o=>{if(o=_(o,c),o in p)return;p[o]=!0;const l=o.endsWith(".css"),g=l?'[rel="stylesheet"]':"";if(!!c)for(let a=t.length-1;a>=0;a--){const u=t[a];if(u.href===o&&(!l||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${g}`))return;const n=document.createElement("link");if(n.rel=l?"stylesheet":v,l||(n.as="script",n.crossOrigin=""),n.href=o,m&&n.setAttribute("nonce",m),document.head.appendChild(n),l)return new Promise((a,u)=>{n.addEventListener("load",a),n.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${o}`)))})}))}return e.then(()=>s()).catch(t=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=t,window.dispatchEvent(r),!r.defaultPrevented)throw t})},L=h.lazy(()=>y(()=>import("./header-BnyccABQ.js"),__vite__mapDeps([0,1]),import.meta.url)),P=h.lazy(()=>y(()=>import("./main-25U81Vkg.js"),__vite__mapDeps([2,1]),import.meta.url)),O=E(document.getElementById("app"));O.render(f.jsxs(f.Fragment,{children:[f.jsx(L,{}),f.jsx(P,{})]}));
