import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Signup = () => {
    const[credentials,setCredentials]=useState({name:"",email:"",password:"",cpassword:""})
    let navigate=useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const {name,email,password}=credentials;
        const response = await fetch('http://127.0.0.1:5000/api/auth/createuser', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
              
            },
            body:JSON.stringify({name,email,password})
          });
          const json= await response.json()
          console.log(json)
          if (json.success){
            // redirect: save the auth and redirect
            localStorage.setItem('token',json.authtoken)
            navigate('/')

          }
          else{
            alert('invalid credentials')
          }
    }

    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name='name' id="name" onChange={onChange} aria-describedby="emailHelp"/>
    </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' id="email" onChange={onChange} aria-describedby="emailHelp"/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  
    
  </div>
  <div className="mb-3">
    <label htmlFor="Password" className="form-label">Password</label>
    <input type="password" className="form-control" name='password' id="Password" onChange={onChange} minLength={5} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="cPassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" name='cpassword'  id="cPassword" onChange={onChange} minLength={5} required/>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Signup
