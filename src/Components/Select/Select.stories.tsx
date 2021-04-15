import React, {useState} from 'react';
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

const Template: Story<SelectPropsType> = (args) => {
    return <Select {...args} />
}

export const Uncontrolled = Template.bind({})
Uncontrolled.args = {
    title: {title: 'none', value: 'none'},
    options: options,
    onChoiceChange: callback
}

export const Controlled = () => {
    const [currentChoice, setCurrentChoice] = useState<OptionType>({title: 'specialization', value: 'none'})
    return <Select title={currentChoice} options={options} onChoiceChange={setCurrentChoice}/>
}