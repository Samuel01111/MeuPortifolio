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
            padding: 0 0.5em;

            .main-title {
                margin: 0.5em 0;

                h1 {
                    font-size: 30px;
                    text-transform: capitalize;
                }
            }

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

                    #icon {
                        font-size: 24px;
                        color: #2266B3;
                    }
                }

                .text {
                    margin: 1.5em 0;

                    a {
                        text-transform: capitalize;
                        font-size: 18px;
                        font-weight: 500;
                        color: #888;
                    }

                    span {
                        font-size: 18px;
                        font-weight: 500;
                        color: #888;
                    }
                }
            }

            .email {

                .text {
                    display: flex;
                    align-items: center;
                    
                    #icon {
                        cursor: pointer;
                        font-size: 18px;
                        margin-left: 1em;
                        color: #2266B3;
                    }
                }
            }

            .phone {

                .text {
                    display: flex;
                    align-items: center;
                    
                    #icon {
                        cursor: pointer;
                        font-size: 18px;
                        margin-left: 1em;
                        color: #2266B3;
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
                align-items: center;
                
                .main-title {
                    width: 100%;

                    h1 {
                        font-size: 36px;
                    }
                }

                .card {
                    width: 70%;
                    margin: 1em 0;

                    .title {

                        #icon {
                            font-size: 32px;
                        }
                    }

                    .text {

                        span {
                            font-size: 22px;
                        }

                        a {
                            font-size: 22px;
                        }
                    }
                }

                .youtube {
                    margin-bottom: 5.5em;
                }
            }
        }
    }

    @media screen and (min-width: 1728px) {

        .content {

            .mobile {

                .card {
                    width: 50%;
                }
            }
        }
    }
`