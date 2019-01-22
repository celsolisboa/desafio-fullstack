<?php

use Illuminate\Http\Request;
use App\Http\Resources\CursoRe as CursoResource;
use App\Model\Curso;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('cursos')->group(function () {
    Route::get('/', 'CursoController@index');
    Route::get('/{id}', 'CursoController@show');
    Route::get('all', 'CursoController@AllProfessorAndSala');
});
Route::get('allProfAndSala', 'CursoController@AllProfessorAndSala');

Route::get('/tt', function (Request $request) {
    $curso = Curso::find(1);
return new CursoResource($curso);
});


Route::get('/t', function (Request $request) {
    $curso = Curso::find(1);
return $curso->professor;
});
//

