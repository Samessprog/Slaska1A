import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userData {
  name: string;
  sureName: string;
}

const initialState: userData = {
  name: "",
  sureName: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setUserSureName: (state, action: PayloadAction<string>) => {
      state.sureName = action.payload;
    },
  },
});

export const { setUserName, setUserSureName } = userSlice.actions;

export default userSlice.reducer;
