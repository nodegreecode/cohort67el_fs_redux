import { createAppSlice } from "store/createAppSlice";

const initialState = { like: 0, dislike: 0 };

export const feedbackSlice = createAppSlice({
  name: "FEEDBACK",
  initialState: initialState,
  reducers: {
    onLike(sliceState) {
      sliceState.like += 1;
    },
    onDislike(sliceState) {
      sliceState.dislike += 1;
    },
    resetResults(sliceState) {
      sliceState.like = 0;
      sliceState.dislike = 0;
    },
  },
  selectors: {
    like: sliceState => sliceState.like,
    dislike: sliceState => sliceState.dislike,
  },
});

export const feedbackSliceActions = feedbackSlice.actions;
export const feedbackSliceSelectors = feedbackSlice.selectors;
