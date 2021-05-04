import React, {useCallback, useMemo, useReducer, useState} from 'react';
import {Meta} from '@storybook/react';

export default {
    title: 'Studying/useMemo, useCallback',
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

const SecretBooks = (props: { users: Array<string>, addBook: () => void }) => {
    console.log('BOOKS')
    return (
        <div>
            <button onClick={() => props.addBook()}>Add Book</button>
            {props.users.map((u, i) => <div key={i}>{u}</div>)}
        </div>
    )
}

const Books = React.memo(SecretBooks)

type StateType = {
    count: number
    books: string[]
}

const initState: StateType = {
    count: 0,
    books: ['React', 'TS', 'JS', 'CSS']
}

const reducer = (state: StateType, action: any): StateType => {
    switch (action.type) {
        case 'INC_COUNT':
            return {
                ...state,
                count: state.count + 1
            }
        case 'ADD_BOOK':
            return {
                ...state,
                books: [...state.books, 'Angular ' + Date.now()]
            }
        default:
            return state
    }
}

export const UseMemoUseCallback = () => {
    const [state, dispatch] = useReducer(reducer, initState)

    const addBook = () => {
        dispatch({type: 'ADD_BOOK'})
    }
    // useMemo option
    const useMemoAddBook = useMemo(() => {
        return () => {
            dispatch({type: 'ADD_BOOK'})
        }
    }, [state.books.length])
    // useCallback option
    const useCallbackAddBook = useCallback(() => {
        dispatch({type: 'ADD_BOOK'})
    }, [state.books.length])

    return (
        <div>
            <Counter count={state.count}/>
            <button onClick={() => dispatch({type: 'INC_COUNT'})}>+</button>
            <Books users={state.books} addBook={useCallbackAddBook}/>
        </div>
    )
}