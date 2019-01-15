import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import GridTableStore from './GridTableStore';

class GridTable extends Component {  //eslint-disable-line
  constructor(props) {
    super(props);
    this.store = new GridTableStore(props);
  }
  componentDidMount() {
    if (__CLIENT__) this.store.addListener();
  }
  componentWillUnmount() {
    if (__CLIENT__) this.store.removeListener();
  }
  render() {
    const { children } = this.props;
    return (
      <Provider gridTableStore={this.store}>
        <div>
          {children}
        </div>
      </Provider>
    );
  }
}

export default GridTable;
