import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding: 1em 0;
    background-color: #000;

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;

        span {
            margin: 0.1em 0;
            display: flex;
            align-items: center;

            font-size: 15px;
            font-weight: 500;
            color: #fff;

            strong {
                margin-left: 0.2em;
                color: #2266B3;
            }

            #icon {
                font-size: 14px;
                margin-right: 0.3em;
            }
        }
    }

    @media screen and (min-width: 1024px) {

        .content {

            span {
                font-size: 18px;
            }
        }
    }

    @media screen and (min-width: 1728px) {

        .content {

            span {
                font-size: 18px;
            }
        }
    }
`