import React from 'react';
import { Container } from './styles';
import { FaUser, FaGraduationCap, FaFire } from 'react-icons/fa'

const Inicio = () => {
    return (
        <Container>
            <div className="content">
                <div className="mobile">
                    <div className="wrapper">
                        <div className="title">
                            <h1>Olá, me chamo <strong>Samuel Nascimento</strong></h1>
                        </div>
                        <div className="text">
                            <span>Desenvolvedor Android</span>
                        </div>
                    </div>

                    <div className="border"></div>

                    <div className="infos">
                        <div className="card about-me">
                            <div className="title">
                                <FaUser id='icon' />
                            </div>

                            <div className="text">
                                <p>Sou um desenvolvedor Android com mais de 1 ano
                                    de experiência em aplicações nativas utilizando
                                    Kotlin. Desenvolver aplicativos me ajuda a
                                    manter-me atualizado com as novas tecnologias,
                                    gerando assim um diferencial na minha atuação
                                    nos projetos dos quais participo.
                                </p>
                            </div>
                        </div>

                        <div className="card education">
                            <div className="title">
                                <FaGraduationCap id='icon' />
                            </div>

                            <div className="text">
                                <p>Participei de um processo seletivo para concorrer a uma bolsa integral para cursar Análise e Desenvolvimento de Sistemas em uma das melhores faculdades de tecnologia e fui (contemplado durante dois anos).</p>
                            </div>
                        </div>

                        <div className="card skills">
                            <div className="title">
                                <FaFire id='icon' />
                            </div>

                            <div className="text">
                                <p>Inglês Avançado | Kotlin | Java | XML | Compose | Git(BitBucket, GitHub) | POO | MVVM | SCRUM | Retrofit | Navigation | Room | Kotlin Coroutines | Junit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Inicio;