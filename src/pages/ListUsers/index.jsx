import Button from '../../components/Button'
import DefaultContainer from '../../components/Container'
import DefaultImgBackground from '../../components/ImgBackground'
import UsersImg from '../../assets/users.png'




function ListUsers(){

    return(

        
        <DefaultContainer>
            <DefaultImgBackground><img src={UsersImg} alt="image-users" /></DefaultImgBackground>
            <h1>Listagem de Usuários</h1>
            <Button>Voltar</Button>
        </DefaultContainer>
    )
}

export default ListUsers