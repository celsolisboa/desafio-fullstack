<?php

namespace App\Entity;

use Illuminate\Database\Eloquent\Model as Model;

 
class Disciplina extends Model
{
    protected $table = "disciplina";
    private $id;
 
    private $nome;

 
    public function getId()
    {
        return $this->id;
    }

     
    public function setNome($nome)
    {
        $this->nome = $nome;

        return $this;
    }

     
    public function getNome()
    {
        return $this->nome;
    }
}
