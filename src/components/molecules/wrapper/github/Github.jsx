import React from 'react';
import { Container } from './styles';

import git from '../assets/icons8-github-64.png'

const Github = () => {
    return (
        <Container>
            <div className="content">
                <div className="mobile">
                    <div className="wrapper">
                        <div className="image">
                            <img src={git} alt="github icon" />
                        </div>

                        <div className="text">
                            <span>Api do GitHub foi consumida</span>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Github;