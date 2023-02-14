import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;

    .content {

        .mobile {
            display: flex;
            flex-direction: column;
            align-items: center;
            max-width: 100%;
            max-height: 100%;

            .wrapper {
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 100%;
                height: 100%;
                margin: 1em 0;
                text-align: center;

                .title {

                    h1 {
                        font-size: 44px;

                        strong {
                            color: #2266B3;
                        }
                    }
                }

                .text {
                    margin-top: 0.5em;

                    span {
                        font-size: 16px;
                        font-weight: 500;
                        color: #000;
                        opacity: 50%;
                    }
                }
            }

            .border {
                height: 1px;
                width: 90%;
                margin: 2em 0;
                background-color: #C0C0C0;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .border::before {
                content: 'Saiba Mais';
                color: #555;
                font-size: 14px;
                padding: 0 1em;
                background-color: #F5F5F5;
            }

            .infos {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 100%;
                margin: 1em 0;
                margin-bottom: 2em;
                padding: 0 1em;

                .card {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    max-height: 100%;
                    padding: 0.5em;
                    margin: 1em 0;

                    border: 1px solid #CFCFCF;
                    box-shadow: 0px 0px 3px lightgray;
                    background-color: #fff;

                    .title {
                        margin-top: 0.5em;
                        margin-bottom: 0.5em;

                        #icon {
                            font-size: 22px;
                            color: #2266B3;
                        }
                    }

                    .text {

                        p {
                            font-size: 16px;
                            text-align: justify;
                            color: #888;
                        }
                    }
                }
            }
        }

        .desktop {
            display: none;
        }
    }

    @media screen and (min-width: 1024px) {

        .content {

            .mobile {

                .wrapper {

                    .title {

                        h1 {
                            margin: 0 auto;
                            width: 70%;
                            font-size: 70px;
                        }
                    }

                    .text {

                        span {
                            font-size: 22px;
                        }
                    }
                }

                .border::before {
                    font-size: 18px;
                }

                .infos {

                    .card {
                        width: 70%;
                        height: 20vh;

                        .title {
                            margin-bottom: 0;
                            
                            #icon {
                                font-size: 32px;
                            }
                        }

                        .text {
                            margin-top: 0.5em;

                            p {
                                font-size: 17px;
                                opacity: 80%;
                                font-weight: lighter;
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

                .wrapper {

                    .title {

                        h1 {
                            width: 40%;
                            font-size: 70px;
                        }
                    }
                }

                .infos {

                    .card {
                        width: 40%;
                        height: 100%;

                        .title {

                            #icon {
                                font-size: 30px;
                            }
                        }

                        .text {

                            p {
                                font-size: 18px;
                                font-weight: lighter;
                            }
                        }
                    }
                }
            }
        }
    }   
`