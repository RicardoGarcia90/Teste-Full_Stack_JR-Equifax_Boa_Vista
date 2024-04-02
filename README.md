# Teste-Full_Stack_JR-Equifax_Boa_Vista
Teste técnico realizado em processo seletivo para a vaga de Desenvolvedor Full Stack Júnior na empresa Equifax Boa Vista

# Descrição da Aplicação: Star Wars the Search!

Esta é uma aplicação Web Full Stack desenvolvida utilizando no front-end o React.js, com o uso de ferramentas como axios, react-router-dom, useContext e useState, e no back-end o Python e o Flask.

Ao acessar a aplicação, você se depara com o nome "Star Wars the Search", uma referência à busca que pode ser realizada. Logo abaixo, há um texto explicativo sobre o que pesquisar. Há um botão para pesquisar informações sobre os personagens. Ao acessar a aplicação, já é possível ver uma listagem distribuída em duas páginas, com 10 personagens por página, de toda a saga Star Wars. Os dados dos personagens são apresentados em cards para facilitar a visualização e incluem as principais informações de cada um. Para obter as informações dos personagens, foi realizada uma chamada na API "https://swapi.dev/api/people/". Outra função da aplicação é a possibilidade de adicionar e remover um personagem da sua lista de favoritos. Para isso, basta localizar o card do personagem e clicar no símbolo "+" para adicionar aos Favoritos, e para remover, basta clicar no símbolo "-" para os casos em que já foram previamente adicionados. Para a criação da página de favoritos, foi utilizado o armazenamento local com localhost. Foram empregadas algumas técnicas de HTML, CSS e JavaScript para criar efeitos e estilos de botões, melhorando assim a experiência de uso do site.

Vídeo de funcionamento:
https://youtu.be/KcYbkhBogyA

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

