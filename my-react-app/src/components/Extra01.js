import React from "react";

function Extra01() {
  const employee = {
    Name: "afsar Tanvir",
    Age: 24,
    HomeTown: "Moulvibazar",
  };

  return (
    <div>
      <h1>Method 1: Object.entries() with map()</h1>
      {Object.entries(employee).map(([key, value]) => (
        <h3 key={key}>
          {key}: {value}
        </h3>
      ))}

      <hr />

      <h1>Method 2: Object.keys() with map()</h1>
      {Object.keys(employee).map((key) => (
        <h3 key={key}>
          {key}: {employee[key]}
        </h3>
      ))}

      <hr />

      <h1>Method 3: Manual approach</h1>
      <h3>Name: {employee.Name}</h3>
      <h3>Age: {employee.Age}</h3>
      <h3>HomeTown: {employee.HomeTown}</h3>
    </div>
  );
}

export default Extra01;
