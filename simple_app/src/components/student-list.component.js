import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Student = props => (
    <tr>
      <td>{props.student.student_id}</td>
      <td>{props.student.first_name}</td>
      <td>{props.student.last_name}</td>
      <td>{props.student.email}</td>
      <td>{props.student.address}</td>
      <td>{props.student.gpa}</td>
      <td>
        <Link to={"/edit/"+props.student._id}>Edit</Link> | <a href="/delete" onClick={() => { props.removeStudent(props.student._id) }}>Delete</a>
      </td>
    </tr>
  )

export default class StudentList extends Component{

    constructor(props){
        super(props);

        this.removeStudent = this.removeStudent.bind(this);
        this.state = {students:[],searchField:'',filteredStudents : []};
        // this.filteredStudents = [];
    }

    componentDidMount(){
        axios.get('http://localhost:4000/students/')
        .then( response =>{
            this.setState({ students : response.data })
          })
        .catch((error) => {
            console.log(error);
        });
    }

    removeStudent(id){
        axios.delete('http://localhost:4000/students/'+id)
        .then( res => console.log(res.data));

        this.setState({
            students: this.state.students.filter(el => el._id !== id)
        })
    }


    render(){
      const filteredStudents = this.state.students.filter( student =>
        student.first_name.toLowerCase().includes(this.state.searchField.toLowerCase()) ||
        student.last_name.toLowerCase().includes(this.state.searchField.toLowerCase())
        );

        return(
            <div>
        <h3>Student Information</h3>

        <input type='search' 
        placeholder='Search Students' 
        onChange = {e=> this.setState({searchField:e.target.value})}/>
        <p></p>
        
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Student ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>address</th>
              <th>GPA</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          { filteredStudents.map(currentstudent => {
          return <Student student={currentstudent} removeStudent={this.removeStudent} key={currentstudent._id}/>;
        }) }
          </tbody>
        </table>
      </div>
        )
    }
}