'use strict';

console.log('App.js is running');

// JSX - JavaScript XML

var article = {
		title: 'Indecision App',
		subTitle: 'Put your life in the hands of a computer'
};

var template = React.createElement(
		'div',
		null,
		React.createElement(
				'h1',
				null,
				article.title
		),
		React.createElement(
				'p',
				null,
				article.subTitle
		),
		React.createElement(
				'ol',
				null,
				React.createElement(
						'li',
						null,
						'Item One'
				),
				React.createElement(
						'li',
						null,
						'Item Two'
				)
		)
);
var user = {
		name: 'Alberto',
		age: 33,
		location: 'Sydney'
};
var userName = 'Alberto';
var userAge = 33;
var userLocation = 'Sydney';
var templateTwo = React.createElement(
		'div',
		null,
		React.createElement(
				'h1',
				null,
				'Name: ',
				user.name
		),
		React.createElement(
				'p',
				null,
				'Age: ',
				user.age
		),
		React.createElement(
				'p',
				null,
				'Location: ',
				user.location
		)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
