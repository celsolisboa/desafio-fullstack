<?php

namespace App\Http\Controllers;
use App\Model\Professor;
use App\Model\Sala;
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

    public function create (Request $request) {


    }

    public function show(Curso $id) {

        return new CursoResource($id);

     }

     public function AllProfessorAndSala() {

        $professor = Professor::AllNomeOfProfessor();
        $sala = Sala::AllNomeOfSala();
        return response([$professor, $sala], 200);


     }

}
