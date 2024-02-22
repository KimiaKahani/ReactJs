import { createAction, createReducer } from "@reduxjs/toolkit";

export const loginUserAction = createAction("loginUserAction");

export const userReducer = createReducer({ isLogin: false, userTokens: {} }, (builder) => {
  builder.addCase(loginUserAction, (state, action) => {
    state.isLogin = true;
    state.userTokens = action.payload;
  });
});
