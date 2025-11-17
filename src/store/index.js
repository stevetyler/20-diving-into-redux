import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialAuthState = { isAuthenticated: false };

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
        },
        logout(state) {
            state.isAuthenticated = false;
        }
    }
});

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
})

const store = configureStore({
    reducer: { 
        counter: counterSlice.reducer, 
        auth: authSlice.reducer 
    }
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;

