import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

import SignUp from './SignUp.jsx'
import SignIn from './SignIn.jsx'
import AllBlog from './AllBlog.jsx'

function App() {

  return (
    <div className="container d-flex flex-column vh-100">

      {/* NavBar */}

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">MyBlog API Admin Terminal</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">

              <li className="nav-item">
                <a className="nav-link" href="#">Sign in</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Sign out</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Sign up</a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#">Client Website</a>
              </li>

            </ul>
          </div>
        </div>
      </nav >

      {/* Contents */}

      <main className="p-3 m-3 flex-fill">
        {/* <SignIn /> */}
        {/* <SignUp /> */}
        <AllBlog />


      </main>

      {/* Footer */}

      <footer className='text-center m-3 p-3'>
        Designed and created by YcWong
      </footer>

    </div >
  )
}

export default App
