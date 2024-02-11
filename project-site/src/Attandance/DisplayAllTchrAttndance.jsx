import axios from 'axios'
import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'

export default function DisplayTeacherAttendance() {
    
        const [tstartdate, setTstartdate] = useState("")
        const [tenddate, setTenddate] = useState(0)
        const[dis,setDis]=useState([])
        const [error, setError] = useState(null)
        // const navigate=useNavigate()
        
    function validateInputs() {
        if (!tstartdate || !tenddate) {
            setError("Please provide both start date and end date.")
            return false
        }
        // Regular expression to validate the date format (YYYY-MM-DD)
    const dateFormat = /^\d{4}-\d{2}-\d{2}$/

    // Check if both start date and end date are in the valid format
    if (!dateFormat.test(tstartdate) || !dateFormat.test(tenddate)) {
        setError("Invalid date format. Please use YYYY-MM-DD.")
        return false
    }

    // Parse start date and end date strings into Date objects
    const startDate = new Date(tstartdate)
    const endDate = new Date(tenddate)

    // Check if the parsed dates are valid
    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
        setError("Invalid dates. Please enter valid dates.")
        return false
    }

    // Check if end date is not before start date
    if (endDate < startDate) {
        setError("End date cannot be before start date.")
        return false
    }

    // If all validations pass, return true
    return true
}

       

        function DisplayAlltea(){
            if(!validateInputs())return
            axios
            .get("http://localhost:5099/api/DisplayAttendance/AllTeacherAttendence"+tstartdate+"/"+tenddate)
            .then((response)=>{
            console.log(response.data);
            setDis(response.data)
        })
        .catch((e)=>{
            console.log(e)
        })
           
       }
            
        
    
  return (
    <div class="main-content position-relative max-height-vh-100 h-100 border-radius-lg">Display Teacher Attendance
    <table>
        <tbody>
        <tr>
        <td>
            <input type='date' placeholder='Start Date' value={tstartdate} onChange={(e)=>setTstartdate(e.target.value)}/>
            <input type='date' placeholder='End Date' value={tenddate} onChange={(e)=>setTenddate(e.target.value)}/>
        </td>
        </tr>
        <tr>
            <td>
                <button onClick={DisplayAlltea}>Click</button>
            </td>
        </tr>
        {error &&(
            <tr>
                <td style={{color:'red'}}>{error}</td>
            </tr>
        )}
        </tbody>
    </table>
    <table className='table table-stripped'>
            <thead>
                <tr>
                 
                    <th>teacherId</th>
                    <th>presentDays</th>
                    <th>absentDays</th>
                    <th>totalWorking</th>
                  

                
                </tr>
            </thead>
            <tbody>
               
                 {
                    dis.map((item)=>{
                        return(
                            <tr key={item.teacherId}>
                                <td>{item.teacherId}</td>
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