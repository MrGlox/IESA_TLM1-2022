import React from "react";

class Clock extends React.Component {
  state = {
    date: new Date(),
  };

  componentDidMount() {
    this.tick = () => {
      this.setState({
        date: new Date(),
      });
    };

    setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.tick);
  }

  render() {
    return <h2>Mon heure est : {this.state.date.toLocaleTimeString()}</h2>;
  }
}

export default Clock;
