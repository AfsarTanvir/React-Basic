import React from "react";

function Extra03({ mode }) {
  // Complex nested data structures
  const complexData1 = {
    0: {
      Name: "Numin",
      Age: 23,
      Address: {
        Street: "123 Main St",
        City: "Dhaka",
        Country: "Bangladesh",
      },
      Skills: ["JavaScript", "React", "Node.js"],
      Experience: [
        { Company: "Tech Corp", Years: 2 },
        { Company: "StartUp Inc", Years: 1 },
      ],
    },
    1: {
      Name: "Rajon",
      Age: 25,
      Address: {
        Street: "456 Oak Ave",
        City: "Chittagong",
        Country: "Bangladesh",
      },
      Skills: ["Python", "Django", "PostgreSQL"],
      Experience: [
        { Company: "Data Solutions", Years: 3 },
        { Company: "AI Labs", Years: 1.5 },
      ],
    },
  };

  // Array with nested objects and arrays
  const complexData2 = [
    {
      Name: "Ringku",
      Age: 24,
      Department: {
        Name: "Engineering",
        Floor: 3,
        Manager: "John Doe",
      },
      Projects: [
        {
          Name: "E-commerce App",
          Technologies: ["React", "Express", "MongoDB"],
          Status: "Completed",
        },
        {
          Name: "Mobile App",
          Technologies: ["React Native", "Firebase"],
          Status: "In Progress",
        },
      ],
      Contacts: {
        Email: "ringku@email.com",
        Phone: ["123-456-7890", "098-765-4321"],
        Social: {
          LinkedIn: "linkedin.com/in/ringku",
          GitHub: "github.com/ringku",
        },
      },
    },
    {
      Name: "Adil",
      Age: 25,
      Department: {
        Name: "CSE",
        Floor: 4,
        Manager: "Imon",
      },
      Projects: [
        {
          Name: "Jani na",
          Technologies: ["React", "Express", "MongoDB"],
          Status: "Completed",
        },
        {
          Name: "Sob kise",
          Technologies: ["React Native", "Firebase"],
          Status: "In Progress",
        },
      ],
      Contacts: {
        Email: "adil@email.com",
        Phone: ["123-456-7890", "098-765-4321"],
        Social: {
          LinkedIn: "linkedin.com/in/adil",
          GitHub: "github.com/adil",
        },
      },
    },
  ];

  // Deeply nested object structure
  const complexData3 = {
    Company: "Tech Solutions",
    Departments: {
      Engineering: {
        Teams: [
          {
            Name: "Frontend Team",
            Members: [
              {
                Name: "Alice",
                Skills: ["React", "Vue"],
                Projects: {
                  Current: "Dashboard",
                  Previous: ["Website", "Mobile App"],
                },
              },
              {
                Name: "Bob",
                Skills: ["Angular", "TypeScript"],
                Projects: { Current: "API", Previous: ["Admin Panel"] },
              },
            ],
          },
          {
            Name: "Backend Team",
            Members: [
              {
                Name: "Charlie",
                Skills: ["Node.js", "Python"],
                Projects: {
                  Current: "Microservices",
                  Previous: ["Database", "Auth System"],
                },
              },
            ],
          },
        ],
      },
    },
  };

  // Recursive component for deeply nested data
  const renderValue = (value, key = "") => {
    if (Array.isArray(value)) {
      return (
        <div style={{ marginLeft: "20px" }}>
          <strong>{key && `${key}: `}Array</strong>
          {value.map((item, index) => (
            <div
              key={index}
              style={{ marginLeft: "20px", marginBottom: "10px" }}
            >
              <strong>Index {index}:</strong>
              {renderValue(item)}
            </div>
          ))}
        </div>
      );
    }

    if (typeof value === "object" && value !== null) {
      return (
        <div style={{ marginLeft: "20px" }}>
          {key && <strong>{key}: Object</strong>}
          {Object.entries(value).map(([k, v]) => (
            <div key={k} style={{ marginLeft: "20px", marginBottom: "5px" }}>
              {renderValue(v, k)}
            </div>
          ))}
        </div>
      );
    }

    return (
      <div style={{ marginLeft: "20px" }}>
        <strong>{key}:</strong> {String(value)}
      </div>
    );
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Nested Objects and Arrays Examples</h1>

      {/* Example 1: Object with nested objects and arrays */}
      <h2>Example 1: Complex Object Structure</h2>
      {Object.entries(complexData1).map(([key, person]) => (
        <div
          key={key}
          style={{
            color: mode === "light" ? "black" : "white",
            border: "2px solid #333",
            margin: "10px 0",
            padding: "15px",
            borderRadius: "8px",
            backgroundColor: mode === "light" ? "#f9f9f9" : "#022e52ff",
          }}
        >
          <h3>
            Person {Number(key) + 1}: {person.Name} (Age: {person.Age})
          </h3>

          {/* Nested Address Object */}
          <div style={{ marginLeft: "20px" }}>
            <h4>Address:</h4>
            <p>Street: {person.Address.Street}</p>
            <p>City: {person.Address.City}</p>
            <p>Country: {person.Address.Country}</p>
          </div>

          {/* Skills Array */}
          <div style={{ marginLeft: "20px" }}>
            <h4>Skills:</h4>
            <ul>
              {person.Skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>

          {/* Experience Array with Objects */}
          <div style={{ marginLeft: "20px" }}>
            <h4>Experience:</h4>
            {person.Experience.map((exp, index) => (
              <div
                key={index}
                style={{ marginLeft: "20px", marginBottom: "5px" }}
              >
                <strong>{exp.Company}</strong>: {exp.Years} years
              </div>
            ))}
          </div>
        </div>
      ))}

      <hr style={{ margin: "30px 0" }} />

      {/* Example 2: Array with complex nested structure */}
      <h2>Example 2: Array with Deep Nesting</h2>
      {complexData2.map((person, index) => (
        <div
          key={index}
          style={{
            border: "2px solid #666",
            margin: "10px 0",
            padding: "15px",
            borderRadius: "8px",
            backgroundColor: mode === "light" ? "#f0f8ff" : "#03787cff",
          }}
        >
          <h3>
            {person.Name} (Age: {person.Age})
          </h3>

          {/* Department Object */}
          <div style={{ marginLeft: "20px" }}>
            <h4>Department:</h4>
            <p>Name: {person.Department.Name}</p>
            <p>Floor: {person.Department.Floor}</p>
            <p>Manager: {person.Department.Manager}</p>
          </div>

          {/* Projects Array with nested objects */}
          <div style={{ marginLeft: "20px" }}>
            <h4>Projects:</h4>
            {person.Projects.map((project, pIndex) => (
              <div
                key={pIndex}
                style={{
                  marginLeft: "20px",
                  marginBottom: "10px",
                  padding: "10px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              >
                <h5>
                  {project.Name} - {project.Status}
                </h5>
                <strong>Technologies:</strong>
                <ul>
                  {project.Technologies.map((tech, tIndex) => (
                    <li key={tIndex}>{tech}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contacts with nested objects and arrays */}
          <div style={{ marginLeft: "20px" }}>
            <h4>Contacts:</h4>
            <p>Email: {person.Contacts.Email}</p>
            <p>Phones: {person.Contacts.Phone.join(", ")}</p>
            <p>LinkedIn: {person.Contacts.Social.LinkedIn}</p>
            <p>GitHub: {person.Contacts.Social.GitHub}</p>
          </div>
        </div>
      ))}

      <hr style={{ margin: "30px 0" }} />

      {/* Example 3: Recursive rendering for very deep nesting */}
      <h2>Example 3: Deep Recursive Structure</h2>
      <div
        style={{
          border: "2px solid #900",
          padding: "15px",
          borderRadius: "8px",
          backgroundColor: mode === 'light' ? "#fff5f5" :'#454565',
        }}
      >
        {renderValue(complexData3)}
      </div>

      <hr style={{ margin: "30px 0" }} />

      {/* Example 4: Practical table view for nested data */}
      <h2>Example 4: Table View of Nested Data</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#1c038aff" }}>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Age</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>City</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Skills</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>
              Companies
            </th>
          </tr>
        </thead>
        <tbody>
          {Object.values(complexData1).map((person, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {person.Name}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {person.Age}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {person.Address.City}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {person.Skills.join(", ")}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {person.Experience.map((exp) => `${exp.Company}: ${exp.Years}`).join(", ")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Extra03;
