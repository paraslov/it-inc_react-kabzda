import React, {useEffect, useState} from 'react';
import {Meta} from '@storybook/react';

export default {
    title: 'Studying/UseEffect',
    //component:
} as Meta


export const UseEffectFirstSteps = () => {
    const [count, setCount] = useState(1)
    const [fake, setFake] = useState(1)

    useEffect(() => {
        console.log('useEffect (works after render) without deps')
        document.title = count.toString()
    })
    useEffect(() => {
        console.log('useEffect (works after render) with empty deps array (like componentDidMount)')
        document.title = count.toString()
    }, [])
    useEffect(() => {
        console.log('useEffect (works after render) with count dependency')
        document.title = count.toString()
    }, [count])

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setFake(fake + 1)}>+</button>
            <div>counter: {count}</div>
            <div>fake counter: {fake}</div>
        </div>
    )
}