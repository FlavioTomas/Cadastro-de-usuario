# Cadastro de Usuários (Full Stack) 🚀

Este é um projeto de estudo desenvolvido para praticar a integração entre Frontend e Backend (MERN Stack), operações CRUD e manipulação de banco de dados com Prisma.

O sistema permite o cadastro, listagem, edição e exclusão de usuários em tempo real.

## 📸 Telas do Sistema

### Cadastro de Usuário

![Tela de Cadastro](./Frontend/src/assets/preview1.png)

### Listagem de Usuários

![Tela de Listagem](./Frontend/src/assets/preview2.png)

## 🛠️ Tecnologias Utilizadas

### Frontend (Pasta `Frontend`)

* **React** (Vite)
* **Styled Components** (CSS-in-JS)
* **Axios** (Consumo de API)
* **React Router DOM** (Navegação)

### Backend (Pasta `Backend`)

* **Node.js**
* **Express**
* **Prisma ORM**
* **MongoDB** (Banco de Dados)

---

## 📂 Estrutura do Projeto

O projeto está organizado em um monorepo:

~~~bash
/
├── Backend/   # API, Servidor e Banco de Dados
└── Frontend/  # Interface Web (React)
~~~

---

## 🚀 Como rodar o projeto

Você precisará de dois terminais abertos: um para o servidor (Backend) e outro para o site (Frontend).

### 1️⃣ Configurando o Backend

No primeiro terminal, acesse a pasta do backend e instale as dependências:

~~~bash
cd Backend
npm install
~~~

**Configuração do Banco de Dados:**
Crie um arquivo `.env` dentro da pasta `Backend` e adicione a URL do seu MongoDB:

~~~env
DATABASE_URL="mongodb+srv://SEU_USUARIO:SUA_SENHA@cluster.mongodb.net/SEU_BANCO?retryWrites=true&w=majority"
~~~

Inicie o servidor:

~~~bash
node server.js
# O servidor rodará na porta 3000 🚀
~~~

### 2️⃣ Configurando o Frontend

Abra um **segundo terminal**, acesse a pasta do frontend e instale as dependências:

~~~bash
cd Frontend
npm install
~~~

Inicie a aplicação React:

~~~bash
npm run dev
~~~

O terminal mostrará um link (geralmente `http://localhost:5173`). Clique nele para acessar o projeto no navegador.

---

## ✨ Funcionalidades

* [x] **Cadastro:** Criação de novos usuários com validação básica.
* [x] **Listagem:** Exibição de todos os usuários cadastrados no MongoDB.
* [x] **Edição:** Atualização de dados (Nome, Idade, Email).
* [x] **Exclusão:** Remoção de usuários do banco de dados.
* [x] **Responsividade:** Layout adaptável.

## 🔗 Rotas da API

| Método | Rota | Descrição |
| --- | --- | --- |
| GET | `/users` | Lista todos os usuários |
| POST | `/users` | Cria um novo usuário |
| PUT | `/users/:id` | Edita um usuário existente |
| DELETE | `/users/:id` | Deleta um usuário |

---

## 👨‍💻 Autor

Feito por **Flávio Tomás Peña Villa**.
Projeto de estudo Full Stack.
