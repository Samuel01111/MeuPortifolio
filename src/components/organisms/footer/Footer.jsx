import React from 'react';
import { Container } from './styles';

import { FaEnvelope } from 'react-icons/fa'

const Footer = () => {
    return(
        <Container>
            <div className="content">
                <span>Created by <strong>Samuel Nascimento</strong></span>
                <span><FaEnvelope id='icon'/>samuel.contato19@outlook.com</span>
            </div>
        </Container>
    )
}

export default Footer;