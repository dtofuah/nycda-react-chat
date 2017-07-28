const React = require("react");
const moment = require("moment");

class MessageForm extends React.Component {
	state = {
		messageText: "",
	};

	_handleChange = (ev) => {
		this.setState({ [ev.target.name]: ev.target.value });
	};

	_handleSubmit = (ev) => {
		ev.preventDefault();

		this.props.onSubmit({
			time: Date.now(),
			message: this.state.messageText,
		});

		this.setState({ messageText: "" });
	};

	render() {
		const { messageText } = this.state;

		return (
			<form className="MessageForm" onSubmit={this._handleSubmit}>
				<textarea
					name="messageText"
					className="MessageForm-message"
					onChange={this._handleChange}
					value={messageText}
				/>
				<button className="MessageForm-send"/>
			</form>
		);
	}
}

module.exports = MessageForm;
