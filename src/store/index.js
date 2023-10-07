import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './tasksSlice'
import collaboratorsReducer from './collaboratorsSlice'

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        collaborators: collaboratorsReducer,
    }
})