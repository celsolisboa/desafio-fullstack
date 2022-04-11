# Desafio Celso Lisboa para FullStack

### Cenário

**Como** Coordenador Acadêmico de uma Instituição de Ensino  
**Eu preciso** realizar a gestão dos cursos oferecidos pela Instituição, com seus respectivos professores, salas e horários  
**Para** que o setor de Marketing possa vender os cursos online.

### Segue instruções para realizar o desafio

1. Faça um fork deste repositório.
2. Baseado no cenário acima, modele e crie o esquema do banco de dados para armazenar as informações normalizadas.
   - Comite a imagem em jpg ou png do DER e o script do DDL.
3. Desenvolva uma API REST para realizar as operações necessárias com o banco de dados criado.
4. Baseado nas imagens `wireframe/1-login-mobile.png` e `wireframe/2-login-desktop.png`, crie a tela de login da aplicação.
   - Considere apenas uma validação simples por e-mail e senha.
   - Não existe a necessidade de CRUD de usuário, recuperação de senha ou outra operação mais complexa.
5. Baseado nas imagens `wireframe/3-cursos-mobile.png` e `wireframe/4-cursos-desktop.png`, crie a tela de visualização e deleção de cursos.
   - Deve conter as informações de horário, professor e sala.
6. Baseado nas imagens `wireframe/5-detalhe-mobile.png` e `wireframe/6-detalhe-desktop.png`, crie a tela de criação e alteração de cursos.
   - Os campos de professor e sala deverão ser um multi-select.
   - Não existe a necessidade de CRUD de professor e sala.
7. Realizar um Pull Request para este repositório, com instruções necessárias para instalação e instânciação dos sistemas.

### O que será avaliado

1. Fidelidade às instruções e ao cenário.
2. Clean Code e boas práticas.
3. Boas práticas de versionamento.

# UTILIZAÇÃO

- ### Fazer o clone desse repositório

`git clone https://github.com/gabrielsfarias/desafio-fullstack.git`

- ### Instalar as dependências

`npm install`

- ### Ir até a raiz do projeto e executar

`npx lerna run start`

- ### acessar

`http://localhost:4200`
