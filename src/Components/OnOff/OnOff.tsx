import React, {useState} from 'react';
import s from './OnOff.module.css'

export type OnOffPropsType = {
    on: boolean
    setOn: (onOff: boolean) => void
}

export function OnOff(props: OnOffPropsType) {

    const onStyle = {
        width: "40px",
        height: "25px",
        padding: "10px",
        border: "1px solid black",
        backgroundColor: props.on ? "green" : "white",
    }
    const offStyle = {
        width: "40px",
        height: "25px",
        padding: "10px",
        marginLeft: "10px",
        border: "1px solid black",
        backgroundColor: props.on ? "white" : "red",
    }
    const indicatorStyle = {
        width: "15px",
        height: "15px",
        margin: "15px",
        borderRadius: "10px",
        backgroundColor: props.on ? "green" : "red",
    }

    return (
        <div className={s.switcherWrapper}>
            <div className={s.switcherTitle}><span>Switcher</span></div>
            <div className={s.switcher}>
                <div style={onStyle} onClick={() => props.setOn(true)}>On</div>
                <div style={offStyle} onClick={() => props.setOn(false)}>Off</div>
                <div style={indicatorStyle}></div>
            </div>
        </div>
    )
}