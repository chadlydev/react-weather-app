import styled from 'styled-components';

export const CloudsBg = () => {
    return (
        <CloudsBgContainer>
            <TopLeft>
                <Cloud />
            </TopLeft>
            <TopRight>
                <Cloud />
            </TopRight>
            <BottomLeft>
                <Cloud />
            </BottomLeft>
            <BottomRight>
                <Cloud />
            </BottomRight>
        </CloudsBgContainer>
    );
};

const CloudsBgContainer = styled.div`
    position: relative;
`;

const TopLeft = styled.div`
    position: absolute;
    left: -70vw;
    bottom: 8vw;

    svg {
        width: 55vw;
    }

    @media screen and (min-width: 43rem) {
        left: -70vw;
        bottom: -13vw;
    }

    @media screen and (min-width: 62rem) {
        left: -23rem;
        bottom: 7rem;

        svg {
            width: 150%;
        }
    }
`;
const TopRight = styled.div`
    position: absolute;
    right: -80vw;
    bottom: 7vw;

    svg {
        width: 60vw;
    }

    @media screen and (min-width: 43rem) {
        right: -80vw;
        bottom: -15vw;
    }

    @media screen and (min-width: 62rem) {
        right: -16rem;
        bottom: 8rem;

        svg {
            width: 150%;
        }
    }
`;
const BottomLeft = styled.div`
    position: absolute;
    left: -80vw;
    top: -18vw;

    svg {
        width: 60vw;
    }

    @media screen and (min-width: 43rem) {
        left: -80vw;
        top: -10vw;
    }

    @media screen and (min-width: 62rem) {
        left: -25rem;
        top: -13rem;

        svg {
            width: 150%;
        }
    }
`;

const BottomRight = styled.div`
    position: absolute;
    right: -70vw;
    top: -14vw;
    svg {
        width: 50vw;
    }

    @media screen and (min-width: 43rem) {
        right: -70vw;
        top: -2vw;
    }

    @media screen and (min-width: 62rem) {
        right: -18rem;
        top: -13rem;

        svg {
            width: 150%;
        }
    }
`;

const Cloud = () => {
    return (
        <svg
            width='223'
            height='240'
            viewBox='0 0 223 240'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M177.969 107.599C177.99 106.973 178 106.345 178 105.714C178 74.9441 153.152 50 122.5 50C98.1849 50 77.5218 65.6968 70.0176 87.5468C64.6283 84.7236 58.4999 83.1274 52 83.1274C30.4609 83.1274 13 100.656 13 122.278C13 143.9 30.4609 161.429 52 161.429L122.575 161.429H164.5C180.24 161.429 193 148.619 193 132.818C193 121.908 186.917 112.424 177.969 107.599Z'
                fill='#E7E7EB'
                fillOpacity='0.03'
            />
        </svg>
    );
};
