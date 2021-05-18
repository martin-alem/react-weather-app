import React from 'react';
import "./Button.css";


class BookMarkButton extends React.Component {
    constructor(props) {
        super(props);

        this.handleShowModal = this.handleShowModal.bind(this);
    }

    handleShowModal() {
        this.props.showModal();
    }

    render() {
        return (
            <React.Fragment>
                <button onClick={this.handleShowModal} className="Button Button-round"><i className="fas fa-bookmark"></i></button>
            </React.Fragment>
        );
    }
}

export default BookMarkButton;