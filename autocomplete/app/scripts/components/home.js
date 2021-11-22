/**
 * This file will hold the Main content that lives in the main body of the site
 *
 */
import React from 'react';
import PropTypes from 'prop-types';

import SearchResult from './search-result';

class Home extends React.Component {

    /**
     * Main constructor for the Home Class
     * @memberof Home
     */
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            isLoaded: true,
            items: []
        };
    }

    /**
     * Lifecycle method that invoked immediately after updating occurs.
     *
     * @memberof Home
     * @param prevProps [Object] - previous props
    */
    componentDidUpdate(prevProps) {
        if (this.props.search !== prevProps.search) {
            this.fetchData(this.props.search);
        }
    }

    /**
     * Method for fetching data from server by search query
     *
     * @memberof Home
     * @param query [String] - text for search
    */
    fetchData (query) {
        this.setState({isLoaded: false});
        fetch('http://localhost:3035/?q=' + query).then(res => res.json()).then(
            (result) => this.setState({ isLoaded: true, items: result }),
            (error) => {
                console.log(error);
                this.setState({ isLoaded: true, error: true })
            }
        );
    }


    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     *
     * @returns JSX
     * @memberof Home
    */
    render() {
        return (
            <section id="home">
                <div className="content">
                    {this.props.showSearch &&
                        <section className='search-result'>
                            <section className='search-result-wrapper'>
                                {this.state.error &&  <div className="search-result-error">Something went wrong.</div>}
                                {this.props.search &&  <SearchResult items={this.state.items} />}
                            </section>
                        </section>
                    }
                </div>
            </section>
        );
    }
}

Home.propTypes = {
  search: PropTypes.string,
  showSearch: PropTypes.bool
};

// Export out the React Component
module.exports = Home;