import React, {useState, KeyboardEvent} from 'react'
import s from './Select.module.css'

export type OptionType = {
    value: any
    title: string
}

export type SelectPropsType = {
    /**
     * short description of select component in one word
     */
    title: OptionType
    /**
     * options in the choice list
     */
    options: OptionType[]
    /**
     * callback that sending current choice to parent component
     * @param option: object of current option selection
     */
    onChoiceChange: (option: OptionType) => void
}

export function Select(props: SelectPropsType) {
    console.log('Select Rendering')

    const [collapsed, setCollapsed] = useState(true)

    function onOptionClick(value: any, title: string) {
        props.onChoiceChange({title: title, value: value})
    }

    function onKeyPressInTitle(e: KeyboardEvent<HTMLDivElement>) {
        if (e.keyCode === 40) {
            if (props.title.value === 'none') {
                props.onChoiceChange(props.options[0])
                return
            }
            for (let i = 0; i < props.options.length; i++) {
                if (props.options[i].title === props.title.title && i !== props.options.length - 1) {
                    props.onChoiceChange(props.options[i + 1])
                    return
                }
            }
        } else if (e.keyCode === 38) {
            for (let i = 0; i < props.options.length; i++) {
                if (props.options[i].title === props.title.title && i !== 0) {
                    props.onChoiceChange(props.options[i - 1])
                    return
                }
            }
        }
        if (e.keyCode === 13 || e.keyCode === 27) {
            e.keyCode === 13 ? setCollapsed(!collapsed) : setCollapsed(true)
        }
    }

    function onTitleBlurEffect() {
        setTimeout(() => setCollapsed(true), 200)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.title}
                 onClick={() => setCollapsed(!collapsed)}
                 onBlur={onTitleBlurEffect}
                 onKeyDown={onKeyPressInTitle}
                 tabIndex={0}>
                {props.title.title}
                <div className={s.arrow}/>
            </div>
            {!collapsed && <ul>
                {props.options.map((op, index) => <li
                    className={s.li + ' ' + (op.title === props.title.title ? s.active : '')}
                    onClick={() => onOptionClick(op.value, op.title)}
                    key={index}>{op.title}</li>)}
            </ul>}

        </div>

    )
}