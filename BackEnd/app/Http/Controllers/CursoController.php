<?php

namespace App\Http\Controllers;
use App\Model\Professor;
use App\Model\Sala;
use Illuminate\Http\Request;
use App\Http\Requests\CursoRequest;
use App\Model\Curso;
use App\Http\Controllers\LoginController;
use App\Http\Resources\CursoRe as CursoResource;
use App\Http\Resources\Professor as ProfessorResource;
use App\Http\Resources\Sala as SalaResource;
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

    public function create (CursoRequest $request) {
	//	return($request);

        return new CursoResource($this->curso->created($request));


    }

    public function show(Curso $id) {

        if(!$id)
            return response()->json(['erro'=>'Não há curso com essa identificação'], 404);
        return new CursoResource($id);

     }

     public function AllProfessorAndSala() {

        $professor = ProfessorResource::collection(Professor::all());
        $sala = SalaResource::collection(Sala::all());
        return response(['professores'=>$professor,'salas'=> $sala], 200);

     }

    public function update(Request $request, Curso $id) {

        if(!$id)
            return response()->json(['erro'=>'Não há curso com essa identificação para atualizaçõa'], 404);
        $id->update($request->all());
        $id->createOrUpdateProfessorAndSala($request);
        return new CursoResource($id);

    }

    public function destroy(Curso $id) {

        if(!$id)
            return response()->json(['erro'=>'Não há curso com essa identificação para deleção'], 404);
        $id->deleteProfesorAndSala();
        $id->delete();
        return response()->json(['curso deletado'], 200);


    }
}
