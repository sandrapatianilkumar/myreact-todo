import React from 'react';
const List= props =>(
    <ul>
        { 
            props.source.map((item,index) => <li key={index}>
                {item} <a href="#" onClick={props.handleDelete.bind(null,item)}>
                    [X]
                    </a>
                </li>)
        }
    </ul>
)
export default List; 
