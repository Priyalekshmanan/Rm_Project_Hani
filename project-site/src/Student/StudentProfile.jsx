import React, { useEffect, useState } from 'react'
// import Pills from './TopButtons'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import axios from 'axios'
// import'./StudentProfile.css';
export default function StudentProfile() {
  const [students,setStudents] = useState([])
  const navigate=useNavigate()
  let username=sessionStorage.getItem("uname")
  let userId=sessionStorage.getItem("uid")

  useEffect(() => {
    if (sessionStorage.getItem("token") != null) {
      console.log(sessionStorage.getItem("token"));
      const headers = {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      };
    axios
    .get("http://localhost:5099/api/Student/GetStudentById/"+userId,{headers} )
    .then((res)=>{
      setStudents(res.data)
      console.log(students);
    })
    .catch((error) => {
      console.log(error);
    });
} else {
  navigate("/login");
}
  
  }, [])
  

  return ( 
    
      <div  class="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">
      <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-transparent mb-0 pb-0 pt-1 px-0 me-sm-6 me-5">
            <li class="breadcrumb-item text-sm"><a class="opacity-5 text-dark" href="javascript:;">Login</a></li>
            <li class="breadcrumb-item text-sm text-dark active" aria-current="page">Student</li>
          </ol>
          <h6 class="font-weight-bolder mb-0">Student Dash Board</h6>
        </nav>
        
      <div class="px-4 py-5 my-2 text-center">

    <h1 class="display-5 fw-bold text-body-emphasis">Welcome {username}</h1>
    <div class="col-lg-6 mx-auto">  
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <div
            class="table-responsive"
        >
            <table
                class="table table-primary"
            >
               
                <tbody>
                    <tr class="">
                        <td scope="row">Name</td>
                        <td>{students.fName+" "+students.lName}</td>
                    </tr>
                    <tr>
                        <td>Semester</td>
                        <td>{students.semName}</td>
                    </tr>
                    <tr>
                        <td>Branch</td>
                        <td>{students.streamName}</td>
                    </tr>
                    <tr>
                        <td>email</td>
                        <td>{students.eMail}</td>
                    </tr>
                    <tr>
                        <td>phone</td>
                        <td>{students.number}</td>
                    </tr>
                </tbody>
            </table>
            <Link to="student-profile/edit-profile">
            <button>Edit Details</button>
            </Link>
        </div>
                    
      </div>
    </div>
  </div>
  <Outlet/>
      </div>
   
  )
}