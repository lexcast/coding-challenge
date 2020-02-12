import React, { useState, useEffect } from "react";
import List from "./List";
import { getData } from "../utils/api";

function Search() {
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const loadData = async () => {
      const response = await getData(search);
      setResults(response);
    };
    loadData();
  }, [search]);

  return (
    <div className={"Filter " + (results.length > 0 ? "not-empty" : "empty")}>
      <input
        placeholder="Search by name"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      {results.length > 0 && <List results={results} search={search} />}
    </div>
  );
}

export default Search;
