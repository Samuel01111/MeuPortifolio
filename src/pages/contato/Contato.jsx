import React, { useState } from 'react';
import { Container } from './styles';
import { CopyToClipboard } from 'react-copy-to-clipboard'

import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaYoutube, FaCopy } from 'react-icons/fa'

const Contato = () => {

    return (
        <Container>
            <div className="content">
                <div className="mobile">
                    <div className="main-title">
                        <h1>Contato</h1>
                    </div>

                    <div className="card linkedin">
                        <div className="title">
                            <FaLinkedin id='icon' />
                        </div>

                        <div className="text">
                            <a href="https://www.linkedin.com/in/samuelnascimento01111/" target='_blank'>Samuel Nascimento</a>
                        </div>

                    </div>

                    <div className="card github">
                        <div className="title">
                            <FaGithub id='icon' />
                        </div>

                        <div className="text">
                            <a href="https://github.com/Samuel01111" target='_blank'>Samuel01111</a>
                        </div>

                    </div>

                    <div className="card email">
                        <div className="title">
                            <FaEnvelope id='icon' />
                        </div>

                        <div className="text">
                            <span>samuel.contato19@outlook.com</span>

                            <CopyToClipboard text={'samuel.contato19@outlook.com'}>
                                <FaCopy id='icon' />
                            </CopyToClipboard>
                        </div>

                    </div>

                    <div className="card phone">
                        <div className="title">
                            <FaPhone id='icon' />
                        </div>

                        <div className="text">
                            <span>+55 11 99370-0887</span>

                            <CopyToClipboard text={'+55 11 99370-0887'}>
                                <FaCopy id='icon' />
                            </CopyToClipboard>
                        </div>

                    </div>

                    <div className="card youtube">
                        <div className="title">
                            <FaYoutube id='icon' />
                        </div>

                        <div className="text">
                            <a href="">Samuel Nascimento</a>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Contato;