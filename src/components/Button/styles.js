import styled from "styled-components";


export const Button = styled.button`
        border: none;
    background: linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%);
    font-size: 1rem;
    padding: 16px 32px;
    width: fit-content;
    border-radius: 30px;
    cursor: pointer;
    color: #fff;
    transition: 0.3s ease-in-out;

    &:hover {
        background: linear-gradient(180deg, #ff6378 0%, #fe7e5d 100%);
    }

    &:active {
        opacity: .5;
    }
`