import React, {Component} from 'react';

class List extends Component {
    constructor(props){
        super(props);
        this.state={done:false}
    }

    handleOnChange(){
        let done=!this.state.done;
        this.setState({done });
    }

    render(){
        return(
                <ul>
                    { 
                        this.props.source.map((item,index) => <li key={index}>
                            <input 
                            checked={this.state.done}
                            onChange={this.handleOnChange.bind(this)}
                            type="checkbox" style={{fontSize:'x-large'}}/>
                            {item} 
                            <a href="#" onClick={this.props.handleDelete.bind(null,item)}>
                                [X]
                                </a>
                            </li>)
                    }
                </ul>
            )
    }
}
export default List; 
