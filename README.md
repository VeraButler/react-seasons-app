# Seasons App
Simple app that utilizes geolocation and the current month to inform you what season it is.

# To use
- git clone
- npm install
- npm start

# Skills Learned
- **Geolocation**
    - Resetting Geolocation Preferences
- **Console Tools**
    - Sensors
- **Rules of Class Based Components**
    - Must be a Javascript Class
    - Must *extend (subclass)* React.Component
    - Must define a 'render' method that returns some amount of JSX
- **Rules of the State System**
    - Only usable with class components
      - Techinically can be used with functional components using 'hooks' system
    - props and state are easily confused
    - 'State' - a JS object that contains data relevant to a component
    - Updating 'state' on a component causes the component to (almost) instantly rerender
    - State must be intialized when a component is created
    - State can only be updated uing the funciton 'setState'
- Constructor
    - Called fisrt when Component is run
    - essentially over rides the React.Component defaults
    ```
    constructor(props) {
        super(props);

        this.state ={
            key: value,
            key: value
           };
        // This can be avoided with arrow functions
        this.handleChange = this.handleChange.bind(this);
        }
    ```
    - **SHORTHAND** of above statement
    ```
       state = { key: value, key: value};
    ```
- React App Lifecycle
    - JS file loaded by browser
    - Instance of App component is created
    - App components 'contructor' function gets called
    - State Object is created and assigned to the `this.state` property
    - call Geolocation
    - React calls `<App />`'s render method
    - `<App />` returns JSX, gets rerendered --> HTML
    - Get geolocation result
    - update state object with call to `this.setState`
    - React sees updated state of component 
    - React calls `render` method a second time
    - Render method returns some (updated) JSX
    - React takes that JSX and updates content on the screen
- Component Lifecycle Methods
    - Constrcutor
        - Good place to do one time setup
    - render 
        - Avoid doing anything besides JSX
    - content visible on screen --> **componentDidMount**
        - place to do data-loading
    - Sit and wait for update --> **componentDidUpdate** --> 
        - place to do more data-loading when *state/props change*
    - Sit and wait until component is no longer shown --> **componentWillUnmount** 
        - do cleanup here (especially for non-React stuff) 


<br><br>
This project is part of Stephen Grider's Modern React and Redux Udemy Course. <br><br>
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
