import React from 'react'
import {AccordionTitle} from './AccordionComponents/AccordionTitle';
import {AccordionBody} from './AccordionComponents/AccordionBody';
import s from './Accordion.module.css'

export type AccordionPropsType = {
    title: string
    collapsed: boolean
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div className={s.accordionWrapper}>
            <AccordionTitle title={props.title}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}