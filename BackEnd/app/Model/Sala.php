<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Sala extends Model
{
    protected $fillable = [
        'id', 'sala', 'andar', 'filial', 'email'
    ];

    public function curso() {

        return $this->belogToT('App\Model\Curso');
    }

    public static function AllNomeOfSala() {

        return parent::all()->pluck('sala');
    }
}
