import { createGlobalStyle } from 'styled-components';

export const SwitcherStyle = createGlobalStyle`
    .weather-container-extention {
	background-color: ${props => props.theme.secondaryBackground};
    align-items: center;
    align-self: flex-start;
	padding:  0.375rem;
	color: ${props => props.theme.primaryText};
    border-radius: 0.75rem;
	display: flex;
	flex-direction: row;
    font-weight: 700;
    font-size: 1.25rem;
    box-shadow: 2px 2px 15px 1px rgba(0, 0, 0, 0.3);
    @media screen and (min-width: 43rem) {
        padding: 0.75rem;
    }
}

.switch-wrapper {
	position: relative;
}

.switch-label {
	padding: 0 8px
}

.switch {
	position: absolute;
	top: 0;
	left: 0;
	width: 60px;
	height: 60px;
	z-index: 1;
	opacity: 0;
}

.switch-btn {
	position: relative;
	outline: none;
	width: 2rem;
	height: 1.1rem;
	display: block;
	cursor: pointer;
	background: ${props => props.theme.primaryBackground};
	border-radius: 1rem;
	padding: 0.125rem;
	transition: all .4s ease;

    @media screen and (min-width: 43rem) {
        width: 2.5rem;
        height: 1.375rem;
    }
}

.switch-btn::after {
	position: relative;
	left: 0;
	display: block;
	content: "";
	width: 50%;
	height: 100%;
	border-radius: 50%;
	background:  ${props => props.theme.primaryButton};
	transition: all .2s ease;
}

.switch:checked + .switch-btn {
	background:  ${props => props.theme.yellow}
}

.switch:checked + .switch-btn::after {
	left: 50%;
}
`;
