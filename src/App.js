import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import styled from '@emotion/styled/macro'
import css from '@emotion/core/macro'

const styles = {
  notApplied: css({ backgroundColor: 'red' })
}

const MyComponent = ({ className }) => {
  return <div className={className} css={css({ color: 'white', fontSize: '2em', fontWeight: 'bold' })}>Hello</div>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyComponent css={styles.notApplied}/>
      </div>
    );
  }
}

export default App;
