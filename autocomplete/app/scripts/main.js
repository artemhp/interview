/**
 * The Initial React Setup file
 * ...
 *
 * === CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 *
 * == JS
 * All files in here start from this init point for the React Components.
 *
 *
 * Firstly we need to import the React JS Library
 */
import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/menu';
import Home from './components/home';


/**
 * We can start our initial App here in the main.js file
 */
class App extends React.Component {

    /**
     * Main constructor for the App Class
     * @memberof App
     */
    constructor(props) {
        super(props);
        this.state = {search: '', showSearch: false};
        // class-properties is not enabled in configuration
        // This binding is necessary to make `this` work in the callback
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onToggleSearch = this.onToggleSearch.bind(this);
    }

    /**
     * Callback from onSearchChange handler
     * @memberof App
     * @param search [String] - text value from onSearchChange handler
     */
    onSearchChange (search) {
        this.setState({search});
    }

    /**
     * Callback from onToggleSearch handler
     * @memberof App
     */
    onToggleSearch (value) {
        // onCloseClick
        this.setState({showSearch: value});
    }

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     *
     * @returns JSX
     * @memberof App
    */
    render() {
        return (
            <div className="App">
                <Menu onSearchChange={this.onSearchChange} onToggleSearch={this.onToggleSearch} />
                <Home search={this.state.search} showSearch={this.state.showSearch} />
            </div>
        );
    }

}

// Render this out
ReactDOM.render(<App />, document.getElementById('root'));
