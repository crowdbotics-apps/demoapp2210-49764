import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_meal_list = createAsyncThunk(
  "meals/api_v1_meal_list",
  async payload => {
    const response = await apiService.api_v1_meal_list(payload)
    return response.data
  }
)
export const api_v1_meal_create = createAsyncThunk(
  "meals/api_v1_meal_create",
  async payload => {
    const response = await apiService.api_v1_meal_create(payload)
    return response.data
  }
)
export const api_v1_meal_retrieve = createAsyncThunk(
  "meals/api_v1_meal_retrieve",
  async payload => {
    const response = await apiService.api_v1_meal_retrieve(payload)
    return response.data
  }
)
export const api_v1_meal_update = createAsyncThunk(
  "meals/api_v1_meal_update",
  async payload => {
    const response = await apiService.api_v1_meal_update(payload)
    return response.data
  }
)
export const api_v1_meal_partial_update = createAsyncThunk(
  "meals/api_v1_meal_partial_update",
  async payload => {
    const response = await apiService.api_v1_meal_partial_update(payload)
    return response.data
  }
)
export const api_v1_meal_destroy = createAsyncThunk(
  "meals/api_v1_meal_destroy",
  async payload => {
    const response = await apiService.api_v1_meal_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const mealsSlice = createSlice({
  name: "meals",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_meal_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_meal_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_meal_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_meal_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_meal_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_meal_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_meal_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_meal_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_meal_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_meal_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_meal_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_meal_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_meal_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_meal_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_meal_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_meal_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_meal_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_meal_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_meal_list,
  api_v1_meal_create,
  api_v1_meal_retrieve,
  api_v1_meal_update,
  api_v1_meal_partial_update,
  api_v1_meal_destroy,
  slice: mealsSlice
}
