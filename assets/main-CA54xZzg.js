import{r as i}from"./index-B_gWpErk.js";const n={all:{title:"Все",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"D-Link Omna 180 Cam",subtitle:"Включится в 17:00"},{icon:"temp",iconLabel:"Температура",title:"Elgato Eve Degree Connected",subtitle:"Выключено до 17:00"},{icon:"light",iconLabel:"Освещение",title:"LIFX Mini Day & Dusk A60 E27",subtitle:"Включится в 17:00"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"}]},kitchen:{title:"Кухня",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включено"},{icon:"temp",iconLabel:"Температура",title:"Elgato Eve Degree Connected",subtitle:"Выключено до 17:00"}]},hall:{title:"Зал",items:[{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Выключено"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Выключено"}]},lights:{title:"Лампочки",items:[{icon:"light",iconLabel:"Освещение",title:"D-Link Omna 180 Cam",subtitle:"Включится в 17:00"},{icon:"light",iconLabel:"Освещение",title:"LIFX Mini Day & Dusk A60 E27",subtitle:"Включится в 17:00"},{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"},{icon:"light",iconLabel:"Освещение",title:"Philips Zhirui",subtitle:"Включено"}]},cameras:{title:"Камеры",items:[{icon:"light2",iconLabel:"Освещение",title:"Xiaomi Mi Air Purifier 2S",subtitle:"Включено"}]}};for(let t=0;t<6;++t)n.all.items=[...n.all.items,...n.all.items];const u=Object.keys(n);function l(t){const c=i.useRef(),{onSize:a}=t;return i.useEffect(()=>{const s=c.current.offsetWidth,r=c.current.offsetHeight;a&&a({width:s,height:r})},[c.current,a]),React.createElement("li",{ref:c,className:"event"+(t.slim?" event_slim":"")},React.createElement("button",{className:"event__button"},React.createElement("span",{className:`event__icon event__icon_${t.icon}`,role:"img","aria-label":t.iconLabel}),React.createElement("h4",{className:"event__title"},t.title),t.subtitle&&React.createElement("span",{className:"event__subtitle"},t.subtitle)))}function g(){const t=i.useRef(),c=i.useRef(!1),[a,s]=i.useState(""),[r,b]=i.useState(!1);i.useEffect(()=>{!a&&!c.current&&(c.current=!0,s(new URLSearchParams(location.search).get("tab")||"all"))},[a,c.current]);const _=i.useCallback(e=>{s(e.target.value)},[]),o=i.useRef([]),d=i.useCallback(e=>{o.current=[...o.current,e]},[o.current]);i.useEffect(()=>{const m=o.current.reduce((h,R)=>h+R.width,0)>t.current.offsetWidth;m!==r&&b(m)});const E=()=>{const e=t.current.querySelector(".section__panel:not(.section__panel_hidden)");e&&e.scrollTo({left:e.scrollLeft+400,behavior:"smooth"})};return React.createElement("main",{className:"main"},React.createElement("section",{className:"section main__general"},React.createElement("h2",{className:"section__title section__title-header section__main-title"},"Главное"),React.createElement("div",{className:"hero-dashboard"},React.createElement("div",{className:"hero-dashboard__primary"},React.createElement("h3",{className:"hero-dashboard__title"},"Привет, Геннадий!"),React.createElement("p",{className:"hero-dashboard__subtitle"},"Двери и окна закрыты, сигнализация включена."),React.createElement("ul",{className:"hero-dashboard__info"},React.createElement("li",{className:"hero-dashboard__item"},React.createElement("div",{className:"hero-dashboard__item-title"},"Дома"),React.createElement("div",{className:"hero-dashboard__item-details"},"+23",React.createElement("span",{className:"a11y-hidden"},"°"))),React.createElement("li",{className:"hero-dashboard__item"},React.createElement("div",{className:"hero-dashboard__item-title"},"За окном"),React.createElement("div",{className:"hero-dashboard__item-details"},"+19",React.createElement("span",{className:"a11y-hidden"},"°"),React.createElement("div",{className:"hero-dashboard__icon hero-dashboard__icon_rain",role:"img","aria-label":"Дождь"}))))),React.createElement("ul",{className:"hero-dashboard__schedule"},React.createElement(l,{icon:"temp",iconLabel:"Температура",title:"Philips Cooler",subtitle:"Начнет охлаждать в 16:30"}),React.createElement(l,{icon:"light",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включится в 17:00"}),React.createElement(l,{icon:"light",iconLabel:"Освещение",title:"Xiaomi Yeelight LED Smart Bulb",subtitle:"Включится в 17:00"})))),React.createElement("section",{className:"section main__scripts"},React.createElement("h2",{className:"section__title section__title-header"},"Избранные сценарии"),React.createElement("ul",{className:"event-grid"},React.createElement(l,{slim:!0,icon:"light2",iconLabel:"Освещение",title:"Выключить весь свет в доме и во дворе"}),React.createElement(l,{slim:!0,icon:"schedule",iconLabel:"Расписание",title:"Я ухожу"}),React.createElement(l,{slim:!0,icon:"light2",iconLabel:"Освещение",title:"Включить свет в коридоре"}),React.createElement(l,{slim:!0,icon:"temp2",iconLabel:"Температура",title:"Набрать горячую ванну",subtitle:"Начнётся в 18:00"}),React.createElement(l,{slim:!0,icon:"temp2",iconLabel:"Температура",title:"Сделать пол тёплым во всей квартире"}))),React.createElement("section",{className:"section main__devices"},React.createElement("div",{className:"section__title"},React.createElement("h2",{className:"section__title-header"},"Избранные устройства"),React.createElement("select",{className:"section__select",defaultValue:"all",onInput:_},u.map(e=>React.createElement("option",{key:e,value:e},n[e].title))),React.createElement("ul",{role:"tablist",className:"section__tabs"},u.map(e=>React.createElement("li",{key:e,role:"tab","aria-selected":e===a?"true":"false",tabIndex:e===a?"0":void 0,className:"section__tab"+(e===a?" section__tab_active":""),id:`tab_${e}`,"aria-controls":`panel_${e}`,onClick:()=>s(e)},n[e].title)))),React.createElement("div",{className:"section__panel-wrapper",ref:t},u.map(e=>React.createElement("div",{key:e,role:"tabpanel",className:"section__panel"+(e===a?"":" section__panel_hidden"),"aria-hidden":e===a?"false":"true",id:`panel_${e}`,"aria-labelledby":`tab_${e}`},React.createElement("ul",{className:"section__panel-list"},n[e].items.map((m,h)=>React.createElement(l,{key:h,...m,onSize:d}))))),r&&React.createElement("div",{className:"section__arrow",onClick:E}))))}export{g as Main,g as default};
