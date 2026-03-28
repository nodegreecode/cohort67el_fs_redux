import { createAppSlice } from "store/createAppSlice";

const counterInitialState = { count: 0 };

export const counterSlice = createAppSlice({
  name: "COUNTER",
  initialState: counterInitialState,
  reducers: {
    plus: sliceState => {sliceState.count += 1},
    minus: sliceState => {sliceState.count -= 1},
  },
  selectors: {
    count: sliceState => sliceState.count,
  },
});

export const couterSliceActions = counterSlice.actions;

export const counterSliceSelectors = counterSlice.selectors;
