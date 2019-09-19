import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/navbar.component";
import StudentList from "./components/student-list.component";
import UpdateStudent from "./components/update-student.component";
import CreateStudent from "./components/create-student.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={StudentList}/>
      <Route path="/edit/:id" exact component={UpdateStudent}/>
      <Route path="/add" exact component={CreateStudent}/>
      </div>
    </Router>
  );
}

export default App;
