<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Curso extends Model
{

    protected $fillable = [
        'id', 'nome', 'inicio', 'fim'
    ];

    public function professor() {

        return $this->belongsToMany('App\Model\Professor','curso_professors','curso_id', 'professor_id');
    }
    public function sala() {

        return $this->belongsToMany('App\Model\Sala','curso_sala','curso_id', 'sala_id');
    }
}
