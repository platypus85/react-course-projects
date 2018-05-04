'use strict';

var appRoot = document.getElementById('app');

var app = {
    title: 'Visibility Toggle',
    details: 'Show some details...',
    visible: false
};

var onToggleVisibility = function onToggleVisibility() {
    app.visible = !app.visible;
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'button',
            { onClick: onToggleVisibility },
            app.visible ? 'Hide details' : 'Show details'
        ),
        app.visible && React.createElement(
            'p',
            null,
            app.details
        )
    );
    ReactDOM.render(template, appRoot);
};

render();
