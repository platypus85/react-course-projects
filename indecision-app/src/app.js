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

let count = 0;
const addOne = () => {
    console.log('addOne');
}
const minusOne = () => {
    console.log('minusOne');
}
const reset = () => {
    console.log('reset');
}
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset</button>
    </div>
);
console.log(templateTwo);
const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);