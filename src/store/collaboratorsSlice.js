import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


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
    return axios.get("http://localhost:3000/collaborators")
                .then(res => { return res })
})

const collaboratorsSlice = createSlice({
    name: 'collaborators',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCollaborators.pending, (state, action) => {
                state.loading = true;
                console.log(action);                
            })
            .addCase(fetchCollaborators.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action);                
                state.list = action.payload.data
            })
            .addCase(fetchCollaborators.rejected, (state, action) => {
                state.loading = false;
                console.log(action);
            })
    }
})

export const { } = collaboratorsSlice.actions

export default collaboratorsSlice.reducer