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
        this.state = {students:[]};
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

    studentList() {
        return this.state.students.map(currentstudent => {
          return <Student student={currentstudent} removeStudent={this.removeStudent} key={currentstudent._id}/>;
        })
      }

    render(){
      // this.filteredStudents = this.state.students.filter( student =>
      //   student.first_name.toLowerCase().includes(searchField.toLowerCase())
      //   );
          // this.filteredStudents  =  this.state.students.filter( student =>
          // student.first_name.toLowerCase().includes(this.state.searchField.toLowerCase())
          // )
          // this.setState({ students : this.filteredStudents })
        // console.log(this.filteredStudents);

        return(
            <div>
        <h3>Student Information</h3>
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
            { this.studentList() }
          </tbody>
        </table>
      </div>
        )
    }
}