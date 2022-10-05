import React from "react";
import '../App.css'

const Person = (props) => {
  return (
    <div className="col-lg-12">
      <div className="card-box">
        <div className="member-card pt-2 pb-2 row">
          <div className="thumb-lg member-thumb mx-auto col-12 col-md-4 col-lg-4">
            <img
              src={props.img}
              className="rounded-circle img-thumbnail w-75"
              alt="empleado"
            />
          </div>
          <div className="col-12 col-md-8 col-lg-4">
            <h4>{props.name}</h4>
            <p className="text-black">{props.role}</p>
           <p className="text-white badge bg-primary">{props.sector}</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;