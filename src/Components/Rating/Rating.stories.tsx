import React, {useState} from 'react';
import { Meta, Story } from '@storybook/react';
import {Rating, RatingValuesType, RatingPropsType} from './Rating';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Refactored/Rating',
    component: Rating,
} as Meta;

const callback = action('Rating is trying to changes')

const Template: Story<RatingPropsType> = (args) => <Rating {...args}/>

export const RatingFixed = Template.bind({})
RatingFixed.args = {
    ratingTitle: 'Greek Wedding',
    ratingValue: 0,
    setRating: callback
}

export const RatingChanging: Story<RatingPropsType> = (args) => {
    const [rating, setRating] = useState<RatingValuesType>(0)
    return <Rating {...args} ratingValue={rating} setRating={setRating}/>
}
RatingChanging.args = {
    ratingTitle: 'Monti Payton'
}


