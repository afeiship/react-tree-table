import ReactTreeTable from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

const items = require('./assets/data/columns.json');

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <ReactTreeTable items={items} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
