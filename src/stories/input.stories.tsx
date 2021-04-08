import React, {ChangeEvent, useRef, useState} from 'react'
import {Meta} from '@storybook/react';


export default {
    title: 'Studying/Input',
    // component: input
} as Meta

export const UncontrolledInput = () => <input/>

export const FixedValueInput = () => <input value={'https://www.para-slov.ru'}/>

export const SaveInputValueUsingRef = () => {
    const inpRef = useRef<HTMLInputElement>(null)
    const [inpData, setInpData] = useState('')
    const onClickHandler = () => setInpData(inpRef.current?.value ? inpRef.current.value : '')

    return (
        <div>
            <input ref={inpRef}/>
            <button onClick={onClickHandler}>save</button>
            <div>{inpData}</div>
        </div>
    )
}

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.value)
    return <div>
        <input value={parentValue} onChange={onChangeHandler}/>
        {parentValue}
    </div>
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(false)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setParentValue(e.currentTarget.checked)
    return <div>
        <input checked={parentValue} type={'checkbox'} onChange={onChangeHandler}/>
        {parentValue}
    </div>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => setParentValue(e.currentTarget.value)
    return <div>
        <select value={parentValue} onChange={onChangeHandler}>
            <option>none</option>
            <option value="1">ReactJS</option>
            <option value="2">Angular</option>
            <option value="3">Vue</option>
        </select>
        <div>{parentValue}</div>
    </div>
}