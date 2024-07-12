import React, {memo} from 'react';
import {useEffect, useRef} from "react";

export const Event = memo((props) => {
    const ref = useRef();
    const { onSize } = props;

    useEffect(() => {
        if (ref.current) {
            const width = ref.current.offsetWidth;
            const height = ref.current.offsetHeight;
            if (onSize && width && height) {
                onSize({ width, height });
            }
        }
    }, [ref.current, onSize]);

    return <li ref={ref} className={'event' + (props.slim ? ' event_slim' : '')}>
        <button className="event__button">
            <span className={`event__icon event__icon_${props.icon}`} role="img" aria-label={props.iconLabel}></span>
            <h4 className="event__title">{props.title}</h4>
            {props.subtitle &&
                <span className="event__subtitle">{props.subtitle}</span>
            }
        </button>
    </li>;
})