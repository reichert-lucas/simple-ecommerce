# Simple E-commerce

## Como executar o projeto
### Variáveis de ambiente:
Para criar as suas variáveis de ambiente, você pode copiar o arquivo `.env.example` para um arquivo chamado `.env`, esse arquivo `.env.example` tem algumas configurações padrões que você deve ter em seu projeto para que ele funcione como o esperado. Não se esqueça de personalizar essas variáveis para o seu ambiente local.
___
### Executando o projeto

#### Com o Docker
Caso você tenha o Docker instalado em seu ambiente local, você pode levantar automativamente, os containers da aplicação, da base de dados, além do phpMyAdmin que vai te ajudar a gerenciar o seu SGBD. Você pode usar o comando `docker-compose up` para realizar essa operação. Depois disso você só vai precisar rodar o comando `npm install && npm run dev` para instalar algumas dependências JavaScript do projeto. Vale salientar que a versão do node usada no desenvolvimento do projeto foi a `v14.19.1` e a do npm foi a `v6.14.16`.

O container com a aplicação vai ficar disponível na porta `8000`, o da base de dados na `3306`, e o da phpMyAdmin na `8081`. Caso você faça o uso do docker, a base de dados vai ser configurada com base no seu arquivo `.env`.

Você também deve lembrar de criar uma chave para o projeto, para isso, você pode usar o comando `php artisan key:generate`.

#### Sem o Docker
Caso você queira se arriscar e rodar o projeto  "à moda antiga", com o seu ambiente previamente configurado. Você deve instalar as dependências do composer, com o comando `composer install`, com isso deve ser criado um diretório "vendor" na raiz do projeto, nesse diretório, você vai encontrar todos os pacotes que o projeto precisa.

Depois disso, você deve instalar as dependências JS do seu projeto, para isso, você pode usar o comando `npm install`, ee depois ocomando `npm run dev` que vai compilar e carregar os arquivos necessários em seus devidos lugares.

 Nesse momento, você já vai estar pronto para rodar o projeto, para isso você pode usar o comando `php artisan serve`, que vai rodar o projeto na sua porta `8000`. Caso você queira rodar o projeto em uma porta específica, você pode passar a tag `--port <sua_porta>` seguido da porta que você quer rodar o projeto, além do ip com a tag `--host <seu_ip>`.

 Você também deve lembrar de criar uma chave para o projeto, para isso, você pode usar o comando `php artisan key:generate`.

___

### Base de dados
Nessa etapa do projeto, você vai fazer a migração das tabelas para a base de dados que foi configurada previamente, para tal, você pode usar o comando `php artisan migrate`. Além disso, já deixamos alguns dados para teste, caso você queira adicionar eles, você pode usar o comando `php artisan migrate --seed`, ou se você já tiver feito a migração das tabelas, o comando `php artisan db:seed`. Se ocorrer algum erro nessa etapa, você deve verificar se as configurações da sua base de dados então corretas.

___

Pronto, agora você já pode acessar a sua aplicação acessando http://localhost:8000. Rodou os seeders anteriormente, você também vai poder logar no painel com o usuário "`lucas.reichert@redes.ufsm.br`" e com a senha "`password`".