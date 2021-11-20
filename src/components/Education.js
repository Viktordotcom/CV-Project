import React from "react";

export default function EducationalInfo({ data, change, edit }) {
  const [, education] = data;
  return education.edit ? (
    <div>
      <h2>Education</h2>
      <div className="query-container">
        <p>University</p>
        <input
          type="text"
          name="university"
          value={education.university}
          onChange={change}
        />
      </div>
      <div className="query-container">
        <p>Title</p>
        <input
          type="text"
          name="title"
          value={education.title}
          onChange={change}
        />
      </div>
      <div className="query-container">
        <p>Graduated</p>
        <input
          type="date"
          name="studyPeriod"
          value={education.studyPeriod}
          onChange={change}
        />
      </div>
      <button onClick={() => edit(education.id)}>Submit</button>
    </div>
  ) : (
    <div>
      <h2>Education</h2>
      <div className="query-container">
        <p>University</p>
        <p>{education.university}</p>
      </div>
      <div className="query-container">
        <p>Title</p>
        <p>{education.title}</p>
      </div>
      <div className="query-container">
        <p>Graduated</p>
        <p>{education.studyPeriod}</p>
      </div>
      <button onClick={() => edit(education.id)}>Edit</button>
    </div>
  );
}