![criacaoTabelaFavoritos](https://lh3.googleusercontent.com/pw/AP1GczP_919HJp9uP-q-Bu1geLTZlbvUS20y1bdskHyzyBEvhKU5tV_I7u2gbvTdJXoOp7mvK4_G_j6ZO1OuU7IQJwhIbxBgWdMs-VDcNAcF1ntwOfvjoXnxzgCBW0Gw09hPVjic0ww2e114oPCBJMXpHukS2zQpuY5qoMqK0lAocnYfhyfuw2mP9SCJxozMherPsqafjs872ce6p5umpNmvhz-eEV_2gw8xb644U5sZJyW6k0EyClwV7IfYngwOUZtROxM7aA7IbkamHvIlwjtpSzu8DMCrspAxUCJhpOPZRGdsfx3jfrA6cAhsq38fHWsLBqu6VPiLhU0feVAlGlFsQoQZqEml8QFhDbTcNN49zAHr0KZ2oS_VDJaEeqjPydelp689wQ9HWx6fdfNWjWF2E0OWh8y-b9XQY8khZzD8YNSB146TrODe7ouRm60etyC8tdUpOkgRDNt8_1mnvkY9e0k80TTKS5uKnB7gesZ50G2flICb2aRDuGIcdlZKLpOgOTmW_SK4lHofeYRs3uxz4GTkXen6mGX14vcwGXhcO7pd_5JbyTaF409zdH0KrTVQ8gA2V-_dfAWiOWuH2rYi_siQpKs4-xksZfooLEC-dGRZbLsP_AMc5QykSEpV-AO5OpYHceaM3qus53pU3aX7hR7stoESZa2v_nxfN0IGLbAbIROGCiPAWAfSYG0WYVmOC6w335fu8axDzJG5vs7yYiV2UoY5ZsbAfupIepYmAG__4w1RnU5t6Dezh16-4xtNutI1kYReo5HcrWqjqEwPbKHEHElFPnCgI9eIbY0UVjqI8lekRyw7j3Ss95KIwHrkN58ode31QG_doOJjargoCVTtcbb__28igi3gYBGwUcZnjv1Y_wQkFLV4mI-MV2uPhXdJ2yufSwvPEMmoEjVJldWh_RWpOQLe-2NvJQtVghjRP9IG0QT_h9_IHU6cH2Q=w569-h206-s-no-gm?authuser=0)

![criacaoTabelaFavoritos2](https://lh3.googleusercontent.com/pw/AP1GczNTdUYSGu_TXUeOfG2fDPAPy7MUK9bGP2fh1fXkvxVZWE6Tc6Ar9di2pHL3P4NMx9W4ujkL2L6L5kaQlFdpJlxcEDnGYMzA_rs4UsDrXAKF2iYbxCZ-2TVAfb-zfuEws-n0KYADSNgxYlM_qWtuUfi_ZCou-K1VIlEQHeio3It8Qm2n9UX3C0wuz4oDUaLfe2MvtcTknKPHdVSjyvhY-m_5XjPgyZ_EwczY0t5TNTjb2MFK-sXQdroE4NRc2Onc9fyKnDfCRLqueKeXECwyDmkhbwPk4vhxiihTiH6v9dNPaedN_t8I5oyjArL7OdW8Zurch0DzdQDPX_82d44LEdrN16VM0iuSm1Oz3USXX7ndXOQTmkDBAr8b3e3S97WrtcUENhZa4CirTYx9L4BAmvR2ZOINFTvZDaTyyJqLbNfnXBTQ4vEA1M-6FMU3iDmjC2EH21qc7D7ZzvSu6NbP8pBCKJqgDgPoWXtedCWGdvF6dU6PtoXcRh4guS5MJRdOosVFCEW33PeiH_0ijVTkdSjM1L1ccX-64sJFXOTLrger9YujBVu-5GobIHakNN2MAFPHlQaeffta-h53FjJeBaAdU4yeliRq129a1aM2FAdfu2iNbJ5SG_yvvIJGSg8LlCBxk-_N74a5h0ENhiZJxvWcag2EGfLG7nNcGOyaiZwpfnb2NnMv_JtmOOY8py7XieZi2ugeot2F-ZSJi14tWLd4ySBlNyTi-uJU_BMFYvjmLjNNbY_Zrol3WAG7qcqRWZDBHVPk4tGCDzKsEwZQyVx0NhxiIwqiriybD18tk1k0CfznIL8c768pF__cC-bVHi1ALLFVFMhxj2t939-YoXB6oHPZFYiJ3lMvR7A893VkLQ324dIHS4Otz-Sl0odvCbpavo1PRCac_rmRBjJmZWo_d4SHTCRYITpAg57betBuE0dtdYj6XvkT6QL2Fs8=w569-h419-s-no-gm?authuser=0)

---

# 3- Descreva o processo de troca de chaves por trás do SSL.
Basicamente quando um usuário acessa um site HTTPS, o navegador solicita ao servidor do site que se identifique. O servidor responde enviando seu certificado SSL. Este certificado é validado pelo navegador para garantir sua autenticidade. Durante essa validação, o navegador recebe apenas a chave pública do certificado, que é usada para estabelecer uma sessão criptografada durante esse sessão.
Apenas o servidor, pode descriptografar essa chave de sessão, e a partir desse momento, todas as comunicações entre o navegador e o servidor são criptografadas usando essa chave de sessão compartilhada, garantindo então a segurança dos dados transmitidos.

---

# 4- Descreva o que é DNS e como ele é utilizado na internet.
O DNS é uma forma de converter nomes de domínios legíveis por pessoas para endereço IP (legível para máquina).
Basicamente o DNS é um registro que contém os nomes de sites e seus respectivos endereços IP para que os computadores e smartphones por exemplo conectados na internet consigam se comunicar entre si.
Quando um usuário abre o navegador e digita o endereço URL referente ao domínio de um site, ele envia uma requisição na rede para encontrar o respectivo IP do servidor que o armazena.
A solicitação é enviada ao seu provedor de acesso, e ele repassa para o DNS. Assim, o DNS funciona como algo que em computação é chamado de interface: uma espécie de tradutor que estabelece a comunicação entre duas partes.
