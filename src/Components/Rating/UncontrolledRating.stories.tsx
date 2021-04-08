import React from 'react';
import {Meta} from '@storybook/react';
import {UncontrolledRating} from './UncontrolledRating';
import {action} from '@storybook/addon-actions';

export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
} as Meta;

const callback = action('value, that UncRating trying to set')

export const UncontrolledRatingTest0 = () => <UncontrolledRating ratingTitle={'Terminator (uncontrolled)'}
                                                                defaultValue={0}
                                                                onChange={callback}/>
export const UncontrolledRatingTest1 = () => <UncontrolledRating ratingTitle={'Terminator (uncontrolled)'}
                                                                defaultValue={1}
                                                                onChange={callback}/>
export const UncontrolledRatingTest2 = () => <UncontrolledRating ratingTitle={'Terminator (uncontrolled)'}
                                                                defaultValue={2}
                                                                onChange={callback}/>
export const UncontrolledRatingTest3 = () => <UncontrolledRating ratingTitle={'Terminator (uncontrolled)'}
                                                                defaultValue={3}
                                                                onChange={callback}/>
export const UncontrolledRatingTest4 = () => <UncontrolledRating ratingTitle={'Terminator (uncontrolled)'}
                                                                defaultValue={4}
                                                                onChange={callback}/>
export const UncontrolledRatingTest5 = () => <UncontrolledRating ratingTitle={'Terminator (uncontrolled)'}
                                                                defaultValue={5}
                                                                onChange={callback}/>