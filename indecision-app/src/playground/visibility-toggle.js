const appRoot = document.getElementById('app');

const app = {
    title: 'Visibility Toggle',
    details: 'Show some details...',
    visible: false
}

const onToggleVisibility = () => {
    app.visible = !app.visible
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={onToggleVisibility}>{app.visible?'Hide details':'Show details'}</button>
            {app.visible && <p>{app.details}</p>}
        </div>
    );
    ReactDOM.render(template, appRoot);
}

render();