import {
  createAsyncThunk,
  createSelector,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit'
import { fetchAPI } from '~src/api'
import { GET_WORKOUTS } from '~src/endpoints'
import { IExercise, IWorkout } from '~src/types/workout-list'

export type WorkoutListState = EntityState<IWorkout> & {
  isLoading: boolean
  workoutList: IWorkout[]
  activeExercise?: IExercise
}
const initialState: WorkoutListState = {
  isLoading: true, // to set a loader on fetching workout list
  ids: [],
  entities: {},
  workoutList: [] as IWorkout[],
}

export type FetchListAPIResponse = {
  data: {
    questions: IWorkout[]
    error?: string
  }
}

export const fetchList = createAsyncThunk<
  FetchListAPIResponse['data'],
  undefined,
  {
    rejectValue: string
  }
>('workoutList/getList', async () => {
  try {
    const response = await fetchAPI({ url: GET_WORKOUTS })
    return response.data
  } catch (error) {
    return { result: [], error: 'Something went wrong!' }
  }
})

export const workoutListSlice = createSlice({
  name: 'workoutListState',
  initialState,
  reducers: {
    activeExercise: (
      state,
      action: PayloadAction<{ workout_id: string; exercise_id: string }>
    ) => {
      // update exercise status
      const { workout_id, exercise_id } = action.payload
      const workout = state.workoutList.find(item => item.id === workout_id)
      if (!workout) return

      const exercise = workout.exercises.find(item => item.id === exercise_id)
      if (!exercise) return

      // change other exercises to dis-active
      state.workoutList.forEach(item => {
        item.exercises.forEach(item => {
          item.isActive = false
        })
      })

      // then change status to active
      exercise.isActive = true
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchList.fulfilled, (state, action) => {
      state.isLoading = false
      state.workoutList = action.payload.questions.map(item => ({
        ...item,
        isCompelete: false,
        isActive: false,
      }))
    })
  },
})

export const selectSlice = (state: { workoutListState: WorkoutListState }) =>
  state || initialState

export const selectAllList = createSelector(selectSlice, slice => {
  return slice.workoutListState
})

export const selectIsLoading = createSelector(
  selectSlice,
  slice => slice.workoutListState.isLoading
)

export default workoutListSlice
