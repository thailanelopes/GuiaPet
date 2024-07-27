# Guia Pet Tutors

Guia Pet Tutors é um site para tutores de animais de estimação que oferece dicas de produtos e serviços, um guia de emergência e primeiros socorros, e um planejador de atividades e treinamento para pets. Este projeto é construído utilizando a stack MERN (MongoDB, Express, React, Node.js).

## Funcionalidades

1. **Dicas de Produtos e Serviços para Pets**
   - Oferece dicas de produtos e serviços para pets, como brinquedos, alimentos, roupas e serviços de pet care.

2. **Guia de Emergência e Primeiros Socorros**
   - Guia interativo de primeiros socorros para pets, com informações sobre como agir em emergências como intoxicações, lesões ou doenças súbitas.

3. **Planejador de Atividades e Treinamento**
   - Ajuda os tutores a planejarem atividades diárias e treinos para seus pets, com tutoriais de treinamento.

## Tecnologias Utilizadas

- MongoDB
- Express
- React
- Node.js

## Configuração do Projeto

### Backend

1. **Clone o repositório:**
   ```bash
   git clone git@github.com:thailanelopes/GuiaPet.git
   cd GuiaPet/backend

2.  **Instale as dependências:**
   ```bash
   npm install


3. **Configure as variáveis de ambiente:**
 **Crie um arquivo .env na pasta backend com o seguinte conteúdo:**
   ```bash
   MONGODB_URI=your_mongodb_connection_string


4. **Inicie o Servidor**
   ```bash
   MONGODB_URI=your_mongodb_connection_string

5. **Instale as dependências:**
   ```bash
    npm start


## Testando o Projeto
### Testar Backend
  **Certifique-se de que o MongoDB está rodando.**

- Use ferramentas como Postman ou Insomnia para testar as rotas do backend:
- GET /api/products: Retorna todos os produtos.
- POST /api/products: Cria um novo produto.
- GET /api/emergency: Retorna todas as emergências.
- POST /api/emergency: Cria uma nova emergência.
- GET /api/activities: Retorna todas as atividades.
- POST /api/activities: Cria uma nova atividade.
- Testar Frontend
  **Certifique-se de que o backend está rodando em http://localhost:5000.**
- Abra o navegador e acesse http://localhost:3000.
- Navegue pelo site e teste as funcionalidades:
- Dicas de Produtos e Serviços: Verifique se os produtos estão sendo listados corretamente.
- Guia de Emergência: Verifique se as informações de emergência estão sendo exibidas.
- Planejador de Atividades: Verifique se as atividades estão sendo exibidas.
- Estrutura de Pastas
- plaintext
- Copiar código
GuiaPet/
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   ├── server.js
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── .gitignore
│   ├── package.json
│   ├── .env
│   └── ...
│
├── .gitignore
└── README.md

## Contribuindo
1. Fork este repositório

2. **Crie uma branch:**
   ```bash
   git checkout -b sua-branch

3.  **Faça suas alterações e faça o commit:**
   ```bash
   git commit -m 'Descrição das alterações'

4. **Envie suas alterações:**
   ```bash
   git push origin sua-branch

5. Abra um Pull Request.