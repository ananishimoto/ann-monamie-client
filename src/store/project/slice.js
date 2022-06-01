import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  byStatus: null,
  suggestions: [],
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    fetchAllProjects: (state, action) => {
      state.byStatus = action.payload;
    },
  },
});

export const { fetchAllProjects } = projectSlice.actions;

export default projectSlice.reducer;
