import React from 'react';
import { Container } from './styles';
import Nav from '../../molecules/nav/Nav'

const Header = () => {
    return (
        <Container>
            <div className="content">
                <div className="mobile">
                    <Nav />
                </div>

                <div className="desktop"></div>
            </div>
        </Container>
    )
}

export default Header;