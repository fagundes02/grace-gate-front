import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IUser } from "@/shared/types/user";

type AppStateT = {
  user: IUser | null;
  accessToken: string;
};

const initialState: AppStateT = {
  user: null,
  accessToken: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: () => initialState,
    setUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
    setAccessToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
    },
  },
});

export const { reset, setUser, setAccessToken } = authSlice.actions;

export const getUser = (state: RootState) => state.auth.user;

export const getAccessToken = (state: RootState) => state.auth.accessToken;

export default authSlice.reducer;
