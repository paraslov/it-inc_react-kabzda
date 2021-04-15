import React from 'react'
import {ItemsType} from '../Accordion';
import s from '../Accordion.module.css'

type AccordionBodyPropsType = {
    items: ItemsType[]
    onItemClick: (value: any) => void
}

export function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <div>
            <ul>
                {props.items.map((i, index) => <li
                    key={index}
                    className={s.li}
                onClick={() => props.onItemClick(i.value)}>{i.title}</li>)}
            </ul>
        </div>
    )
}