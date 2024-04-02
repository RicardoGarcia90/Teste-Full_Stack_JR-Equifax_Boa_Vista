# Teste-Full_Stack_JR-Equifax_Boa_Vista
Teste técnico realizado em processo seletivo para a vaga de Desenvolvedor Full Stack Júnior na empresa Equifax Boa Vista

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
![criacaoTabelaUsuario](https://lh3.googleusercontent.com/pw/AP1GczNhmiV0VODAJdPUbe_0wcI1IOCvpus-TqS5_ZCypu5jGyG7M8cqnlqDbzRYIR9Ssf0oUT4QW1vmrD5DHlK-X64kXw8lWlj7UUX0JngjdUazZnFzT-QJIZ9l5xT3LGc4zQHozJQeGvE3hSWWhh_OyAQKv4vcPk0Ogqlm8iZGwCt9UjskPB2SP8odjFwyL1AydS80V37NuVG16Fst2oLVJ5BBxO3fQMWWvCy4EiC_p1d2AaXqJPXDA9rCOwa_vFOAdOeR7nalx5YKUnjsBM7Fvx6CVTrmW-c2j1LBFGNeezeSUqi13YRw9I2ylBkGQ5nM-kMc2lAv8HT_TSF2_I0t9kg6JFM5kVx0ZOvz02XLSWOTplx9lZ6ELi9-bNpBb55_Wii-ApaloFPceX6Vq3KaPQywSnR8jre33ZG54XwX3VSIioiOZm2TkHVW40gNUohFMzz3bMY14MAuLV2iR-PFVqHVspZJt1xAGR3nX_-VJuKoHglQuzYEDpKnIPwU5pZ-EhT3_vFnNAtinmdTAu2qDVD5-AP176Od-kst7QAMVSFtWop9doK6WQ5oMcrVqPUNmdBtDblx1p0-QNGO8jTSVdrxw3V09GW7WnoBVrH_AjtXhRwIkgkquukbk2lnLMzNHv5u5NDnp06hZlKBehBemdGpgtN4srh8a2y2x4FFPym6ky7oI6PbsNd6Bf5kMEa218gLmpwmqW-R5xK_KRDBf9rUHighQgg5-LoMu90e3V70OPjghctR-iWmYi_TZuQcg0h2wztH1GJNytaZreLI1ZX1C4QqJvCJDAT5rTTFfTfqqsiVsHv_zCoqN3Lkfn_U7nEsh9WfnqXYUno40qz8NBB2NVqpKOuCEdGhtal-5VvkaaMwMEn4o2R0Xqc2upRdkv9DRELsve_lATlBu6U7sj4BrLGBu0skHe-qre-dTW1qdy3n2_cPCJwBgeznqsM=w569-h210-s-no-gm?authuser=0)

Criação tabela Favoritos
