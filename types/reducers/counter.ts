export type CounterState = {};
export type CounterActions =
    | { type: 'INCREMENT'; payload: number }
    | { type: 'DECREMENT'; payload: number }
    | { type: 'RESET'; payload: number };
