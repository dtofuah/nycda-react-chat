const React = require("react");
const moment = require("moment");

const MessageList = require("./components/MessageList");
const MessageForm = require("./components/MessageForm");

class App extends React.Component {
	state = {
		messages: [{
			time: Date.now(),
			message: "Go ahead and submit your own message below",
		}],
	};

	_handleSubmit = (message) => {
		const newMessages = [
			...this.state.messages,
			message,
		];
		this.setState({ messages: newMessages });
	};

	render() {
		const { messages } = this.state;

		return (
			<div className="App">
				<MessageList messages={messages} />
				<MessageForm onSubmit={this._handleSubmit} />
			</div>
		);
	}
}

module.exports = App;
