## Como iniciar o projeto
Para facilitar e pular a etapa de instalação do banco de dados, nesse exemplo usei o Docker para subir meu banco de dados Postgres, portanto é necessario ter o docker e o docker compose instalado na sua maquina.

### Download do projeto 


Faça o download do projeto com o comando.

``` bash
git clone git@github.com:hugobueno/crud-with-typeorm.git
 ```



## Subindo o banco de dados Postgres
- Antes de subir o banco de dados crie uma copia do arquivo .env.example e renomeie ele para .env
- Agora defina o nome do banco, host = **localhost**, porta, usuário e senha de sua preferencia.

rode o comando:

```bash
sudo docker compose up -d
```

## Instalando as dependência do Nodejs
Rode o comando para instalar as dependências

```bash
yarn ou npm install
```

logo em seguida rode o comando, para executar o projeto:

``` bash 
yarn dev ou npm run dev
```


