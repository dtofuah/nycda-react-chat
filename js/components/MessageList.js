const React = require("react");
const moment = require("moment");

class MessageList extends React.Component {
	render() {
		const { messages } = this.props;

		return (
			<div className="Messages">
				{messages.map((msg) => {
					return (
						<div className="Messages-message">
							<div className="Messages-message-time">
								{moment(msg.time).format("LT")}
							</div>
							<div className="Messages-message-text">
								{msg.message}
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}

module.exports = MessageList;
