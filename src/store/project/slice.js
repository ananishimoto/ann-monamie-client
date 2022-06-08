import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  byStatus: null,
  details: null,
  suggestions: [],
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    fetchAllProjects: (state, action) => {
      state.byStatus = action.payload;
    },
    fetchDetails: (state, action) => {
      state.details = action.payload;
    },
    deleteProject: (state, action) => {
      state.details = null;
    },
    getInspirationProjects: (state, action) => {
      state.suggestions = action.payload;
    },
  },
});

export const {
  fetchAllProjects,
  fetchDetails,
  deleteProject,
  getInspirationProjects,
} = projectSlice.actions;

export default projectSlice.reducer;
