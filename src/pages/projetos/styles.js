import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    .content {

        .mobile {
            display: flex;
            flex-direction: column;
            justify-content: center;
            max-width: 100%;
            max-height: 100%;

            .main-title {
                margin: 0.5em 0;
                padding: 0 0.5em;

                h1 {
                    font-size: 30px;
                    text-transform: capitalize;
                }
            }

            .cards {
                display: flex;
                flex-direction: column;
                align-items: center;
                max-width: 100%;
                max-height: 100%;
                padding: 0.5em;

                .card {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    padding: 1em;
                    margin: 0.5em 0;
                    width: 100%;
                    height: 100%;

                    border: 1px solid #CFCFCF;
                    box-shadow: 0px 0px 3px lightgray;
                    background-color: #fff;

                    .title {

                        h2 {
                            text-transform: capitalize;
                            font-size: 20px;
                            color: #2266B3;
                        }
                    }

                    .desc {
                        max-width: 100%;
                        max-height: 100%;
                        margin: 0.5em 0;
                        margin-bottom: 1em;

                        p {
                            font-size: 15px;
                            font-weight: 500;
                            color: #555;
                        }
                    }

                    .link {
                        max-width: 100%;
                        max-height: 100%;

                        a {
                            text-decoration: none;
                            font-size: 14px;
                            font-weight: 600;
                            padding: 0.5em;
                            
                            border-radius: 4px;
                            background-color: #000;
                            color: #fff;
                        }
                    }
                }
            }

            .wrapper {
                width: 100%;
            }
        }

        .desktop {
            display: none;
        }
    }

    @media screen and (min-width: 1024px) {

        .content {

            .mobile {
                align-items: center;

                .main-title {
                    width: 100%;

                    h1 {
                        font-size: 36px;
                    }
                }

                .cards {

                    .card {
                        width: 70%;
                        justify-content: start;

                        .title {

                            h2 {
                                font-size: 22px;
                            }
                        }

                        .desc {

                            p {
                                font-size: 16px;
                            }
                        }

                        .link {
                            margin: 0.5em 0;
                            
                            a {
                                padding: 0.8em;
                            }
                        }
                    }
                }
            }
        }
    }

    @media screen and (min-width: 1728px) {

        .content {

            .mobile {
                
                .cards {

                    .card {
                        width: 100%;

                        .title {

                            h2 {
                                font-size: 24px;
                            }
                        }

                        .desc {

                            p {
                                font-size: 17px;
                            }
                        }
                    }
                }
            }
        }
    }
`