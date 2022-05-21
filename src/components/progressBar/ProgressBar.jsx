import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    progress {
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
    }

    progress::-webkit-progress-bar {
        height: 1rem;
        background-color: ${props => props.theme.primaryBackground};
        border-radius: 1rem;
    }

    progress::-webkit-progress-value {
        background-color: ${props => props.theme.yellow};
        border-radius: 1rem;
    }
`;

const ProgressBar = ({ value }) => {
    return (
        <Container>
            <progress value={value} max='100' />
        </Container>
    );
};

export default ProgressBar;
