import Button from "components/Button/Button";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  couterSliceActions,
  counterSliceSelectors,
} from "store/Redux/CounterSlice/counterSlice.ts";
import "./styles.css";

function Counter() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(counterSliceSelectors.count);

  const onPlus = () => {
    const action = couterSliceActions.plus();
    dispatch(action);
  };
  const onMinus = () => {
    const action = couterSliceActions.minus();
    dispatch(action);
  };
  return (
    <div className="counter_wrapper">
      <div className="button_control">
        <Button name="-" onClick={onMinus} />
      </div>
      <p className="count">{count}</p>
      <div className="button_control">
        <Button name="+" onClick={onPlus} />
      </div>
    </div>
  );
}

export default Counter;
