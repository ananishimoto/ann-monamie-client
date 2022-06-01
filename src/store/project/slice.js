import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  projectInfo: [],
};

export const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    fetchAllProjects: (state, action) => {
      state.projectInfo = action.payload;
    },
  },
});

export const { fetchAllProjects } = projectSlice.actions;

export default projectSlice.reducer;
