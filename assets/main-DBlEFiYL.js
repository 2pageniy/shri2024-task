import{r as a,R as e}from"./index-PVp1g6Qr.js";const h={all:{title:"Все",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"D-Link Omna 180 Cam",subtitle:"Включится в 17:00"},{icon:"temp",iconLabel:"Температура",title:"Elgato Eve Degree Connected",subtitle:"Выключено до 17:00"},{icon:"light",iconLabel:"Освещение",title:"LIFX Mini Day & Dusk A60 E27",subtitle:"Включится в 17:00"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"}]},kitchen:{title:"Кухня",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включено"},{icon:"temp",iconLabel:"Температура",title:"Elgato Eve Degree Connected",subtitle:"Выключено до 17:00"}]},hall:{title:"Зал",items:[{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Выключено"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Выключено"}]},lights:{title:"Лампочки",items:[{icon:"light",iconLabel:"Освещение",title:"D-Link Omna 180 Cam",subtitle:"Включится в 17:00"},{icon:"light",iconLabel:"Освещение",title:"LIFX Mini Day & Dusk A60 E27",subtitle:"Включится в 17:00"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"}]},cameras:{title:"Камеры",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"}]}},b=Object.keys(h);function c(i){const n=a.useRef(),{onSize:l}=i;return a.useEffect(()=>{const s=n.current.offsetWidth,r=n.current.offsetHeight;l&&l({width:s,height:r})},[n.current,l]),e.createElement("li",{ref:n,className:"event"+(i.slim?" event_slim":"")},e.createElement("button",{className:"event__button"},e.createElement("span",{className:`event__icon event__icon_${i.icon}`,role:"img","aria-label":i.iconLabel}),e.createElement("h4",{className:"event__title"},i.title),i.subtitle&&e.createElement("span",{className:"event__subtitle"},i.subtitle)))}function N(){const i=a.useRef(),n=a.useRef(!1),[l,s]=a.useState(""),[r,_]=a.useState(!1);a.useEffect(()=>{!l&&!n.current&&(n.current=!0,s(new URLSearchParams(location.search).get("tab")||"all"))},[l,n.current]);const d=a.useCallback(t=>{s(t.target.value)},[]),o=a.useRef([]),E=a.useCallback(t=>{o.current=[...o.current,t]},[o.current]);a.useEffect(()=>{const m=o.current.reduce((u,g)=>u+g.width,0)>i.current.offsetWidth;m!==r&&_(m)});const f=()=>{const t=i.current.querySelector(".section__panel:not(.section__panel_hidden)");t&&t.scrollTo({left:t.scrollLeft+400,behavior:"smooth"})};return e.createElement("main",{className:"main"},e.createElement("section",{className:"section main__general"},e.createElement("h2",{className:"section__title section__title-header section__main-title"},"Главное"),e.createElement("div",{className:"hero-dashboard"},e.createElement("div",{className:"hero-dashboard__primary"},e.createElement("h3",{className:"hero-dashboard__title"},"Привет, Геннадий!"),e.createElement("p",{className:"hero-dashboard__subtitle"},"Двери и окна закрыты, сигнализация включена."),e.createElement("ul",{className:"hero-dashboard__info"},e.createElement("li",{className:"hero-dashboard__item"},e.createElement("div",{className:"hero-dashboard__item-title"},"Дома"),e.createElement("div",{className:"hero-dashboard__item-details"},"+23",e.createElement("span",{className:"a11y-hidden"},"°"))),e.createElement("li",{className:"hero-dashboard__item"},e.createElement("div",{className:"hero-dashboard__item-title"},"За окном"),e.createElement("div",{className:"hero-dashboard__item-details"},"+19",e.createElement("span",{className:"a11y-hidden"},"°"),e.createElement("div",{className:"hero-dashboard__icon hero-dashboard__icon_rain",role:"img","aria-label":"Дождь"}))))),e.createElement("ul",{className:"hero-dashboard__schedule"},e.createElement(c,{icon:"temp",iconLabel:"Температура",title:"Philips Cooler",subtitle:"Начнет охлаждать в 16:30"}),e.createElement(c,{icon:"light",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включится в 17:00"}),e.createElement(c,{icon:"light",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включится в 17:00"})))),e.createElement("section",{className:"section main__scripts"},e.createElement("h2",{className:"section__title section__title-header"},"Избранные сценарии"),e.createElement("ul",{className:"event-grid"},e.createElement(c,{slim:!0,icon:"light2",iconLabel:"Освещение",title:"Выключить весь свет в доме и во дворе"}),e.createElement(c,{slim:!0,icon:"schedule",iconLabel:"Расписание",title:"Я ухожу"}),e.createElement(c,{slim:!0,icon:"light2",iconLabel:"Освещение",title:"Включить свет в коридоре"}),e.createElement(c,{slim:!0,icon:"temp2",iconLabel:"Температура",title:"Набрать горячую ванну",subtitle:"Начнётся в 18:00"}),e.createElement(c,{slim:!0,icon:"temp2",iconLabel:"Температура",title:"Сделать пол тёплым во всей квартире"}))),e.createElement("section",{className:"section main__devices"},e.createElement("div",{className:"section__title"},e.createElement("h2",{className:"section__title-header"},"Избранные устройства"),e.createElement("select",{className:"section__select",defaultValue:"all",onInput:d},b.map(t=>e.createElement("option",{key:t,value:t},h[t].title))),e.createElement("ul",{role:"tablist",className:"section__tabs"},b.map(t=>e.createElement("li",{key:t,role:"tab","aria-selected":t===l?"true":"false",tabIndex:t===l?"0":void 0,className:"section__tab"+(t===l?" section__tab_active":""),id:`tab_${t}`,"aria-controls":`panel_${t}`,onClick:()=>s(t)},h[t].title)))),e.createElement("div",{className:"section__panel-wrapper",ref:i},b.map(t=>e.createElement("div",{key:t,role:"tabpanel",className:"section__panel"+(t===l?"":" section__panel_hidden"),"aria-hidden":t===l?"false":"true",id:`panel_${t}`,"aria-labelledby":`tab_${t}`},e.createElement("ul",{className:"section__panel-list"},h[t].items.map((m,u)=>e.createElement(c,{key:u,...m,onSize:E}))))),r&&e.createElement("div",{className:"section__arrow",onClick:f}))))}export{N as Main,N as default};
