import Button from "components/Button/Button";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  counterSliceActions,
  counterSliceSelectors,
} from "store/Redux/CounterSlice/counterSlice.ts";
import "./styles.css";

function Counter() {
  const dispatch = useAppDispatch();
  const count = useAppSelector(counterSliceSelectors.count);

  const onPlus = () => {
    const action = counterSliceActions.plus();
    dispatch(action);
  };
  const onMinus = () => {
    const action = counterSliceActions.minus();
    dispatch(action);
  };

  const onDivide = () => {
    dispatch(counterSliceActions.divide(2));
  };

  const onMultiply = () => {
    dispatch(counterSliceActions.multiply(3));
  };

  return (
    <section className="PageWrapper">
      <div className="counter_wrapper">
        <div className="button_control">
          <Button name="/" onClick={onDivide} />
        </div>
        <div className="button_control">
          <Button name="-" onClick={onMinus} />
        </div>
        <p className="count">{count}</p>
        <div className="button_control">
          <Button name="+" onClick={onPlus} />
        </div>
        <div className="button_control">
          <Button name="*" onClick={onMultiply} />
        </div>
      </div>
    </section>
  );
}

export default Counter;
