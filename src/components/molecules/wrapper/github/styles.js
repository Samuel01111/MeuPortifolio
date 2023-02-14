import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000;
    
    .content {

        .mobile {
            
            .wrapper {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0 0.5em;

                .image {
                    margin-right: 0.5em;

                    img {
                        max-width: 25px;
                    }
                }

                .text {

                    span {
                        font-size: 14px;
                        font-weight: 500;
                        color: #fff;
                    }
                }
            }
        }
    }

    @media screen and (min-width: 1024px) {

        .content {

            .mobile {

                .wrapper {

                    .text-content {

                        .title {

                            span {
                                font-size: 22px;
                            }
                        }

                        .text {

                            span {
                                font-size: 16px;
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

                    .text-content {

                        .title {

                            span {
                                font-size: 22px;
                            }
                        }

                        .text {

                            span {
                                font-size: 16px;
                            }
                        }
                    }
                }
            }
        }
    }
`