<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Professores;
use App\Salas;

class Cursos extends Model
{
    protected $table 	= "cursos";
    protected $fillable = ['id_professor', 'id_sala', 'nome', 'inicio', 'fim'];
    // protected $touches 	= ['Professors', 'Clientes'];

    public function Professor(){
        return Professores::find($this->id_professor)->nome;
    }

    public function Materia(){
        return Professores::find($this->id_professor)->materia;
    }

    public function Sala(){
        return Salas::find($this->id_sala)->nome;
    }

}
