import React from 'react';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchWord: ""
        }
    }

    render() {
        return (
            <React.Fragment>
                <form className="SearchForm">
                    <input type="search" name="search" placeholder="Enter Location" value={this.state.searchWord} />
                    <button className="SearchForm-button">Search</button>
                </form>
            </React.Fragment>
        );
    }
}

export default SearchForm;