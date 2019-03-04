import React, { Component } from 'react';

import { css } from '@emotion/core'

const styles = {
  mediaQuery: css`
    @media only screen {
      background-color: red;
    }
  `
}

const MyComponent = ({ className }) => {
  return <div className={className} css={css({ color: 'white', fontSize: '2em', fontWeight: 'bold' })}>Hello</div>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyComponent css={styles.mediaQuery}/>
      </div>
    );
  }
}

export default App;
