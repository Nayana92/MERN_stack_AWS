import React, {Component} from 'react';
import axios from 'axios';

export default class EditStudent extends Component{

    constructor(props){
        super(props);
        this.state = {
            student_id:0,
            first_name:'',
            last_name:'',
            email:'',
            address:'',
            gpa:0.0
        }

        this.onChangeStudentId = this.onChangeStudentId.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeGPA = this.onChangeGPA.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
      axios.get('http://localhost:4000/students/'+this.props.match.params.id)
        .then(response => {
          this.setState({
            student_id: response.data.student_id,
            first_name: response.data.first_name,
            last_name: response.data.last_name,
            email: response.data.email,
            address: response.data.address,
            gpa: response.data.gpa
          })   
        })
        .catch(function (error) {
          console.log(error);
        })
  
    }

    onChangeStudentId(e) {
        this.setState({
          student_id: e.target.value
        })
      }

    onChangeFirstName(e) {
        this.setState({
          first_name: e.target.value
        })
      }
    
    onChangeLastName(e) {
        this.setState({
          last_name: e.target.value
        })
      }

      onChangeEmail(e) {
        this.setState({
          email: e.target.value
        })
      }

    onChangeAddress(e) {
        this.setState({
          address: e.target.value
        })
      }
    
    onChangeGPA(e) {
        this.setState({
          gpa: e.target.value
        })
      }

    onSubmit(e) {
        e.preventDefault();
    
        const student = {
            student_id: this.state.student_id,
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            address: this.state.address,
            gpa: this.state.gpa
        }
    
        console.log(student);

        
        axios.post('http://localhost:4000/students/update',student)
        .then(res => console.log(res.data));

        window.location = '/';
    }
    

    render(){
        return(
            <div>
            <h3>Update New Student</h3>

            <form onSubmit={this.onSubmit}>
                <div className="form-group"> 
                    <label>Student ID: </label>
                    <input  type="text"
                    required
                    className="form-control"
                    value={this.state.student_id}
                    onChange={this.onChangeStudentId}
                    />
                </div>
                <div className="form-group"> 
                  <label>First Name: </label>
                  <input  type="text"
                  required
                  className="form-control"
                  value={this.state.first_name}
                  onChange={this.onChangeFirstName}
                />
                </div>
                <div className="form-group"> 
                  <label>Last Name: </label>
                  <input  type="text"
                  required
                  className="form-control"
                  value={this.state.last_name}
                  onChange={this.onChangeLastName}
                />
                </div>
                <div className="form-group"> 
                  <label>Email: </label>
                  <input  type="text"
                  required
                  className="form-control"
                  value={this.state.email}
                  onChange={this.onChangeEmail}
                />
                </div>
                <div className="form-group"> 
                  <label>Address: </label>
                  <input  type="text"
                  required
                  className="form-control"
                  value={this.state.address}
                  onChange={this.onChangeAddress}
                />
                </div>
                <div className="form-group"> 
                  <label>GPA: </label>
                  <input  type="text"
                  required
                  className="form-control"
                  value={this.state.gpa}
                  onChange={this.onChangeGPA}
                />
                </div>

                <div className="form-group">
                <input type="submit" value="Update Student" className="btn btn-primary" />
                </div>
              </form>
            </div>
        )
    }
}