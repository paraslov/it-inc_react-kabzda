import React from 'react';
import s from './Clock.module.css';
import {ClockSkinsPropsType} from './Clock';

export const ClockAnalogSkin: React.FC<ClockSkinsPropsType> = ({seconds, minutes, hours}) => {
    const hourAngle = (hours * 30) + (minutes / 2)
    const minuteAngle = (minutes * 6)
    const secondsAngle = (seconds * 6)
    const getStyle = (angle: number) => ({transform: `rotateZ(${angle}deg)`})

    return (
        <div className={s.clock}>
            <div className={s.hoursContainer}>
                <div className={s.hours} style={getStyle(hourAngle)}/>
            </div>
            <div className={s.minutesContainer}>
                <div className={s.minutes} style={getStyle(minuteAngle)}/>
            </div>
            <div className={s.secondsContainer}>
                <div className={s.seconds} style={getStyle(secondsAngle)}/>
            </div>
        </div>
    )
}