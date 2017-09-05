import React from 'react'
import PropTypes from 'proptypes'

const App = props => (
  <div className="App">
    <div className="App-header">
      <h2>Welcome to the world</h2>
    </div>
    <section className="App-body">
      {props.children}
    </section>
  </div>
)

App.prototype = {
  children: PropTypes.node
}

export default App
