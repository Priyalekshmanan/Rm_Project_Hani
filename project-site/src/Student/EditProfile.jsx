import axios from 'axios'
import React, { useState } from 'react'
import './EditProfile.css';

export default function EditProfile() {
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
function Edit(){
   
    let std={
        
        eMail: email,
        number: phone,
  
    }
    axios
    .post("http://localhost:5099/api/Student/Edit_Student",std)
    .then((res)=>{
        console.log(res.data);
    })
    .catch((error) => {
        console.error("Error editing profile:", error);
    });
}
  return (
    <div className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
        <h1>Edit Profile</h1>
        <table>
            <tbody>
                <tr>
                    <td>Email:</td>
                    <td>
                        <input type='email' onChange={(e)=>setEmail(e.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <td>Phone:</td>
                    <td>
                        <input type='tel' onChange={(e)=>setPhone(e.target.value)}/>
                    </td>
                </tr>
                <tr>
                    <td rowSpan={2}>
                        <button onClick={Edit}>Submit</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}
