import React from 'react';
import { Provider } from 'react-redux';
import HomePage from './components/HomePage'
import configureStore from './store';

const store = configureStore();

function App() {
  return (
    //calling main home page 
    <Provider store={store}> 
      <HomePage />
    </Provider>
  );
}

export default App;
