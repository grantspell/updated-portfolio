import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const StyledNavBar = styled.div`
height: 10px;
display: block;
padding-top:10px;
padding-bottom: 19px;
justify-content: space-around;
font-size: 15px;
background: rgba(255, 255, 255);
font-family: 'Josefin Slab';
text-align: right;
`
const LinkStyle = styled.div`
text-decoration: none;
text-align: right;
color: white;
opacity: 0.3;
margin: 10px;
`;

class NavBar extends Component {
    render() {
        return (
            <StyledNavBar>
            <div>
                <LinkStyle><Link to="/">Home</Link></LinkStyle>
                <LinkStyle><Link to="/projects">Projects</Link></LinkStyle>
                <LinkStyle><Link to="/about">About</Link></LinkStyle>
            </div>
            </StyledNavBar>
        );
    }
}

export default NavBar;