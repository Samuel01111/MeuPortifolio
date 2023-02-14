import React, { useEffect, useState } from 'react';
import { Container } from './styles';

import Github from '../../components/molecules/wrapper/github/Github'

const Projetos = () => {

    const [repos, setRepos] = useState([])

    useEffect(() => {
        fetch('https://api.github.com/users/samuel01111/repos')
        .then(response => response.json())
        .then(data => setRepos(data))
    }, [])

    return(
        <Container>
            <div className="content">
                <div className="mobile">
                    <div className="main-title">
                        <h1>Meus projetos</h1>
                    </div>

                    <div className="cards">
                        {repos.map(item => {
                            return (
                                <div className="card">
                                    <div className="title">
                                        <h2>{item.name}</h2>
                                    </div>
                                    <div className="desc">
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="link">
                                        <a href={item.html_url} target='_blank'>Saber Mais</a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="wrapper">
                        <Github/>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Projetos;