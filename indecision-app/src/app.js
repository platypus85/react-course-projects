console.log('App.js is running');

// JSX - JavaScript XML

var article = {
		title: 'Indecision App',
		subTitle: 'Put your life in the hands of a computer'
}

var template = (
		<div>
				<h1>{article.title}</h1>
				<p>{article.subTitle}</p>
				<ol>
						<li>Item One</li>
						<li>Item Two</li>
				</ol>
		</div>
);
var user = {
		name: 'Alberto',
		age: 33,
		location: 'Sydney'
}
var userName = 'Alberto';
var userAge = 33;
var userLocation = 'Sydney';
var templateTwo = (
		<div>
				<h1>Name: {user.name}</h1>
				<p>Age: {user.age}</p>
				<p>Location: {user.location}</p>
		</div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot)