import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet'
import Welcome from './component/welcome'
import Hello from './component/Hello'
import Message from './component/message'
import ParentComponent from './component/ParentComponent'
import UserGreeting from './component/UserGreeting'
import NameList from './component/NameList'
import Stylesheet from './component/Stylesheet'
import Form from './component/Form'
import LifecycleA from './component/LifecycleA'
import FragmentDemo from './component/FragmentDemo'
import ParentComp from './component/ParentComp'
import RefsDemo from './component/RefsDemo'
import FocusInput from './component/FocusInput'
import FRParentInput from './component/FRParentInput'
import PortalDemo from './component/PortalDemo'
import Hero from './component/Hero'
import ErrorBoundry from './component/ErrorBoundary'
import ErrorBoundary from './component/ErrorBoundary';
import ClickCounter from './component/ClickCounter'
import HoverCounter from './component/HoverCounter'
import Counter from './component/Counter'
import ClickCounterTwo from './component/ClickCounterTwo';
import HoverCounterTwo from './component/HoverCounterTwo';
import { UserProvider } from './component/userContext';
import ComponentC from './component/ComponentC';


function App() {
  return (
    <div className="App">

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Hello React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* <Greet /> */}

      {/* <Welcome /> */}

      {/* <Hello /> */}

      {/* <Greet name ='Bruce'  heroName= 'Batman'>
        <p> This is the Children Props</p>
      </Greet>

      <Greet name ='Clark' heroName= 'Superman'> 
        <button>Action</button>
      </Greet>

      <Greet name ='Diana' heroName= 'Wonderwoman'>

      </Greet>

      <Welcome name ='Bruce'  heroName= 'Batman'></Welcome>
      <Welcome name ='Clark' heroName= 'Superman'></Welcome>
      <Welcome ame ='Diana' heroName= 'Wonderwoman'></Welcome> */}  

      {/* <Message value ='1' /> */}

      {/* <ParentComponent /> */}
      
      {/* <UserGreeting /> */}

      {/* <NameList /> */}

      {/* <Stylesheet primary={true} /> */}

      {/* <Form /> */}

      {/* <LifecycleA /> */}

      {/* <FragmentDemo /> */}

      {/* <ParentComp /> */}

      {/* <RefsDemo /> */}

      {/* <FocusInput /> */}

      {/* <FRParentInput /> */}

      {/* <PortalDemo />   */}

      {/* <ErrorBoundary>
        <Hero heroName= "Batman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName= "superman" />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName= "Joker" />
      </ErrorBoundary> */}

      {/* <ClickCounter />
      <HoverCounter /> */}

      {/* <Counter render={(count , incrementCount) => (
        <ClickCounterTwo count={count} incrementCount={incrementCount} />
      )} />

      <Counter render={(count , incrementCount) => (
        <HoverCounterTwo count={count} incrementCount={incrementCount} />
      )} /> */}

      {/* <UserProvider value="Christon Cardoza">
        <ComponentC />
      </UserProvider> */}

    </div>
  );
}

export default App;
