import React from 'react'
import "./Message.css"

class Message extends React.Component {

    static defaultProps = {
        message: "No message"
    }
    render() {
        return (
            <React.Fragment>
                <div className="Message">
                    <span className="Message-title">{this.props.message}</span>
                </div>
            </React.Fragment>
        )
    }
}

export default Message;