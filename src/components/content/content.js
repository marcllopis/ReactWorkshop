import React from 'react';

let people = [
    {
        name: "Marc",
        city: "Barcelona",
        address: "Clot",
        pet: {
            type: "dog",
            name: "Luke",
            age: 3
        }
    },
    {
        name: "Mireia",
        city: "Sabadell",
        address: "la Rambla",
    },
    {
        name: "Sandra",
        city: "Moldova",
        address: "center",
    }
]


const MyContent = () => (
    people.map((person, i) => (
        <div key={i}>
            <h2>My name is {person.name}</h2>
            <h2>I live in {person.city}</h2>
            {
                person.address === "Clot"
                    ? <h2>I live in Clot</h2>
                    : <h2>I wish I live in clot</h2>
            }
            {
                person.pet &&
                <p>I have a {person.pet.type} named {person.pet.name}</p>
            }
        </div>
    ))
);

export default MyContent;