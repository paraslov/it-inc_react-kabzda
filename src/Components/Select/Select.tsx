import React, {useState} from 'react'
import s from './Select.module.css'

export type OptionType = {
    value: any
    title: string
}

export type SelectPropsType = {
    /**
     * short description of select component in one word
     */
    title: string
    options: OptionType[]
    onChange: (option: OptionType) => void
}

export function Select(props: SelectPropsType) {
    const [select, setSelect] = useState<OptionType>({title: props.title, value: 'none'})
    const [collapsed, setCollapsed] = useState(true)

    function onClick(value: any, title: string) {
        setSelect({value, title})
        setCollapsed(!collapsed)
        props.onChange({title: title, value: value})
    }

    return (
        <div className={s.wrapper}>
            <div className={s.title} onClick={() => setCollapsed(!collapsed)}>
                {select.title}
                <div className={s.arrow} />
            </div>
            {!collapsed && <ul>
                {props.options.map((op, index) => <li
                    className={s.li}
                    onClick={() => onClick(op.value, op.title)}
                    key={index}>{op.title}</li>)}
            </ul>}

        </div>

    )
}