import logo from './logo.svg';
// import './App.css';
import Home from './Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './LoginPage';
import NoPage from './NoPage';
import AdminDashboard from './Admin/AdminDashBoard'
import StudentDashboard from './Student/StudentDashBoard'
import TeacherDashboard from './Teacher/TeacherDashBoard'
import ExamSch from './Admin/ExamSh';
import Profile from './Admin/Profile';
import TeacherRegister from './Admin/TeacherRegistration';
import TeacherProfile from './Teacher/TeacherProfile';
import ViewResult from './Result/ViewResult';
import AddResult from './Result/AddResult';
import StudentProfile from './Student/StudentProfile';
import EditProfile from './Student/EditProfile';
import DisplayStudentAttendaceById from './Attandance/DisplaySAttandanceById';
import DisplayTeacherAttendace from './Attandance/DisplayAllTchrAttndance';
function App() {
  return (
    
      // <Home/>
      <div>
          <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}>
            <Route index element={<Home />} />   
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="Admin-Dashboard" element={<AdminDashboard />}>
            <Route path="schedule-exam" element={<ExamSch/>} />
            <Route path="admin-profile" element={<Profile/>} />
            <Route path='teacher-registration' element={<TeacherRegister/>}/>
          </Route>
          {/* <Route path="Student-Dashboard" element={<StudentDashboard />}>
            <Route path="student-profile" element={<StudentProfile />} />
                <Route path="edit-profile" element={<EditProfile/>}/>
            <Route/>
          </Route> */}
          <Route path="Student-Dashboard" element={<StudentDashboard />}>
          <Route index element={<StudentProfile />} />
          <Route path="student-profile/edit-profile" element={<EditProfile />} />
          <Route path="attendance" element={<DisplayStudentAttendaceById/>} />
          <Route path="exam" element={<ViewResult/>}/>
        </Route>

          <Route path="teacher-dashboard" element={<TeacherDashboard />}>
            <Route path='profile' element={<TeacherProfile/>}/>
            <Route path='view-result' element={<ViewResult/>}/>
            <Route path='add-result' element={<AddResult/>}/>
            <Route path='viewteacher_attendance' element={<DisplayTeacherAttendace/>}/>
            {/* <Route path='view-attendance' element={<Display} */}

            {/* <Route path="schedule-exam" element={<ScheduleExam />} />
            <Route path="get-marks" element={<GetMarks />} /> */}
          </Route>
          <Route path="*" element={<NoPage/>} />
        </Routes>
      </BrowserRouter>
      </div>
      
   
  );
}

export default App;
