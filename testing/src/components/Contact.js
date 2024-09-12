// Contact.js
import React, { useEffect, useState } from "react";
import { searchVehicle } from "../utils/searchVehicles";

const Contact = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setquery] = useState("");

  useEffect(() => {
    // Perform the search when the component mounts
    searchVehicle(query).then((results) => {
      setSearchResults(results);
      console.log("Search results:", results);
    });
  }, [query]);

  const handleChange = (e) => {
    const val = e.target.value;
    setquery(val);
  };

  return (
    <div>
      <h1>Vehicle Search Results</h1>
      <input
        type="text"
        placeholder="search"
        onChange={handleChange}
        value={query}
      />

      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((vehicle, index) => (
            <li
              key={index}
              style={{
                border: "1px solid black",
                boxShadow: "2px 3px gray",
                margin: "10px",
              }}
            >
              {vehicle.Name} - {vehicle.Manufacturer}
              <p>{vehicle.Model}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No vehicles found.</p>
      )}
    </div>
  );
};

export default Contact;
