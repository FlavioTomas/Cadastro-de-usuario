import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import api from '../../services/api'

import { Form, ContainerInputs, Input, InputLabel } from "./styles"

import UsersImg from '../../assets/users.png'
import DefaultButton from "../../components/Button"
import DefaultImgBackground from "../../components/ImgBackground"
import DefaultContainer from "../../components/Container"
import DefaultTitle from "../../components/Titles"



function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

  const registerNewUser = async () => {
    await api.post('/users', {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value
    })
  }


  const handleRegisterClick = async () => {
    try {
      console.log("Iniciando o cadastro...");

      await registerNewUser();

      console.log("Cadastro concluído com sucesso! Navegando...");

      navigate('/lista-de-usuarios');

    } catch (error) {
      console.error("Ocorreu um erro durante o cadastro:", error);
    }
  };




  return (
    <DefaultContainer>

      <DefaultImgBackground>
        <img src={UsersImg} alt="image-users" />
      </DefaultImgBackground>



      <Form action="">
        <DefaultTitle>Cadastrar Usuário</DefaultTitle>


        <ContainerInputs>
          <div>
            <InputLabel>
              Nome <span>*</span>
            </InputLabel>
            <Input type="text" placeholder="Nome do usuário" ref={inputName} />
          </div>
          <div>
            <InputLabel>
              Idade <span>*</span>
            </InputLabel>
            <Input type="number" placeholder="Idade do usuário" ref={inputAge} />
          </div>
        </ContainerInputs>


        <div style={{ width: '100%' }}>
          <InputLabel>
            E-mail <span>*</span>
          </InputLabel>
          <Input type="email" placeholder="E-mail do usuário" ref={inputEmail} />
        </div>

        <DefaultButton type="button" onClick={handleRegisterClick} theme='primary'>
          Cadastrar Usuário
        </DefaultButton>

      </Form>


      <DefaultButton type="button" onClick={() => navigate('/lista-de-usuarios')}>
        Ver lista de Usuários
      </DefaultButton>


    </DefaultContainer>
  )
}

export default Home
