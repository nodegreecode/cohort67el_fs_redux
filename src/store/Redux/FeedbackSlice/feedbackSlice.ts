import { createAppSlice } from "store/createAppSlice";

type FeedbackInitialState = {
  like: number;
  dislike: number;
};

const initialState: FeedbackInitialState = { like: 0, dislike: 0 };

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
    reset() {
      return initialState;
    },
  },
  selectors: {
    like: (sliceState: FeedbackInitialState) => sliceState.like,
    dislike: (sliceState: FeedbackInitialState) => sliceState.dislike,
  },
});

export const feedbackSliceActions = feedbackSlice.actions;
export const feedbackSliceSelectors = feedbackSlice.selectors;
