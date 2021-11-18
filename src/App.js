import React, { Component } from "react";
import GeneralInfo from "./components/General";
import EducationalInfo from "./components/Education";
import PracticalInfo from "./components/Practice";
import PersonalData from "./components/PersonalData";
import profileImg from "./images/profile.jpg";
import "./styles/style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: PersonalData,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      data: this.state.data.map((item) => {
        for (let key in item) {
          key === name && (item[key] = value);
        }
        return item;
      }),
    });
  }

  handleEdit(id) {
    // this.setState((prevState) => {
    //   const newState = prevState.data.map((item) => {
    //     return item.id === id ? { ...item, edit: !item.edit } : item;
    //   });
    //   console.log(newState);
    //   return newState;
    // });

    this.setState({
      data: this.state.data.map((item) => {
        return item.id === id ? { ...item, edit: !item.edit } : item;
      }),
    });
  }

  render() {
    return (
      <div className="main-container">
        <img src={profileImg} alt="profile"></img>
        <GeneralInfo
          data={this.state.data}
          change={this.handleChange}
          edit={this.handleEdit}
        />
        <EducationalInfo
          data={this.state.data}
          change={this.handleChange}
          edit={this.handleEdit}
        />
        <PracticalInfo
          data={this.state.data}
          change={this.handleChange}
          edit={this.handleEdit}
        />
      </div>
    );
  }
}

export default App;
