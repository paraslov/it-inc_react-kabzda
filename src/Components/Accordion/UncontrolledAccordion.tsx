import React, {useState} from 'react'
import {AccordionTitle} from './AccordionComponents/AccordionTitle';
import {AccordionBody} from './AccordionComponents/AccordionBody';
import s from './Accordion.module.css'

export type AccordionPropsType = {
    title: string
}

export function UncontrolledAccordion(props: AccordionPropsType) {
    const [collapsed, setCollapsed] = useState(false)
    function collapseMenu() {setCollapsed(!collapsed)}
    return (
        <div className={s.accordionWrapper}>
            <AccordionTitle title={props.title} collapseMenu={collapseMenu}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}