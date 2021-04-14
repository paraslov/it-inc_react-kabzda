import React from 'react'
import {AccordionTitle} from './AccordionComponents/AccordionTitle';
import {AccordionBody} from './AccordionComponents/AccordionBody';
import s from './Accordion.module.css'

export type ItemsType = {
    title: string
    value: any
}

export type AccordionPropsType = {
    /**
     * Menu title to click on to collapse
     */
    title: string
    /**
     * value that shows accordion collapsed or not.
     */
    collapsed: boolean
    /**
     * function, that controls menu collapse
     */
    collapseMenu: () => void
    /**
     * list of items shown in accordion menu
     */
    items: ItemsType[]
    onItemClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div className={s.accordionWrapper}>
            <AccordionTitle title={props.title} collapseMenu={props.collapseMenu}/>
            {!props.collapsed && <AccordionBody onItemClick={props.onItemClick} items={props.items}/>}
        </div>
    )
}