
import React, { createContext } from 'react';

const CountContext = createContext();

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const createActions = dispatch =>({
    increment: 
})

const reducer = (state,action)+.{
    switch (action.type) {
        case INCREMENT:
            return  state + 1;
        case DECREMENT:
            return  state - 1;
        default: return state;
       
    }
}

const CountProvider = () => {
    return (
        <div>
            
        </div>
    );
};

export default CountProvider;