import{R as e}from"./index-U7wjHlPY.js";const n={all:{title:"Все",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"D-Link Omna 180 Cam",subtitle:"Включится в 17:00"},{icon:"temp",iconLabel:"Температура",title:"Elgato Eve Degree Connected",subtitle:"Выключено до 17:00"},{icon:"light",iconLabel:"Освещение",title:"LIFX Mini Day & Dusk A60 E27",subtitle:"Включится в 17:00"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"}]},kitchen:{title:"Кухня",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включено"},{icon:"temp",iconLabel:"Температура",title:"Elgato Eve Degree Connected",subtitle:"Выключено до 17:00"}]},hall:{title:"Зал",items:[{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Выключено"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Выключено"}]},lights:{title:"Лампочки",items:[{icon:"light",iconLabel:"Освещение",title:"D-Link Omna 180 Cam",subtitle:"Включится в 17:00"},{icon:"light",iconLabel:"Освещение",title:"LIFX Mini Day & Dusk A60 E27",subtitle:"Включится в 17:00"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"}]},cameras:{title:"Камеры",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"}]}};for(let i=0;i<6;++i)n.all.items=[...n.all.items,...n.all.items];const u=Object.keys(n);function a(i){const c=e.useRef(),{onSize:l}=i;return e.useEffect(()=>{const s=c.current.offsetWidth,o=c.current.offsetHeight;l&&l({width:s,height:o})},[c.current,l]),e.createElement("li",{ref:c,className:"event"+(i.slim?" event_slim":"")},e.createElement("button",{className:"event__button"},e.createElement("span",{className:`event__icon event__icon_${i.icon}`,role:"img","aria-label":i.iconLabel}),e.createElement("h4",{className:"event__title"},i.title),i.subtitle&&e.createElement("span",{className:"event__subtitle"},i.subtitle)))}function L(){const i=e.useRef(),c=e.useRef(!1),[l,s]=e.useState(""),[o,b]=e.useState(!1);e.useEffect(()=>{!l&&!c.current&&(c.current=!0,s(new URLSearchParams(location.search).get("tab")||"all"))},[l,c.current]);const _=e.useCallback(t=>{s(t.target.value)},[]),r=e.useRef([]),d=e.useCallback(t=>{r.current=[...r.current,t]},[r.current]);e.useEffect(()=>{const m=r.current.reduce((h,f)=>h+f.width,0)>i.current.offsetWidth;m!==o&&b(m)});const E=()=>{const t=i.current.querySelector(".section__panel:not(.section__panel_hidden)");t&&t.scrollTo({left:t.scrollLeft+400,behavior:"smooth"})};return e.createElement("main",{className:"main"},e.createElement("section",{className:"section main__general"},e.createElement("h2",{className:"section__title section__title-header section__main-title"},"Главное"),e.createElement("div",{className:"hero-dashboard"},e.createElement("div",{className:"hero-dashboard__primary"},e.createElement("h3",{className:"hero-dashboard__title"},"Привет, Геннадий!"),e.createElement("p",{className:"hero-dashboard__subtitle"},"Двери и окна закрыты, сигнализация включена."),e.createElement("ul",{className:"hero-dashboard__info"},e.createElement("li",{className:"hero-dashboard__item"},e.createElement("div",{className:"hero-dashboard__item-title"},"Дома"),e.createElement("div",{className:"hero-dashboard__item-details"},"+23",e.createElement("span",{className:"a11y-hidden"},"°"))),e.createElement("li",{className:"hero-dashboard__item"},e.createElement("div",{className:"hero-dashboard__item-title"},"За окном"),e.createElement("div",{className:"hero-dashboard__item-details"},"+19",e.createElement("span",{className:"a11y-hidden"},"°"),e.createElement("div",{className:"hero-dashboard__icon hero-dashboard__icon_rain",role:"img","aria-label":"Дождь"}))))),e.createElement("ul",{className:"hero-dashboard__schedule"},e.createElement(a,{icon:"temp",iconLabel:"Температура",title:"Philips Cooler",subtitle:"Начнет охлаждать в 16:30"}),e.createElement(a,{icon:"light",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включится в 17:00"}),e.createElement(a,{icon:"light",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включится в 17:00"})))),e.createElement("section",{className:"section main__scripts"},e.createElement("h2",{className:"section__title section__title-header"},"Избранные сценарии"),e.createElement("ul",{className:"event-grid"},e.createElement(a,{slim:!0,icon:"light2",iconLabel:"Освещение",title:"Выключить весь свет в доме и во дворе"}),e.createElement(a,{slim:!0,icon:"schedule",iconLabel:"Расписание",title:"Я ухожу"}),e.createElement(a,{slim:!0,icon:"light2",iconLabel:"Освещение",title:"Включить свет в коридоре"}),e.createElement(a,{slim:!0,icon:"temp2",iconLabel:"Температура",title:"Набрать горячую ванну",subtitle:"Начнётся в 18:00"}),e.createElement(a,{slim:!0,icon:"temp2",iconLabel:"Температура",title:"Сделать пол тёплым во всей квартире"}))),e.createElement("section",{className:"section main__devices"},e.createElement("div",{className:"section__title"},e.createElement("h2",{className:"section__title-header"},"Избранные устройства"),e.createElement("select",{className:"section__select",defaultValue:"all",onInput:_},u.map(t=>e.createElement("option",{key:t,value:t},n[t].title))),e.createElement("ul",{role:"tablist",className:"section__tabs"},u.map(t=>e.createElement("li",{key:t,role:"tab","aria-selected":t===l?"true":"false",tabIndex:t===l?"0":void 0,className:"section__tab"+(t===l?" section__tab_active":""),id:`tab_${t}`,"aria-controls":`panel_${t}`,onClick:()=>s(t)},n[t].title)))),e.createElement("div",{className:"section__panel-wrapper",ref:i},u.map(t=>e.createElement("div",{key:t,role:"tabpanel",className:"section__panel"+(t===l?"":" section__panel_hidden"),"aria-hidden":t===l?"false":"true",id:`panel_${t}`,"aria-labelledby":`tab_${t}`},e.createElement("ul",{className:"section__panel-list"},n[t].items.map((m,h)=>e.createElement(a,{key:h,...m,onSize:d}))))),o&&e.createElement("div",{className:"section__arrow",onClick:E}))))}export{L as Main,L as default};
