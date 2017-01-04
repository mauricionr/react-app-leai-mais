"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require('react');
var LeiaMais = (function (_super) {
    __extends(LeiaMais, _super);
    function LeiaMais(props) {
        _super.call(this, props);
        this.state = {
            'displayText': '',
            'en-US': 'Read the publications from our professionals of the practice area: {area}',
            'pt-BR': 'Veja as publicações produzidas por nossos profissionais da área de {area}',
        };
    }
    LeiaMais.prototype.setText = function () {
        this.lang = document.querySelector('html').attributes.getNamedItem('lang').value;
        var hash = decodeURIComponent(window.location.hash).slice(1).split(':');
        this.hashvalue = hash[1] || '';
    };
    LeiaMais.prototype.componentWillMount = function () {
        this.setText();
    };
    LeiaMais.prototype.render = function () {
        return (React.createElement("div", {id: "leia-mais"}, React.createElement("p", null, this.state[this.lang].replace('{area}', this.hashvalue).replace(/\*/gi, ''))));
    };
    return LeiaMais;
}(React.Component));
exports.LeiaMais = LeiaMais;

//# sourceMappingURL=LeiaMais.js.map
