const obj = {
    name: 'John',
    getName(){
        return this.name;
    }
};

const getName = obj.getName.bind({name: 'Joe'});

console.log(getName());

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

    handlePick(){
        alert('handlePick');
    }

    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component{

    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll(){
        //alert('handleRemoveAll');
        console.log(this.props.options);
    }

    render(){
        const options = this.props.options;
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                    options.map((option) => <Option key={option} option={option}/>)
                }
            </div>
        );
    }
}

class AddOptions extends React.Component{

    handleAddOption(e){
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        if (option) {
            alert(option);
        }
    };

    render(){
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input tyep="text" name="option"/>
                    <button>Add Option</button>
                </form>
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