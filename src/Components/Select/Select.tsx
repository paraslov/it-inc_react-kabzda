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

// TODO: Try Select without useState for select, setSelect!!!

export function Select(props: SelectPropsType) {
    // console.log('rendering Select')
    const [selected, setSelected] = useState<OptionType>(props.title)
    const [collapsed, setCollapsed] = useState(true)

    function onOptionClick(value: any, title: string) {
        setSelected({value, title})
        setCollapsed(!collapsed)
        props.onChoiceChange({title: title, value: value})
    }

    function onKeyPressInTitle(e: KeyboardEvent<HTMLDivElement>) {
        if (e.keyCode === 40) {
            if (selected.value === 'none') {
                setSelected(props.options[0])
                props.onChoiceChange(props.options[0])
                return
            }
            for (let i = 0; i < props.options.length; i++) {
                if (props.options[i].title === selected.title && i !== props.options.length - 1) {
                    setSelected(props.options[i + 1])
                    props.onChoiceChange(props.options[i + 1])
                    return
                }
            }
        } else if (e.keyCode === 38) {
            for (let i = 0; i < props.options.length; i++) {
                if (props.options[i].title === selected.title && i !== 0) {
                    setSelected(props.options[i - 1])
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
                {selected.title}
                <div className={s.arrow}/>
            </div>
            {!collapsed && <ul>
                {props.options.map((op, index) => <li
                    className={s.li + ' ' + (op.title === selected.title ? s.active : '')}
                    onClick={() => onOptionClick(op.value, op.title)}
                    key={index}>{op.title}</li>)}
            </ul>}

        </div>

    )
}