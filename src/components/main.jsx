import {useMemo, useCallback, useEffect, useRef, useState, memo} from 'react';
import {TABS, TABS_KEYS} from "./const.js";
import {Event} from "./event.jsx";

const sizeWidth = {
    all: 102400,
    kitchen: 469,
    hall: 400,
    lights: 823,
    cameras: 200,
}

const MainGeneral = memo(() => {
  return (
      <section className="section main__general">
          <h2 className="section__title section__title-header section__main-title">Главное</h2>
          <div className="hero-dashboard">
              <div className="hero-dashboard__primary">
                  <h3 className="hero-dashboard__title">Привет, Геннадий!</h3>
                  <p className="hero-dashboard__subtitle">Двери и окна закрыты, сигнализация включена.</p>
                  <ul className="hero-dashboard__info">
                      <li className="hero-dashboard__item">
                          <div className="hero-dashboard__item-title">Дома</div>
                          <div className="hero-dashboard__item-details">
                              +23
                              <span className="a11y-hidden">°</span>
                          </div>
                      </li>
                      <li className="hero-dashboard__item">
                          <div className="hero-dashboard__item-title">За окном</div>
                          <div className="hero-dashboard__item-details">
                              +19
                              <span className="a11y-hidden">°</span>

                              <div
                                  className="hero-dashboard__icon hero-dashboard__icon_rain"
                                  role="img"
                                  aria-label="Дождь"
                              ></div>
                          </div>
                      </li>
                  </ul>
              </div>
              <ul className="hero-dashboard__schedule">
                  <Event
                      icon="temp"
                      iconLabel="Температура"
                      title="Philips Cooler"
                      subtitle="Начнет охлаждать в 16:30"
                  />
                  <Event
                      icon="light"
                      iconLabel="Освещение"
                      title="Xiaomi Yeelight LED Smart Bulb"
                      subtitle="Включится в 17:00"
                  />
                  <Event
                      icon="light"
                      iconLabel="Освещение"
                      title="Xiaomi Yeelight LED Smart Bulb"
                      subtitle="Включится в 17:00"
                  />
              </ul>
          </div>
      </section>
  );
});
const MainScripts = memo(() => {
    return (
        <section className="section main__scripts">
            <h2 className="section__title section__title-header">Избранные сценарии</h2>

            <ul className="event-grid">
                <Event
                    slim={true}
                    icon="light2"
                    iconLabel="Освещение"
                    title="Выключить весь свет в доме и во дворе"
                />
                <Event
                    slim={true}
                    icon="schedule"
                    iconLabel="Расписание"
                    title="Я ухожу"
                />
                <Event
                    slim={true}
                    icon="light2"
                    iconLabel="Освещение"
                    title="Включить свет в коридоре"
                />
                <Event
                    slim={true}
                    icon="temp2"
                    iconLabel="Температура"
                    title="Набрать горячую ванну"
                    subtitle="Начнётся в 18:00"
                />
                <Event
                    slim={true}
                    icon="temp2"
                    iconLabel="Температура"
                    title="Сделать пол тёплым во всей квартире"
                />
            </ul>
        </section>
    );
});
const SectionSelect = memo(({onSelectInput}) => {
    return (
        <select className="section__select" defaultValue="all" onInput={onSelectInput}>
            {TABS_KEYS.map(key =>
                <option key={key} value={key}>
                    {TABS[key].title}
                </option>
            )}
        </select>
    );
});
const SectionTab = memo(({id, isActiveTab, setActiveTab}) => {
    return (
        <li
            role="tab"
            aria-selected={isActiveTab ? 'true' : 'false'}
            tabIndex={isActiveTab ? '0' : undefined}
            className={'section__tab' + (isActiveTab ? ' section__tab_active' : '')}
            id={`tab_${id}`}
            aria-controls={`panel_${id}`}
            onClick={() => setActiveTab(id)}
        >
            {TABS[id].title}
        </li>
    );
});
const TabPanelItem = memo(({id}) => {
    return (
        <div
            role="tabpanel"
            key={id}
            className={'section__panel'}
            aria-hidden={'false'} id={`panel_${id}`}
            aria-labelledby={`tab_${id}`}
        >
            <ul className="section__panel-list">
                {TABS[id].items.map((item, index) =>
                    <Event
                        key={index}
                        {...item}
                    />
                )}
            </ul>
        </div>
    );
});

const MainDevices = () => {
    const ref = useRef();
    const initedRef = useRef(false);
    const [activeTab, setActiveTab] = useState('');
    const [hasRightScroll, setHasRightScroll] = useState(false);
    const onSelectInput = useCallback(event => {
        setActiveTab(event.target.value);
    }, []);

    useEffect(() => {
        if (!activeTab && !initedRef.current) {
            initedRef.current = true;
            setActiveTab(new URLSearchParams(location.search).get('tab') || 'all');
        }
    }, [initedRef.current]);

    useEffect(() => {
        const sumWidth = sizeWidth[activeTab];

        const newHasRightScroll = sumWidth > ref.current.offsetWidth;
        if (newHasRightScroll !== hasRightScroll) {
            setHasRightScroll(newHasRightScroll);
        }
    }, [activeTab]);

    const onArrowCLick = () => {
        const scroller = ref.current.querySelector('.section__panel:not(.section__panel_hidden)');
        if (scroller) {
            scroller.scrollTo({
                left: scroller.scrollLeft + 400,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="section main__devices">
            <div className="section__title">
                <h2 className="section__title-header">
                    Избранные устройства
                </h2>
                <SectionSelect
                    onSelectInput={onSelectInput}
                />
                <ul role="tablist" className="section__tabs">
                    {TABS_KEYS.map(key =>
                        <SectionTab
                            key={key}
                            isActiveTab={key === activeTab}
                            setActiveTab={setActiveTab}
                            id={key}
                        />
                    )}
                </ul>
            </div>

            <div className="section__panel-wrapper" ref={ref}>
                {TABS_KEYS.map(key => {
                        if (key !== activeTab) {
                            return null;
                        }
                        return (
                            <TabPanelItem
                                key={key}
                                id={key}
                            />
                        )
                    }
                )}
                {hasRightScroll &&
                    <div className="section__arrow" onClick={onArrowCLick}></div>
                }
            </div>
        </section>
    );
};

export function Main() {
    return <main className="main">
        <MainGeneral/>
        <MainScripts/>
        <MainDevices />
    </main>;
}

export default Main;