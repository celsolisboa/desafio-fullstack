<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Use App\Curso;
Use App\Sala;
Use App\Professor;

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Está api retorna todos as informações do professores, que estão ligados as salas e cursos.
Route::get('/cursos', function(){
    $cur = Professor::with('salas')->get();    
    return $cur->toJson();
});


