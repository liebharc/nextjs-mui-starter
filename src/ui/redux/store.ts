import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './CounterSlice'

/**
 * Redux allows for global state in react components:
 * https://react-redux.js.org/using-react-redux/usage-with-typescript
 */
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
