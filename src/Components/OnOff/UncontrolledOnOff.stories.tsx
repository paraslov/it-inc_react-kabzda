import React from 'react';
import {Meta, Story} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {UncontrolledOnOff, UncontrolledOnOffPropsType} from './UncontrolledOnOff';

export default {
    title: 'Refactored/UncontrolledOnOff',
    component: UncontrolledOnOff
} as Meta;

const callback = action('on or off were clicked')

const Template: Story<UncontrolledOnOffPropsType> = (args) => <UncontrolledOnOff {...args}/>

export const OnMode = Template.bind({})
OnMode.args = {
    defaultValue: true,
    onChange: callback
}
export const OffMode = Template.bind({})
OnMode.args = {
    defaultValue: false,
    onChange: callback
}


