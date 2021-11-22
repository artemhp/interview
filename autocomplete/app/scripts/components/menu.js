/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 *
 */
import React from 'react';
import PropTypes from 'prop-types';

function debounce(func, wait) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func(...args)
        }, wait)
    }
}

class Menu extends React.Component {

    /**
     * Main constructor for the Menu Class
     * @memberof Menu
     */
    constructor(props) {
        super(props);
        this.state = {
            showingSearch: false
        };
        this.searchTextWithDebounce = debounce(this.searchTextWithDebounce.bind(this),1000);
    }

    /**
     * Shows or hides the search container
     * @memberof Menu
     * @param e [Object] - the event from a click handler
     */
    showSearchContainer(e) {
        e.preventDefault();
        this.props.onToggleSearch(!this.state.showingSearch);
        this.setState({
            showingSearch: !this.state.showingSearch
        });
    }

    /**
     * Function that will change search item with debounce
     * @memberof Menu
     * @param e [text] - search query
     */
    searchTextWithDebounce(text) {
        this.props.onSearchChange(text);
    }

    /**
     * Calls upon search change
     * @memberof Menu
     * @param e [Object] - the event from a text change handler
     */
    onSearch(e) {
        this.searchTextWithDebounce(e.target.value);
    }

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     *
     * @returns JSX
     * @memberof App
    */
    render() {
        return (
            <header className="menu">
                <div className="menu-container">
                    <div className="menu-holder">
                        <h1>ELC</h1>
                        <nav>
                            <a href="#" className="nav-item">HOLIDAY</a>
                            <a href="#" className="nav-item">WHAT'S NEW</a>
                            <a href="#" className="nav-item">PRODUCTS</a>
                            <a href="#" className="nav-item">BESTSELLERS</a>
                            <a href="#" className="nav-item">GOODBYES</a>
                            <a href="#" className="nav-item">STORES</a>
                            <a href="#" className="nav-item">INSPIRATION</a>

                            <a href="#" onClick={(e) => this.showSearchContainer(e)}>
                                <i className="material-icons search">search</i>
                            </a>
                        </nav>
                    </div>
                </div>
                <div className={(this.state.showingSearch ? "showing " : "") + "search-container"}>
                    <input type="text" onChange={(e) => this.onSearch(e)} />
                    <a href="#" onClick={(e) => {
                        this.showSearchContainer(e);
                    }}>
                        <i className="material-icons close">close</i>
                    </a>
                </div>
            </header>
        );
    }


}

Menu.propTypes = {
  onSearchChange: PropTypes.func,
  onToggleSearch: PropTypes.func
};

// Export out the React Component
module.exports = Menu;