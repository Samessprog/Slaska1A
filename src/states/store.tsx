import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./counterSlice";
import navbarSlice from "./navbarSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    navbarStates: navbarSlice,
  },
});

// Define the RootState type
export type RootState = ReturnType<typeof store.getState>;

export default store;
