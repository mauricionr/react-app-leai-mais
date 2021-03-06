"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var Hello = (function (_super) {
    __extends(Hello, _super);
    function Hello(props) {
        _super.call(this, props);
        this.state = {
            'displayText': '',
            'en-US': 'Read the publications from our professionals of the practice area: {area}',
            'pt-BR': 'Veja as publicações produzidas por nossos profissionais da área de {area}',
        };
    }
    Hello.prototype.setText = function () {
        this.lang = document.querySelector('html').attributes.getNamedItem('lang').value;
        var hash = decodeURIComponent(window.location.hash).slice(1).split(':');
        this.hashvalue = hash[1] || '';
    };
    Hello.prototype.componentWillMount = function () {
        this.setText();
    };
    Hello.prototype.render = function () {
        return (React.createElement("div", {id: "leia-mais"}, React.createElement("p", null, this.state[this.lang].replace('{area}', this.hashvalue).replace(/\*/gi, ''))));
    };
    return Hello;
}(React.Component));
exports.Hello = Hello;

//# sourceMappingURL=HelloWorld.js.map
