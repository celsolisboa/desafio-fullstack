<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Curso;
use App\Http\Resources\CursoRe as CursoResource;

class CursoController extends Controller
{
    private $curso;

    public function __construct(Curso $curso)
    {
        $this->curso = $curso;
    }



    public function index() {

        return CursoResource::collection($this->curso->paginate(5));


    }

    public function show(Curso $id) {

        return new CursoResource($id);

     }

     public function show(Curso $id) {

        return new CursoResource($id);


     }

}
