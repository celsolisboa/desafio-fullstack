# Desafio Celso Lisboa para FullStack

### Instalação

1. Na pasta  **/scripts/SQL/**, você encontrará o arquivo **desafiofullstack.sql** para criar e popular o banco de dados MySql. Caso deseje, você pode visualizar o DER no arquivo localizado na pasta **/scrits/DER/**.

2. Caso seja necessário alterar os dados de acesso ao banco, abra o arquivo **/api/src/settings.php** e encontre o seguinte trecho de código:
>'db' => [
>           'driver' => 'mysql',
>           'host' => 'localhost',
>           'database' => 'celsolisboa',
>           'username' => 'root',
>           'password' => '',
>           'charset'   => 'utf8',
>           'collation' => 'utf8_unicode_ci',
>           'prefix'    => '',
        ]  

3. Na raiz do projeto, execute o comando:
```sh
$ npm install
```

4. Navegue até a pasta **/api/** e execute o comando:
```sh
$ composer install
```

5. No terminal, navegue até a raiz do projeto e execute o comando:
```sh
$ php -S localhost:8080
```

6. No navegador, acesse a url **localhost:8080** para iniciar o sistema.



### Dados para login no sistema

**email**: desafio@celsolisboa.edu.br
**senha**: celsolisboa


