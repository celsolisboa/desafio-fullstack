<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sala extends Model
{
    public function professores(){
        return $this->belongsToMany('App\Professor','cursos')->withPivot('nome_curso', 'inicio', 'fim');
    }
}
