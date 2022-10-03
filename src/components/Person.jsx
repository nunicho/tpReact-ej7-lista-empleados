import React from "react";

const Person = (props) => {
  return (
    <div className="col-lg-12">
      <div className="card-box">
        <div className="member-card pt-2 pb-2">
          <div className="thumb-lg member-thumb mx-auto">
            <img
              src={props.img}
              className="rounded-circle img-thumbnail"
              alt="empleado"
            />
          </div>
          <div className="">
            <h4>{props.name}</h4>
            <p className="text-muted">{props.role}</p>
           <p className="text-muted">{props.sector}</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;