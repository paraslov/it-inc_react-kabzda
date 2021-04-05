import React from 'react';
import s from './../Rating.module.css'
import {RatingValuesType} from '../Rating';

type StarPropsType = {
    selected: boolean
    setRating: () => void
}

export function Star(props: StarPropsType) {
    return (
        <div className={`${s.star} ${props.selected && s.activeStar}`}
            onClick={() => props.setRating()}>Star</div>
    )
}