import React from "react";

interface CounterState {
  value: number;
}

interface CounterProps {
  initialValue?: number;
}

class Counter extends React.Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      value: props.initialValue || 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      value: prevState.value + 1,
    }));
  };

  handleDecrement = () => {
    if (this.state.value > 0) {
      this.setState((prevState) => ({
        value: prevState.value - 1,
      }));
    }
  };

  render() {
    const counterStyles = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      margin: "20px",
      padding: "5px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      backgroundColor: "#424242",
      color: "#FFF",
    };

    const buttonContainerStyles = {
      display: "flex",
      justifyContent: "space-around",
      width: "100%",
    };

    const buttonStyles = {
      padding: "5px 10px",
      fontSize: "16px",
      margin: "5px",
      borderRadius: "4px",
      backgroundColor: "#F65261",
      color: "#FFF",
      textAlign: "center",
      fontFamily: "Montserrat",
      fontStyle: "normal",
      fontWeight: 500,
      lineHeight: "normal",
      textTransform: "uppercase",
      cursor: "pointer",
      flexShrink: 0
    };

    return React.createElement(
      "div",
      { style: counterStyles },
      React.createElement("p", null, `Value: ${this.state.value}`),
      React.createElement(
        "div",
        { style: buttonContainerStyles },
        React.createElement(
          "button",
          { style: buttonStyles, onClick: this.handleDecrement },
          "Decrement"
        ),
        React.createElement(
          "button",
          { style: buttonStyles, onClick: this.handleIncrement },
          "Increment"
        )
      )
    );
  }
}

export default Counter;
