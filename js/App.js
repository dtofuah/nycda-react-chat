const React = require("react");

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<div className="Messages">
					<div className="Messages-message">
						<div className="Messages-message-time">1:37pm</div>
						<div className="Messages-message-text">Test message</div>
					</div>
				</div>
				<form className="MessageForm">
					<textarea resize={false} className="MessageForm-message"/>
					<button className="MessageForm-send"/>
				</form>
			</div>
		);
	}
}

module.exports = App;
