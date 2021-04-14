import React from 'react'
import {ItemsType} from '../Accordion';

type AccordionBodyPropsType = {
    items: ItemsType[]
    onItemClick: (value: any) => void
}

export function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <div>
            <ul>
                {props.items.map((i, index) => <li key={index}
                onClick={() => props.onItemClick(i.value)}>{i.title}</li>)}
            </ul>
        </div>
    )
}