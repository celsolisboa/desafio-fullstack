<?php

use Illuminate\Http\Request;
use App\Http\Resources\CursoRe as CursoResource;

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

Route::post('/user', 'LoginController@login');


Route::prefix('cursos')->group(function () {
    Route::get('/', 'CursoController@index');
    Route::get('/{id}', 'CursoController@show');
    Route::post('/', 'CursoController@create');
    Route::put('/{id}', 'CursoController@update');
    Route::delete('/{id}', 'CursoController@destroy');
});
Route::get('allProfAndSala', 'CursoController@AllProfessorAndSala');




