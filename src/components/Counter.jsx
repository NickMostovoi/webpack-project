import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {incrementAction, decrementAction} from "@redux/actions";

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);

    const increment = () => {
        dispatch(incrementAction());
    };

    const decrement = () => {
        dispatch(decrementAction());
    };

    return (
        <div className="counter">
            <h2>Counter: {counter}</h2>
            <button className="btn" onClick={increment}>+</button>
            <button className="btn" onClick={decrement}>-</button>
        </div>
    );
};

export default Counter;