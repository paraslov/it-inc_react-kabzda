import React from 'react';
import s from './../Rating.module.css'

type StarPropsType = {
    selected: boolean
}

export function Star(props: StarPropsType) {
    return (
        <div className={`${s.star} ${props.selected ? s.activeStar : ''}`}>Star</div>
    )
}