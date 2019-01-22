<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Sala extends Model
{
    protected $fillable = [
        'id', 'sala', 'andar', 'filial', 'email', 'curso_id'
    ];

    public function curso() {

        return $this->belogToT('App\Model\Curso');
    }
}
