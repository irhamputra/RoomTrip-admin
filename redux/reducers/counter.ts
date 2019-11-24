import { actionTypes } from '../actions/counter';
import { CounterActions, CounterState } from '../../types/reducers/counter';

export const counter = (
    state = { count: 0 },
    action: CounterActions
): CounterState => {
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
