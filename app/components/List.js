import React, {Component} from 'react';
import ListItem from './ListItem';

class List extends Component {
    
    render(){
        return(
                <ul>
                    { 
                        this.props.source.map((item,index) =>{
                            return <ListItem
                             key={item}
                             handleDelete={this.props.handleDelete.bind(null,item)}
                             item={item} index={index} />
                        } )
                    }
                </ul>
                
            )
    }
}
export default List; 
