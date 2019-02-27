# Seasons App
Simple app that utilizes geolocation and the current month to inform you what season it is.

# Skill Learned
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
- Contructor
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
This project is part of Stephen Grider's Modern React and Redux Udemy Course. <br>
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
