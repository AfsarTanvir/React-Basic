import React from "react";

function Extra02() {
  const objArray1 = {
    0: [{ Name: "Numin", Age: 23 }],
    1: [{ Name: "Rajon", Age: 25 }],
    2: [{ Name: "Ringku", Age: 24 }],
  };

  const objArray2 = {
    0: { Name: "Numin", Age: 23 },
    1: { Name: "Rajon", Age: 25 },
    2: { Name: "Ringku", Age: 24 },
  };

  const objArray3 = [
    { Name: "Numin", Age: 23 },
    { Name: "Rajon", Age: 25 },
    { Name: "Ringku", Age: 24 },
  ];

  return (
    <div>
      <h2>Method 1: Object with Arrays</h2>
      {Object.entries(objArray1).map(([key, valueArray]) => (
        <div key={key}>
          <h3>Entry {key}:</h3>
          {valueArray.map((person, index) => (
            <h4 key={index}>
              Name: {person.Name}, Age: {person.Age}, Index: {index}
            </h4>
          ))}
        </div>
      ))}

      <hr />

      <h2>Method 2: Object with Objects</h2>
      {Object.entries(objArray2).map(([key, person]) => (
        <h3 key={key}>
          Entry {key}: Name: {person.Name}, Age: {person.Age}
        </h3>
      ))}

      <hr />

      <h2>Method 3: Array of Objects (Recommended)</h2>
      {objArray3.map((person, index) => (
        <h3 key={index}>
          Person {index + 1}: Name: {person.Name}, Age: {person.Age}
        </h3>
      ))}

      <hr />

      <h2>Method 4: Detailed Cards</h2>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {objArray3.map((person, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "5px",
              minWidth: "150px",
            }}
          >
            <h4>Person {index + 1}</h4>
            <p>
              <strong>Name:</strong> {person.Name}
            </p>
            <p>
              <strong>Age:</strong> {person.Age}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Extra02;
