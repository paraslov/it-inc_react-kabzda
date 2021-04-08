import React from 'react';
import {Star} from './Star/Star';
import s from './Rating.module.css'

export type RatingValuesType = 0 | 1 | 2 | 3 | 4 | 5

export type RatingPropsType = {
    ratingTitle: string
    ratingValue: RatingValuesType
    setRating: (rating: RatingValuesType) => void
}

export function Rating(props: RatingPropsType) {
    return (
        <div className={s.ratingWrapper}>
            <div className={s.ratingTitle}>
                {props.ratingTitle}
            </div>
            <div className={s.starsBlock}>
                <Star selected={props.ratingValue > 0} setRating={() => props.setRating(1)}/>
                <Star selected={props.ratingValue > 1} setRating={() => props.setRating(2)}/>
                <Star selected={props.ratingValue > 2} setRating={() => props.setRating(3)}/>
                <Star selected={props.ratingValue > 3} setRating={() => props.setRating(4)}/>
                <Star selected={props.ratingValue > 4} setRating={() => props.setRating(5)}/>
            </div>

        </div>
    )
}