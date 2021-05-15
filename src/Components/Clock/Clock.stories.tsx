import {Clock, ClockPropsType} from './Clock';
import {Meta, Story} from '@storybook/react';


export default {
    title: 'Refactored/Clock',
    component: Clock
} as Meta

const Template: Story<ClockPropsType> = (args) => <Clock {...args}/>

export const DigitalExample = Template.bind({})
DigitalExample.args = {
    clockDisplay: 'digital'
}

export const AnalogExample = Template.bind({})
AnalogExample.args = {
    clockDisplay: 'analog'
}