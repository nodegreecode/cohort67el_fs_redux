import Button from "components/Button/Button";

import "./styles.css";

import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  feedbackSliceActions,
  feedbackSliceSelectors,
} from "../../store/Redux/FeedbackSlice/feedbackSlice.ts";

function Feedback() {
  const like = useAppSelector(feedbackSliceSelectors.like);
  const dislike = useAppSelector(feedbackSliceSelectors.dislike);
  const dispatch = useAppDispatch();

  const onLike = () => {
    const action = feedbackSliceActions.onLike();
    dispatch(action);
  };

  const onDislike = () => {
    const action = feedbackSliceActions.onDislike();
    dispatch(action);
  };

  const resetResults = () => {
    const action = feedbackSliceActions.resetResults();
    dispatch(action);
  };

  return (
    <div className="feedback-wrapper">
      <div className="feedback-control">
        <div className="buttonwithcount-container">
          <Button name="Like" onClick={onLike} />
          <p className="count">{like}</p>
        </div>
        <div className="buttonwithcount-container">
          <Button name="Dislike" onClick={onDislike} />
          <p className="count">{dislike}</p>
        </div>
      </div>
      <Button name="Reset Results" onClick={resetResults} />
    </div>
  );
}

export default Feedback;
