import React, {useState} from 'react';
import { Meta } from '@storybook/react';
import {OnOff} from './OnOff';
import {action} from '@storybook/addon-actions';

export default {
    title: 'OnOff',
    component: OnOff
} as Meta;

const callback = action('on or off were clicked')

export const OffMode = () => <OnOff on={false} setOn={callback}/>
export const OnMode = () => <OnOff on={true} setOn={callback}/>


export const SwitchMode = () => {
    const [value, setValue] = useState<boolean>(false)
    return <OnOff on={value} setOn={setValue}/>
}