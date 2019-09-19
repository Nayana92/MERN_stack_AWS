import React,{Component} from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component{
    render(){
        
        return(
            <nav className= " navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="/" className="navbar-brand"> StudentsDB</Link>
            <div className="collpase navbar-collapse">
            <ul className="navbar-nav" >    
            <li className="navbar-item">
            <Link to="/add" className="nav-link">Add Student</Link>
            </li>
            {/* `   <li></li>` */}
            {/* <li className="navbar-item "> */}
            {/* <input type='search'
             placeholder='Search Student'
             onChange={e => this.setState({searchField: e.target.value, students: this.filteredStudents
                })}
             /> */}
            {/* </li> */}
            </ul>
            </div>
            </nav>
        )
    }
}