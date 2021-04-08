import React, {useState} from 'react';
import {Meta, Story} from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {Accordion, AccordionPropsType} from './Accordion';

export default {
    title: 'Refactored/Accordion',
    component: Accordion,
} as Meta

const callback = action('collapseMenu action was fired')

const Template: Story<AccordionPropsType> = (args) => <Accordion {...args} />;

export const UnCollapsedMode = Template.bind({});
UnCollapsedMode.args = {
    title: 'Users',
    collapsed: false,
    collapseMenu: callback
};
export const CollapsedMode = Template.bind({});
CollapsedMode.args = {
    title: 'Menu',
    collapsed: true,
    collapseMenu: callback
};

export const SwitchMode = () => {
    const [value, setValue] = useState<boolean>(false)
    return <Accordion title={'Stories'} collapseMenu={() => setValue(!value)} collapsed={value}/>
}