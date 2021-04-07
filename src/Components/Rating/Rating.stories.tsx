import React, {useState} from 'react';
import { Meta } from '@storybook/react';
import {Rating, RatingValuesType} from './Rating';

export default {
    title: 'Rating',
    component: Rating,
} as Meta;

export const RatingZero = () => <Rating ratingTitle={'Greek Wedding'} ratingValue={0} setRating={x=>x}/>
export const Rating1 = () => <Rating ratingTitle={'Star Wars'} ratingValue={1} setRating={x=>x}/>
export const Rating2 = () => <Rating ratingTitle={'Star Wars 2'} ratingValue={2} setRating={x=>x}/>
export const Rating3 = () => <Rating ratingTitle={'Star Wars 3'} ratingValue={3} setRating={x=>x}/>
export const Rating4 = () => <Rating ratingTitle={'Star Wars 4'} ratingValue={4} setRating={x=>x}/>
export const Rating5 = () => <Rating ratingTitle={'Star Wars 5'} ratingValue={5} setRating={x=>x}/>

export const RatingChanging = () => {
    const [rating, setRating] = useState<RatingValuesType>(0)
    return <Rating ratingTitle={'Monti Payton'} ratingValue={rating} setRating={setRating}/>
}


