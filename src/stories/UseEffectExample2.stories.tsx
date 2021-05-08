import React, {useEffect, useState} from 'react';
import {Meta} from '@storybook/react';

export default {
    title: 'Studying/UseEffect',
    //component:
} as Meta


export const UseEffectSetInterval = () => {
    const [count, setCount] = useState(1)
    const [fake, setFake] = useState(1)


    useEffect(() => {
        console.log('useEffect setInterval')
        setInterval(() => {
            setCount(state => state + 1)
            console.log('tick: ' + count)
        }, 1000)
        setInterval(() => {
            setFake(fake + 1)
            console.log('fake tick: ' + fake)
        }, 1000)
    }, [])
    useEffect(() => {
        console.log('useEffect setTimeout')
        setTimeout(() => {
            document.title = count.toString()
        }, 1000)

    }, [])

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setFake(fake + 1)}>+</button>
            <div>counter: {count}</div>
            <div>fake counter: {fake}</div>
        </div>
    )
}