"use strict";
var ReactDOM = require('react-dom');
var LeiaMais_1 = require('./components/LeiaMais/LeiaMais');
var webparts = document.getElementsByClassName('webpart-script-example');
for (var i = 0; i < webparts.length; i++) {
    var description = webparts[i].getAttribute('data-description').toString();
    ReactDOM.render(React.createElement(LeiaMais_1.LeiaMais, {description: description}), webparts[i]);
}

//# sourceMappingURL=index.js.map
