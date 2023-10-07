import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

const initialState = {
    list: [],
    loading: false,
    error: null,
    selected: null
}

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', () => {
    return axios.get('http://localhost:3000/tasks')
                .then(res => { return res.data })
})

export const fetchTaskById = createAsyncThunk('tasks/fetchTaskById', (taskId) => {
    return axios.get(`http://localhost:3000/tasks/${taskId}`)
                .then(res => { return res.data })
})

export const createTask = createAsyncThunk('tasks/createTask', (newTask) => {
    return axios.post('http://localhost:3000/tasks', newTask)
                .then(res => { return res.data })
})

export const updateTask = createAsyncThunk('tasks/updateTask', ({ taskId, newData }) => {
    return axios.patch(`http://localhost:3000/tasks/${taskId}`, newData)
                .then(res => { return res.data })
})

export const deleteTask = createAsyncThunk('tasks/deleteTask', (taskId) => {
    return axios.delete(`http://localhost:3000/tasks/${taskId}`)
                .then(res => { return res.data })
})

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        unselectTask: (state, action) => {
            state.selected = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.loading = false
                state.list = action.payload
            })
            .addCase(fetchTasks.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })

            .addCase(fetchTaskById.pending, (state, action) => {
                state.loading = true
            })
            .addCase(fetchTaskById.fulfilled, (state, action) => {
                state.loading = false
                state.selected = action.payload
            })
            .addCase(fetchTaskById.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })

            .addCase(createTask.pending, (state, action) => {
                state.loading = true
            })
            .addCase(createTask.fulfilled, (state, action) => {
                state.loading = false
                state.list.push(action.payload)
            })
            .addCase(createTask.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })

            .addCase(updateTask.pending, (state, action) => {
                state.loading = true
            })
            .addCase(updateTask.fulfilled, (state, action) => {
                state.loading = false
                state.list = state.list.map(task => task.id === action.meta.arg.taskId ? { ...task, ...action.meta.arg.newData } : task)
            })
            .addCase(updateTask.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })

            .addCase(deleteTask.pending, (state, action) => {
                state.loading = true
            })
            .addCase(deleteTask.fulfilled, (state, action) => {
                state.loading = false
                state.list = state.list.filter(task => task.id !== action.meta.arg)
            })
            .addCase(deleteTask.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})

export const { unselectTask } = tasksSlice.actions

export default tasksSlice.reducer