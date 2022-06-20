import { observer } from 'mobx-react-lite';
import './App.css';
import Market from './components/Market';

function App() {
  return (  
      <Market />   
  )
}

export default observer(App)