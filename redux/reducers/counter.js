import { actionTypes } from '../actions/counter';

export const reducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return Object.assign({}, state, {
                count: state.count + 1
            });
        case actionTypes.DECREMENT:
            return Object.assign({}, state, {
                count: state.count - 1
            });
        case actionTypes.RESET:
            return Object.assign({}, state, {
                count: 0
            });
        default:
            return state;
    }
};
