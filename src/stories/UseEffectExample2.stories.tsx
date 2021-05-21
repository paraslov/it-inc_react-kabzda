import React, {useEffect, useState} from 'react';
import {Meta} from '@storybook/react';

export default {
    title: 'Studying/UseEffect/Example2',
    //component:
} as Meta


export const UseEffectSetInterval = () => {
    const [count, setCount] = useState(1)
    const [fake, setFake] = useState(1)


    useEffect(() => {
        console.log('useEffect setInterval')
        const intervalId1 = setInterval(() => {
            setCount(state => state + 1)
            console.log('tick: ' + count)
        }, 1000)
        const intervalId2 = setInterval(() => {
            setFake(fake + 1)
            console.log('fake tick: ' + fake)
        }, 1000)
// cleanup!!! =====================================================================================================>>
        return () => {
            clearInterval(intervalId1)
            clearInterval(intervalId2)
        }
    }, [])

    useEffect(() => {
        console.log('useEffect setTimeout')
        const timeoutId = setTimeout(() => {
            document.title = count.toString()
        }, 1000)
// cleanup!!! =====================================================================================================>>
        return () => {
            clearTimeout(timeoutId)
        }
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