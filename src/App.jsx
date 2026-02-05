import { Title, Container, ImgBackground, Form, ContainerInputs, Input, Button, InputLabel } from "./styles"


function Home() {

  return (
    <Container>

      <ImgBackground>
        <img src="" alt="" />
      </ImgBackground>



      <Form action="">
        <Title>Vite + React</Title>

        <ContainerInputs>
          <div>
            <div>
              <InputLabel>
                Nome<span>*</span>
              </InputLabel>
              <Input type="text" placeholder="Nome do usuário" />
            </div>
            <div>
              <InputLabel>
                Idade<span>*</span>
              </InputLabel>
              <Input type="number" placeholder="Idade do usuário" />
            </div>
          </div>


          <div>
            <InputLabel>
              E-mail<span>*</span>
            </InputLabel>
            <Input type="email" placeholder="E-mail do usuário" />
          </div>
        </ContainerInputs>

        <Button>Cadastrar Usuário</Button>

      </Form>




    </Container>
  )
}

export default Home
