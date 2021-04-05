import React from 'react';
import s from './../Rating.module.css'

type StarPropsType = {
    value: 1 | 2 | 3 | 4 | 5
    selected: boolean
    setRating?: (rating: 1 | 2 | 3 | 4 | 5) => void
}

export function Star(props: StarPropsType) {
    return (
        <div className={`${s.star} ${props.selected && s.activeStar}`}
            onClick={() => props.setRating && props.setRating(props.value)}>Star</div>
    )
}