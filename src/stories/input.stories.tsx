import React, {ChangeEvent, useRef, useState} from 'react'
import {Meta} from '@storybook/react';


export default {
    title: 'Studying',
    // component: input
} as Meta

export const NotControlledInput = () => <input/>

export const FixedValueInput = () => <input value={'https://www.para-slov.ru'}/>

export const ChangeValueInputUsingOnChange = () => {
    const [inpValue, setInpValue] = useState('')
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setInpValue(e.currentTarget.value)
    return <div>
        <input value={inpValue} onChange={onChangeHandler}/>
        {inpValue}
    </div>
}

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