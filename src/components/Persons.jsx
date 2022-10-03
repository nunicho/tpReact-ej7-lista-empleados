import React, { useState } from "react";
import Person from "./Person";



const Persons = () => {
  const [persons, setPersons] = useState([
    {
      id: 1,
      name: "Walter White",
      role: "CEO",
      sector: "Business",
      img: "https://i.ibb.co/5RGLVpx/walter.jpg",
    },
    {
      id: 2,
      name: "Jesse Pinkman",
      role: "CMO",
      sector: "Marketing",
      img: "https://i.ibb.co/XpdRpcr/pinkman.jpg",
    },
    {
      id: 3,
      name: "Skyler White",
      role: "CFO",
      sector: "Business",
      img: "https://i.ibb.co/W5X7L9j/Skyler.jpg",
    },

    {
        id: 4,
        name: "Marie Schrader",
        role: "CTO",
        sector: "Engineering",
        img: "https://i.ibb.co/WKbWYJq/Marie.jpg",
      },

      {
        id: 5,
        name: "Hank Schrader",
        role: "Art Director",
        sector: "Marketing",
        img: "https://i.ibb.co/wcm7K3F/hank.jpg",
      },

      {
        id: 6,
        name: "Saul Goodman",
        role: "Frontend Dev",
        sector: "Engineering",
        img: "https://i.ibb.co/mqHrm8B/goodman.jpg",
      },

      {
        id: 7,
        name: "Mike Ehrmantraut",
        role: "Digital Strategist",
        sector: "Marketing",
        img: "https://i.ibb.co/LnQzdxG/mike.jpg",
      },
      {
        id: 8,
        name: "Gus Fring",
        role: "Backend Dev",
        sector: "Engineering",
        img: "https://i.ibb.co/XjtV5B5/gus.jpg",
      },
      {
        id: 9,
        name: "Tuco Salamanca",
        role: "Devops Engineer",
        sector: "Engineering",
        img: "https://i.ibb.co/6bKgdn2/tuco.jpg",
      },
  ]);

  return (
    <div className="row">
      {persons.map((person) => {
        return (
         <Person
            key={person.id}
            name={person.name}
            img={person.img}
            role={person.role}
            sector={person.sector}
          />
        );
      })}
    </div>
  );
};

export default Persons;