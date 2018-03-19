var React = require("react");
var ReactDOM = require("react-dom");
var MyTitle = require("./MyTitle");

var MyFirstComponent = function(props) {
  return (
    <div id="my-first-component">
      <MyTitle title="Props are great!" color="rebeccapurple" />
      <MyTitle title="Use props everywhere!" color="mediumaquamarine" />
      <MyTitle title="Props are the best!" color="peru" />
    </div>
  );
};

ReactDOM.render(<MyFirstComponent />, document.getElementById("app"));
