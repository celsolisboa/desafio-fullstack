<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Requests\StoreCursos;
use App\Cursos;
use App\Salas;
use App\Professores;
use Illuminate\Support\Facades\Auth;

class CursosController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $cursos = Cursos::all();
        return view('Cursos.index', compact('cursos'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $salas 			= Salas::pluck('nome', 'id')->toArray();
        $professores 	= Professores::pluck('nome', 'id')->toArray();
        $user           = Auth::user()->id;
        return view('Cursos.create', compact('salas', 'professores', 'user'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreCursos $request)
    {
       $curso = $request->all();
       Cursos::create($curso);
       return redirect('cursos');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $curso=Cursos::find($id);
        return view('cursos.show',compact('curso'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $curso     		= Cursos::find($id);
        $status     	= Cursos::getStatus();
        $salas   		= Salas::pluck('nome', 'id')->toArray();
        $professores   	= Professores::pluck('nome', 'id')->toArray();
        return view('cursos.edit',compact('curso','professores', 'salas'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(StoreCursos $request, $id)
    {
       $cursoUpdate   = $request->all();
       $curso         = Cursos::find($id);
       $curso->update($cursoUpdate);

       return redirect('cursos');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Cursos::find($id)->delete();

        return redirect('cursos');
    }
}
