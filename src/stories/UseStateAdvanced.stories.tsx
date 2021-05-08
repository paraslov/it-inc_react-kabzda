import React, {useState} from 'react';
import {Meta} from '@storybook/react';

export default {
    title: 'Studying/UseState Advanced',
    //component: ReactMemo
} as Meta

function difficultCount() {
    let x = 1
    console.log('difficult counting')
    return x
}

export const AdvUseStateExample = () => {
    const [count, setCount] = useState(difficultCount)

    const countChanger = (state: number) => state + 1

    return (
        <div>
            <button onClick={() => setCount(countChanger)}>+</button>
            {/*or setCount((state: number) => state + 1) used to make closure*/}
            <div>{count}</div>
        </div>
    )
}