<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Professores;
use App\Salas;

class Cursos extends Model
{
    protected $table 	= "cursos";
    protected $fillable = ['professor_id', 'sala_id', 'nome', 'inicio', 'fim', 'user_id'];

    public function Professor(){
        return Professores::find($this->professor_id)->nome;
    }

    public function Materia(){
        return Professores::find($this->professor_id)->materia;
    }

    public function Sala(){
        return Salas::find($this->sala_id)->nome;
    }

}
