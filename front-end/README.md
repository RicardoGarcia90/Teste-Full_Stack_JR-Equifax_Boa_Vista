# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Descrição da Aplicação: Star Wars the Search!

Essa é uma aplicação Web Full Stack desenvolvida utilizando no front-end: React.js com uso de ferramentas como axios, react-router-dom, useContext e useState. E no back-end: Python e Flask.

Ao acessar a aplicação você se depara com o nome da aplicação “Star Wars the Search” uma referência a busca que pode ser realizada, e logo abaixo trago um texto explicativo sobre o que pesquisar.
Temos um botão para pesquisar informações sobre os personagens e logo ao acessar a aplicação já trará uma listagem distribuída em 2 páginas com 10 personagens por página de todos os personagens da saga Star Wars.
Os dados dos personagens são demonstrados por cards para facilitar a visualização e traz as principais informações de cada um.
Para trazer as informações dos personagens efetuei uma chamada na API "https://swapi.dev/api/people/"
Uma outra função da aplicação é a possibilidade de adicionar e remover um personagem da sua lista de favoritos, para isso basta localizar o card do personagem e clicar no símbolo + para adicionar aos Favoritos , e para remover basta clicar no símbolo – para os casos que já foram previamente adicionados.
Para efetuar a criação da página de favoritos utilizei o armazenamento local com localhost.
Busquei utilizar algumas técnicas de HTML, CSS e Javascript para criar efeitos e estilo de botões e estética do site buscando melhorar a experiência de uso.

---

# 2- Utilizando os requisitos da API de favoritos do exercício 1, crie o modelo relacional para um banco de dados.

Mesmo não tendo neste momento o processo de autenticação , pensei em fazer um modelo relacional entre usuários e seus favoritos , de forma simples seria como abaixo:

Tabela Usuários
ID (PK)
Nome
Email Senha

Tabela Favoritos
ID (PK)
ID_Usuario (FK)
Personagem
Ativo (True/False)

Criação tabela Usuário
![criacaoTabelaUsuario](https://photos.google.com/album/AF1QipOEKjbIp9yhjiFzz8xonRhqB7ju2w8N7BbkIYOk/photo/AF1QipM9p-FcebK2VxQIKh3XGR_aZCkZOyAbG_bCbm0p)

Criação tabela Favoritos
