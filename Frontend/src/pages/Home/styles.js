import styled from 'styled-components'



export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center; 
    gap: 20px;
    max-width: 90%;
`


export const ContainerInputs = styled.div`
    display: flex;
    gap:20px;
`


export const Input = styled.input`
    border-radius: 10px;
    border: 1px solid #d2dae2;
    background: white;
    padding: 12px 20px;
    outline: none;
    width: 100%;
`


export const InputLabel = styled.label`
    color: #fff;
    font-size: 0.9rem;
    font-weight: 500;

    span {
        color: #ef4f45;
        font-weight: bold;
    }

`

