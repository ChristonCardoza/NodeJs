import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet'
import Welcome from './component/welcome'
import Hello from './component/Hello'
import Message from './component/message'
import ParentComponent from './component/ParentComponent'

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

      <ParentComponent />

    </div>
  );
}

export default App;
