import React from 'react';
import { connect } from 'react-redux';
import { firstAction } from './store/actions'


function App(props) {

  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <p>React Middleware Thunk</p>
      <button onClick={() => props.firstAction('First Action from Button')}>Trigger an action</button>
      <h3> Text will change upon triggering an action </h3>
      <p>{props.data}</p>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}
export default connect(mapStateToProps, { firstAction })(App);
