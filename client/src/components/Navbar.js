import React from 'react';

import {Link} from 'react-router-dom'
const NavBar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark elegant-color">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
            aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="basicExampleNav">

<ul className="navbar-nav mr-auto">
    <li className="nav-item active">
        <a className="nav-link" href="/">Home</a>
    </li>
</ul>
<Link to='/dashboard'><button  className="btn btn-outline-white btn-md my-2 my-sm-0 ml-3" type="submit">Dashboard</button></Link>
<button onClick={props.signout} className="btn btn-outline-white btn-md my-2 my-sm-0 ml-3" type="submit">Logout</button>


</div>
</nav>
        )
        }
        export default NavBar;
