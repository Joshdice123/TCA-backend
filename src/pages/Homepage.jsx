import React from 'react'
import { Link } from 'react-router';

export default function Homepage() {
  return (
   
    
  
        <div className="container text-center mt-5">
          <h1>Welcome to TCA Contact Manager</h1>
          <p>
            Manage your contacts efficiently and securely. Sign up or log in to start managing your contacts today.
          </p>
          <div>
            <Link to="/signup" className="btn btn-primary m-2">Sign Up</Link>
            <Link to="/login" className="btn btn-secondary m-2">Log In</Link>
          </div>
        </div>
  
    
  )
}
