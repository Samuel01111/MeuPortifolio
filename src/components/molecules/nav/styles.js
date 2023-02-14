import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    .content {

        .mobile {
            display: flex;
            align-items: center;
            justify-content: space-around;

            a {
                font-size: 26px;
                color: #fff;
            }

            a:hover {
                color: #555;
            }

            a:focus {
                color: #555;
            }
        }

        .desktop {
            display: none;
        }
    }

    @media screen and (min-width: 1024px) {

        .content {

            .mobile {

                a {
                    font-size: 34px;
                }
            }
        }
    }

    @media screen and (min-width: 1728px) {

        .content {

            .mobile {
                display: none;
            }

            .desktop {
                display: flex;
                align-items: center;
                justify-content: space-around;
                
                .nav {
                    display: flex;
                    align-items: center;
                    
                    a {
                        font-size: 20px;
                        color: #fff;
                        margin: 0 1em;
                        text-decoration: none;
                    }

                    a:hover {
                        transition: 0.1s;
                        color: #555;
                    }
                }

                .social {
                    display: flex;
                    align-items: center;
                    
                    a {
                        font-size: 22px;
                        color: #2266B3;
                        margin: 0 0.2em;
                    }

                    a:hover {
                        transition: 0.1s;
                        color: #fff;
                    }
                }
            }
        }
    }
`