<?php

namespace App\Model;
use DB;
use Illuminate\Database\Eloquent\Model;

class Curso extends Model
{
    protected $primaryKey = 'id';
    public $incrementing = true;
    protected $fillable = [
        'id', 'nome', 'inicio', 'fim',
    ];

    public function professor() {

        return $this->belongsToMany('App\Model\Professor','curso_professors','curso_id', 'professor_id');
    }
    public function sala() {

        return $this->belongsToMany('App\Model\Sala','curso_sala','curso_id', 'sala_id');
    }

    public static function created($request) {

        $curso = self::create($request->all());
        $curso->createOrUpdateProfessorAndSala( $request);
        //$curso->professor()->sync($professor);
        //$curso->sala()->sync($sala);
        return $curso;

      }

     
    public function createOrUpdateProfessorAndSala($request) {
            $professor = $request->only('professor')['professor'];
            $sala  = $request->only('sala')['sala'];
            $this->professor()->sync($professor);
            $this->sala()->sync($sala);

    }
}
