import React from 'react';
import "./SearchForm.css";
import SearchButton from '../buttons/SearchButton';

class SearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchWord: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.state.searchWord !== "" && !(/\s+/g.test(this.state.searchWord))) {
            this.props.getWeatherDataOnSubmit(this.state.searchWord);
            this.setState({ searchWord: "" });
        }
    }

    handleChange(event) {
        this.setState({ searchWord: event.target.value })
    }
    render() {
        return (
            <React.Fragment>
                <form className="SearchForm" onSubmit={this.handleSubmit}>
                    <input type="search" className="SearchForm-input" name="search" placeholder="Enter City Name" value={this.state.searchWord} onChange={this.handleChange} />
                    <SearchButton />
                </form>
            </React.Fragment>
        );
    }
}

export default SearchForm;