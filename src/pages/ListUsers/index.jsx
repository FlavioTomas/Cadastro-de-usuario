import DefaultContainer from '../../components/Container'
import DefaultImgBackground from '../../components/ImgBackground'
import UsersImg from '../../assets/users.png'
import { useNavigate } from 'react-router-dom'
import DefaultButton from '../../components/Button'
import api from '../../services/api'


function ListUsers(){
    const navigate = useNavigate()

    


    return(

        
        <DefaultContainer>
            <DefaultImgBackground><img src={UsersImg} alt="image-users" /></DefaultImgBackground>
            <h1>Listagem de Usuários</h1>
            <DefaultButton type="button" onClick={() => navigate('/')}>Voltar</DefaultButton>
        </DefaultContainer>
    )
}

export default ListUsers