var React = require("react");

var MyTitle = function(props) {
	return (
		<div>
			<h1 style={{ color: props.color }}>{props.title}</h1>
		</div>
	);
};

module.exports = MyTitle;
