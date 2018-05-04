class IndecisionApp extends React.Component{
    render(){
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        const options = ['thing one', 'thing two', 'thing three'];

        return (
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action />
                <Options options={options}/>
                <AddOptions />
            </div>
        );
    }
}

class Header extends React.Component{
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component{
    render(){
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component{
    render(){
        const options = this.props.options;
        return (
            <div>
                {
                    options.map((option) => <Option key={option} option={option}/>)
                }
            </div>
        );
    }
}

class AddOptions extends React.Component{
    render(){
        return (
            <div>
                <p>AddOptions component here</p>
            </div>
        );
    }
}

class Option extends React.Component{
    render(){
        const option = this.props.option;
        return (
            <div>
                <p>{option}</p>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));