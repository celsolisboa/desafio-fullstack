<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Sala;
class SalasController extends Controller
{
    public function index(){
        $sala = Sala::all();
        if( isset( $sala ) ):
            return view('salas', compact('sala'));
        else:
            $erro = "Não encontramos nenhum registro na base de dados";    
        endif;        
    }
}
