import React, {useState} from 'react';
import s from './OnOff.module.css'

type UncontrolledOnOffPropsType = {
    onChange: (onOff: boolean) => void
}

export function UncontrolledOnOff(props: UncontrolledOnOffPropsType) {

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

    const switchOn = () => {
        setOn(true)
        props.onChange(true)
    }
    const switchOff = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div className={s.switcherWrapper}>
            <div className={s.switcherTitle}><span>Switcher(uncontrolled)</span></div>
            <div className={s.switcher}>
                <div style={onStyle} onClick={switchOn}>On</div>
                <div style={offStyle} onClick={switchOff}>Off</div>
                <div style={indicatorStyle}></div>
            </div>
        </div>
    )
}