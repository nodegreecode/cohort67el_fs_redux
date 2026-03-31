import { createAppSlice } from "store/createAppSlice";
import { type PayloadAction } from "@reduxjs/toolkit";

const counterInitialState = { count: 0 };

export const counterSlice = createAppSlice({
  name: "COUNTER",
  initialState: counterInitialState,
  reducers: {
    plus: sliceState => {
      sliceState.count += 1;
    },
    minus: sliceState => {
      sliceState.count -= 1;
    },
    multiply: (sliceState, action: PayloadAction<number>) => {
      sliceState.count *= action.payload;
    },
    divide: (sliceState, action: PayloadAction<number>) => {
      sliceState.count = Number((sliceState.count / action.payload).toFixed(2));
    },
  },
  selectors: {
    count: sliceState => sliceState.count,
  },
});

export const counterSliceActions = counterSlice.actions;

export const counterSliceSelectors = counterSlice.selectors;
