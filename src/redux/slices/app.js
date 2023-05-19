import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";

const initialState = {
  sidebar: {
    open: false,
    type: "CONTACT", // "Contact", "Starred", "Shared "
  },
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSideBar: (state, action) => void (state.sidebar.open = !state.sidebar.open),
    updateSideBarType: (state, action) => void (state.sidebar.type = action.payload.type),
  },
});

export default appSlice.reducer;

export function ToggleSideBar() {
  return async () => {
    dispatch(appSlice.actions.toggleSideBar());
  };
}

export function UpdateSideBarType(type) {
  return async () => {
    dispatch(
      appSlice.actions.updateSideBarType({
        type,
      })
    );
  };
}
