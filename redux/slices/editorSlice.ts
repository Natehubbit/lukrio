import {
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { EditorState, SlideData } from "../../types";

const initialState: EditorState = {
  slideId: undefined,
  textId: undefined,
  style: undefined,
};

export const { actions, ...editorSlice } = createSlice({
  name: "editor",
  initialState,
  reducers: {
    setActiveSlide(
      state,
      { payload }: PayloadAction<{ id: number }>
    ) {
      const { id } = payload;
      return { ...state, slideId: id };
    },
    setActiveText(
      state,
      { payload }: PayloadAction<{ id: number }>
    ) {
      const { id } = payload;
      return { ...state, textId: id };
    },
    clearActiveText(state) {
      return { ...state, textId: undefined };
    },
    clearSlideId(state) {
      return { ...state, slideId: undefined };
    },
    clearAll() {
      return initialState;
    },
  },
});

export const editorActions = {
  ...actions,
};
