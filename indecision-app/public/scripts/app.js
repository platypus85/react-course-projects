'use strict';

console.log('App.js is running');

// JSX - JavaScript XML

var article = {
		title: 'Indecision App',
		subTitle: 'Put your life in the hands of a computer',
		options: ['One', 'Two']
};

var template = React.createElement(
		'div',
		null,
		React.createElement(
				'h1',
				null,
				article.title
		),
		getSubtitle(article.subTitle),
		article.options && article.options.length > 0 ? React.createElement(
				'p',
				null,
				'Here are your options:'
		) : 'No options',
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

function getSubtitle(subtitle) {
		if (subtitle) {
				return React.createElement(
						'p',
						null,
						subtitle
				);
		}
}

var user = {
		name: 'Alberto',
		age: 33,
		location: 'Sydney'
};

function getLocation(location) {
		if (location) {
				return React.createElement(
						'p',
						null,
						'Location: ',
						location
				);
		}
}

var templateTwo = React.createElement(
		'div',
		null,
		React.createElement(
				'h1',
				null,
				'Name: ',
				user.name ? user.name : 'Anonymous'
		),
		user.age && user.age >= 18 && React.createElement(
				'p',
				null,
				'Age: ',
				user.age
		),
		getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
