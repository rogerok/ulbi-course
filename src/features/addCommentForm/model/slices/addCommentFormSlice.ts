import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddCommentFormSchema } from "../types/addCommentForm";

const initialState: AddCommentFormSchema = {
  text: undefined,
  error: undefined,
};

export const addCommentSlice = createSlice({
  name: "addComment",
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder;
  //   .addCase(loginByUsername.pending, (state, action) => {
  //     state.error = undefined;
  //     state.isLoading = true;
  //   })
  //   .addCase(loginByUsername.fulfilled, (state, action) => {
  //     state.isLoading = false;
  //   })
  //   .addCase(loginByUsername.rejected, (state, action) => {
  //     state.error = action.payload;
  //     state.isLoading = false;
  //   });
  // },
});

export const { actions: addCommentActions } = addCommentSlice;
export const { reducer: addCommentReducer } = addCommentSlice;
