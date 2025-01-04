import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NavbarInterface {
  isOpen: boolean;
  selectedLanguage: string;
  isOpenHamburger: boolean;
  isClicked: boolean;
}

const initialState: NavbarInterface = {
  isOpen: false,
  selectedLanguage: "Pol",
  isOpenHamburger: false,
  isClicked: false,
};

const navbarSlice = createSlice({
  name: "NavbarStates",
  initialState,
  reducers: {
    setIsOpen: (state, actions: PayloadAction<boolean>) => {
      state.isOpen = actions.payload;
    },
    setSelectedLanguage: (state, actions: PayloadAction<string>) => {
      state.selectedLanguage = actions.payload;
    },
    setIsOpenHamburger: (state, actions: PayloadAction<boolean>) => {
      state.isOpenHamburger = actions.payload;
    },
    setIsClicked: (state, actions: PayloadAction<boolean>) => {
      state.isClicked = actions.payload;
    },
  },
});

export const {
  setIsOpen,
  setSelectedLanguage,
  setIsOpenHamburger,
  setIsClicked,
} = navbarSlice.actions;
export default navbarSlice.reducer;
