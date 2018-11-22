import React, { Component } from "react";
import "./App.css";
import Input from "./components/Input";

class App extends Component {
  state = {
    users: [],
    fullname: "",
    age: "",
    email: "",
    reemail: "",
    address: "",
    city: "",
    countrystate: "",
    countryregion: "",
    zipcode: "",
    flag: true,
    errormsg: "",
    selectoption: "",
    touched: {
      fullname: false,
      age: false,
      email: false,
      reemail: false,
      address: false,
      city: false,
      countrystate: false,
      countryregion: false,
      zipcode: false
    },
    skill: "",
    message: ""
  };

  addUser = obj => {
    const users = this.state.users.slice();
    users.push(obj);
    this.setState({
      users
    });
  };

  handleChange = e => {
    let target = e.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;
    console.log(value);
    this.setState({
      [name]: value
    });
  };

  handleBlur = e => {
    let name = e.target.name;
    this.setState({
      touched: { ...this.state.touched, [name]: true }
    });
  };

  handleSelectOption = e => {
    this.setState({
      selectoption: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.addUser(this.state);
  };

  handleInputUser = e => {
    if (e.target.type === "text" || e.target.type === "email") {
      this.handleChange(e);
    } else if (e.target.type === "radio") {
      this.handleSelectOption(e);
    }
  };

  validate = (
    fullname,
    age,
    email,
    reemail,
    address,
    city,
    countrystate,
    countryregion,
    zipcode
  ) => {
    const errors = {
      fullname: "",
      age: "",
      email: "",
      reemail: "",
      address: "",
      city: "",
      countrystate: "",
      countryregion: "",
      zipcode: ""
    };
    if (this.state.touched.fullname && fullname.length < 3) {
      errors.fullname = "Full  Name should be >=3 characters.";
    } else if (this.state.touched.fullname && fullname.length > 15) {
      errors.fullname = "Full Name should be <=15 characters.";
    }
    if (this.state.touched.age && age.length < 3) {
      errors.age = "age should be >=3 characters.s";
    } else if (this.state.touched.age && age.length > 15) {
      errors.age = "age should be <=15 characters.";
    }
    if (this.state.touched.email && email.length < 3) {
      errors.email = "email should be >=3 characters.s";
    } else if (this.state.touched.email && email.length > 15) {
      errors.email = "email should be <=15 characters.";
    }
    if (this.state.touched.reemail && reemail.length < 3) {
      errors.reemail = "reemail should be >=3 characters.s";
    } else if (this.state.touched.reemail && reemail.length > 15) {
      errors.reemail = "reemail should be <=15 characters.";
    }
    if (this.state.touched.address && address.length < 3) {
      errors.address = "address should be >=3 characters.s";
    } else if (this.state.touched.address && address.length > 15) {
      errors.address = "address should be <=15 characters.";
    }
    if (this.state.touched.city && city.length < 3) {
      errors.city = "city should be >=3 characters.s";
    } else if (this.state.touched.city && city.length > 15) {
      errors.city = "city should be <=15 characters.";
    }
    if (this.state.touched.countrystate && countrystate.length < 3) {
      errors.countrystate = "countrystate should be >=3 characters.s";
    } else if (this.state.touched.countrystate && countrystate.length > 15) {
      errors.countrystate = "countrystate should be <=15 characters.";
    }
    if (this.state.touched.countryregion && countryregion.length < 3) {
      errors.countryregion = "countryregion should be >=3 characters.s";
    } else if (this.state.touched.countryregion && countryregion.length > 15) {
      errors.countryregion = "countryregion should be <=15 characters.";
    }
    if (this.state.touched.zipcode && zipcode.length < 3) {
      errors.zipcode = "zipcode should be >=3 characters.s";
    } else if (this.state.touched.zipcode && zipcode.length > 15) {
      errors.zipcode = "zipcode should be <=15 characters.";
    }
    return errors;
  };
  render() {
    let { fullname } = this.state;
    let { age } = this.state;
    let { email } = this.state;
    let { reemail } = this.state;
    let { address } = this.state;
    let { city } = this.state;
    let { countrystate } = this.state;
    let { countryregion } = this.state;
    let { zipcode } = this.state;

    const errors = this.validate(
      fullname,
      age,
      email,
      reemail,
      address,
      city,
      countrystate,
      countryregion,
      zipcode
    );

    console.log(errors);

    return (
      <div className="App">
        <form className="container" onSubmit={this.handleSubmit}>
          <h2>Lets's Talk</h2>
          <h4>Think you have what it takes?Show us.</h4>
          <h3>1.Personal Information</h3>
          <div className="personalinfo1">
            <Input
              type="text"
              name="fullname"
              placeholder="Full Name "
              value={this.state.fullname}
              handleInputUser={this.handleInputUser}
              handleBlur={this.handleBlur}
              errormsg={errors.fullname}
            />

            <Input
              type="text"
              name="age"
              placeholder="Age "
              value={this.state.age}
              handleInputUser={this.handleInputUser}
              handleBlur={this.handleBlur}
              errormsg={errors.age}
            />
          </div>
          <div className="personalinfo2">
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              handleInputUser={this.handleInputUser}
              handleBlur={this.handleBlur}
              errormsg={errors.email}
            />
          </div>
          <div className="personalinfo2">
            <Input
              type="email"
              name="reemail"
              placeholder="Re entry Email"
              value={this.state.reemail}
              handleInputUser={this.handleInputUser}
              handleBlur={this.handleBlur}
              errormsg={errors.reemail}
            />
          </div>
          <div className="personalinfo2">
            <Input
              type="text"
              name="address"
              placeholder="Address"
              value={this.state.address}
              handleInputUser={this.handleInputUser}
              handleBlur={this.handleBlur}
              errormsg={errors.address}
            />
          </div>
          <div className="personalinfo1">
            <Input
              type="text"
              name="city"
              placeholder="City"
              value={this.state.city}
              handleInputUser={this.handleInputUser}
              handleBlur={this.handleBlur}
              errormsg={errors.city}
            />
            <Input
              type="text"
              name="countrystate"
              placeholder="State"
              value={this.state.countrystate}
              handleInputUser={this.handleInputUser}
              handleBlur={this.handleBlur}
              errormsg={errors.countrystate}
            />
            <Input
              type="text"
              name="countryregion"
              placeholder="Country Region"
              value={this.state.countryregion}
              handleInputUser={this.handleInputUser}
              handleBlur={this.handleBlur}
              errormsg={errors.countryregion}
            />
            <Input
              type="text"
              name="zipcode"
              placeholder="ZIP-CODE"
              value={this.state.zipcode}
              handleInputUser={this.handleInputUser}
              handleBlur={this.handleBlur}
              errormsg={errors.zipcode}
            />
          </div>
          <h3>2.Skills in Different Field</h3>
          <div className="personalinfo1">
            <label>Design Research:</label>
            <Input
              type="radio"
              value="designResearch"
              name="radio"
              checked={this.state.selectoption === "designResearch"}
              handleBlur={this.handleBlur}
              handleInputUser={this.handleInputUser}
            />
            <label>Visual Design:</label>
            <Input
              type="radio"
              value="visualDesign"
              checked={this.state.selectoption === "visualDesign"}
              name="radio"
              handleInputUser={this.handleInputUser}
              handleBlur={this.handleBlur}
            />
            <label>UX-Design:</label>
            <Input
              type="radio"
              value="uxDesign"
              name="radio"
              checked={this.state.selectoption === "uxDesign"}
              handleInputUser={this.handleInputUser}
              handleBlur={this.handleBlur}
            />
            <label>Front-end Developer:</label>
            <Input
              type="radio"
              value="frontendDeveloper"
              name="radio"
              checked={this.state.selectoption === "frontendDeveloper"}
              handleInputUser={this.handleInputUser}
              handleBlur={this.handleBlur}
            />
          </div>
          <h3>3.Skills and Message</h3>
          <div className="personalinfo1">
            <select
              name="skill"
              value={this.state.skill}
              onChange={this.handleChange}
            >
              <option value="DesignResearch">Design Research</option>
              <option value="VisualDesign">Visual Design</option>
              <option value="UX-Design">UX-Design</option>
              <option value="Front-endDev">Front-end Developer</option>
            </select>
            <p>Leave message here: </p>

            <textarea
              rows="10"
              cols="60"
              name="message"
              value={this.state.message}
              onChange={this.handleChange}
            />
            <button>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
