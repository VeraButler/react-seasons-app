import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
    // equivalent to constructor(super){...}
    state = { lat: null, errorMessage: '' };

    componentDidMount() {
        // Geolocation; best practice within componentDidMount 
        window.navigator.geolocation.getCurrentPosition(
            position =>  this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );

    }

    // used if there is styling or wrappers needed for return of if/then/else statements
    renderContent = () => {
        if (this.state.lat !== null && this.state.errorMessage === '') {
            return <SeasonDisplay lat={this.state.lat} />;
        } else if (this.state.lat === null && this.state.errorMessage !== '') {
            return <div>Error: {this.state.errorMessage}</div>
        } else {
            return (
                // loading animation
                <Spinner message='Please allow location to see magic...' />
            );
        }
    }
    render() {
        return (
            < div className="border-red"> {this.renderContent()}</div>
        );

    }   
}
ReactDOM.render(<App />, document.querySelector('#root')
);
