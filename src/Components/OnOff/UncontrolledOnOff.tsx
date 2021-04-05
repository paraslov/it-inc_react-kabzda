import React, {useState} from 'react';
import s from './OnOff.module.css'

export function UncontrolledOnOff() {

    const [on, setOn] = useState(false)

    const onStyle = {
        width: "40px",
        height: "25px",
        padding: "10px",
        border: "1px solid black",
        backgroundColor: on ? "green" : "white",
    }
    const offStyle = {
        width: "40px",
        height: "25px",
        padding: "10px",
        marginLeft: "10px",
        border: "1px solid black",
        backgroundColor: on ? "white" : "red",
    }
    const indicatorStyle = {
        width: "15px",
        height: "15px",
        margin: "15px",
        borderRadius: "10px",
        backgroundColor: on ? "green" : "red",
    }

    return (
        <div className={s.switcherWrapper}>
            <div className={s.switcherTitle}><span>Switcher(uncontrolled)</span></div>
            <div className={s.switcher}>
                <div style={onStyle} onClick={() => setOn(true)}>On</div>
                <div style={offStyle} onClick={() => setOn(false)}>Off</div>
                <div style={indicatorStyle}></div>
            </div>
        </div>
    )
}