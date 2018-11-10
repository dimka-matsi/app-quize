import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout'

class App extends Component {

  render() {

    return (
      <Layout>
        <div style={{border: '1px solid #ccc', width: '500px'}}>
          <h1>Hello World</h1>
        </div>
      </Layout>
     );
  }
}

export default App;
