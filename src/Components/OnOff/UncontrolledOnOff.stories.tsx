import React, {useState} from 'react';
import { Meta } from '@storybook/react';
import {action} from '@storybook/addon-actions';
import {UncontrolledOnOff} from './UncontrolledOnOff';

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff
} as Meta;

const callback = action('on or off were clicked')

export const OffMode = () => <UncontrolledOnOff defaultValue={false} onChange={callback}/>
export const OnMode = () => <UncontrolledOnOff  defaultValue={true} onChange={callback}/>
