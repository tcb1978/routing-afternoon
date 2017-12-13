import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class About extends Component {

    render() {
        return (
            <div>
                <div className='subnav'>
                    <Link className="subnav"><h3>About</h3></Link>
                    <Link className="subnav"><h3>History</h3></Link>
                    <Link className="subnav"><h3>Contact</h3></Link>
                </div>
                <div className='box'>
                </div>
            </div>
        )
    }
    
}