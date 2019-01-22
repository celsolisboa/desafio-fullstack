<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Professor extends Model
{
    protected $fillable = [
        'id', 'nome', 'data_de_nascimento', 'cpf', 'email', 'curso_id'
    ];

    public function curso() {

        return $this->belogToT('App\Model\Curso');
    }

    public static function AllNomeOfProfessor() {

        return parent::all()->pluck('nome');
    }
}
