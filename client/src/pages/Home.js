import React  from 'react';

import { Link } from 'react-router-dom'
const Home = () => {
    return ( 
        <div>
            <div className="jumbotron text-center">
                <h2 className="card-title h2">Memes App</h2>
                <p className="blue-text my-4 font-weight-bold">Create and collect Memes!</p>

                <div className="pt-2">
                    <Link to='/signin'><button  type="button" className="btn btn-blue waves-effect">Signin</button></Link>
                    <Link to='/signup'><button type="button" className="btn btn-outline-primary waves-effect">Signup</button></Link>
                </div>
            </div>
        </div>
       
    );
} 
        export default Home;