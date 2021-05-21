import React, {useEffect, useState} from 'react';
import {Meta} from '@storybook/react';

export default {
    title: 'Studying/UseEffect/Cleanup',
    //component:
} as Meta


export const KeyPressTracking = () => {
    console.log('KeyPressTracking rendered')
    const [text, setText] = useState('')

    useEffect(() => {
        console.log('KeyPressTracking useEffect ' + text)

        const handler = (e: KeyboardEvent) => {
            console.log(e.key)
            setText(state => state + e.key)
        }

        window.addEventListener('keypress', handler)
// cleanup!!! =====================================================================================================>>
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [])


    return (
        <div>
            Text entered: {text}
        </div>
    )
}