import React, { useState, useEffect } from "react";
import GeneralInfo from "./components/General";
import EducationalInfo from "./components/Education";
import PracticalInfo from "./components/Practice";
import PersonalData from "./components/PersonalData";
import profileImg from "./images/profile.jpg";
import "./styles/style.css";

export default function App() {
  const localData = JSON.parse(localStorage.getItem("localData"));
  const [data, setData] = useState(localData || PersonalData);

  function handleChange(event) {
    const { name, value } = event.target;
    setData(
      data.map((item) => {
        for (let key in item) {
          key === name && (item[key] = value);
        }
        return item;
      })
    );
  }

  useEffect(() => {
    localStorage.setItem("localData", JSON.stringify(data));
  }, [data]);

  function handleEdit(id) {
    setData(
      data.map((item) => {
        return item.id === id ? { ...item, edit: !item.edit } : item;
      })
    );
  }

  return (
    <div className="main-container">
      <img src={profileImg} alt="profile"></img>
      <GeneralInfo data={data} change={handleChange} edit={handleEdit} />
      <EducationalInfo data={data} change={handleChange} edit={handleEdit} />
      <PracticalInfo data={data} change={handleChange} edit={handleEdit} />
    </div>
  );
}
