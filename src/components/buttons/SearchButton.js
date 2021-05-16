import React from 'react';
import "./Button.css";


class SearchButton extends React.Component {

    render() {
        return (
            <React.Fragment>
                <button className="Button SearchButton">Search</button>
            </React.Fragment>
        );
    }
}

export default SearchButton;