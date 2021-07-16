# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

-Context API gives apps a way to have a global state, there for avoiding the need to prop drill while also avoiding the complication that redux can be.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

-Actions are messages sent to the reducer function; The action sent to the reducer is determined by UI interaction or initial rendering. Reducers are functions that receive actions which tell the reducer how to manipulate the current state. The store is what makes the global state available to all of the app.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

-Thunk allows us to have a more streamlined flow of processes by allowing us to combine functions with our dispatches. It also makes the app code cleaner.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

-By far, Context API. It felt like redux but much simpler.