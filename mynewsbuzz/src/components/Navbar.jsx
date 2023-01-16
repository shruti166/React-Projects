import React, { Component } from 'react'

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">NewsBuzz</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">About</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Business</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Science</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Technology</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Sports</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">general</a>
                    </li>
                   
                   
      </ul>
    </div>
  </div>
</nav>
        
      </div>
    )
  }
}

export default Navbar
