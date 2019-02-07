<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Professor;

class ProfessorController extends Controller
{
    public function index(){
        $professor = Professor::all();
        if( isset( $professor ) ):
            return view('professores', compact('professor'));
        else:
            $error = "Nenhum resultado encontrado na base.";    
        endif;    
    }
}
