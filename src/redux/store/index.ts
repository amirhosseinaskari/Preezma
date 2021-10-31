import { configureStore } from '@reduxjs/toolkit'
import workoutListReducer from '~redux/reducers/workoutListReducer'

export const store = configureStore({
  reducer: { workoutListState: workoutListReducer.reducer },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {workoutList: workoutList state}
export type AppDispatch = typeof store.dispatch
