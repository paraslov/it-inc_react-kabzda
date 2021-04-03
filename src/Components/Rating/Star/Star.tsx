import React from 'react';
import s from './../Rating.module.css'

type StarPropsType = {
    id: number
    selected: boolean
    setRating?: (rating: number) => void
}

export function Star(props: StarPropsType) {
    return (
        <div className={`${s.star} ${props.selected ? s.activeStar : ''}`}
            onClick={() => props.setRating && props.setRating(props.id)}>Star</div>
    )
}