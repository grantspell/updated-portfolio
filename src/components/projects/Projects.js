import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// STYLES
const ProjectWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-content: center;
`
const Project = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px;
`
const ProjectDisplay = styled.div`
    background-color: rgba(255, 255, 255, .5);
    border-radius: 20px;
    padding: 5px;
    text-align: center;
`
const ProjectLinks = styled.div`
    text-align: center;
`

class Projects extends Component {
    render() {
        return (
            <ProjectWrapper>

                <Project>
                    <ProjectDisplay>
                        <h3>Project I</h3>
                        <p>This application is my first applicaiton.</p>
                    <ProjectLinks>
                        <Link to="">GitHub</Link>
                        <Link to="">Heroku</Link>
                    </ProjectLinks>
                    </ProjectDisplay>
                </Project>

                <Project>
                    <ProjectDisplay>
                        <h3>Project II</h3>
                        <p>This application is my first applicaiton.</p>
                    <ProjectLinks>
                        <Link to="">GitHub</Link>
                        <Link to="">Heroku</Link>
                    </ProjectLinks>
                    </ProjectDisplay>
                </Project>

                <Project>
                    <ProjectDisplay>
                        <h3>Project III</h3>
                        <p>This application is my first applicaiton.</p>
                    <ProjectLinks>
                        <Link to="">GitHub</Link>
                        <Link to="">Heroku</Link>
                    </ProjectLinks>
                    </ProjectDisplay>
                </Project>

                <Project>
                    <ProjectDisplay>
                        <h3>Project III</h3>
                        <p>This application is my first applicaiton.</p>
                    <ProjectLinks>
                        <Link to="">GitHub</Link>
                        <Link to="">Heroku</Link>
                    </ProjectLinks>
                    </ProjectDisplay>
                </Project>

            </ProjectWrapper>
        );
    }
}

export default Projects;