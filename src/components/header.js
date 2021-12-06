import React from "react"
import {Link} from "gatsby";

const Header = () => (
  <div className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link ti={"/"}><a className="navbar-brand" href="/" >Hotel Gatsby</a></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse my-2 my-lg-0" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link to={"/"}><a className="nav-link" href="!#" tabindex="-1">Home</a></Link>
        </li>
        <li className="nav-item">
          <Link to={"/nosotros"}><a className="nav-link" href="!#" tabindex="-1">Nosotros</a></Link>
        </li>
      </ul>
    </div>
  </div>
)



export default Header
