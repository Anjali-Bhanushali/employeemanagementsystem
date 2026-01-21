import { useState, useEffect, useContext } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';
// import { data } from 'autoprefixer';
import {AuthContext} from './context/AuthProvider'


function App() {
  // useEffect( () => {
  //   setLocalStorage()
  //   getLocalStorage()
  // },)

  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [userData,setUserData] = useContext(AuthContext)

  useEffect(()=>{
    //  setLocalStorage()
     const loggedInUser = localStorage.getItem('loggedInUser')

     if(loggedInUser){
      const userData = JSON.parse(loggedInUser)
      setUser (userData.role)
      setLoggedInUserData(userData.data)
     }
  },[])

  const handleLogin = ( email,password) => {
      if(email== 'admin@example.com' && password == '123'){
         setUser('admin')
        //  console.log(" admin")
        localStorage.setItem('loggedInUser',JSON.stringify({role:'admin', data:null}))
      }
      else if(userData?.employees){
        const employee = userData.employees.find((e) => email == e.email && password == e.password )
        if(employee){
          setUser('employee')
        // console.log(" user")
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', data:employee}))
        }
      }
      else{
        alert("Invalid User")
      }
  }

  

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {
        user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null )
      }

    </>
  )
}

export default App;
