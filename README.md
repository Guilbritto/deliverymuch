![badge](https://img.shields.io/badge/Coverage-100%25-green)
# Instalação

Para rodar o projeto deve-se ter instalado as seguintes ferramentas:

1. git
2. docker
3. docker-compose

Primeiro vamos fazer o clone da aplicação:

`git clone https://github.com/Guilbritto/deliverymuch.git`

### Rodando sem Docker
Acesse a pasta do projeto e rode:
`yarn` ou `npm install`

Aguarde o processo terminar e execute:

`yarn start` ou  `npm run start`

### Rodar com Docker 
Logo após o término do clone devemos entrar na pasta e rodar o seguinte comando:

`docker-compose up -d`

# Requisições

Para poder fazer uma chamado basta bater no IP da maquina onde está rodando o container, no caso de ser na sua própria maquina utilize localhost. A porta exposta é a 3333, então quando for fazer uma requisição utilize a seguinte url como base:

`http://localhost:3333`

## Endpoints

Existe somente um endpoint nessa api que é `/recipes` e ele espera o parâmetro `i` na url, e esse parâmetro espera até 3 ingredientes que serão utilizados para fazer a busca das receitas, ficando a url da seguinte maneira.

`http://localhost:3333/recipes?i=Potato,Garlic,Onion`

OBS: Os ingredientes devem ser informados em ingles, devem ser passados separados por vírgula e há um limite de 3 ingredientes, caso passado ele irá desconsiderar os ingredientes.

# Desenvolvimento

Para fazer o projeto foi seguido os princípios do SOLID, e seguido uma arquitetura de `Package by feature`.

Quase todos os princípios do SOLID foram aplicados, abaixo alguns exemplos:

### S = Single Responsability Principle

Todos os arquivos/Classes da aplicação tem uma e somente 1 função.
EX: dentro da pasta route temos 2 arquivos `index.ts` e `recipes.routes.ts`.

O arquivo `index.ts` é responsável apenas para expor as rotas da aplicação juntando todos os arquivo de rota em um só.

As rotas da aplicação são separadas por tópico fazendo assim que ao dar manutenção em uma rota de recipes fique claro que as mesmas estejam dentro de um arquivo que trate somente sobre recipes `recipes.routes.ts`

### O = Open/Close Principle 

Esse princípio não foi aplicado pois não hávia um caso onde ele realmente poderia ser utilizado considerando uma aplicação deste tamanho.

### L = Liskov Subistitution Principle, I = Interface Segragation Principle, D = Dependency inversion principle

Para essas ultimas vamos falar delas juntas pois a implementação de uma leva a outra.

As classes de controllers e de UseCase são todas guiadas a interface e não a implementação das mesmas, fazendo assim que caso hája necessidade de troca de implementação de algum código não hája necessidade de fazer modificações na classe que irá utilizar essa implementação. Aqui temos o `L` e o `D` do padrão.

Agora para poder pegar as informações das receitas e suas imagens/gifs é necessário acessar serviços externos, e para isso foram geradas 2 interfaces para formalizar um contrato que deve ser seguido para que toda aplicação funcione. Aqui temos `I` 

# Testes Unitários

Foi utilizado o Jest para poder fazer os testes da rota, lembrando que foram feitos testes unitários e não testes de integração, sendo assim foram testadas somente a regra de negócio.

para executar o teste basta rodar: 

`yarn test` ou `npm run test`
