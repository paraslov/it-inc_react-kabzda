import React, {useState} from 'react';
import {Star} from './Star/Star';
import s from './Rating.module.css'

type RatingPropsType = {
    ratingTitle: string
}

export function UncontrolledRating(props: RatingPropsType) {

    const [ratingValue, setRatingValue] = useState(0)
    const setRating = (rating: number) => setRatingValue(rating)

    return (
        <div className={s.ratingWrapper}>
            <div className={s.ratingTitle}>
                {props.ratingTitle}
            </div>
            <div className={s.starsBlock}>
                <Star id = {1} selected={ratingValue > 0} setRating={setRating}/>
                <Star id = {2} selected={ratingValue > 1} setRating={setRating}/>
                <Star id = {3} selected={ratingValue > 2} setRating={setRating}/>
                <Star id = {4} selected={ratingValue > 3} setRating={setRating}/>
                <Star id = {5} selected={ratingValue > 4} setRating={setRating}/>
            </div>

        </div>
    )
}