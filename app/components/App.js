import React, { Component } from 'react';
import List from './List';
class App extends Component {
    constructor(props){
        super(props);
        this.state={
            term:'',
            items:[]
        }
    }

    onChange(event) {
        this.setState({ term: event.target.value });
    }

    onSubmit(event){
     event.preventDefault();
     this.setState({
        term:'',
        items:[...this.state.items,this.state.term]
     });
    }

    handleDelete(itemToBeDeleted) {
        console.log(itemToBeDeleted);
        let filterItems = this.state.items.filter((item)=>{
                return item!=itemToBeDeleted;
            });
            this.setState({
                items:filterItems
            });
        }

    render() {
        return ( 
            <div>React Todo</div>,
            <div> 
                <form className="App" onSubmit={this.onSubmit.bind(this)}>
                    <input value={this.state.term} onChange={this.onChange.bind(this)}/>
                    <button>Submit</button>
                    </form>
                    <List handleDelete={this.handleDelete.bind(this)} source={this.state.items} />
            </div>
        )
    }
}

export default App;