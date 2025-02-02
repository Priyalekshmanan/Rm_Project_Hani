
import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'

export default function DisplayStudentAttendaceById() {
    let stid=sessionStorage.getItem("sid")
        // const[sid,setSid]=useState("")
        const [sstartdate, setSstartdate] = useState("")
        const [senddate, setSenddate] = useState(0)
        const[dis,setDis]=useState([])
        // const navigate=useNavigate()

        function DisplayAllStuById(){
           
            axios
            .get("http://localhost:5099/api/DisplayAttendance/SAttendance"+stid+"/"+sstartdate+"/"+senddate)
            .then((response)=>{
            console.log(response.data);
            setDis(response.data)
        })
        .catch((e)=>{
            console.log(e)
        })
  
       }
  return (
    <div className='main-content position-relative max-height-vh-100 h-100 border-radius-lg'>Display Attendance Of Student
    <table>
        <tr>
        <td>
               
            <input type='date' placeholder='Start Date' value={sstartdate} onChange={(e)=>setSstartdate(e.target.value)}/>
            <input type='date' placeholder='End Date' value={senddate} onChange={(e)=>setSenddate(e.target.value)}/>
        </td>
        </tr>
        <tr>
            <td>
                <button onClick={DisplayAllStuById}>Click</button>
            </td>
        </tr>
    </table>
    <table className='table table-stripped'>
            <thead>
                <tr>
                 
                    {/* <th>teacherId</th> */}
                    <th>presentDays</th>
                    <th>absentDays</th>
                    <th>totalWorking</th>
                  

                
                </tr>
            </thead>
            <tbody>
               
                 {
                    dis.map((item)=>{
                        return(
                            <tr key={item.studentId}>
                                <td>{item.presentDays}</td>
                                <td>{item.absentDays}</td>
                                <td>{item.totalWorking}</td>
                                

                            </tr>
                        )
                    })
                 }
            </tbody>
        </table>
    </div>
  )
  }