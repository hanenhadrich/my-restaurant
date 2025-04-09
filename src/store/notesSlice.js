import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = {
  list: [], 
  selected: null, 
  loading: false,
  error: null, 
};


export const fetchNotes = createAsyncThunk('notes/fetchNotes', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('http://localhost:3000/notes');
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Erreur lors de la récupération des notes');
  }
});


export const createNote = createAsyncThunk('notes/createNote', async (newNote, { rejectWithValue }) => {
  try {
    const response = await axios.post('http://localhost:3000/notes', newNote);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Erreur lors de la création de la note');
  }
});


export const updateNote = createAsyncThunk('notes/updateNote', async ({ noteId, updatedData }, { rejectWithValue }) => {
  try {
    const response = await axios.patch(`http://localhost:3000/notes/${noteId}`, updatedData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Erreur lors de la mise à jour de la note');
  }
});


export const deleteNote = createAsyncThunk('notes/deleteNote', async (noteId, { rejectWithValue }) => {
  try {
    await axios.delete(`http://localhost:3000/notes/${noteId}`);
    return noteId;
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Erreur lors de la suppression de la note');
  }
});


const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    unselectNote: (state) => {
      state.selected = null;
    },
  },
  extraReducers: (builder) => {
    builder
      
      .addCase(fetchNotes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      .addCase(createNote.pending, (state) => {
        state.loading = true;
      })
      .addCase(createNote.fulfilled, (state, action) => {
        state.loading = false;
        state.list.push(action.payload);
      })
      .addCase(createNote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      .addCase(updateNote.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateNote.fulfilled, (state, action) => {
        state.loading = false;
        state.list = state.list.map((note) =>
          note.id === action.payload.id ? action.payload : note
        );
      })
      .addCase(updateNote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      .addCase(deleteNote.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteNote.fulfilled, (state, action) => {
        state.loading = false;
        state.list = state.list.filter((note) => note.id !== action.payload);
      })
      .addCase(deleteNote.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { unselectNote } = notesSlice.actions;

export default notesSlice.reducer;
