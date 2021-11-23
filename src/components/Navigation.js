import React, { Component } from 'react'
import Layout from './Layout';
import {Link} from 'react-router-dom'
class Navigation extends Component {
    render() {
        return (
            <>
            <div className="bg-gray-800 text-center bg-local">
                <ul className="text-white inline-grid grid-cols-3 gap-x-4 text-xl">
                    
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/About"><li>About</li></Link>
                    <Link to="/Tools"><li>Tools</li></Link>
                    
                </ul>
            </div>
            </>
        )
    }
}

export default Navigation;