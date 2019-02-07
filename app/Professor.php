<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Professor extends Model
{
    /* Por padrão o laravel adicionaria o S para encontrar a table gerada no migrations, mas o padrão 
    *  que ele criar é adicionando apenas o S no final da palavra ficando PROFESSORS mas tive que mudar para PROFESSORES
    *  e por este motivo eu estou abaixo criando uma variável protegida com o nome da tabela no banco. 
    */
    protected $table = "professores";
}
