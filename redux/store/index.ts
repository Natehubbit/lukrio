import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers } from "redux";
import {
  useDispatch as useAppDispatch,
  useSelector as useAppSelector,
  TypedUseSelectorHook,
} from "react-redux";
import { slideSlice } from "../slices/slideSlice";
import { editorSlice } from "../slices/editorSlice";
import logger from "redux-logger";

const rootReducer = combineReducers({
  [slideSlice.name]: slideSlice.reducer,
  [editorSlice.name]: editorSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  // middleware: [logger],
});

export type AppState = ReturnType<typeof rootReducer>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch = () =>
  useAppDispatch<AppDispatch>();

export const useSelector: TypedUseSelectorHook<AppState> = useAppSelector;
