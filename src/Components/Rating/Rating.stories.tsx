import React, {useState} from 'react';
import { Meta } from '@storybook/react';
import {Rating, RatingValuesType} from './Rating';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Rating',
    component: Rating,
} as Meta;

const callback = action('Rating is trying to changes')

export const RatingZero = () => <Rating ratingTitle={'Greek Wedding'} ratingValue={0} setRating={callback}/>
export const Rating1 = () => <Rating ratingTitle={'Star Wars'} ratingValue={1} setRating={callback}/>
export const Rating2 = () => <Rating ratingTitle={'Star Wars 2'} ratingValue={2} setRating={callback}/>
export const Rating3 = () => <Rating ratingTitle={'Star Wars 3'} ratingValue={3} setRating={callback}/>
export const Rating4 = () => <Rating ratingTitle={'Star Wars 4'} ratingValue={4} setRating={callback}/>
export const Rating5 = () => <Rating ratingTitle={'Star Wars 5'} ratingValue={5} setRating={callback}/>

export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValuesType>(0)
    return <Rating ratingTitle={'Monti Payton'} ratingValue={rating} setRating={setRating}/>
}


