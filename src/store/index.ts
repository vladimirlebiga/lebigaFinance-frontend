// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";

const store = configureStore({
  reducer: {
    // Add your reducers here
  },
});

// Type for RootState
export type RootState = ReturnType<typeof store.getState>;

// Type for Dispatch
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Typed Selector Hook
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
