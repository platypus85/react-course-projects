class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state ={
            visible: false,
            appTitle: 'Visibility Toggle',
            appDetails: 'Show some details...'
        };
    }

    render(){
        return(
            <div>
                <h1>{this.state.appTitle}</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visible?'Hide details':'Show details'}
                </button>
                {this.state.visible && <p>{this.state.appDetails}</p>}
            </div>        
        )
    }

    handleToggleVisibility(){
        this.setState((prevState) =>{
            return {
                visible: !prevState.visible
            };
        });
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));