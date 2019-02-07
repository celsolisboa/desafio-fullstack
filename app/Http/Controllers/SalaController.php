<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Sala;

class SalaController extends Controller
{
    public function index(){
        $sala = Sala::all();
        if( isset( $sala ) ):
            return view('salas', compact('sala'));
        else: 
            $error = "Nenhum registro foi encontrado na base de dados!"   ;
        endif;    
    }
}
