import DefaultContainer from '../../components/Container'
import DefaultImgBackground from '../../components/ImgBackground'
import UsersImg from '../../assets/users.png'
import { useNavigate } from 'react-router-dom'
import DefaultButton from '../../components/Button'
import api from '../../services/api'
import { useEffect, useState } from 'react'
import DefaultTitle from '../../components/Titles'
import { AgeInput, AvatarUser, CardUsers, ContainerUsers, EmailInput, NameInput, TrashIcon } from './styles'
import { IoIosMore } from "react-icons/io";
import { FaCheck, FaTimes } from "react-icons/fa";

import Trash from '../../assets/trash.svg'




function ListUsers() {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    const [editedUser, setEditedUser] = useState({ name: '', email: '', age: '' })



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


    const [editMode, setEditMode] = useState()
    const handleEditMode = (user) => {
        setEditMode(user.id)
        setEditedUser({ name: user.name, email: user.email, age: user.age })
    }



    const cancelEditMode = () => {
        setEditMode(null)
    }



    const editUser = async (id) => {
        const updatedUserData = {
            name: editedUser.name,
            email: editedUser.email,
            age: parseInt(editedUser.age)
        }

        const { data: updatedUserFromApi } = await api.put(`/users/${id}`, updatedUserData)

        const updatedUsers = users.map(user => user.id === id ? updatedUserFromApi : user)

        setUsers(updatedUsers)
        setEditMode(null) 
    }


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedUser(prevState => ({ ...prevState, [name]: value }))
    }




    return (


        <DefaultContainer>
            <DefaultImgBackground><img src={UsersImg} alt="image-users" /></DefaultImgBackground>
            <DefaultTitle>Listagem de Usuários</DefaultTitle>


            <ContainerUsers>
                {users.map(user => (
                    <CardUsers key={user.id}>
                        <AvatarUser src={`https://robohash.org/${user.id}.png`}></AvatarUser>
                        {editMode === user.id ? (
                            <>
                                <div className='edit-mode'>
                                    <NameInput
                                        type="text"
                                        name="name"
                                        value={editedUser.name}
                                        onChange={handleInputChange}
                                    />
                                    <EmailInput
                                        type="email"
                                        name="email"
                                        value={editedUser.email}
                                        onChange={handleInputChange}
                                    />
                                    <AgeInput
                                        type="number"
                                        name="age"
                                        value={editedUser.age}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div>
                                    <h3>{user.name}</h3>
                                    <p>{user.email}</p>
                                    <p>{user.age} Anos</p>
                                </div>
                            </>
                        )}
                        {editMode === user.id ? (
                            <>
                                <FaCheck size={38} onClick={() => editUser(user.id)} className='edit-icon'></FaCheck>
                                <FaTimes size={38} onClick={cancelEditMode} className='edit-icon'></FaTimes>
                            </>
                        ) : (
                            <>
                                <TrashIcon size={38} src={Trash} onClick={() => deleteUsers(user.id)} alt='trash-icon' />
                                <IoIosMore size={38} className='edit-icon' onClick={() => handleEditMode(user)}></IoIosMore>
                            </>
                        )}
                    </CardUsers>
                ))
                }
            </ContainerUsers >


            <DefaultButton type="button" onClick={() => navigate('/')}>Voltar</DefaultButton>
        </DefaultContainer >
    )
}

export default ListUsers