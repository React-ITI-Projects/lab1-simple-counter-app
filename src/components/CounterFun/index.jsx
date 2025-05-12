import { useState } from "react";
import styles from "../CounterClass/style.module.css";
const CounterFun = (props) => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleRemove = () => {
    setCount(count - 1);
  };

  return (
    <>
      <div className={styles["container"]}>
        <h1>Counter</h1>
        <h1 className={styles["count-container"]}>{count}</h1>
        <div className={styles["btns-container"]}>
          <button onClick={handleAdd}> + </button>
          <button onClick={handleRemove}> - </button>
        </div>
      </div>
    </>
  );
};

export default CounterFun;
