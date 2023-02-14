import React from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom'

import { FaEnvelope, FaHome, FaCode, FaGithub, FaLinkedin } from 'react-icons/fa'

const Nav = () => {
    return (
        <Container>
            <div className="content">
                <div className="mobile">
                    <Link to='/Contato'><FaEnvelope id='icon' /></Link>
                    <Link to='/'><FaHome id='icon' /></Link>
                    <Link to='/Projetos'><FaCode id='icon' /></Link>
                </div>

                <div className="desktop">
                    <div className="nav">
                        <Link to='/'>Início</Link>
                        <Link to='/Contato'>Contato</Link>
                        <Link to='/Projetos'>Projetos</Link>
                    </div>

                    <div className="social">
                        <a href="https://github.com/doguebart" target='_blank'><FaGithub id='icon' /></a>
                        <a href="https://www.linkedin.com/in/douglaswelber/" target='_blank'><FaLinkedin id='icon' /></a>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Nav;