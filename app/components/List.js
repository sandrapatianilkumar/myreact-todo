import React from 'react';
const List= ({source}) =>(
    <ul>
        {
            source.map((item,index) => <li key={index}>{item}</li>)
        }
    </ul>
)
export default List;
