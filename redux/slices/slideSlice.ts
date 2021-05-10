import {
  createAction,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { SlideState, TextValue } from "../../types";
import _ from "lodash";
import { TextStyle } from "react-native";
import { COLORS } from "../../common/theme";
import UtilService from "../../services/UtilService";
import { SlideData } from "../../types/index";

interface PayloadData {
  slideId: number;
  textId: number;
  text: string;
}

const initialState: SlideState = {
  past: [],
  future: [],
  current: [
    {
      id: 0,
      title: "Fundamental Analysis",
      header: { text: "", style: undefined, type: "text" },
      subTexts: [],
      background: {
        image: undefined,
        mono: undefined,
        colors: {
          gradient: [
            COLORS.color1.val,
            UtilService.alterColor(
              COLORS.color1.val,
              COLORS.color1.step
            ),
          ],
        },
      },
    },
    {
      id: 1,
      title: "Technical Analysis",
      header: { text: "", style: undefined, type: "text" },
      subTexts: [],
      background: {
        image: undefined,
        mono: undefined,
        colors: {
          gradient: [
            COLORS.color1.val,
            UtilService.alterColor(
              COLORS.color1.val,
              COLORS.color1.step
            ),
          ],
        },
      },
    },
  ],
};

export const { actions, ...slideSlice } = createSlice({
  name: "slides",
  initialState,
  reducers: {
    setHeader(
      state,
      { payload }: PayloadAction<TextValue>
    ) {
      const { id, text } = payload;
      const update = state.current.map((d) => {
        if (d.id === id) {
          return { ...d, header: { text } };
        }
        return d;
      });
      const future =
        state.future.length > 0 ? [] : state.future;
      return {
        ...state,
        current: update,
        future,
        past: [...state.past, state.current],
      };
    },
    addSubText(
      state,
      { payload }: PayloadAction<TextValue>
    ) {
      const { id, text } = payload;
      const update = state.current.map((d) => {
        if (d.id === id) {
          return {
            ...d,
            subTexts: [
              ...d.subTexts,
              {
                text,
                bullet: false,
                style: undefined,
                type: "text",
              },
            ],
          };
        }
        return d;
      });
      const future =
        state.future.length > 0 ? [] : state.future;
      return {
        ...state,
        current: update,
        past: [...state.past, state.current],
        future,
      };
    },
    addSubImage(
      state,
      { payload }: PayloadAction<TextValue>
    ) {
      const { id, text } = payload;
      const update = state.current.map((d) => {
        if (d.id === id) {
          return {
            ...d,
            subTexts: [
              ...d.subTexts,
              {
                text,
                bullet: false,
                style: undefined,
                type: "image",
              },
            ],
          };
        }
        return d;
      });
      const future =
        state.future.length > 0 ? [] : state.future;
      return {
        ...state,
        current: update,
        past: [...state.past, state.current],
        future,
      };
    },
    removeSubtext(
      state,
      {
        payload,
      }: PayloadAction<{ slideId: number; idx: number }>
    ) {
      const { slideId, idx } = payload;
      const update = state.current.map((d) => {
        if (d.id === slideId) {
          const newSubTxts = d.subTexts.filter(
            (_, i) => i !== idx
          );
          return { ...d, subTexts: newSubTxts };
        }
        return d;
      });
      const future =
        state.future.length > 0 ? [] : state.future;
      return {
        ...state,
        current: update,
        past: [...state.past, state.current],
        future,
      };
    },
    updateSubtext(
      state,
      { payload }: PayloadAction<PayloadData>
    ) {
      const { slideId, textId, text } = payload;
      const update = state.current.map((d) => {
        if (d.id === slideId) {
          const newSubs = d.subTexts.map((txt, i) => {
            if (textId === i) {
              return { ...txt, bullet: false, text };
            }
            return txt;
          });
          return { ...d, subTexts: newSubs };
        }
        return d;
      });
      const future =
        state.future.length > 0 ? [] : state.future;

      return {
        ...state,
        current: update,
        past: [...state.past, state.current],
        future,
      };
    },
    undo(state) {
      const { past, current } = state;
      if (past.length === 0) return state;
      const prev = past[past.length - 1];
      const newPast = past.slice(0, past.length - 1);
      return {
        ...state,
        current: prev,
        past: newPast,
        future: [current, ...state.future],
      };
    },
    redo(state) {
      const { future, past, current } = state;
      if (future.length === 0) return state;
      const next = future[0];
      const newFuture = future.slice(1);
      return {
        ...state,
        past: [...past, current],
        current: next,
        future: newFuture,
      };
    },
    setSubtextStyle(
      state,
      { payload }: PayloadAction<TextStylePayload>
    ) {
      const { slideId, idx, style } = payload;
      const update = state.current.map((s) => {
        if (s.id === slideId) {
          const newSubTexts = s.subTexts.map((sub, i) => {
            if (i === idx) {
              const hasStyle = !!sub.style;
              return hasStyle
                ? {
                    ...sub,
                    style: { ...sub.style, ...style },
                  }
                : {
                    ...sub,
                    style,
                  };
            }
            return sub;
          });
          return { ...s, subTexts: newSubTexts };
        }
        return s;
      });
      const future =
        state.future.length > 0 ? [] : state.future;
      return {
        ...state,
        current: update,
        past: [...state.past, state.current],
        future,
      };
    },
    setSubTextBullet(
      state,
      { payload }: PayloadAction<BulletPayload>
    ) {
      const { slideId, idx, bullet } = payload;
      const update = state.current.map((s) => {
        if (s.id === slideId) {
          const newSubTexts = s.subTexts.map((sub, i) => {
            if (i === idx) {
              return { ...sub, bullet };
            }
            return sub;
          });
          return { ...s, subTexts: newSubTexts };
        }
        return s;
      });
      const future =
        state.future.length > 0 ? [] : state.future;
      return {
        ...state,
        current: update,
        past: [...state.past, state.current],
        future,
      };
    },
    setBackground(
      state,
      { payload }: PayloadAction<SlideStylePayload>
    ) {
      const { background: back, slideId } = payload;
      const update = state.current.map((s) => {
        if (s.id === slideId) {
          return {
            ...s,
            background: { ...s.background, ...back },
          };
        }
        return s;
      });
      const future =
        state.future.length > 0 ? [] : state.future;
      return {
        ...state,
        current: update,
        past: [...state.past, state.current],
        future,
      };
    },
  },
});

export const slideActions = {
  ...actions,
};

interface TextStylePayload {
  slideId: number;
  idx: number;
  style: TextStyle;
}

interface BulletPayload {
  slideId: number;
  idx: number;
  bullet: boolean;
}

interface SlideStylePayload {
  slideId: number;
  background: Partial<SlideData["background"]>;
}
