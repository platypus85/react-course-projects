const appRoot = document.getElementById('app');

const numbers = [55,101,1000];

const app = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        app
            .options
            .push(option);
        e.target.elements.option.value = '';
    }
    render();
};

const removeAll = (e) => {
    app.options = [];
    render();
};

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subTitle}</p>}
            {app.options && app.options.length > 0
                ? <p>Here are your options</p>
                : 'No options'}
            <p>{app.options.length}</p>
            <button onClick={removeAll}>Remove All</button>
            <ol>
            {
                app.options.map((option) =>{
                    return <li key={option}>{option}</li>;
                })
             }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input tyep="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}
render();