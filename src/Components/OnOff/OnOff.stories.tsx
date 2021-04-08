import React, {useState} from 'react';
import {Meta, Story} from '@storybook/react';
import {OnOff, OnOffPropsType} from './OnOff';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Refactored/OnOff',
    component: OnOff
} as Meta;

const callback = action('on or off were clicked')

const Template: Story<OnOffPropsType> = (args) => <OnOff {...args}/>

export const OnMode = Template.bind({})
OnMode.args = {
    on: true,
    setOn: callback
}

export const OffMode = Template.bind({})
OffMode.args = {
    on: false,
    setOn: callback
}

export const SwitchMode = () => {
    const [value, setValue] = useState<boolean>(false)
    return <OnOff on={value} setOn={setValue}/>
}