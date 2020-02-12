import React from "react";

function Result({ result, search }) {
  const fullname = result.first_name + result.last_name;
  const parts = fullname.split(new RegExp(`(${search})`, "gi"));

  return (
    <div className="Result">
      <div>
        <div className="Result-Name">
          {parts.map((part, i) => {
            return part.toLowerCase() === search.toLowerCase() ? (
              <b key={i}>{part}</b>
            ) : (
              <span key={i}>{part}</span>
            );
          })}
        </div>
        <div className="Result-Email">{result.contact_email}</div>
        <div className="Result-Meta">
          <span>Age: {result.age}</span>
          <span>Rate: {result.min_rate}</span>
        </div>
        <div className="Result-Skills">
          {result.verified_skills.map(skill => {
            return <span key={skill}>{skill}</span>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Result;
