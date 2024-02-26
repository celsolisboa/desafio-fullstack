# Desafio Celso Lisboa para FullStack

O projeto tem como objetivo facilitar a administração dos cursos oferecidos por uma instituição educacional, permitindo o cadastro, atualização e exclusão de cursos, bem como a gestão de professores, salas e horários associados a cada curso. Essa plataforma foi desenvolvida para atender às necessidades do setor de Marketing da instituição, possibilitando a venda dos cursos online de forma eficiente.

## Tecnologias utilizadas

**Frontend:** JavaScript, ReactJS e CSS puro

**Backend:** NodeJs e Express

**Banco de Dados:** PostgreSQL


## Funcionalidades principais

**Login de usuário:**
O acesso a plataforma somente é feito através de email e senha Conforme abaixo:
**Email:** test@example.com
**Senha:** senha123

**Cadastro de Cursos:**
Permite o cadastro de novos cursos, incluindo informações como nome do curso, professores associados, salas e horários disponíveis

**Delação de Cursos:**
Permite operação para deletar um curso específico com apenas um clique no ícone de lixeira.

**Interface Intuitiva e Responsiva:**
O frontend foi desenvolvido utilizando React, proporcionando uma interface de usuário amigável e responsiva para facilitar a interação com o sistema.

## Recursos Adicionais

**Máscaras de Entrada de Dados:**
Utilizou-se a biblioteca react-input-masked para adicionar máscaras em campos de entrada de dados, garantindo a formatação correta dos dados inseridos pelos usuários.

**Seleção de Múltiplas Opções:**
Através da biblioteca react-multi-select-component, os usuários podem selecionar várias opções de uma lista em campos como seleção de professores e salas.


### Instruções

## Vá para o diretório do projeto

```bash
  cd desafio-fullstack
```

Instale as dependências

```bash
  cd client
  npm install
```

```bash
  cd server
  npm install
```

Inicie o cliente

```bash
  cd client
  npm start
```

Inicie o servidor

```bash
  //open new terminal
  cd server
  node index
```

