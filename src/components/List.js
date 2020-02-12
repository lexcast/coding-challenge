import React from "react";
import Result from "./Result";

function List({ results, search }) {
  if (results.length === 0) {
    return (
      <div className="List-Empty">
        <h1>No results</h1>
      </div>
    );
  }

  return (
    <div className="List">
      {results.map(result => {
        return <Result key={result._id} result={result} search={search} />;
      })}
    </div>
  );
}

export default List;
