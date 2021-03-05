import logo from './logo.svg';
import './App.css';
import { Divider } from 'antd';
import 'antd/dist/antd.css'
import UseState from './components/UseState/UseState';
import UseReducer from './components/UseReducer/UseReducer';
import ObjectUseState from './components/ImmutableState/ObjectUseState';
import { ArrayUseState } from './components/ImmutableState/ArrayUseState';
import { Parent } from './components/ParentChild/Parent';
import ParentOne from './components/Optimization/ParentOne';
import ChildOne from './components/Optimization/ChildOne';
import GrandParent from './components/Optimization/GrandParent';
import ParentTwo from './components/UseMemo/ParentTwo';
import ContestParent from './components/Context/ContestParent'

function App() {
  return (
    <div className="App">

      <Divider orientation="left"> Use State</Divider>
      <UseState />

      <Divider orientation="left"> Use Reducer</Divider>
      <UseReducer />

      <Divider orientation="left"> Object State Change</Divider>
      <ObjectUseState />
      <ArrayUseState />

      <Divider orientation="left"> Parent - Child</Divider>
      <Parent />

      <Divider orientation="left"> Optimization </Divider>
      {/* <ParentOne /> */}
      {/* <ParentOne><ChildOne /></ParentOne> */}
      <GrandParent />

      <Divider orientation="left"> Memo </Divider>
      <ParentTwo />

      <Divider orientation="left"> Context </Divider>
      <ContestParent />

    </div>
  );
}

export default App;
