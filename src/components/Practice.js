import React from "react";

export default function PracticalInfo({ data, change, edit }) {
  const [, , practical] = data;
  return practical.edit ? (
    <div>
      <h2>Experience</h2>
      <div className="query-container">
        <p>Company Name</p>
        <input
          type="text"
          name="companyName"
          value={practical.companyName}
          onChange={change}
        />
      </div>
      <div className="query-container">
        <p>Position Title</p>
        <input
          type="text"
          name="positionTitle"
          value={practical.positionTitle}
          onChange={change}
        />
      </div>
      <div className="query-container">
        <p>Skills</p>
        <textarea
          type="text"
          name="skills"
          value={practical.skills}
          onChange={change}
        />
      </div>
      <div className="query-container">
        <p>Employed Since</p>
        <input
          type="date"
          name="workingPeriod"
          value={practical.workingPeriod}
          onChange={change}
        />
      </div>
      <button onClick={() => edit(practical.id)}>Submit</button>
    </div>
  ) : (
    <div>
      <h2>Experience</h2>
      <div className="query-container">
        <p>Company Name</p>
        <p>{practical.companyName}</p>
      </div>
      <div className="query-container">
        <p>Position Title</p>
        <p>{practical.positionTitle}</p>
      </div>
      <div className="query-container">
        <p>Skills</p>
        <p>{practical.skills}</p>
      </div>
      <div className="query-container">
        <p>Employed Since</p>
        <p>{practical.workingPeriod}</p>
      </div>
      <button onClick={() => edit(practical.id)}>Edit</button>
    </div>
  );
}
