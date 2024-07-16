import './App.css';
import React from 'redux';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Counter } from './counter';
import { ChangeColor } from './changecolor';
store.subscribe(() => console.log(store.getState()));

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
        <ChangeColor/>
      </div>
    </Provider>
  );
}

export default App;

