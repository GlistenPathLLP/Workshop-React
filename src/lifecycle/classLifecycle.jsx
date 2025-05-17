import React, { Component } from 'react';

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('1. constructor');
  }
  static getDerivedStateFromProps(props, state) {
    console.log('2. getDerivedStateFromProps');
    return null; // no state change
  }
  componentDidMount() {
    console.log('4. componentDidMount');
  }
  shouldComponentUpdate() {
    console.log('5. shouldComponentUpdate');
    return true; // allow re-render
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('6. getSnapshotBeforeUpdate');
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('7. componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('8. componentWillUnmount');
  }
  increase = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    console.log('3. render');
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increase}>Increase</button>
      </div>
    );
  }
}

export default LifecycleDemo
