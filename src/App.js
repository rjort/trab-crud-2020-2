import React from 'react';
import './App.css';
// import api from './api.js'

import UsersTable from './Components/Table/UsersTable.js'

function App() {
  // state = {
  //   users: []
  // }
  return (
    <div className="App">
      <UsersTable/>
    </div>
  );
}

export default App;
