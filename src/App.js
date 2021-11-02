import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
}

function App() {
  const [user, setUser] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts/101')
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <code>{JSON.stringify(user, undefined, 2)}</code>{' '}
      </header>
    </div>
  );
}

export default App;
