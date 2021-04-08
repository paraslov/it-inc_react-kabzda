import React from 'react';
import {Meta, Story} from '@storybook/react';
import {UncontrolledRating, UncontrolledRatingPropsType} from './UncontrolledRating';
import {action} from '@storybook/addon-actions';
import {RatingPropsType} from './Rating';

export default {
    title: 'Refactored/UncontrolledRating',
    component: UncontrolledRating,
} as Meta;

const callback = action('value, that UncRating trying to set')

const Template: Story<UncontrolledRatingPropsType> = (args) => <UncontrolledRating {...args}/>

export const UncontrolledRatingTest = Template.bind({})
UncontrolledRatingTest.args = {
    ratingTitle: 'Segun',
    defaultValue: 3,
    onChange: callback
}