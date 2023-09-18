import {INCREMENT, DECREMENT} from "@redux/actions/actions.types";

export const incrementAction = () => {
    return {
        type: 'INCREMENT'
    };
};

export const decrementAction = () => {
    return {
        type: 'DECREMENT'
    };
};