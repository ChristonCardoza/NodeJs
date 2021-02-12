import logo from './logo.svg';
import { Provider } from 'react-redux'
import './App.css';
import CakeContainer from './components/CakeContainer';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import MultipleCakeContainer from './components/MultipleCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />

        <HooksCakeContainer />

        <MultipleCakeContainer />

        <IceCreamContainer />
      </div>
    </Provider>
  );
}

export default App;
