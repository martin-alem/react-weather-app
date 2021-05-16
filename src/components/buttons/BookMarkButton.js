import React from 'react';
import "./Button.css";


class BookMarkButton extends React.Component {

    render() {
        return (
            <React.Fragment>
                <button className="Button Button-round"><i class="fas fa-bookmark"></i></button>
            </React.Fragment>
        );
    }
}

export default BookMarkButton;