import React from 'react';
import {Star} from './Star/Star';
import s from './Rating.module.css'

type RatingPropsType = {
    ratingTitle: string
    ratingValue: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props: RatingPropsType) {
    return (
        <div className={s.ratingWrapper}>
            <div className={s.ratingTitle}>
                {props.ratingTitle}
            </div>
            <div className={s.starsBlock}>
                <Star selected={props.ratingValue > 0}/>
                <Star selected={props.ratingValue > 1}/>
                <Star selected={props.ratingValue > 2}/>
                <Star selected={props.ratingValue > 3}/>
                <Star selected={props.ratingValue > 4}/>
            </div>

        </div>
    )
}