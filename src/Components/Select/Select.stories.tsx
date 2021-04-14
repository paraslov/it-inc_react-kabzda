import React from 'react';
import {OptionType, Select, SelectPropsType} from './Select';
import {Meta, Story} from '@storybook/react';
import {action} from '@storybook/addon-actions';

export default {
    title: 'my comps/Select',
    component: Select
} as Meta

const options: OptionType[] = [
    {title: 'JavaScript', value: 1},
    {title: 'Java', value: 2},
    {title: 'Python', value: 3},
    {title: 'C#', value: 4},
    {title: 'C++', value: 5},
]

const callback = () => action(`value wants to change`)

const Template: Story<SelectPropsType> = (args) => <Select {...args} />

export const SelectTest = Template.bind({})
SelectTest.args = {
    title: 'none',
    options: options,
    onChange: callback
}