import React, {useState} from 'react';
import {Meta, Story} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Accordion, AccordionPropsType} from './Accordion';

export default {
    title: 'Refactored/Accordion',
    component: Accordion,
} as Meta

const callback = action('collapseMenu action was fired')
const onClickCallback = action('list item sending it\'s value')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

export const UnCollapsedMode = Template.bind({});
UnCollapsedMode.args = {
    title: 'Users',
    collapsed: false,
    collapseMenu: callback,
    onItemClick: onClickCallback,
    items: [
        {title: 'Yuri', value: 1},
        {title: 'Boris', value: 2},
        {title: 'Sergio', value: 3},
        {title: 'Alena', value: 4},
    ]
};
export const CollapsedMode = Template.bind({});
CollapsedMode.args = {
    title: 'Menu',
    collapsed: true,
    collapseMenu: callback,
    items: []
};

export const SwitchMode = () => {
    const [value, setValue] = useState<boolean>(false)
    return <Accordion title={'Stories'} collapseMenu={() => setValue(!value)} collapsed={value}
                      onItemClick={onClickCallback}
    items={[
        {title: 'Yuri', value: 1},
        {title: 'Boris', value: 2},
        {title: 'Sergio', value: 3},
        {title: 'Alena', value: 4},
    ]}/>
}