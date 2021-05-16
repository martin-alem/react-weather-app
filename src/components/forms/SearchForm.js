import React from 'react';
import "./SearchForm.css";

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
                    <input type="search" className="SearchForm-input" name="search" placeholder="Enter Location" value={this.state.searchWord} />
                </form>
            </React.Fragment>
        );
    }
}

export default SearchForm;