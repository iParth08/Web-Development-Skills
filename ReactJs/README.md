b# REACT JS 

## Contents

- [Contents](#contents)
- [Key-Points](#key-points)
- [Essentials Of React](#essentials-of-react)
  - [Class Component](#class-component)
  - [Functional Component](#functional-component)
  - [export \& import](#export--import)
  - [Principles of Components : Data - flow](#principles-of-components--data---flow)
    - [**props** :](#props-)
    - [**state** :](#state-)
  - [Events in React](#events-in-react)
  - [Hooks](#hooks)
    - [useState](#usestate)
    - [useReducer](#usereducer)
  - [Context API](#context-api)
  - [Links and Routes](#links-and-routes)


## Key-Points
- Introduced and managed by **Facebook** and Opensource community.
- Fast, Reliable and Reusable, Better UI Structure
- **Single Page Application**
- React maintains and update a *Virtual DOM* then update the necessary part of *Real DOM*.
- ReactJs is a **component-based** front-end library. 
- *JSX* is used to describe what the User Interface should look like.
  > class ---> className \
  > for ---> htmlFor
  > 
- JSX expressions should be properly terminated.
- Babel compiles down JSX expression to `React.createElement()` calls.
## Essentials Of React
An entire application is a collection of components.  
Components - Stand alone units UI  
Virtual DOM - Components are managed and rendered in virtual DOM
Real DOM is updated only when needed and only the part required.

### Class Component
> Not in trend

```JSX

class Welcome extends React.Component {
    render(){
        return  <h1>Hello</h1>
    };
};
```

### Functional Component
> Learn Well, Most useful

- A function component name must be *Capitalize* to differentiate it from html elements.

```JSX
    {/*A Functional Component*/}
    function Heading(props){
         let author = "Shwet Prakash";

         return (
            <h1>{author} is the author of this DOC.< /h1>
            <p>Book : {props.book}</p>
         );
    };

    {/*Rending the Component in main App*/}
    function App(){
        return (
            <Heading book="React for Dummy" />
        );
    }

    export default App;
    
```

### export & import
- `export` - makes components available and ready to be imported elsewhere
  - *export default* - when function is same as module name
  - *named export* - when function is different from module name

```JSX
    {/*Default Export*/}
    export default App;

    {/*Named Export*/}
    export {Heading};
```

- `import` - import a component from one module to another

```JSX
    import ComponentName from 'path/filename'
``` 

### Principles of Components : Data - flow

#### **props** :  
   is an object like parameters to functional components 
   - Pass data between components
   - Arguments are passed like HTML attributes 
   - Parent nodes can send data to children not reverse.
   - Child can only read and render data, not modify it.

> **DATA** outside the component (just rented), not mutable by the component 

```JS
//think props like JS OBJECT
        props = {
            attribute : value,
            title : "Hero Page",
            clients : 67,
            ....
        }
```

#### **state** :  
   is properties maintained inside the component.
   - This data can be modified by using *hooks*
   - Re-render upon modification

> **DATA** inside the component (its own property), mutable by the component

### Events in React
- React has JSX event-handlers that differs only in naming convention, *uses camelCasing*, from html event handlers.
- In React event-action functions are given to the events as *values* of event-handler

```JSX
    function Button(){
        const changeBackground(){
            ....
        }
        
        return (
            <button onClick={changeBackground}>
                Change Bg
            </button>
        );
    }

```
> Since, React permits unidirectional data flow only (From Parent to Child), simple manipulation of variables by events will not effect the render.

### Hooks
Functions that let to hook into React state and lifecycle features from components

#### useState

1. importing useState is required to use its functionality

```JSX
{/*Step 1 : import*/}
    import React, {useState} from 'react' 
```
2. useState uses destructuring syntax.
   - It should be declared on the top of component
   - It creates a state and a function to set the state.
   - It can track any type of data. 
```JSX
{/*Step 2 : declaration and initilization*/}
    const [state, setStateFunc] = useState(initial state);
```
3. call setFunction, upon any event
   - can set state directly by calling set function
```JSX
{/*Step 3 : Call setStateFunc wherever needed*/}
    function handleEvent(){
        setStateFunc(state_value);
    }

```

> [!WARNING]  
> **Sibling-Sibling Data Transfer** 
> - No need for Prop drilling
>   :: all shared data in the parent  then passed into child
>- No need for lifing State up 
>   :: return to parent then sibling 

#### useReducer
In addition with managing state values, it also provides with
- a `reducer` function that can modify the *state value* w.r.t some *action.type* 
- provided by `dispatch` method which accepts a object literal with a single property.

1. importing useReducer from React
   
   ```JSX
        import {useReducer} from 'react'
   ```
2. Defining the `reducer` function on the top before component
   
   ```JSX
        const reducer = (state, action) => {
            if(action.type === "ride") return {money : state.money + 30};

            if(action.type === "fuel") return {money : state.money - 50};

            return new Error();
        }
   ```
3. Define a initialState object in Component
   
   ```JSX
        const initState = {money : 100};
        const [state, action] = useReducer(reducer, initState);
   ```
   
4. Call `dispatch` method within an event
   
   ```JSX

        <button onClick={()=> dispatch({type : "fuel"})}> Re-fueling </button>
        <button onClick={()=> dispatch({type : "ride"})}> A customer </button>
   ```
### Context API
**Teleporting from Context to destination**

- **Context Provider** : Components that store the state
  
- **Context Consumer** : Components that will use the state
  
### Links and Routes


        

