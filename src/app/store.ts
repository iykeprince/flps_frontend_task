import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import templateSliceReducer from "./features/template/templateSlice";

export const store = configureStore({
  reducer: {
    template: templateSliceReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
