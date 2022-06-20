import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Inventory as inventory} from './stores/Inventory';
import { Provider } from 'mobx-react';


const Inventory = new inventory()
const stores = {Inventory}

ReactDOM.render(
    <Provider {...stores}>
      <App />
    </Provider>,
    document.getElementById('root')
  );

reportWebVitals();
