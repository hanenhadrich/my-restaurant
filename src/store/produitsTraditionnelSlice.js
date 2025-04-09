import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const PRODUITS_LOCALLY = [
  { "id": 1, "name": "Pizza Gourmet", "price": 12, "sold": 5 },
  { "id": 2, "name": "Pâtes Truffées", "price": 15, "sold": 3 }
];

const initialState = {
  list: PRODUITS_LOCALLY,
  selected: null,
  loading: false,
  error: null,
};

export const fetchProduits = createAsyncThunk(
  "produits/fetchProduits",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:3000/platTraditionnel");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Erreur de récupération des produits");
    }
  }
);

export const fetchProduitById = createAsyncThunk("produits/fetchProduitById", async (produitId, { rejectWithValue }) => {
  try {
    const response = await axios.get(`http://localhost:3000/platTraditionnel/${produitId}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || "Produit non trouvé");
  }
});

export const createProduit = createAsyncThunk("produits/createProduit", async (newProduit, { rejectWithValue }) => {
  try {
    const response = await axios.post("http://localhost:3000/platTraditionnel", newProduit);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || "Erreur lors de la création");
  }
});

export const updateProduit = createAsyncThunk("produits/updateProduit", async ({ produitId, newData }, { rejectWithValue }) => {
  try {
    const response = await axios.patch(`http://localhost:3000/platTraditionnel/${produitId}`, newData);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || "Erreur lors de la mise à jour");
  }
});

export const deleteProduit = createAsyncThunk("produits/deleteProduit", async (produitId, { rejectWithValue }) => {
  try {
    await axios.delete(`http://localhost:3000/platTraditionnel/${produitId}`);
    return produitId;
  } catch (error) {
    return rejectWithValue(error.response?.data || "Erreur lors de la suppression");
  }
});

const produitsTraditionnelSlice = createSlice({
  name: "produitsTraditionnel",  
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
        state.list = [...state.list, action.payload];  
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

export const { unselectProduit } = produitsTraditionnelSlice.actions;
export default produitsTraditionnelSlice.reducer;
