<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Curso;
use App\Professor;
use App\Sala;
class CursoController extends Controller
{   
    public function __construct(){
        $this->middleware('auth');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
       
        $prof = Professor::with('salas')->get();
        if ( isset($prof) ):
            return view('cursos', compact('prof'));
        else:
            $error = "Nenhum registro foi encontrado na base de dados!";
        endif;    
      
    }
    
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('cadastrar-curso');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $regras = ([
            'nome_curso' => 'required|min:3|max:50',
            'professor' => 'required',
            'sala' => 'required',
            'inicio' => 'required',
            'fim' => 'required'
        ]);
        $msg = ([
            'required' => 'O atributo :attribute é obrigatório!',
            'nome_curso.required' => 'O campo nome é obrigatório!',
            'nome_curso.min' => 'O campo nome do curso deve conter no mínimo 3 caracteres!',
            'nome_curso.max' => 'O campo nome do curso deve conter no máximo 50 caracteres!',
            'professor.required' => 'O campo professor é obrigatório!',
            'sala.required' => 'O campo sala é obrigatório!',
            'inicio.required' => 'O campo início é obrigatório!',
            'fim.required' => 'O campo fim é obrigatório!'
        ]);
        $request->validate($regras, $msg);
        $curso = new Curso();
        $curso->nome_curso = $request->input('nome_curso');
        $curso->sala_id = $request->input('sala_id');
        $curso->professor_id = $request->input('professor_id');
        $curso->inicio = $request->input('inicio');
        $curso->fim = $request->input('fim');
        $curso->save();

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $curso = Curso::find($id);
        if ( isset( $curso ) ):
            $curso->delete();
        endif;
        return redirect('/cursos');
    }
}
