1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

.map(), .filter(), .reduce(),

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are like tickets of what you want to order, 
reducers are like a waitress taking your order and going to the chef to prepare it,
the store is all of the ingredients the shef has. 

The store is know as the 'single source of truth' because it's where all state is managed. 

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is the sate in your redux store that any component can use, 
Component state is state only local to one component. Application state is good for state that is going to be shared between multiple components. Component state is good for when a component is only going to do a singular action and doesn't need to be shared with another component 

1.  What is middleware?

Middleware are 3rd party functions that provides that ability to do something after an action is dispatched but before it reaches the reducer. 

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk allows us to perform async opperations within our action-creators. 

1.  Which `react-redux` method links up our `components` with our `redux store`?

CONNECT!