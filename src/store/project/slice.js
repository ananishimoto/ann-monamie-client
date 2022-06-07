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
  },
});

export const { fetchAllProjects, fetchDetails, deleteProject } =
  projectSlice.actions;

export default projectSlice.reducer;
