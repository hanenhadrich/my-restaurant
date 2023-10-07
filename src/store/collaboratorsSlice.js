import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const COLLABORATORS_LOCALLY = [
    { id: 1001, name: "Collaborator 1", username: "collaborator1", email: "collaborator1@gmail.com" },
    { id: 1002, name: "Collaborator 2", username: "collaborator2", email: "collaborator2@gmail.com" },
]

const initialState = {
    list: COLLABORATORS_LOCALLY,
    loading: false,
    error: null
}

export const fetchCollaborators = createAsyncThunk('collaborators/fetchCollaborators', () => {
    
})

const collaboratorsSlice = createSlice({
    name: 'collaborators',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        
    }
})

export const { } = collaboratorsSlice.actions

export default collaboratorsSlice.reducer