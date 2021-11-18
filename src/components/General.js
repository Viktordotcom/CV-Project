import React from "react";

export default function GeneralInfo({ data, change, edit }) {
  const [profile] = data;
  return profile.edit ? (
    <div>
      <h2>General Information</h2>
      <div className="query-container">
        <p>Name</p>
        <input type="text" name="name" value={profile.name} onChange={change} />
      </div>
      <div className="query-container">
        <p>Email</p>
        <input
          type="text"
          name="email"
          value={profile.email}
          onChange={change}
        />
      </div>
      <div className="query-container">
        <p>Phone</p>
        <input
          type="text"
          name="phoneNumber"
          value={profile.phoneNumber}
          onChange={change}
        />
      </div>
      <button onClick={() => edit(profile.id)}>Submit</button>
    </div>
  ) : (
    <div>
      <h2>General Information</h2>
      <div className="query-container">
        <p>Name</p>
        <p>{profile.name}</p>
      </div>
      <div className="query-container">
        <p>Email</p>
        <p>{profile.email}</p>
      </div>
      <div className="query-container">
        <p>Phone</p>
        <p>{profile.phoneNumber}</p>
      </div>
      <button onClick={() => edit(profile.id)}>Edit</button>
    </div>
  );
}
