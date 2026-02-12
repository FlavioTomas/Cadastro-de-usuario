import DefaultContainer from '../../components/Container'
import DefaultImgBackground from '../../components/ImgBackground'
import UsersImg from '../../assets/users.png'
import { useNavigate } from 'react-router-dom'
import DefaultButton from '../../components/Button'
import api from '../../services/api'
import { useEffect, useState } from 'react'
import DefaultTitle from '../../components/Titles'
import { AvatarUser, CardUsers, ContainerUsers, TrashIcon } from './styles'
import { IoIosMore } from "react-icons/io";

import Trash from '../../assets/trash.svg'




function ListUsers() {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])



    useEffect(() => {

        async function getUsers() {
            try {
                const { data: usersFromApi } = await api.get('/users');

                const formattedUsers = usersFromApi.map(user => {
                    return {
                        ...user,
                        name: user.name.toLowerCase()
                    };
                });
                setUsers(formattedUsers);

            } catch (error) {
                console.error("Falha ao buscar ou formatar usuários:", error);
            }
        }
        getUsers()
    }, [])




    async function deleteUsers(id) {
        await api.delete(`/users/${id}`)

        const updatedUsers = users.filter(user => user.id !== id)

        setUsers(updatedUsers)
    }





    return (


        <DefaultContainer>
            <DefaultImgBackground><img src={UsersImg} alt="image-users" /></DefaultImgBackground>
            <DefaultTitle>Listagem de Usuários</DefaultTitle>


            <ContainerUsers>
                {users.map(user => (
                    <CardUsers key={user.id}>
                        <AvatarUser src={`https://robohash.org/${user.id}.png`}></AvatarUser>
                        <div>
                            <h3>{user.name}</h3>
                            <p>{user.email}</p>
                            <p>{user.age}</p>
                        </div>
                        <TrashIcon src={Trash} onClick={() => deleteUsers(user.id)} alt='trash-icon' />
                        <IoIosMore size={38} className='edit-icon'></IoIosMore>
                    </CardUsers>
                ))}
            </ContainerUsers>


            <DefaultButton type="button" onClick={() => navigate('/')}>Voltar</DefaultButton>
        </DefaultContainer>
    )
}

export default ListUsers