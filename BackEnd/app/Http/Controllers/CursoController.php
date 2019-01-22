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
      //  return $this->curso->created($request);
        return new CursoResource($this->curso->created($request));


    }

    public function show(Curso $id) {

        return new CursoResource($id);

     }

     public function AllProfessorAndSala() {

        $professor = Professor::AllNomeOfProfessor();
        $sala = Sala::AllNomeOfSala();
        return response([$professor, $sala], 200);


     }

    public function update(Request $request, Curso $id){

       // $id->fill();
        $id->update($request->all());
        $id->createOrUpdateProfessorAndSala($request);

        return new CursoResource($id);



    }

}
