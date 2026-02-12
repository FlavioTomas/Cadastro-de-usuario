import styled from "styled-components";


export const ContainerUsers = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;


    @media (max-width: 750px){
        grid-template-columns: 1fr;
    }


    .edit-icon {
        color: #fff;
        cursor: pointer;
    }

    .edit-icon:hover {
        opacity: .8;
    }

    .edit-icon:active {
        opacity: .5;
    }
`


export const CardUsers = styled.div`
    background-color: #252d48;
    padding: 16px;
    border-radius: 32px;
    display: flex;
    justify-content: space-between;
    align-items:center;
    gap: 20px;
    max-width: 400px;

    h3 {
        color: #fff;
        font-size:1.5rem;
        margin-bottom: 3px;
        text-transform: capitalize;
    }

    p {
        color: #fff;
        font-size: .8rem;
    }

    input {
        background: #252d48;
        border: 1px solid #777777;
        border-radius: 5px;
        padding: 3px;
        margin: 1px;
        color: #fff;
        width:100%;
    }

    input::placeholder {
            color: #e6e6e6;
        }
`


export const TrashIcon = styled.img`
    cursor: pointer;
    padding-left: 30px;

    &:hover {
        opacity: .8;

    }

    &:active {
        opacity: .5;
    }
`


export const AvatarUser = styled.img`
    height: 80px;
    border-radius: 50%;

`


export const EditCard = styled.span`

`

export const NameInput = styled.input``
export const EmailInput = styled.input``
export const AgeInput = styled.input``
