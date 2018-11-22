import React, {Component} from 'react';
class App extends Component {
  state = {
    firstname:'',
    lastname:'',
    age:'',
    agree:false
  }
  handleChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.type ==='checkbox' ? target.checked : target.value
    console.log(value)
    this.setState({
    [name]:value
    }) 
  }
  // firstname = React.createRef();
  // lastname = React.createRef();
  // age = React.createRef();
  // agree = React.createRef();
  handleSubmit = (e) => {
    e.preventDefault();

    //  console.log({
    //    first: this.firstname.current.value,
    //    lastname: this.lastname.current.value,
    //    age: this.age.current.value,
    //    agree: this.agree.current.checked,
    //  });
    console.log({
      first:this.state.firstname,
      lastname:this.state.lastname,
      age:this.state.age,
      agree:this.state.agree
    });
    e.currentTarget.reset();
  }
  render () {
    
    return <div className="App">
        <h1>Controlled and Uncontrolled Input</h1>
        <form onSubmit={this.handleSubmit}>
          <input name="firstname" placeholder="First name " value={this.state.firstname} onChange={this.handleChange} />
          <input name ="lastname" placeholder="Last name " value={this.state.lastname} onChange={this.handleChange} />
          <input name="age" placeholder="age" value={this.state.age} onChange={this.handleChange} />
          <br />
          <label>Agree</label>
          <input type="checkbox" name="agree" checked={this.state.agree} onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>;
  }
}

export default App;