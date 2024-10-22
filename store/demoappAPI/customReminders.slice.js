import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_customreminder_list = createAsyncThunk(
  "customReminders/api_v1_customreminder_list",
  async payload => {
    const response = await apiService.api_v1_customreminder_list(payload)
    return response.data
  }
)
export const api_v1_customreminder_create = createAsyncThunk(
  "customReminders/api_v1_customreminder_create",
  async payload => {
    const response = await apiService.api_v1_customreminder_create(payload)
    return response.data
  }
)
export const api_v1_customreminder_retrieve = createAsyncThunk(
  "customReminders/api_v1_customreminder_retrieve",
  async payload => {
    const response = await apiService.api_v1_customreminder_retrieve(payload)
    return response.data
  }
)
export const api_v1_customreminder_update = createAsyncThunk(
  "customReminders/api_v1_customreminder_update",
  async payload => {
    const response = await apiService.api_v1_customreminder_update(payload)
    return response.data
  }
)
export const api_v1_customreminder_partial_update = createAsyncThunk(
  "customReminders/api_v1_customreminder_partial_update",
  async payload => {
    const response = await apiService.api_v1_customreminder_partial_update(
      payload
    )
    return response.data
  }
)
export const api_v1_customreminder_destroy = createAsyncThunk(
  "customReminders/api_v1_customreminder_destroy",
  async payload => {
    const response = await apiService.api_v1_customreminder_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const customRemindersSlice = createSlice({
  name: "customReminders",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_customreminder_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_customreminder_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_customreminder_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_customreminder_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_customreminder_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_customreminder_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_customreminder_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_customreminder_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_customreminder_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_customreminder_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_customreminder_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_customreminder_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(
        api_v1_customreminder_partial_update.pending,
        (state, action) => {
          if (state.api.loading === "idle") {
            state.api.loading = "pending"
          }
        }
      )
      .addCase(
        api_v1_customreminder_partial_update.fulfilled,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.entities = state.entities.map(record =>
              record.id === action.payload.id ? action.payload : record
            )
            state.api.loading = "idle"
          }
        }
      )
      .addCase(
        api_v1_customreminder_partial_update.rejected,
        (state, action) => {
          if (state.api.loading === "pending") {
            state.api.error = action.error
            state.api.loading = "idle"
          }
        }
      )
      .addCase(api_v1_customreminder_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_customreminder_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_customreminder_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_customreminder_list,
  api_v1_customreminder_create,
  api_v1_customreminder_retrieve,
  api_v1_customreminder_update,
  api_v1_customreminder_partial_update,
  api_v1_customreminder_destroy,
  slice: customRemindersSlice
}
