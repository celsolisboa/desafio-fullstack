# Desafio APP Liga Edu

- **Autor** Milad Roghanian
- **Data de Conclusão (v final)** 25/04/2021
- [Link de Acesso ao Projeto no GitHub] (https://github.com/miladr100/desafio-fullstack)
- [Link de Acesso ao App Executando (Somente Front)] (https://appligaedu.vercel.app/)

### Usabilidade

- Sistema desenvolvido para realizar CRUD de Cursos para cada usuário cadastrados
- Basta criar um usuário no sistema e acessar a área de cursos do sistema.

## Projeto Front Angular

### Segue instruções para rodar o projeto Angular

#### Também disponível em https://appligaedu.vercel.app

1. Clone este repositório em sua máquina
2. Para os próximos passos é necessário ter em sua máquina o angular cli, veja https://angular.io/cli
3. Basta entrar na pasta onde está o projeto front-web, em packages/front-web
4. Primeiramente para instalar as dependências necessárias:
   - Se estiver usando yarn (usado durante a criacação do projeto), basta executar: yarn install
   - Se estiver usando npm, basta executar: npm install
5. Para executar o projeto em uma porta local (padrão 4200):
   - Se estiver usando yarn, basta executar: yarn start
   - Se estiver usando npm, basta executar: npm start
6. Verifique o endereço da API modificando a variável API_URL na pasta src/environments/environments.ts

### Segue instruções para rodar o servidor SQLite e a API Express

1. Clone este repositório em sua máquina
2. Basta entrar na pasta onde está o projeto server, em packages/server
3. Primeiramente para instalar as dependências necessárias:
   - Se estiver usando yarn (usado durante a criacação do projeto), basta executar: yarn install
   - Se estiver usando npm, basta executar: npm install
4. Deve-se rodar as migrations para gerar as tabelas e o banco SQlite:
   - Se estiver usando yarn: yarn typeorm migration:run
   - Se estiver usando npm: npm typeorm migration:run
5. Para executar o servidor em uma porta local (padrão 3001):
   - Se estiver usando yarn, basta executar: yarn server
   - Se estiver usando npm, basta executar: npm server

#### Dúvidas (miladr100@gmail.com)

👊 Obrigado!
