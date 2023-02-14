import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #111;
    
    .content {

        .mobile {
            
            .wrapper {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0 0.5em;

                .image {

                    img {
                        max-width: 200px;
                    }
                }

                .text-content {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;

                    .title {
                        margin-bottom: 0.3em;

                        span {
                            font-size: 18px;
                            font-weight: 600;
                            color: #fff;
                        }
                    }

                    .text {

                        span {
                            font-size: 12px;
                            color: #888;
                        }
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