import React from 'react';

const MyFooter = props => (
    <div>
        <h4>FOOTER</h4>
        <h4>{props.email}</h4>
        <h4>{props.address}</h4>
    </div>
)


export default MyFooter;
