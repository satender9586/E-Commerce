import { createSlice } from "@reduxjs/toolkit";

const UserProfileDataSlice = createSlice({
  name: "userProfileData",
  initialState: [],
  reducers: {
    addUserProfiledata: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addUserProfiledata } = UserProfileDataSlice.actions;
export default UserProfileDataSlice.reducer;
