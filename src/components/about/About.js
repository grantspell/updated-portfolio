import React, { Component } from 'react';

// COMPONENTS
import Contact from './Contact'

class About extends Component {
    render() {
        return (
            <div>
                <h1>Hello This is About Me</h1>

                <Contact />
            </div>
        );
    }
}

export default About;