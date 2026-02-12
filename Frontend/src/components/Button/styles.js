import styled from "styled-components";


export const Button = styled.button`
    border: ${props => props.theme === 'primary' ? 'none' : '2px solid #fff'};
    background: ${props => props.theme === 'primary' ? 'linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)' : 'transparent'};
    font-size: 1rem;
    padding: 16px 32px;
    width: fit-content;
    font-weight: 400;
    border-radius: 30px;
    cursor: pointer;
    color: #fff;
    transition: 0.3s ease-in-out;

    &:hover {
        background: ${props => props.theme === 'primary' ? 'linear-gradient(180deg, #ff6378 0%, #fe7e5d 100%)' : '#fff'};
        color: ${props => props.theme === 'primary' ? '' : '#181f36'};
        border: ${props => props.theme === 'primary' ? '' : '2px solid #ff6378'}
    }

    &:active {
        opacity: .5;
    }
`