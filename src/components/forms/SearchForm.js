import React from 'react';
import "./SearchForm.css";
import SearchButton from '../buttons/SearchButton';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchWord: ""
        }
    }

    handleChange(event) {
        this.setState({ searchWord: event.target.value })
    }
    render() {
        return (
            <React.Fragment>
                <form className="SearchForm">
                    <input type="search" className="SearchForm-input" name="search" placeholder="Enter Location" value={this.state.searchWord} onChange={this.handleChange} />
                    <SearchButton />
                </form>
            </React.Fragment>
        );
    }
}

export default SearchForm;