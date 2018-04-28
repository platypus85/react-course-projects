console.log('App.js is running');

// JSX - JavaScript XML

const app = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {getSubtitle(app.subTitle)}
        {app.options && app.options.length > 0
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

const user = {
    name: 'Alberto',
    age: 33,
    location: 'Sydney'
}

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

const templateTwo = (
    <div>
        <h1>Name: {user.name
                ? user.name
                : 'Anonymous'}</h1>
        {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot)