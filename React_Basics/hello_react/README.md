# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Whay is React
 1. Open Source library for building user interfaces
 2. Not a framework
 3. Focus on UI
 4. Rich ecosystem

## Why learn React?
 1. Created and maintained by Facebook
 2. More than 1000k starts on Github
 3. Huge community
 4. In demand skillset

## React is declarative
 1. Tell React what you want and React will build the actual UI
 2. React will handle efficiently updating and rendering of the components
 3. DOM updates are handles gracefullu in React

## More on why React?
 1. Seamlessly integrated react into any of your applications
 2. Portion of uour page or a complete page or even an entire applocation itself
 3. Ract native for mobile applocations

## Create-react-app
 1. npx -
       1. npx create-react-app <project_name>
 2. npm -
       1. npm install create-react-app -g
       2. create-react-app <project_name>

## Component
 1. Compoments describe a part of the user interface
 2. they are re-usable and can be nested inside other componets
    1. Stateless Functional Components
    2. Statefull Class Copmponets

## Functional vs Class Component
| Functional  |      Class     | 
|----------|-------------|
| Simple Function |  More feature rich |
| use Func componets as much as possible | Maintian thier own private date - state|
| Absense of 'this' keyword |  Complex UI logic |
| Solution without using state|  Provide lifecycle Hook |
| Mainly responsible for the UI|  Statefull/Smart/Container|
| Staleless/Dumb/Presenational (Using Hook it can be statefull)|  |

## JSX
 1. JavaScript XML (JSX) - Extension to the Javascript language syntax
 2. write XML-like code for elements and components
 3. JSX tags have a tag name, attributes, and children
 4. JSX is not a necessity to write Ract application
 5. JSX makes your react code simpler and elegant
 6. JSX ultimately transpiles to pure JavaScript which is understood by the browser

## Props vs State
| Props  |      State    | 
|----------|-------------|
| props get passed to the component |  state is managed within the component |
| Functional parameter | Variable declared in the function body|
| props are immutable |  State can be changed |
| props - Functional component|  useStateHook - Functional component|
| this,props - Class component|  this.state = Class Component|

## setState
 1. always make use of setState and never modify the state directly
 2. Code has to be executed after the sttate has been updated ? Place that code in the call back function which is the second argument to the setState method
 3. when you have to update state based onthe revious state value, pass in a function as an argument instead of the regular object
   
## Conditional Rendering
 1. if/else
 2. Element variables
 3. Ternary Conditional opertor
 4. short cirtcuit operator

## Lists and Keys
 1. A 'Key' is a special string attribute you need to include when creating lists of elements
 2. Keys give the elements a stable identitu
 3. Keys help React identify which items have changed, are added, or are removed
 4. Help in efficient update of the user interface
 5. When to use index as a key?
    1. The items in your list do not have a unique id
    2. The list is a static list and will not change
    3. The list will never be reordered or filtered
   
## Styling React Components
 1. css stylesheet
 2. inline styling
 3. css modules
 4. css in JS libaries (Styled component)

## Lifecycle Methods
 1. Mounting : When an instance of a component is being created and inserted into the DOM
    1. Constructor :
       1. A special function that will get called whenever a new component is created
       2. Initializing state, Binding the event handlers
       3. Do not cause side effects Ex: HTTP requests
       4. super(props) Directly overwite this.state
    2. static getDerivedStateFromProps :
       1. When the state of the component depends on changes in props over time
       2. Set the state
       3. Do not cause side effects Wx: HTTP requests
    3. render :
       1. Only required method
       2. Read props and state and return JSX
       3. Do not change state or interxt with DOM or make ajax calls
       4. Children components lifecycle method are alse executed
    4. componetDidMount :
       1. invoked immediately after a component and all its children cnponents have been rendered to the DOM
       2. Cause side effexts Ex : Interact with DOM or perform any ajax calls to load data
 2. Updating : When a component is being re-rendered as a result of changes to either its props or state
    1. static getDerivedStateFromProps :
       1. Method is called every tike a component is re-rendered
       2. Set the state
       3. Do not cause side effects Wx: HTTP requests
    2. shouldComponentUpdate :
       1. Dictates if the component should re-render or not
       2. Performance optimization
       3. Do not cause side effects Ex : HTTP requests, calling the setState method
    3. render :
       1. Only required method
       2. Read props and state and return JSX
       3. Do not change state or interxt with DOM or make ajax calls
    4. getSnapshotBeforeUpdate :
        1. Called right before the changes from the virtual DOM are to be refected in the DOM
        2. Capture some information from the DOM
        3. Method will either return null or return a value. Returned value will be passed as the third parameter to the next method
    5. componentDidUpdate :
       1. Called after the render is finished in the re-render cycles
       2. Cause side effects
 3. Unmounting : When a component is being removed from the DOM
    1. componentWilUnmount ;
       1. Method is invoked immediately before a component is unmounted and destroyed
       2. Cancelling any network requests, removing event handlers, cancelling any suscriptions and also invalidating timers
       3. Do not call setState method
 4. Error Handling : When there is an error during rendering, in a lifecycle method, or in the constructor of any child component
    1.  static getDerivedStateFromError
    2.  componentDidCatch

## Regular vs Pure
| Regular  |      Pure   | 
|----------|-------------|
| A regular component does not implement the shouldComponentUpdate method. It always return true by default  |  A pure component on the other hand implements shouldComponentUpdate with a shallow props and state comparison   | 

## Error Bondary
 1. A class component that implements either one or both of the cycle methods getDerivedStateFromError or componentDidCatch becomes an error boundary
 2. The static method getDerivedStateFromError method is used to render a fallback UI after an error is thrown and the componentDidCatch method is used to log the error information
 3. Error boundaries are React component that catch JavaScript error in the child component tree, log those errors, and display a fall-back UI
 4. A class component becomes an Error Boundary by defining either or both of getDerivedStateFromError and componentDidCatch liecycle methods
 5. The placement of the Error Boundary also matters as it controls if the entire app should have the fall-back UI or just the component causing the problem
 6. Provide a way to gracefully handle error in application code

## Higher Order Component - HOC
A pattern where a function takes a component as an argument and returns a new component
```js 
   const Newcomponent = higherOrderComponent(originalComponent)
   const EnhancedComponent = higherOrderComponent(priginalComponent)

   const ironMan = withSuit(TonyStark)
```

## Render props
the term "render propp" refers to a technique for sharing code between React component using a prop whose value is a function

## Context 
Context provides a way to pass data through the component tree without having to pass props down manuallu at every level
   1. Create the context
   2. Provide a context value
   3. Consume the context value

