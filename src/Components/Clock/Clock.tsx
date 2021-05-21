import React, {useEffect, useState} from 'react'
import {ClockDigitalSkin} from './ClockDigitalSkin';
import {ClockAnalogSkin} from './ClockAnalogSkin';


export type ClockPropsType = {
    /**
     * optionally you can chose skin of the clock - analog or digital (digital will show by default)
     */
    clockDisplay?: 'digital' | 'analog'
}
export type ClockSkinsPropsType = {
    seconds: number
    minutes: number
    hours: number
}

export const Clock: React.FC<ClockPropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('tick')
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const seconds = date.getSeconds()
    const minutes = date.getMinutes()
    const hours = date.getHours()

    let skin
    switch (props.clockDisplay) {
        case 'analog':
            skin = <ClockAnalogSkin seconds={seconds} minutes={minutes} hours={hours}/>
            break
        case 'digital':
        default:
            skin = <ClockDigitalSkin seconds={seconds} minutes={minutes} hours={hours}/>
    }

    return (
        <div>
            {skin}
        </div>
    )
}



