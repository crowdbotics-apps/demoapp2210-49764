import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_leaderboard_list = createAsyncThunk(
  "leaderboards/api_v1_leaderboard_list",
  async payload => {
    const response = await apiService.api_v1_leaderboard_list(payload)
    return response.data
  }
)
export const api_v1_leaderboard_create = createAsyncThunk(
  "leaderboards/api_v1_leaderboard_create",
  async payload => {
    const response = await apiService.api_v1_leaderboard_create(payload)
    return response.data
  }
)
export const api_v1_leaderboard_retrieve = createAsyncThunk(
  "leaderboards/api_v1_leaderboard_retrieve",
  async payload => {
    const response = await apiService.api_v1_leaderboard_retrieve(payload)
    return response.data
  }
)
export const api_v1_leaderboard_update = createAsyncThunk(
  "leaderboards/api_v1_leaderboard_update",
  async payload => {
    const response = await apiService.api_v1_leaderboard_update(payload)
    return response.data
  }
)
export const api_v1_leaderboard_partial_update = createAsyncThunk(
  "leaderboards/api_v1_leaderboard_partial_update",
  async payload => {
    const response = await apiService.api_v1_leaderboard_partial_update(payload)
    return response.data
  }
)
export const api_v1_leaderboard_destroy = createAsyncThunk(
  "leaderboards/api_v1_leaderboard_destroy",
  async payload => {
    const response = await apiService.api_v1_leaderboard_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const leaderboardsSlice = createSlice({
  name: "leaderboards",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_leaderboard_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_leaderboard_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_leaderboard_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_leaderboard_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_leaderboard_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_leaderboard_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_leaderboard_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_leaderboard_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_leaderboard_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_leaderboard_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_leaderboard_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_leaderboard_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_leaderboard_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_leaderboard_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_leaderboard_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_leaderboard_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_leaderboard_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_leaderboard_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_leaderboard_list,
  api_v1_leaderboard_create,
  api_v1_leaderboard_retrieve,
  api_v1_leaderboard_update,
  api_v1_leaderboard_partial_update,
  api_v1_leaderboard_destroy,
  slice: leaderboardsSlice
}
