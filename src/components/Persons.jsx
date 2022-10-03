import React, { useState } from "react";
import Person from "./Person";


const Persons = () => {
  const [persons, setPersons] = useState([
    {
      id: 1,
      name: "Laya Dueñas",
      role: "CEO",
      sector: "Business",
      img: "https://bootdey.com/img/Content/avatar/avatar1.png",
    },
    {
      id: 2,
      name: "Astryd Vallés",
      role: "CMO",
      sector: "Marketing",
      img: "https://bootdey.com/img/Content/avatar/avatar2.png",
    },
    {
      id: 3,
      name: "Shantell Meza",
      role: "CFO",
      sector: "Business",
      img: "https://bootdey.com/img/Content/avatar/avatar3.png",
    },

    {
        id: 4,
        name: "Sergio Ocampo",
        role: "CTO",
        sector: "Engineering",
        img: "https://bootdey.com/img/Content/avatar/avatar4.png",
      },

      {
        id: 5,
        name: "Ares Jiménez",
        role: "Art Director",
        sector: "Marketing",
        img: "https://bootdey.com/img/Content/avatar/avatar5.png",
      },

      {
        id: 6,
        name: "Marta Perez",
        role: "Frontend Dev",
        sector: "Engineering",
        img: "https://bootdey.com/img/Content/avatar/avatar6.png",
      },

      {
        id: 7,
        name: "Ellen Balderas",
        role: "Digital Strategist",
        sector: "Marketing",
        img: "https://bootdey.com/img/Content/avatar/avatar7.png",
      },
      {
        id: 8,
        name: "Cynthia Valentín",
        role: "Backend Dev",
        sector: "Engineering",
        img: "https://bootdey.com/img/Content/avatar/avatar8.png",
      },
      {
        id: 9,
        name: "Bernard Jung",
        role: "Devops Engineer",
        sector: "Engineering",
        img: "https://bootdey.com/img/Content/avatar/avatar1.png",
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