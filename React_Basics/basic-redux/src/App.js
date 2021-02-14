import logo from './logo.svg';
import { Provider } from 'react-redux'
import './App.css';
import CakeContainer from './components/CakeContainer';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import MultipleCakeContainer from './components/MultipleCakeContainer';
import ItemContainer from './components/ItemContainer';
import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />

        <HooksCakeContainer />

        <MultipleCakeContainer />

        <IceCreamContainer />

        {/*  Passing Own Property */}
        <ItemContainer cake/>
        <ItemContainer />

        {/* Async Action */}
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
