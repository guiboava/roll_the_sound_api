Roll The Sound, MUSIC STORE API
===============

Projeto de backend desenvolvido com NestJS, TypeORM e PostgreSQL para gerenciamento de uma loja de instrumentos musicais.
Projeto complementar: https://github.com/guiboava/roll_the_sound.

--------------------------------------------------
TECNOLOGIAS UTILIZADAS
--------------------------------------------------
- NestJS
- TypeORM
- PostgreSQL
- class-validator
- mapped-types

--------------------------------------------------
FUNCIONALIDADES PRINCIPAIS
--------------------------------------------------

1. ARTISTAS (/artists)
   - GET    /artists           => Lista todos os artistas
   - GET    /artists/:id       => Detalha um artista
   - POST   /artists           => Cria um artista
   - PUT    /artists/:id       => Atualiza um artista
   - DELETE /artists/:id       => Remove um artista

2. PRODUTOS (/products)
   - GET    /products           => Lista todos os produtos
   - GET    /products/:id       => Detalha um produtos
   - POST   /products           => Cria um produtos
   - PUT    /products/:id       => Atualiza um produtos
   - DELETE /products/:id       => Remove um produtos

3. OPINIÕES (/opinions)
   - GET    /opinions           => Lista todos os opiniões
   - GET    /opinions/:id       => Detalha um opiniões
   - POST   /opinions           => Cria um opiniões
   - PUT    /opinions/:id       => Atualiza um opiniões
   - DELETE /opinions/:id       => Remove um opiniões

4. PEDIDOS (/orders)
   - GET    /orders           => Lista todos os pedidos
   - GET    /orders/:id       => Detalha um pedidos
   - POST   /orders           => Cria um pedidos
   - PUT    /orders/:id       => Atualiza um pedidos
   - DELETE /orders/:id       => Remove um pedidos

5. ITENS DO PEDIDO (/orderItems)
   - GET    /orderItems           => Lista todos os item de pedido
   - GET    /orderItems/:id       => Detalha um item de pedido
   - POST   /orderItems           => Cria um item de pedido
   - PUT    /orderItems/:id       => Atualiza um item de pedido
   - DELETE /orderItems/:id       => Remove um item de pedido

--------------------------------------------------
COMO RODAR O PROJETO LOCALMENTE
--------------------------------------------------

1. Clonar o repositório:
   git clone git@github.com:guiboava/roll_the_sound_api.git

2. Entrar na pasta e instalar dependências:
   cd roll_the_sound_api
   npm install

3. Criar um arquivo .env com a configuração do banco:
   DB_HOST=localhost
   DB_PORT=5432
   DB_USERNAME=postgres
   DB_PASSWORD=postgres
   DB_DATABASE=roll_the_sound_db

4. Rodar as migrations:
   npm run typeorm migration:run

5. Iniciar a aplicação:
   npm run start:dev

--------------------------------------------------
AUTOR
--------------------------------------------------
Guilherme da Silva Boava

--------------------------------------------------
LICENÇA
--------------------------------------------------
MIT License
