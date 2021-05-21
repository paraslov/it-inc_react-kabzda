import React from 'react';
import {ClockSkinsPropsType} from './Clock';

const get2digitString = (num: number) => num >= 10 ? num : `0${num}`

export const ClockDigitalSkin: React.FC<ClockSkinsPropsType> = ({seconds, minutes, hours}) => {
    const clock = `${get2digitString(hours)}:${get2digitString(minutes)}:${get2digitString(seconds)}`
    return <div>{clock}</div>
}