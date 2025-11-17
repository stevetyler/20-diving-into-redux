import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { value: 0, showCounter: true };
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++; // Immer library used under the hood to allow direct state mutation
        },
        increase(state, action) {
            state.counter += action.payload;
        },
        decrement(state) {
            state.counter--;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;