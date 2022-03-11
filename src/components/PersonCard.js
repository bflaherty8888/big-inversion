import React from 'react';

const PersonCard = (props) => {
    return (
        <>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hair}</p>
        </>
    );
}

export default PersonCard;