import React from 'react'
import s from './../Accordion.module.css'

type AccordionTitlePropsType = {
    title: string
    collapseMenu: () => void
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div className={s.uncontrolledAccTitle} onClick={(e) => props.collapseMenu()}>
            <h3>{props.title}</h3>
        </div>
    )
}