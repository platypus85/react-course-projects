console.log('App.js is running');

// JSX - JavaScript XML

var article = {
		title: 'Indecision App',
		subTitle: 'Put your life in the hands of a computer',
		options: ['One', 'Two']
}

var template = (
		<div>
				<h1>{article.title}</h1>
				{getSubtitle(article.subTitle)}
				{article.options && article.options.length > 0
						? <p>Here are your options:</p>
						: 'No options'}
				<ol>
						<li>Item One</li>
						<li>Item Two</li>
				</ol>
		</div>
);

function getSubtitle(subtitle) {
		if (subtitle) {
				return <p>{subtitle}</p>;
		}
}

var user = {
		name: 'Alberto',
		age: 33,
		location: 'Sydney'
}

function getLocation(location) {
		if (location) {
				return <p>Location: {location}</p>;
		}
}

var templateTwo = (
		<div>
				<h1>Name: {user.name
								? user.name
								: 'Anonymous'}</h1>
				{user.age && user.age >= 18 && <p>Age: {user.age}</p>}
				{getLocation(user.location)}
		</div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot)