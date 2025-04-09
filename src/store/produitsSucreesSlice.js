import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const PRODUITS_LOCALLY = [
    { id: 1001, name: "prod3", username: "collaborat1", email: "collaborator1@gmail.com", price: 10, sold: 2 },
    { id: 1002, name: "hjjjj", username: "collaboror2", email: "collaborator2@gmail.com", price: 15, sold: 1 },
];


const initialState = {
    list: PRODUITS_LOCALLY, 
    selected: null,
    loading: false,
    error: null,
};


export const fetchProduits = createAsyncThunk("produits/fetchProduits", async (_, { rejectWithValue }) => {
    try {
        const response = await axios.get("http://localhost:3000/produitsSucrees");
        return response.data;
        } catch (error) {
        return rejectWithValue(error.response?.data || "Erreur de récupération des produits");
    }
});


export const fetchProduitById = createAsyncThunk("produits/fetchProduitById", async (produitId, { rejectWithValue }) => {
    try {
        const response = await axios.get(`http://localhost:3000/produitsSucrees/${produitId}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || "Produit non trouvé");
    }
});


export const createProduit = createAsyncThunk("produits/createProduit", async (newProduit, { rejectWithValue }) => {
    try {
        const response = await axios.post("http://localhost:3000/produitsSucrees", newProduit);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || "Erreur lors de la création");
    }
});


export const updateProduit = createAsyncThunk("produits/updateProduit", async ({ produitId, newData }, { rejectWithValue }) => {
    try {
        const response = await axios.patch(`http://localhost:3000/produitsSucrees/${produitId}`, newData);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response?.data || "Erreur lors de la mise à jour");
    }
});


export const deleteProduit = createAsyncThunk("produits/deleteProduit", async (produitId, { rejectWithValue }) => {
    try {
        await axios.delete(`http://localhost:3000/produitsSucrees/${produitId}`);
        return produitId;
    } catch (error) {
        return rejectWithValue(error.response?.data || "Erreur lors de la suppression");
    }
});



const produitsSucreesSlice = createSlice({
    name: "produits",
    initialState,
    reducers: {
        unselectProduit: (state) => {
            state.selected = null;
        },
    },
    extraReducers: (builder) => {
        builder
            
            .addCase(fetchProduits.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProduits.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            .addCase(fetchProduits.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            
            .addCase(fetchProduitById.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProduitById.fulfilled, (state, action) => {
                state.loading = false;
                state.selected = action.payload || null;
            })
            .addCase(fetchProduitById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            
            .addCase(createProduit.pending, (state) => {
                state.loading = true;
            })
            .addCase(createProduit.fulfilled, (state, action) => {
                state.loading = false;
                state.list.push(action.payload);
            })
            .addCase(createProduit.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            
            .addCase(updateProduit.pending, (state) => {
                state.loading = true;
            })
            .addCase(updateProduit.fulfilled, (state, action) => {
                state.loading = false;
                state.list = state.list.map((produit) =>
                    produit.id === action.payload.id ? action.payload : produit
                );
            })
            .addCase(updateProduit.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            
            .addCase(deleteProduit.pending, (state) => {
                state.loading = true;
            })
            .addCase(deleteProduit.fulfilled, (state, action) => {
                state.loading = false;
                state.list = state.list.filter((produit) => produit.id !== action.payload);
            })
            .addCase(deleteProduit.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});


export const { unselectProduit } = produitsSucreesSlice.actions;
export default produitsSucreesSlice.reducer;
