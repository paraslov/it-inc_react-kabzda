import React, {useEffect, useState} from 'react';
import {Meta} from '@storybook/react';

export default {
    title: 'Studying/UseEffect',
    //component:
} as Meta



export const UseEffectWatch = () => {

    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [hours, setHours] = useState(0)


    useEffect(() => {
        console.log('useEffect Watch')
        setInterval(() => {
            const currentDate = new Date()
            console.log('tick: ' + currentDate.getSeconds())
            setSeconds(currentDate.getSeconds())
            setMinutes(currentDate.getMinutes())
            setHours(currentDate.getHours())
        }, 1000)
    }, [])


    return (
        <div>
            <div>Current time: {hours < 10 ? `0${hours}` : hours}:
                {minutes >= 10 ? minutes : `0${minutes}`}:
                {seconds < 10 ? `0${seconds}` : seconds} </div>
        </div>
    )
}