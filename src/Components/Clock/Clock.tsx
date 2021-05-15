import React, {useEffect, useState} from 'react'
import s from './Clock.module.css'


const get2digitString = (num: number) => num >= 10 ? num : `0${num}`

export type ClockPropsType = {
    clockDisplay: 'digital' | 'analog'
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

    const hourAngle = (hours * 30) + (minutes / 2)
    const minuteAngle = (minutes * 6)
    const secondsAngle = (seconds * 6)
    const getStyle = (angle: number) => ({transform: `rotateZ(${angle}deg)`})

    const clock = `${get2digitString(hours)}:${get2digitString(minutes)}:${get2digitString(seconds)}`

    return (
        <div>
            {props.clockDisplay === 'digital' ?
                <div>{clock}</div>
                :
                <div className={s.clock}>
                    <div className={s.hoursContainer}>
                        <div className={s.hours} style={getStyle(hourAngle)}/>
                    </div>
                    <div className={s.minutesContainer}>
                        <div className={s.minutes} style={getStyle(minuteAngle)}/>
                    </div>
                    <div className={s.secondsContainer}>
                        <div className={s.seconds} style={getStyle(secondsAngle)}/>
                    </div>
                </div>
            }
        </div>
    )
}