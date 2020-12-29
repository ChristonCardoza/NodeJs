
import './App.css';
import ClassCounter from './components/state/ClassCounter';
import HookCounter from './components/state/HookCounter';
import HookCounterTwo from './components/state/HookCounterTwo';
import HookCounterThree from './components/state/HookCounterThree';
import HookCounterFour from './components/state/HookCounterFour';
import ClassCounterOne from './components/effect/ClassCounterOne';
import HookCounterOne from './components/effect/HookCounterOne';
import ClassMouse from './components/effect/ClassMouse';
import HookMouse from './components/effect/HookMouse';
import MouseContainer from './components/effect/MouseContainer';
import IntervalClassCounter from './components/effect/IntervalClassCounter';
import IntervalHookCounter from './components/effect/IntervalHookCounter';
import DatFetching from './components/effect/DatFetching';
import ComponentC from './components/context/ComponentC';
import CounterOne from './components/reducer/CounterOne';
import CounterTwo from './components/reducer/CounterTwo';
import CounterThree from './components/reducer/CounterThree';
import ComponentA from './components/reducer/ComponentA';
import ComponentB from './components/reducer/ComponentB';
import ComponentCC from './components/reducer/ComponentC';

// Context Related Imports
import React, {useReducer} from 'react'
import DataFetchingOne from './components/reducer/DataFetchingOne';
import DataFetchingTwo from './components/reducer/DataFetchingTwo';
import ParentComponent from './components/callback/ParentComponent';
import Counter from './components/memo/Counter';
import FocusInput from './components/ref/FocusInput';
import ClassTimer from './components/ref/ClassTimer';
import HookTimer from './components/ref/HookTimer';
import DocTitleOne from './components/customm/DocTitleOne';
import DocTitleTwo from './components/customm/DocTitleTwo';
import Counter1 from './components/customm/Counter1';
import Counter2 from './components/customm/Counter2';
import useCounter from './components/customm/hooks/useCounter';
import UserForm from './components/customm/UserForm';
export const UserContext = React.createContext()
export const ChannelContext = React.createContext()
export const CountContext = React.createContext()


const initialState = 0
const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function App() {

  const [count, dispatch] = useReducer(reducer, initialState)

  return (
   
    <div className="App">

    {/* useState Example  */}

          {/* <ClassCounter />
          <HookCounter />
          <HookCounterTwo />
          <HookCounterThree />
          <HookCounterFour /> */}

    
    {/* useEffect Example */}

          {/* <ClassCounterOne />
          <HookCounterOne /> */}

          {/* <ClassMouse />
          <HookMouse /> */}

          {/* <MouseContainer /> */}

          {/* <IntervalClassCounter />
          <IntervalHookCounter /> */}

          {/* <DatFetching /> */}


    {/* useContext Example */}

          {/* <UserContext.Provider value={'Christon Cardoza'}>
            <ChannelContext.Provider value={'Cardoza World'}>
              <ComponentC />
            </ChannelContext.Provider>
          </UserContext.Provider> */}


    {/* useReducer Example */}

          {/* <CounterOne /> */}
          {/* <CounterTwo /> */}
          {/* <CounterThree /> */}

          {/* <CountContext.Provider 
            value={{countState: count, countDispatch: dispatch}}
          >
            Count : {count}
            <ComponentA />
            <ComponentB />
            <ComponentCC />

            </CountContext.Provider> */}

          {/* <DataFetchingOne /> */}
          {/* <DataFetchingTwo /> */}


    {/* useCallback Example */}

            {/* <ParentComponent /> */}


    {/* useMemo Example */}
            
            {/* <Counter /> */}


    {/* useRef Example */}

            {/* <FocusInput /> */}

            {/* <ClassTimer />
            <HookTimer /> */}


    {/* customHooks */}

            {/* <DocTitleOne />
            <DocTitleTwo /> */}

            {/* <Counter1 />
            <Counter2 /> */}

            <UserForm />

      
      
    </div>
    
  );
}

export default App;
