import React from 'react';
import { Container } from './styles';

import tel from '../assets/icons8-iphone-x-64.png'

const Wrapper = () => {
    return(
        <Container>
            <div className="content">
                <div className="mobile">
                    <div className="wrapper">
                        <div className="image">
                            <img src={tel} alt="phone icon" />
                        </div>
                        <div className="text-content">
                            <div className="title">
                                <span>Desenvolvido com Mobile-First</span>
                            </div>
                            <div className="text">
                                <span>Acesse com dispositivos de diferentes resoluções para uma nova perspectiva</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Wrapper;