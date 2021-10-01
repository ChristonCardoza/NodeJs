# NodeJs
NodeJs journey started...................!!!!!!!!!!!!


What is Node :

	1. Javascript Runtime (Not a language or framework)
	2. Built on v8 Javascript Engine (Same as in Google Chrome)
	3. Written in c++
	4. Essentially use to run Javascript code on server
	
Why is Node :

	1. Fast,Effiecent and Highly scaleble
	2. Event driven , Non-Blocking I/O model
	3. Popular in industry
	4. Same language on both front-end and back-end (Javascript)
	
Best types of project for Node:

	1. REST Api & Microservices
	2. Real Time Services (Chat , Live update)
	3. CRUD App - Blog, Shopping Cart, Social Networks
	
NPM - Node Package Manager:

	1. Install 3rd party packages (Frameworks, Libraries, Tools)
	2. Package get stored in "node_modules" folder
	3. All dependencies are listed on "package.json" file


	
## How Javascript Works:

1. Everything happens in JS is inside an Execution Context
2. It has 2 part Memory Component (Variable Env) and Code Component (Thread of Execution)
3. Execute one command at a time in a specific order ie synchrous single threaded language
4. Code Execution
   1. Global Execution context (Memory Creation Phase)
	```javascript
	var n=2
	```
	- create memory for n & store the vlaue UNDEFINE
	```javascript
	function square(n){ return n2}
	``` 
	- create a memory for a fuction and store the whole function logic
   2. Code Component (Code Execution Phase)
       - Here value 2 get assigned to n
       - When function invoke ie square(n) then new execution context created (local execution context)

## Common Terminologies:
 
 1. Annonymus Function:  
 	-  Function without a name, only used when we use it as value
 2. First Class Function:
 	- Ability to use function as value , which can be pass to another function or return from another function
 3. Functional Statement: 
 	```javascript
	 fucntion square(n) { reurn n2 }
	```
 4. Functional Expression: 
 	```javascript
	 const square = function(n) { reurn n2 }
	```
 5. Parameter & Arguement: 
 	```javascript
	 const square = function(n) { reurn n2 } --> n is paramere
	 square(2)  ---> 2 is arguement
	```
 6. Hoisting:
    	- Memory is allocated for all variable & finction even before execution
 7. Shortest Javascript:
 	- Empty '.js' file, it will create Global Execution Context, Create window object and 'this'.
 8. Global Scope:
        - anything which is not inside the function
 9. Temporal Deadzone:
 	- Time in which 'let' and 'const' hosted till it get some value
 10. Shadow:
        - Poiting same object in global scope
 11. Closure:
 	- Function is returned from another function they still maintain the lexical scope
 	- Function with it lexical scope bind togather forms the closures
 	- cons:
 	    i. Here Over consumption of memory take place. ie closure variavle are not garbade collected
	- pros:
	    i.   Module design pattern
	    ii.  Curring
	    iii. Data Hidding and Encapsulation
	    iv.  setTimeout -> works fine for let & const but for var always return latest value
	    v.   Iterator
 12. Event Loop:
  	- Callback queue:
  	    i.   When timmer expires, it will put that function into callback queue
	    ii.  Event loop scan the callback queue and put that function into the callstack when callstack is empty.
	    iii. For promise it will look for Microservice queue then go to callback queue
	- Starvation of Callback Queue:
	    Eventloop gives more priority to Microtask queue compare to Callback queue. When all the task from Microtask queue will done then it moves the callback queue to Call 
	    stack. The duration which callback que wait to execution the task is Starvation of Callback Queue
 13. Higher Order:
        - Function which takes function as input or return function from itself 
 14. Function Borrowing:
  	- Borrow the function from one object and use it with data of another Object
  	- Ex:
		```javascript

			 let name1 = {
				firstname: "Christon",
				lastname: "Cardoza",
				printFullname: () => console.log(this.firstname + this.lastname)
			 }
			 let name2 = {
				firstname: "Antony",
				lastname: "Cardoza"
			 }
			 name1.printFullname.call(name2);

		```
   - First argument will the reference objext Rest all are fuctional arguments
   - 'apply' similar to the 'call' bur functional argument will passed in array format
   - Here function execute immediately
   - 'bind' method same as call but it wont execute the function immediately ( it takes the copy of the method) 
   - Ex:
 	  ```javascript 
	   let printMyName = name1.printFullName.bind(name2, "Bhai");
	   printMyName();
	  ```  
 15. PollyFill:
 	- Browser fallback to run the function , that time wee nee to write our own function to stumulate that behavior
 	- Ex: PollyFill of bind
 	  ```javascript 
	   Function.prototype.myBind = function(...args){
	     let obj = this;
	     params = args.slice(1);
	     return function ( ...args2){
	     	obj.apply(args[0], [...params, ...args2]);
	     }
	   }
	  ``` 
 16. Currying:
   	- It achivied by 'bind' and 'closure'
   	- Creating more number of method from single method by pre-setting some argument
 	  ```javascript
	   let multiply = function(x){
	   return function(y) {
	     	console.log(y)
	     } 
	   }
	   let multiplyByTwo = multiply(2);
	   multiplyByTwo(3);
	  ```
	  
   or 
	
    ```javascript
     let multiply = function(x,y){
     	console.log(x*y);
     }
     let multiplyByTwo = multiply.bind(this,2); ---> here 'this' refer multiply function and '2' refer to the value of x
     multiplyByTwo(5); ---> here '5' refer value of y 
    ```
