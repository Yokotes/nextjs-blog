import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: 'profileSlice',
  initialState: {
    profile: {
      currentUser: '',
    },
  },
  reducers: {
    setCurrentUser: (state, action) => {
      state.profile.currentUser = action.payload;
    }
  }
});

export default profileSlice.reducer;

export const {
  setCurrentUser
} = profileSlice.actions;