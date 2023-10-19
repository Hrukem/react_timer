// import logo from './logo.svg';
// import './App.css';
import React from "react";

/* function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
} */
export default class App extends React.Component {
  state = {
    count: 0,
    isCounting: false,
    posts: [
      { id: `abc1`, name: `JS Basic` },
      { id: `abc2`, name: `JS Advanced` },
      { id: `abc3`, name: `React JS` },
    ],
  };

  increment = () => {
    this.setState({ count: this.state.count + 1 });
    localStorage.setItem(`countNow`, this.state.count + 1);
  };

  handleStart = () => {
    this.setState({ isCounting: true });
    this.idTimer = setInterval(this.increment, 1000);
  };

  handleStop = () => {
    this.setState({ isCounting: false });
    clearTimeout(this.idTimer);
  };

  handleReset = () => {
    this.setState({ isCounting: false, count: 0 });
    clearTimeout(this.idTimer);
    localStorage.setItem(`countNow`, 0);
  };

  componentDidMount() {
    const countStorage = +localStorage.getItem(`countNow`);
    if (countStorage) {
      this.setState({ count: countStorage });
    }
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    clearTimeout(this.idTimer);
  }

  render() {
    return (
      <div className="App">
        <h1>React Timer</h1>
        <h3>{this.state.count}</h3>
        {this.state.isCounting ? (
          <button onClick={this.handleStop}>Stop</button>
        ) : (
          <button onClick={this.handleStart}>Start</button>
        )}
        <button onClick={this.handleReset}>Reset</button>

        {this.state.posts.map((post) => (
          <h2 key={post.id}>{post.name}</h2>
        ))}
      </div>
    );
  }
}
