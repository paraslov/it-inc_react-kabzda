import React, {useReducer, useState} from 'react';
import {Meta} from '@storybook/react';

export default {
    title: 'Studying/React Memo using',
    //component: ReactMemo
} as Meta

const Counter = (props: { count: number }) => {
    console.log('COUNTER')
    return (
        <div>
            {props.count}
        </div>
    )
}

const SecretUsers = (props: { users: Array<string> }) => {
    console.log('USERS')
    return (
        <div>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}

const Users = React.memo(SecretUsers)

type StateType = {
    count: number
    users: string[]
}

const initState: StateType = {
    count: 0,
    users: ['Alex', 'Maria', 'Yurii', 'Vlad']
}

const reducer = (state: StateType, action: any): StateType => {
    switch (action.type) {
        case 'INC_COUNT':
            return {
                ...state,
                count: state.count + 1
            }
        case 'ADD_USER':
            return {
                ...state,
                users: [...state.users, 'Alice ' + Date.now()]
            }
        default:
            return state
    }
}

export const ReactMemoExample1 = () => {
    const [state, dispatch] = useReducer(reducer, initState)

    const addUser = () => {
        dispatch({type: 'ADD_USER'})
    }

    return (
        <div>
            <Counter count={state.count}/>
            <button onClick={() => dispatch({type: 'INC_COUNT'})}>+</button>
            <Users users={state.users}/>
            <button onClick={addUser}>Add User</button>
        </div>
    )
}