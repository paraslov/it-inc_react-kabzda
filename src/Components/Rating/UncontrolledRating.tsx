import React, {useState} from 'react';
import {Star} from './Star/Star';
import s from './Rating.module.css'
import {RatingValuesType} from './Rating';

type RatingPropsType = {
    ratingTitle: string
    defaultValue?: RatingValuesType
    onChange: (value: RatingValuesType) => void
}

export function UncontrolledRating(props: RatingPropsType) {

    const [ratingValue, setRatingValue] = useState<0 | 1 | 2 | 3 | 4 | 5>(props.defaultValue ? props.defaultValue : 0)

    return (
        <div className={s.ratingWrapper}>
            <div className={s.ratingTitle}>
                {props.ratingTitle}
            </div>
            <div className={s.starsBlock}>
                <Star selected={ratingValue > 0} setRating={() => {
                    setRatingValue(1)
                    props.onChange(1)
                }}/>
                <Star selected={ratingValue > 1} setRating={() => {
                    setRatingValue(2)
                    props.onChange(2)
                }}/>
                <Star selected={ratingValue > 2} setRating={() => {
                    setRatingValue(3)
                    props.onChange(3)
                }}/>
                <Star selected={ratingValue > 3} setRating={() => {
                    setRatingValue(4)
                    props.onChange(4)
                }}/>
                <Star selected={ratingValue > 4} setRating={() => {
                    setRatingValue(5)
                    props.onChange(5)
                }}/>
            </div>

        </div>
    )
}