import React, {useState} from 'react';
import { Meta } from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Accordion} from './Accordion';

export default {
    title: 'Accordion',
    component: Accordion,
} as Meta;

const callback = action('collapseMenu action was fired')

export const UnCollapsedMode = () => <Accordion title={'Users'} collapseMenu={callback} collapsed={false}/>
export const CollapsedMode = () => <Accordion title={'Menu'} collapseMenu={callback} collapsed={true}/>


export const SwitchMode = () => {
    const [value, setValue] = useState<boolean>(false)
    return <Accordion title={'Stories'} collapseMenu={() => setValue(!value)} collapsed={value}/>
}