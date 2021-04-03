import React from 'react'
import s from './../Accordion.module.css'

type AccordionTitlePropsType = {
    title: string
}

export function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div className={s.accTitle}>
            <h3>{props.title}</h3>
        </div>
    )
}