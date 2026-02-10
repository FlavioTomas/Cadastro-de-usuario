import { useRef } from "react"
import api from '../../services/api'

import { Title, Form, ContainerInputs, Input, InputLabel } from "./styles"

import UsersImg from '../../assets/users.png'
import DefaultButton from "../../components/Button"
import DefaultImgBackground from "../../components/ImgBackground"
import DefaultContainer from "../../components/Container"



function Home() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()



  const registerNewUser = async () => {
    await api.post('/users', {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value
    })
  }




  return (
    <DefaultContainer>

      <DefaultImgBackground>
        <img src={UsersImg} alt="image-users" />
      </DefaultImgBackground>



      <Form action="">
        <Title>Cadastrar Usuário</Title>


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

        <DefaultButton type="button" onClick={registerNewUser} theme='primary'>
          Cadastrar Usuário
        </DefaultButton>

      </Form>


      <DefaultButton type="button">
        Ver lista de Usuários
      </DefaultButton>


    </DefaultContainer>
  )
}

export default Home
