import React, {useState} from 'react';
import {Star} from './Star/Star';
import s from './Rating.module.css'

type RatingPropsType = {
    ratingTitle: string
}

export function UncontrolledRating(props: RatingPropsType) {

    const [ratingValue, setRatingValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(0)

    return (
        <div className={s.ratingWrapper}>
            <div className={s.ratingTitle}>
                {props.ratingTitle}
            </div>
            <div className={s.starsBlock}>
                <Star value = {1} selected={ratingValue > 0} setRating={setRatingValue}/>
                <Star value = {2} selected={ratingValue > 1} setRating={setRatingValue}/>
                <Star value = {3} selected={ratingValue > 2} setRating={setRatingValue}/>
                <Star value = {4} selected={ratingValue > 3} setRating={setRatingValue}/>
                <Star value = {5} selected={ratingValue > 4} setRating={setRatingValue}/>
            </div>

        </div>
    )
}