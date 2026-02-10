import DefaultContainer from '../../components/Container'
import DefaultImgBackground from '../../components/ImgBackground'
import UsersImg from '../../assets/users.png'
import { useNavigate } from 'react-router-dom'
import DefaultButton from '../../components/Button'
import api from '../../services/api'
import { useEffect, useState } from 'react'



function ListUsers() {
    const navigate = useNavigate()
    const [ users, setUsers ] = useState([])

    useEffect(() => {

        async function getUsers() {
            const { data } = await api.get('/users')
            setUsers(data)
        }
        getUsers()
    }, [])



    return (


        <DefaultContainer>
            <DefaultImgBackground><img src={UsersImg} alt="image-users" /></DefaultImgBackground>
            <h1>Listagem de Usuários</h1>


            {users.map( user => (
                <div>
                    <p>{user.name}</p>
                    <p>{user.email}</p>
                    <p>{user.age}</p>
                </div>
            ))}


            <DefaultButton type="button" onClick={() => navigate('/')}>Voltar</DefaultButton>
        </DefaultContainer>
    )
}

export default ListUsers