import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_exercise_list = createAsyncThunk(
  "exercises/api_v1_exercise_list",
  async payload => {
    const response = await apiService.api_v1_exercise_list(payload)
    return response.data
  }
)
export const api_v1_exercise_create = createAsyncThunk(
  "exercises/api_v1_exercise_create",
  async payload => {
    const response = await apiService.api_v1_exercise_create(payload)
    return response.data
  }
)
export const api_v1_exercise_retrieve = createAsyncThunk(
  "exercises/api_v1_exercise_retrieve",
  async payload => {
    const response = await apiService.api_v1_exercise_retrieve(payload)
    return response.data
  }
)
export const api_v1_exercise_update = createAsyncThunk(
  "exercises/api_v1_exercise_update",
  async payload => {
    const response = await apiService.api_v1_exercise_update(payload)
    return response.data
  }
)
export const api_v1_exercise_partial_update = createAsyncThunk(
  "exercises/api_v1_exercise_partial_update",
  async payload => {
    const response = await apiService.api_v1_exercise_partial_update(payload)
    return response.data
  }
)
export const api_v1_exercise_destroy = createAsyncThunk(
  "exercises/api_v1_exercise_destroy",
  async payload => {
    const response = await apiService.api_v1_exercise_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const exercisesSlice = createSlice({
  name: "exercises",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_exercise_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_exercise_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_exercise_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_exercise_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_exercise_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_exercise_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_exercise_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_exercise_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_exercise_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_exercise_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_exercise_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_exercise_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_exercise_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_exercise_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_exercise_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_exercise_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_exercise_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_exercise_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_exercise_list,
  api_v1_exercise_create,
  api_v1_exercise_retrieve,
  api_v1_exercise_update,
  api_v1_exercise_partial_update,
  api_v1_exercise_destroy,
  slice: exercisesSlice
}
