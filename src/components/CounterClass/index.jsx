import React, { Component } from "react";
import styles from "./style.module.css";

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count,
    };
  }

  handleAdd = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleRemove = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    return (
      <>
        <div className={styles["container"]}>
          <h1>Counter</h1>
          <h1 className={styles["count-container"]}>{this.state.count} </h1>
          <div className={styles["btns-container"]}>
            <button onClick={this.handleAdd}> + </button>
            <button onClick={this.handleRemove}> - </button>
          </div>
        </div>
      </>
    );
  }
}

export default CounterClass;
