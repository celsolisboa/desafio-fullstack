<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sala extends Model
{
    public function professores(){
        return $this->belongsToMany('App\Professor','cursos')->withPivot('id', 'nome_curso', 'inicio', 'fim');
    }
}
